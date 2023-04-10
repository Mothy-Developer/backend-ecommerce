<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct() 
    {
        $this->middleware('auth')->except(['index']);
    }

    public function index(Request $request) 
    {
        $request->validate([
            'direction' => ['in:asc,desc'],
            'field' => ['in:name,email']
        ]);

        $query = User::query();   

        if ($request->q)
        {
            $query->where('name', 'like', '%'. $request->q .'%')
                ->orWhere('email', 'like', '%'. $request->q .'%');
        }

        if ($request->has(['field', 'direction']))
        {
            $query->orderBy($request->field, $request->direction);
        }

        $users = new UserCollection($query->paginate($request->load));
        return inertia('User/Index', [
            'user' => $users,
            'roles' => DB::table('roles')->select('id', 'name')->get()
        ]);
    }

    public function create(Request $request) 
    {
        return inertia('User/Create' , [
            'roles' => Role::get()
        ]);
    }

    public function edit(User $user) 
    {
        return inertia('User/Edit', [
            'roles' => DB::table('roles')->select('id', 'name')->get(),
            'user' => $user
        ]);
    }

    public function store(Request $request, User $user)
    {
        $request->validate([
            'name' => ['required'],
            'email' => ['required'],
            'address' => ['required'],
            'phone_number' => ['required'],
            // 'wallet' => ['required'],
            // 'store_name' => ['required'],
            'password' => ['required'],
            'role_id' => ['required']
        ]);

        $request->user()->create([
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address,
            'phone_number' => $request->phone_number,
            'wallet' => $request->wallet || 0,
            'store_name' => $request->store_name || "",
            'password' => Hash::make($request->password),
            'role_id' => $request->role_id,
        ]);

        return redirect(route('user.index'));
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => ['required'],
            'email' => ['required'],
            'address' => ['required'],
            'phone_number' => ['required'],
            'wallet' => ['required']
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address,
            'phone_number' => $request->phone_number,
            'wallet' => $request->wallet,
            'store_name' => $request->store_name,
            'password' => Hash::make($user->password),
            'role_id' => $request->role_id,
        ]);

        return redirect(route('user.index', $user));
    }

    public function destroy(User $user)
    {
        $user->delete();
        return redirect(route('user.index'));
    }
}
