<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateItemRequest;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function __construct()
    {
        $this->item = new Item();
    }

    public function createItem(CreateItemRequest $request)
    {
        $this->item->create([
            'title' => $request->title,
            'price' => $request->price,
            'available' => $request->available
        ]);
    }
}
