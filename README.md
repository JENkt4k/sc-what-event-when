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

A good example would be a form where the user is expected to put in a required value first, or before the user moves out of an entry filed like a text box. "Password" and/or "Username" are good examples when creating a new account.

