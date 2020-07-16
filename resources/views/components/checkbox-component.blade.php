<div class="Form-field">
  <input 
    type="checkbox"
    id="{{$inputName}}" 
    class="Form-checkbox" 
    name="{{ $inputName }}" 
    value="{{ $inputValue }}" 
    {{ old($inputName) ? 'checked' : '' }}
  >
  <label class="Form-checkbox" for="{{$inputName}}">{{$inputLabel}}</label>
  @error($inputName)
    <span class="Form-msg invalid-feedback" role="alert">
        <strong>{{ $message }}</strong>
    </span>
  @enderror
</div>