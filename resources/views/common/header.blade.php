<nav class="Nav Nav-main" role="navigation">
  <div class="Nav-wrapper container">
    <div class="Nav-title">
      <a id="logo-container" href="/"><img src="/images/logo.png" class="Nav-logo"></a>
    </div>

    <ul class="Nav-actions">
      @guest
        <li><a href="{{ route('login') }}">{{ __('Login') }}</a></li>
        <li><a href="{{ route('register') }}">{{ __('Register') }}</a></li>
      @else
        <li>
          <div>
              <a href="{{ route('logout') }}"
                onclick="event.preventDefault();
                              document.getElementById('logout-form').submit();">
                  {{ __('Logout') }}
              </a>

              <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                  @csrf
              </form>
          </div>
                            </li>
      @endguest
    </ul>
  </div>
</nav>