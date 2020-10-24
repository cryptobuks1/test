<?php

use App\Helpers\SysHelper;
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

// custom test route
Route::get('/test', function () {
    return 'Laravel is working!';
});

// language route
Route::get('/js/env', function () {
    $cache_name = 'env'.'.js';

    if (App::environment('local') || env('APP_MODE') === 'test') {
        Cache::forget($cache_name);
    }
    
    $strings = Cache::remember($cache_name, 43200, function () {
        $strings = [];

        $strings['name'] = env('APP_NAME');
        $strings['url'] = config('app.url');
        $strings['env'] = config('app.env');
        $strings['mode'] = config('app.mode');
        $strings['version'] = SysHelper::getApp('VERSION');

        return $strings;
    });
    header('Content-Type: text/javascript');
    echo ('window.kmenv = ' . json_encode($strings) . ';');
    exit();
})->name('assets.env');

// language route
Route::get('/js/lang/clear', function () {
    $lang = config('config.system.locale');
    $cache_name = 'lang-'. $lang .'.js';

    Cache::forget($cache_name);
    exit();
});

Route::get('/js/lang', function () {
    $lang = config('config.system.locale') ?? 'en';
    $cache_name = 'lang-'. $lang .'.js';

    if (App::environment('local') || env('APP_MODE') === 'test') {
        Cache::forget($cache_name);
    }
    
    $strings = Cache::remember($cache_name, 86400, function () use ($lang) {
        $files = glob(resource_path('lang/' . $lang . '/*.php'));
        $strings = [];

        foreach ($files as $file) {
            $name = basename($file, '.php');
            $strings[$name] = require $file;
        }
        return $strings;
    });
    header('Content-Type: text/javascript');
    echo ('window.locale = ' . json_encode($strings) . ';');
    exit();
})->name('assets.lang');

Route::get('auth/login/{provider}', 'Auth\SocialLoginController@redirectToProvider');
Route::get('auth/login/{provider}/callback', 'Auth\SocialLoginController@handleProviderCallback');

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/meetings/{meeting}/downloads/{media}', 'MeetingMediaController@download');
});

Route::get('/m/{identifier}', 'InviteeController@goToMeeting');

// app route
Route::get('/app/{vue?}', function () {
    return view('app');
})->where('vue', '[\/\w\.-]*')->name('app');

Route::get('/', function () {
    return redirect('/app/login');
});
