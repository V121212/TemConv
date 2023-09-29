let input = document.getElementById('inp');
let fahr = document.getElementById("fahr").innerText;
let cel = document.getElementById("cel").innerText;
let btn = document.getElementsByClassName("btn");
let temp = document.getElementById("temp");
let temp1 = document.getElementById("temp1");
let para = document.getElementById("para");

let x;
function getValue() {
    x = document.querySelector('input').value;;
}


function buttonHandler() {
    if (temp.value == 'Fahrenheit' && temp1.value == 'Fahrenheit')
        para.textContent += " " + x + "°F";
    else if (temp.value == 'Fahrenheit' && temp1.value == 'Celsius')
        para.textContent += " " + (((x - 32) * 5) / 9).toFixed(3) + "°C";
    else if (temp.value == 'Celsius' && temp1.value == 'Fahrenheit')
        para.textContent += " " + ((x * (9 / 5) + 32)).toFixed(3) + "°F";
    else if (temp.value == 'Celsius' && temp1.value == 'Kelvin') {
        para.textContent += " " + (Number(x) + Number(273.17)) + "K";
    }
    else if (temp.value == 'Celsius' && temp1.value == 'Celsius')
        para.textContent += " " + x + "°C";
    else if (temp.value == 'Kelvin' && temp1.value == 'Kelvin')
        para.textContent += " " + x + "°K"
    else if (temp.value == 'Kelvin' && temp1.value == 'Celsius')
        para.textContent += " " + (x - 273.15).toFixed(2) + "°C"
    else if (temp.value == 'Kelvin' && temp1.value == 'Fahrenheit')
        para.textContent += " " + ((x - 273) * (9 / 5) + 32).toFixed(2) + "°F"
    else if (temp.value == 'Fahrenheit' && temp1.value == 'Kelvin')
        para.textContent += " " + (((x - 32) * (5 / 9)) + 273.15).toFixed(2) + "K";


}

function fun() {
    para.innerText = "";
    para.innerText = "Ans: "
    input.value = 0;
} 