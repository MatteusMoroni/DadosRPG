let dado4 = document.getElementById('res-d4')
let dado6 = document.getElementById('res-d6')
let dado8 = document.getElementById('res-d8')
let dado10 = document.getElementById('res-d10')
let dado12 = document.getElementById('res-d12')
let dado20 = document.getElementById('res-d20')

function d4() {
    function number(){
        dado4.innerHTML = Math.floor(Math.random() * (4 - 1 + 1) ) + 1
    }
    let myInterval = setInterval(number, 50);

    let stopMyInterval = setTimeout(function breack() {
        clearInterval(myInterval)
    }, 1000)
 
}

function d6() {
    function number(){
        dado6.innerHTML = Math.floor(Math.random() * (6 - 1 + 1) ) + 1
    }
    let myInterval = setInterval(number, 50);

    let stopMyInterval = setTimeout(function breack() {
        clearInterval(myInterval)
    }, 1000)
}

function d8() {
    function number(){
        dado8.innerHTML = Math.floor(Math.random() * (8 - 1 + 1) ) + 1
    }
    let myInterval = setInterval(number, 50);

    let stopMyInterval = setTimeout(function breack() {
        clearInterval(myInterval)
    }, 1000)
}

function d10() {
    function number(){
        dado10.innerHTML = Math.floor(Math.random() * (10 - 1 + 1) ) + 1
    }
    let myInterval = setInterval(number, 50);

    

    let stopMyInterval = setTimeout(function breack() {
        clearInterval(myInterval)
    }, 1000)
}

function d12() {
    function number(){
        dado12.innerHTML = Math.floor(Math.random() * (12 - 1 + 1) ) + 1
    }
    let myInterval = setInterval(number, 50);

    let stopMyInterval = setTimeout(function breack() {
        clearInterval(myInterval)
    }, 1000)
}

function d20() {
    function number(){
        dado20.innerHTML = Math.floor(Math.random() * (20 - 1 + 1) ) + 1
    }
    let myInterval = setInterval(number, 50);

    let stopMyInterval = setTimeout(function breack() {
        clearInterval(myInterval)
    }, 1000)
}
