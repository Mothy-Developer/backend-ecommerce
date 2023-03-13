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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('users_id');
            $table->enum('transaction_status', ['Menunggu penjual', 'Diproses penjual', 'Menunggu kurir', 'Sedang dikirim', 'Sampai di tujuan', 'Diterima pembeli', 'Dikomplain', 'Dikirim balik', 'Transaksi gagal'])->default('Menunggu penjual');
            $table->text('resi');
            $table->double('total_price');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
};
