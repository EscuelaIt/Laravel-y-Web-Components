@extends('layouts.app')

@section('content')

<div class="Panel">
    <h1>Bienvenidos a Lit Works</h1>

    <p>Entrar en una <a href="/protegida">página protegida</a></p>
    <p>Entrar en una <a href="/publica">página pública</a></p>

    <x-hi-component name="EscuelaIT" :email="$email" class="lalala" id="otra">
        <p>algo más de contenido</p>
        <hr>
        <p>lalala</p>
    </x-hi-component>

    <eit-box-info message="Esto es otro mensaje" >

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi pariatur, facilis repellat distinctio doloremque, in repellendus delectus sed architecto quas et voluptatibus aliquid aperiam laborum beatae quos amet molestiae a.</p>
        <p>Dolorum corrupti perspiciatis ab sapiente pariatur sed velit a ratione possimus illo similique iste inventore facere, rem cum, quasi consequuntur provident quae totam eius ipsam aspernatur? Magnam veniam natus itaque.</p>
        <p>Dignissimos voluptas cum quisquam ducimus. Aliquid quasi in et repudiandae, sunt nulla non expedita vero saepe, deserunt vel commodi, voluptatum eligendi eaque cum sit veritatis ea odit doloribus perspiciatis facilis?</p>

    </eit-box-info>

    <eit-icon icon="shopping_cart" class="big-icon"></eit-icon>

    <eit-info-box message="Esto es otro mensaje" >

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi pariatur, facilis repellat distinctio doloremque, in repellendus delectus sed architecto quas et voluptatibus aliquid aperiam laborum beatae quos amet molestiae a.</p>
        <p>Dolorum corrupti perspiciatis ab sapiente pariatur sed velit a ratione possimus illo similique iste inventore facere, rem cum, quasi consequuntur provident quae totam eius ipsam aspernatur? Magnam veniam natus itaque.</p>
        <p>Dignissimos voluptas cum quisquam ducimus. Aliquid quasi in et repudiandae, sunt nulla non expedita vero saepe, deserunt vel commodi, voluptatum eligendi eaque cum sit veritatis ea odit doloribus perspiciatis facilis?</p>

    </eit-info-box>
    <hr>
    <eit-info-box class="box-center" title="Hola a todos!" showCloseButton>
        lalala
    </eit-info-box>
</div>



@endsection
