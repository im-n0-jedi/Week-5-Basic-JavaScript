let num = 0;

document.getElementById("counter").innerHTML = num;

function tickUp() {
    num++;
    document.getElementById("counter").innerHTML = num;
}

function tickDown() {
    num--;
    document.getElementById("counter").innerHTML = num;
}



function runForLoop() {
    let result = "";
    for (let i = 0; i <= num; i++) {
        result += i + " ";
    }
    document.getElementById("forLoopResult").innerHTML = result;
}

function showOddNumbers() {
    let result = "";
    for (let i = 0; i <= num; i++) {
        if (i % 2 != 0) {
            result += i + " ";
        }
    }
    document.getElementById("oddNumberResult").innerHTML = result;
}

function addMultiplesToArray() {
    let myArray = [];

    for (let i = num; i >= 5; i--) {
        if (i % 5 === 0) {
            myArray.push(i);
        }
    }
    console.log(myArray);
}


function printCarObject() {
    let tempCar = {
        type: document.getElementById("carType").value,
        mpg: document.getElementById("carMPG").value,
        color: document.getElementById("carColor").value
    };

    console.log(tempCar);
}


function loadCar(carNum) {
    let selectedCar = null;

    if (carNum === 1) {
        selectedCar = carObject1;
    } else if (carNum === 2) {
        selectedCar = carObject2;
    } else if (carNum === 3) {
        selectedCar = carObject3;
    }

    if (selectedCar != null) {
        document.getElementById("carType").value = selectedCar.cType;
        document.getElementById("carMPG").value = selectedCar.cMPG;
        document.getElementById("carColor").value = selectedCar.cColor;
    }
}

function changeColor(colorNum) {
    let targetElement = document.getElementById("styleParagraph");

    if (colorNum === 1) {
        targetElement.style.color = "red";
    } else if (colorNum === 2) {
        targetElement.style.color = "green";
    } else if (colorNum === 3) {
        targetElement.style.color = "blue";
    }
}