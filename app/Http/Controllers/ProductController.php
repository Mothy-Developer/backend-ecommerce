<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index']);
    }

    public function index(Request $request)
    {
        $request->validate([
            'direction' => ['in:asc,desc'],
            'field' => ['in:name']
        ]);

        $query = Product::query();

        if ($request->q) 
        {
            $query->where('name', 'like', '%'. $request->q .'%');
        }

        if ($request->has(['field', 'direction']))
        {
            $query->orderBy($request->field, $request->direction);
        }

        $products = new ProductCollection($query->paginate($request->load));

        return inertia('Product/Index', [
            'product' => $products,
            'user' => DB::table('users')->select('id', 'name')->get(),
            'category' => DB::table('product_categories')->select('id', 'name')->get()
        ]);
    }

    public function create(Request $request)
    {

    }

    public function edit(Product $product)
    {
        return inertia('Product/Edit', [
            'product' => $product,
            'category' => DB::table('product_categories')->select('id', 'name')->get(),
            'user' => DB::table('users')->select('id', 'name')->get()
        ]);
    }

    public function store(Request $request)
    {

    }

    public function destroy(Product $product)
    {
        $product->delete();
        return redirect(route('product.index'));
    }
}
