var elForm = document.querySelector(".form")
var elInput = document.querySelector(".input")
var warning = document.querySelector(".warning")
var resultp = document.querySelector(".person")
var resultb = document.querySelector(".bike")
var resultc = document.querySelector(".car")
var resulta = document.querySelector(".plane")


var PERSON_SPEED = 3.6
var BIKE_SPEED = 20.1
var CAR_SPEED = 70
var PLANE_SPEED = 800
var hour = "soat"


elForm.addEventListener("submit", function(e){
    e.preventDefault()
    var val = elInput.value
    if(val <= 0){
        warning.textContent = "0 dan kotta son kiriting"
        return
    }
    if(isNaN(val)){
        warning.textContent = "Son kiriting"
    }else{
        warning.textContent = ""
    }
    resultp.textContent = person(val) + hour
    resultb.textContent = bike(val) + hour
    resultc.textContent = car(val) + hour
    resulta.textContent = plane(val) + hour
})

function person (a){
    var personHour = Math.floor(a / PERSON_SPEED)
    return personHour
}

function bike (a){
    var bikeHour = Math.floor(a / BIKE_SPEED)
    return bikeHour
}

function car (a){
    var carHour = Math.floor(a / CAR_SPEED)
    return carHour
}

function plane (a){
    var planeHour = Math.floor(a / PLANE_SPEED)
    return planeHour
}