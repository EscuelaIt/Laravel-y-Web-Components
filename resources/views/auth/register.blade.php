@extends('layouts.app')

@section('content')
    <div class="Panel">
        <h1>Registro de usuarios</h1>
        <div class="Card Card-login">
           
            <form method="POST" action="{{ route('register') }}">
                @csrf

                <x-input-component 
                    label="Nombre"
                    name="name"
                    value=""
                    autofocus
                ></x-input-component>

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

                <x-input-component 
                    label="Confirmar clave"
                    name="password_confirmation"
                    value=""
                    type="password"
                ></x-input-component>

                <div>
                    <button type="submit" class="Button">
                        {{ __('Register') }}
                    </button>
                </div>
            </form>

        </div>
    </div>
@endsection
