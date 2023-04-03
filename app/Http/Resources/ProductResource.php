<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'users_id' => $this->users_id,
            'price' => $this->price,
            'description' => $this->description,
            'stock' => $this->stock,
            'status_product' => $this->status_product,
            'categories_id' => $this->categories_id
        ];
    }
}
