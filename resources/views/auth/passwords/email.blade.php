@extends('layouts.app')

@section('content')
<div class="Panel">

    <h1>{{ __('Reset Password') }}</h1>
    <div class="Card Card-login">

        @if (session('status'))
            <eit-info-box showCloseButton>
                {{ session('status') }}
            </eit-info-box>
            <br>
        @endif

        <form method="POST" action="{{ route('password.email') }}">
            @csrf

            <x-input-component 
                label="Email"
                name="email"
                value=""
            ></x-input-component>

            <div class="Form-field">
                <button type="submit" class="Button">
                    Enviar enlace
                </button>
            </div>
        </form>

    </div>
</div>
@endsection
