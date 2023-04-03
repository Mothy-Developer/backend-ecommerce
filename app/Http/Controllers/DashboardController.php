<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Models\User;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index']);
    }

    public function index(Request $request) 
    {
        return inertia('Dashboard/Index', [
            'total_user' => User::count(),
            'total_product' => Product::count(),
            'total_transaction' => Transaction::count(),
            'total_category' => ProductCategory::count()
        ]);
    }
}
