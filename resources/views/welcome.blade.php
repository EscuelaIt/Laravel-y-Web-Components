@extends('layouts.app')

@section('content')

<div class="Panel">
    <h1>Bienvenidos a Lit Works</h1>

    <x-hi-component name="EscuelaIT" :email="$email" class="lalala" id="otra">
        <p>algo más de contenido</p>
        <hr>
        <p>lalala</p>
    </x-hi-component>
</div>



@endsection
