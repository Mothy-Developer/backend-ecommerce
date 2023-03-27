<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct() 
    {
        $this->middleware('auth')->except(['index', 'show']);
    }

     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) 
    {
        $users = UserResource::collection(User::paginate());
        return inertia('User/Index', [
            'user' => $users,
            'roles' => Role::get()
        ]);
    }

    public function create(Request $request) 
    {
        return inertia('User/Create' , [
            'roles' => Role::get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'email' => ['required'],
            'address' => ['required'],
            'phone_number' => ['required'],
            'wallet' => ['required'],
            'store_name' => ['required'],
            'password' => ['required'],
            'role_id' => ['required']
        ]);

        // $user = $request->user()->create([
        //     'name' => $request->name,
        //     'email' => $request->email,
        //     'address' => $request->address,
        //     'phone_number' => $request->phone_number,
        //     'wallet' => $request->wallet,
        //     'store_name' => $request->store_name,
        //     'password' => $request->password,
        //     'role_id' => $request->role_id,
        // ]);

        return redirect(route('user.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        // $this->authorize('delete', $user);
        $user->delete();
        return redirect(route('user.index'));
    }
}
