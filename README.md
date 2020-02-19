# Savvy Coders - Student Question: What event when?

## Overview

*"What would you use **'focus'** event for?"* was an excellent question and hilariously led me to guiding the student to writing an accidental infinite UI loop. So I thought I would create some quick examples code for some common events I've seen used.

## What Events?

MDN has a list of events [here](https://developer.mozilla.org/en-US/docs/Web/Events), let's go over some common ones seen in the wild focusing on the ones of highest value.

| Event Name  | Fired When  |
|---|---|
| focus | An element has received focus (does not bubble). |
| blur |  An element has lost focus (does not bubble). |
| click | A pointing device button (ANY button; soon to be primary button only) has been pressed and released on an element |

## When Should we use them?

***"click"*** is probably the most commonly used event, but before we get to that, lets quickly go over the question "What would you use 'focus' for?"

A good example for ***'focus'*** *(or more appropriately **'blur'**)* would be a form where the user is expected to enter a required value first, or before the user moves out of an entry field like a text box. "Password" and/or "Username" are good examples as when creating a new account or logging in these cannot be left blank.

```javascript
//generic functions
//create an alert event callback
function alertOnEventHandler(event){
  alert(`alert event triggered: ${event}`);
}
//create a log event callback
function logOnEventHandler(event){
  console.log(`log event triggered : ${event}`);
}
//show warning label callback
function showWarningWhenEmptyHandler(event){
  //the warning label is the next sibling ion our html
  const warning = event.target.nextElementSibling;
  //for practice, let's check to make sure it's of the 'warning' class
  if(warning.class = "warning"){
    warning.style.visibility =  !event.target.value ? "visible" : "hidden";
  }
}
```

```html
      <label>Password:</label>
      <input type="password" id="user-pwd" onfocus="showWarningWhenEmptyHandler(event)">
      <label id="user-password-warning" class="warning">* Required field: You need to enter a password!!!</label><br><br>
```

With the preceding code, the user sees a string of red text, see below after entering the empty input box.

<div style="background-color:rgb(255, 254, 224); padding:2em;">
<label>Password:</label>
<input type="password" id="user-pwd" onfocus="showWarningWhenEmptyHandler(event)">
<label id="user-password-warning" class="warning" style="color:red;">* Required field: You need to enter a password!!!</label><br><br>
</div>

If the user enters some data, leaves and then re-enters, the warning is hidden with the ternary operator code here:

```javascript
// question mark "?" is called a ternary operator, and is shorthand for simple if statements. let <some variable> = <conditional> ? <result returned if true> : <result returned if false>
warning.style.visibility =  !event.target.value ? "visible" : "hidden";
```

this is the exact same as saying:

```javascript
//not (!), or inverse of: falsey if the string is empty, true if the string has data
//  e.g. the 'if' evaluates to "true" if there is nothing in the password box
if(!event.target.value){
  //set the warning text to "visible" because the required field is empty
  warning.style.visibility = "visible";
} else {
  //set the warning text to "hidden" because the required field is empty
  warning.style.visibility = "hidden";
}

```

Resulting in the following:
<div style="background-color:rgb(255, 254, 224); padding:2em;">
<label>Password:</label>
<input type="password" id="user-pwd" onfocus="showWarningWhenEmptyHandler(event)">
<label id="user-password-warning" class="warning" style="color:red; visibility:hidden;">* Required field: You need to enter a password!!!</label><br><br>
</div>

What we really want is to show the text after the user clicks off the input iff they didn't enter the correct/any input.  To do this, we use **'blur'**.

```html
      <label>Password:</label>
      <input type="password" id="user-pwd" onblur="showWarningWhenEmptyHandler(event)">
      <label id="user-password-warning" class="warning">* Required field: You need to enter a password!!!</label><br><br>
```

<div style="background-color:rgb(255, 254, 224); padding:2em;">
<label>Password:</label>
<input type="password" id="user-pwd" value="***" onblur="showWarningWhenEmptyHandler(event)">
<label id="user-password-warning" class="warning" style="color:red; visibility:hidden;">* Required field: You need to enter a password!!!</label><br><br>
</div>

Above shows no warning when the user enters the text box, or after leaving, if there is data when using ***'blur'*** *(onblur)* event.

Below
<div style="background-color:rgb(255, 254, 224); padding:2em;">
<label>Password:</label>
<input type="password" id="user-pwd" onblur="showWarningWhenEmptyHandler(event)">
<label id="user-password-warning" class="warning" style="color:red;">* Required field: You need to enter a password!!!</label><br><br>
</div>
