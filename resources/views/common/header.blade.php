<nav class="Nav Nav-main" role="navigation">
  <div class="Nav-wrapper container">
    <div class="Nav-title">
      <a id="logo-container" href="/"><img src="/images/logo.png" class="Nav-logo"></a>
    </div>

    <eit-user-control>
      <ul class="Nav-actions" slot="loginlinks">
        <li><a href="{{ route('login') }}" id="loginlink">{{ __('Login') }}</a></li>
        <li><a href="{{ route('register') }}">{{ __('Register') }}</a></li>
      </ul>
      <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
          @csrf
      </form>
    </eit-user-control>
  </div>
</nav>