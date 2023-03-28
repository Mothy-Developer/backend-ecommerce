<?php

namespace App\Http\Controllers;

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
        ]);
    }
}
