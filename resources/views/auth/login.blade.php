@extends('layouts.app')

@section('content')

    <div class="Panel">
        <h1>Login de usuarios</h1>
        <div class="Card Card-login">
            <form method="POST" action="{{ route('login') }}">
                @csrf

                <x-input-component 
                    label="Email"
                    name="email"
                    value=""
                ></x-input-component>

                <x-input-component 
                    label="Clave"
                    name="password"
                    value=""
                    type="password"
                ></x-input-component>

                <x-checkbox-component
                    label="Recuérdame"
                    name="remember"
                    value="yes"
                ></x-checkbox-component>

                <div class="Grid Grid-2-col-small-and-up Grid-align-items-center">
                    <div>
                        <button class="Button" type="submit">
                            {{ __('Login') }}
                        </button>
                    </div>
                    <div>
                        @if (Route::has('password.request'))
                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                        @endif
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
