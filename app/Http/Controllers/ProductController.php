<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Models\Product;
use Illuminate\Http\Request;

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
            'product' => $products
        ]);
    }

    public function create(Request $request)
    {

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
