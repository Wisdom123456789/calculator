let smallcontainer = document.getElementById('smallcontainer')
let bigcontainer = document.getElementById('bigcontainer')
let changeNumber = false
let firstValue = ''
let opera = ''
function displayit(numbers){
    if(changeNumber == true){
        bigcontainer.innerHTML = ''
        changeNumber = false
    }
    bigcontainer.innerHTML += numbers
}
function operators(signs){
    if(opera){
        equal()
    }
    smallcontainer.innerHTML = bigcontainer.innerHTML + signs
    changeNumber = true
    opera = signs
    firstValue = bigcontainer.innerHTML
}
function equal(){
    smallcontainer.innerHTML = firstValue + opera + bigcontainer.innerHTML + ' = '
    if(opera == ' - '){
        bigcontainer.innerHTML = Number(firstValue) - Number(bigcontainer.innerHTML)
    }
    if(opera == ' + '){
        bigcontainer.innerHTML = Number(firstValue) + Number(bigcontainer.innerHTML)
    }
    if(opera == ' x '){
        bigcontainer.innerHTML = Number(firstValue) * Number(bigcontainer.innerHTML)
    }
    if(opera == ' / '){
        bigcontainer.innerHTML = Number(firstValue) / Number(bigcontainer.innerHTML)
    }
}
function clearall(){
    bigcontainer.innerHTML = ''
    smallcontainer.innerHTML = ''
    opera = ''
}
function partialclose(){
    bigcontainer.innerHTML = ''
    opera = ''
}
function divideX(){
    smallcontainer.innerHTML = `1/( ${bigcontainer.innerHTML} )`
    bigcontainer.innerHTML = 1 / bigcontainer.innerHTML
}
function raisePower(){
    smallcontainer.innerHTML = `sqr( ${bigcontainer.innerHTML} )`
    bigcontainer.innerHTML = bigcontainer.innerHTML ** 2
}
function squareRoot(){
    smallcontainer.innerHTML = `&#8730;( ${bigcontainer.innerHTML} )`
    bigcontainer.innerHTML = Math.sqrt(bigcontainer.innerHTML)
}
function backspace(){
    bigcontainer.innerHTML = bigcontainer.innerHTML.slice(0, -1)
}
function negate(){
    bigcontainer.innerHTML = `- ${bigcontainer.innerHTML}` 
}
function backgroundChange(){
    document.getElementById("calculatorBody").style.backgroundColor = "white"
    document.getElementById("calculatorBody").style.backgroundImage = "none"
    document.getElementById("first").style.color = "black"
    document.getElementById("second").style.color = 'black'
    bigcontainer.style.color = "black"
    smallcontainer.style.color = "gray"
    let btn = document.querySelectorAll(".button")
    btn.style.color = 'black'
}
function displaynum(numbers){
    return displayit(numbers)
}