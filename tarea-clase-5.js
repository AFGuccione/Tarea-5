//Funcionalidad 4 botones iniciales
let buttons = document.querySelectorAll(".button-exc")
for(i=0;i<4;i++){
  buttons[i].onclick = function(){
    display(this)
  }
}
function display(buttonEl){
  let el = document.querySelector(`.${buttonEl.id}`)
  if (el.style.display === "block") {
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}

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

//TAREA 3
const $elemCantidadVideos = document.querySelector("#video-quantity")
const $elemRows = document.querySelector("#rows-container")
const $elemStrong = document.querySelector("#time-total")

document.querySelector("#create-inputs").onclick = function(){
  removeAllChildNodes($elemRows)
  

  for(i=1;i<=$elemCantidadVideos.value;i++){
    crearFila(i)
  }

  const $calculateButton = document.createElement("button");
  $calculateButton.textContent = "Calcular"
  $elemRows.appendChild($calculateButton)
  $calculateButton.onclick = function(){
    let totalSeconds = 0;
    document.querySelectorAll(".hours").forEach(function(hours){
      totalSeconds = totalSeconds + Number(hours.value)*3600
    })
    document.querySelectorAll(".minutes").forEach(function(minutes){
      totalSeconds = totalSeconds + Number(minutes.value)*60
    })
    document.querySelectorAll(".seconds").forEach(function(seconds){
      totalSeconds = totalSeconds + Number(seconds.value)
    })

    $elemStrong.textContent = secondsToFormat(totalSeconds)
  }
}

function crearFila(value){
  const $fila = document.createElement("div");
  $fila.textContent = `${value}° `
  $fila.className = "row"
  $elemRows.appendChild($fila)

  const $inputBoxHours = document.createElement("input");
  $inputBoxHours.className = "hours"
  $inputBoxHours.placeholder = "Horas"
  const $inputBoxMinutes = document.createElement("input");
  $inputBoxMinutes.className = "minutes"
  $inputBoxMinutes.placeholder = "Minutos"
  const $inputBoxSeconds = document.createElement("input");
  $inputBoxSeconds.className = "seconds"
  $inputBoxSeconds.placeholder = "Segundos"


  $fila.appendChild($inputBoxHours)
  $fila.appendChild($inputBoxMinutes)
  $fila.appendChild($inputBoxSeconds)
}

function secondsToFormat(totalSeconds){
  let hours = Math.floor(totalSeconds/3600)
  let minutes = Math.floor((totalSeconds%3600)/60)
  let seconds = (totalSeconds%3600)%60

  let strongMessage = "El tiempo total de los videos es de:"

  if(hours > 0){
    strongMessage = ` ${strongMessage} ${hours} horas`
    if(hours === 1){
      strongMessage = strongMessage.slice(0,-1)
    }
  }

  if(minutes > 0){
    strongMessage = ` ${strongMessage} ${minutes} minutos`
    if(minutes === 1){
      strongMessage = strongMessage.slice(0,-1)
    }
  }
  if(seconds > 0){
    strongMessage = ` ${strongMessage} ${seconds} segundos`
    if(seconds === 1){
      strongMessage = strongMessage.slice(0,-1)
    }
  }

  return strongMessage

}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

//Tarea 4
const $liValues = document.querySelectorAll("ol li")
const $ems = document.querySelectorAll("p em")

document.querySelector("#clean-inputs-ex4").onclick = function(){
  for(let i=0;i<$ems.length;i++){
    $ems[i].textContent = ""
  }
}

document.querySelector("#calculate-salary").onclick = function(){
  let arr = []
  for(i=0;i<$liValues.length;i++){
    arr.push(Number($liValues[i].textContent))
  }
  $ems[0].textContent += average(arr)
  $ems[1].textContent += min(arr)
  $ems[2].textContent += max(arr)
  $ems[3].textContent += mode(arr)

}

function average(list){
  let acc = 0
  for(i=0;i<list.length;i++){
    acc=+list[i]
  }

  let average = acc / list.length
  return average.toFixed(2)
}

function min(list){
  let value = list[0]
  for(i=0;i<list.length;i++){
    if(value > list[i]){
      value = list[i]
    }
  }
  return value
}

function max(list){
  let value = list[0]
  for(i=0;i<list.length;i++){
    if(value < list[i]){
      value = list[i]
    }
  }
  return value
}

function mode(list){
  let modeCounter = 0
  let modeArray = []

  for(let i=0;i<list.length;i++){
    let counter = 0
    for(let j=i;j<list.length;j++){
      if(list[i] === list[j+1]){
        counter += 1
      }
    }
    
    if(counter > modeCounter){
      modeArray = []
      modeCounter = counter
      modeArray.push(list[i])
    }else if(counter == modeCounter){
      modeArray.push(list[i]);
    }
  }
  return modeArray
}
