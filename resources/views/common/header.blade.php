<nav class="Nav Nav-main" role="navigation">
  <div class="Nav-wrapper container">
    <div class="Nav-title">
      <a id="logo-container" href="/"><img src="/images/logo.png" class="Nav-logo"></a>
    </div>
    <ul class="Nav-actions Nav-more">
      <li>
        <a href="/publica">Página pública</a>
      </li>
      <li>
        <a href="/protegida">Página protegida</a>
      </li>
    </ul>
    <eit-user-control>
      <ul class="Nav-actions" slot="loginlinks">
        <li><a href="{{ route('login') }}" id="loginlink">{{ __('Login') }}</a></li>
        <li><a href="{{ route('register') }}">{{ __('Register') }}</a></li>
      </ul>
      <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
          @csrf
      </form>
    </eit-user-control>
    <menu-responsive class="Nav-responsive">
      <ul slot="enlaces" class="Nav-responsive-links">
        <li>
          <a href="/">Portada</a>
        </li>
        <li>
          <a href="/publica">Página pública</a>
        </li>
        <li>
          <a href="/protegida">Página protegida</a>
        </li>
      </ul>
    </menu-responsive>
  </div>
</nav>