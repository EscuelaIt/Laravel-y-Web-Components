<div class="Form-field">
  <eit-input-checkbox 
    id="{{$inputName}}" 
    class="Form-checkbox" 
    name="{{ $inputName }}" 
    value="{{ $inputValue }}" 
    {{ old($inputName) ? 'checked' : '' }}
  >
  {{ $inputLabel }}
  </eit-input-checkbox>
  @error($inputName)
    <span class="Form-msg invalid-feedback" role="alert">
        <strong>{{ $message }}</strong>
    </span>
  @enderror
</div>