function addMetricText() {
    var difWeightText = document.getElementById("weightText")
    difWeightText.innerText = "Enter your weight here (in kilograms):"
    var difHeightText = document.getElementById("heightText")
    difHeightText.innerText = "Enter your height here (in meters):"
}
function addImperialText() {
    var difWeightText = document.getElementById("weightText")
    difWeightText.innerText = "Enter your weight here (in pounds):"
    var difHeightText = document.getElementById("heightText")
    difHeightText.innerText = "Enter your height here (in inches):"
}

function unitChoice() {
    if (document.getElementById("metric").checked) {
        calculateBMI(1)
    }
    else if (document.getElementById("imperial").checked) {
        calculateBMI(703)
    }
}

function calculateBMI(scalingFactor) {
    var userWeight = document.getElementById("weight").value
    var userHeight = document.getElementById("height").value

    var BMI = scalingFactor * userWeight / (userHeight * userHeight)
    if (BMI < 18.5) {
        setResultText(String.fromCodePoint(0x26A0) + " " + "You are underweight. Please consider one of our tailored diet plans.", "underweightResult")
    }
    else if (BMI < 25) {
        setResultText(String.fromCodePoint(0x2705) + " " + "You have a healthy weight. Keep up!", "normalWeightResult")
    }
    else if (BMI < 30) {
        setResultText(String.fromCodePoint(0x1F6D1) + " " + "You are overweight. Please consider one of our tailored diet plans.", "overweightResult"  )
    }
    else {
        setResultText(String.fromCodePoint(0x1F974) + " " + "You are obese. Please check out one of our tailored diet plans. If you would like to contact one of our specialists, here's a 15% voucher for the first 3 sessions.", "obeseResult")
    }
}

function setResultText(resultText, className) {
    var resultDiv = document.getElementById("result")
    resultDiv.innerText = resultText
    resultDiv.className = className
}