<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome')->with([
        'email' => 'contacto@escuela.it',
    ]);
});

Route::get('/mensaje', function () {
    return redirect('/')->with(['success' => 'Ok todo correcto con el mensaje']);
});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::get('api-user/get', 'ApiController@getUser');
Route::post('api-counter/increment', 'ApiController@incrementCounter');


Route::get('/protegida', 'FrontController@protegida')->middleware(['auth']);
Route::get('/publica', 'FrontController@publica');