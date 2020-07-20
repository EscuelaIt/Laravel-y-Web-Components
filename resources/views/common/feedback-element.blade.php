<eit-feedback
  @if (session('status'))
    initMsg="{{session('status')}}"
  @elseif (session('resent'))
    initmsg="Se ha enviado de nuevo el email de verificación de tu correo electrónico"
  @endif
  @if (session('error'))
    initmsg="{{session('error')}}"
    initstatus="error"
  @endif
  @if (session('success'))
    initmsg="{{session('success')}}"
    initstatus="success"
  @endif

></eit-feedback>