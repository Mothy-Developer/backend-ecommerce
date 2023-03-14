<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class ProductGallery extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'products_id',
        'photo_path'
    ];

    public function getPhotoPathAttribute($photoPath)
    {
        return config('app.url') . Storage::url($photoPath);
    }

    public function product()
    {
        $this->belongsTo(Product::class, 'products_id', 'id');
    }
}
