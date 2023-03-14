<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'users_id',
        'price',
        'description',
        'stock',
        'status_product',
        'categories_id'
    ];

    public function galleries()
    {
        $this->hasMany(ProductGallery::class, 'products_id', 'id');
    }

    public function category()
    {
        $this->belongsTo(ProductCategory::class, 'categories_id', 'id');
    }

    public function user()
    {
        $this->belongsTo(User::class, 'users_id', 'id');
    }
}
