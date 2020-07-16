<div {{ $attributes->merge([
        'id' => "foo",
        'type' => "dfdfdf"
    ]) }}>
   Hola {{ $name }}!!!
   {{ $slot }}
   <p>Con email {{ $email }}</p>
</div>