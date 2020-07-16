<?php

namespace App\View\Components;

use Illuminate\View\Component;

class HiComponent extends Component
{
    public $name;
    public $email;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($name, $email)
    {
        $this->name = $name;
        $this->email = $email;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.hi-component');
    }
}
