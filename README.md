Bootstrap-My-Select
==================

yet another select box plugin that was made for bootstrap, only smaller and simpler.

The purpose of this repo was because I personally got mad at a few of the select box options out there. I wanted something simple and that worked within `input-prepend` and `input-append` form classes.

This will turn a simple `<select>` dropdown menu into bootstrap's dropdown menu. Currently `<optgroup>` tags do not work currently. I hope to add that feature in the future.

I'll try to get a demo page up soon, but for now heres the markup..

````html
<select class="my-select" data-style="btn-info">
  <option value="hi">hi</option>
  <option value="hi2">hi2</option>
  <option value="hi3">hi3</option>
  <option value="hi4">hi4</option>
  <option value="hi5">hi5</option>
</select>
````
activate it with
````javascript
$('.my-select').mySelect().on('changed', function(e){
  alert('New Value = '+e.val)
})
````
