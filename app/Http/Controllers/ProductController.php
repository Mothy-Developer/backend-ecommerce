<?php

namespace App\Http\Controllers;

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
        return inertia('Product/Index', [
            
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
