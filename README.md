# Savvy Coders - Student Question: What event when?

## Overview

*"What would you use **'focus'** event for?"* was an excellent question and hilariously led me to guiding the student to writing an accidental infinite UI loop. So I thought I would create some quick examples code for some common events I've seen used.

## What Events?

MDN has a list of events [here](https://developer.mozilla.org/en-US/docs/Web/Events), let's go over some common ones seen in the wild.

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
When the form loads, the password field looks like this:
![empty password, warning](images/password-no-value-no-warn.png)

With the preceding code, the user sees a string of red text, see below, after entering (clicking on) the empty input box.

![empty password, warning](images/password-no-value-warn.png)

clicking on an element in the page puts the item in 'focus', clicking off is removing the element from focus or *'blur'*-ing the element

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
![empty password, warning](images/password-no-value-no-warn.png)

What we really want is to show the text after the user clicks off the input *iff* they didn't enter the correct/any input and then leave the input box.  To do this, we use **'blur'**. (Note: *'iff'* is not a typo, it stands for "if and only if" )

```html
      <label>Password:</label>
      <input type="password" id="user-pwd" onblur="showWarningWhenEmptyHandler(event)">
      <label id="user-password-warning" class="warning">* Required field: You need to enter a password!!!</label><br><br>
```

![empty password, warning](images/password-value-no-warn.png)

Above shows no warning when the user enters the text box, or after leaving, if there is data when using ***'blur'*** *(onblur)* event.

Below
![empty password, warning](images/password-no-value-warn.png)
