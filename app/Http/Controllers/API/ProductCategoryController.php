<?php

namespace App\Http\Controllers\API;

use App\Helpers\ResponseFormatter;
use App\Http\Controllers\Controller;
use App\Models\ProductCategory;
use Illuminate\Http\Request;

class ProductCategoryController extends Controller
{
    public function all(Request $request)
    {
        $id = $request->input('id');
        $limit = $request->input('limit', 6);

        if ($id) {
            $category = ProductCategory::with(['products'])->find($id);

            if ($category) {
                return ResponseFormatter::success(
                    $category,
                    'Data kategori product berhasil diambil.'
                );
            } else {
                return ResponseFormatter::error(
                    null,
                    'Data kategori produk tidak ada.',
                    404
                );
            }
        }

        $category = ProductCategory::query();

        return ResponseFormatter::success(
            $category->paginate($limit),
            'Data produk berhasil diambil.'
        );
    }
}
