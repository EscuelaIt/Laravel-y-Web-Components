<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use App\Counter;

class FrontController extends Controller
{
    public function protegida() {
        return view('protegida');
    }

    public function publica() {
        // $counter = Counter::find(1);
        return view('publica')->with([
            // 'counter' => $counter,
        ]);
    }
}
