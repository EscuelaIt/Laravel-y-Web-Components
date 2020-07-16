<?php

namespace App\View\Components;

use Illuminate\View\Component;

class InputComponent extends Component
{

    public $inputLabel;
    public $inputName;
    public $inputValue;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($label, $name, $value)
    {
        $this->inputLabel = $label;
        $this->inputName = $name;
        $this->inputValue = $value;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.input-component');
    }
}
