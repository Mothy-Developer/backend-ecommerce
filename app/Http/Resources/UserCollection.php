<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Models\User;

class UserCollection extends ResourceCollection
{
    public $loadDefault = 10;

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection,
            'attributes' => [
                'total' => User::count(),
                'per_page' => 5,
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault,
                'q' => $request-> q ?? '',
                'page' => $request->page ?? 1,
                'field' => $request->field ?? '',
                'direction' => $request->direction ?? ''
            ]
        ];
    }
}
