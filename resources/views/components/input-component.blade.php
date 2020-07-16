<div class="Form-field">
  <label for="{{$inputName}}">{{$inputLabel}}</label>
  <input 
    id="{{$inputName}}" 
    class="Form-control @error($inputName) is-invalid @enderror" 
    name="{{ $inputName }}" 
    value="@if(old($inputName)){{ old($inputName) }}@elseif($inputValue){{ $inputValue }}@endif" 
    {{ $attributes->merge([
        'type' => 'text',
        'autofocus' => false
    ]) }}
  >
  @error($inputName)
    <span class="Form-msg invalid-feedback" role="alert">
        <strong>{{ $message }}</strong>
    </span>
  @enderror
</div>