<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/calendar/add', [\App\Http\Controllers\CalendarController::class, 'store']);
Route::get('/calendar', [\App\Http\Controllers\CalendarController::class, 'show']);
Route::post('/calendar/update', [\App\Http\Controllers\CalendarController::class, 'update']);
