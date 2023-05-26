//TAREA 1
const $elemSalarioAnual = document.querySelector("#anually-salary-box")
const $elemSalarioMensual = document.querySelector("#monthly-salary-box")

document.querySelector("#calculate-month-salary").onclick = function(){
  $elemSalarioMensual.value = calcularSalarioMensual(Number($elemSalarioAnual.value))
}

document.querySelector("#clean-inputs-ex1").onclick = function(){
  borrarInputs($elemSalarioAnual,$elemSalarioMensual)
}

function borrarInputs(){
  for(i=0;i<arguments.length;i++){
    arguments[i].value = "";
  }
}

function calcularSalarioMensual(salarioAnual){
  return (salarioAnual / 12).toFixed(2);
}

//TAREA 2
const $elemName = document.querySelector("#name")
const $elemLastName = document.querySelector("#lastname")
const $elemAge = document.querySelector("#age")
const $elemH1 = document.querySelector(".subtitle")

document.querySelector("#greetings").onclick = function(){
  $elemH1.textContent = `Bienvenido, ${$elemName.value}${$elemLastName.value}${$elemAge.value}`
}

document.querySelector("#clean-inputs-ex2").onclick = function(){
  borrarInputs($elemName,$elemLastName,$elemAge)
  $elemH1.textContent = "Bienvenido!";
}
//----
