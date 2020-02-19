function alertOnEventHandler(event){
  alert(`alert event triggered: ${event} source: ${event.target.id} event-type: ${event.type}`);
  const warning = event.target.nextElementSibling;
  if(warning.class = "warning"){
    warning.style.visibility = "visible";
  }
}

function logOnEventHandler(event){
  console.log(`log event triggered : ${event} source: ${event.target.id} event-type: ${event.type}`);
  const warning = event.target.nextElementSibling;
  if(warning.class = "warning"){
    warning.style.visibility = "visible";
  }
  console.log(`object ${event.target} value`, event.target.value);
}


function warningWhenEmptyHandler(event){
  console.log(`log event triggered : ${event} source: ${event.target.id} event-type: ${event.type}`);
  const warning = event.target.nextElementSibling;
  if(warning.class = "warning"){
    warning.style.visibility =  !event.target.value ? "visible" : "hidden";
  }
  console.log(`object ${event.target} value`, event.target.value);
}


