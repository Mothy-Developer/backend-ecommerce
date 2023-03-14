<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->bigInteger('roles_id')->after('email')->default('2');
            $table->string('store_name')->after('email')->nullable();
            $table->double('wallet')->after('email')->nullable();
            $table->string('phone_number')->after('email')->nullable();
            $table->string('address')->after('email')->nullable();
            $table->softDeletes()->after('password');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('address');
            $table->dropColumn('phone_number');
            $table->dropColumn('wallet');
            $table->dropColumn('store_name');
            $table->dropColumn('role_id');
            $table->dropColumn('deleted_at');
        });
    }
};
