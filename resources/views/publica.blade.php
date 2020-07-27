@extends('layouts.app')

@section('content')

    <div class="Panel">
        <h1>Esta página es pública</h1>
    </div>
    
    <p>Sin embargo tiene un componente que solo permite votaciones por parte del usuario autenticado.</p>

    <eit-star
        counterId="{{ $counter->id }}"
        counterValue="{{ $counter->counter }}"
    ></eit-star>
    
    <div class="Panel Panel-wider">
        <eit-comment-insert></eit-comment-insert>
    </div>
    
@endsection
