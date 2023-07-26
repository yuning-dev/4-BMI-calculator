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
        var resultDiv = document.getElementById("result")
        resultDiv.innerText = "You are underweight. Please consider one of our tailored diet plans."
        resultDiv.className = "underweightResult"
    }
    else if (BMI < 25) {
        var resultDiv = document.getElementById("result")
        resultDiv.innerText = "You have a healthy weight. Keep up!"
        resultDiv.className = "normalWeightResult"
    }
    else if (BMI < 30) {
        var resultDiv = document.getElementById("result")
        resultDiv.innerText = "You are overweight. Please consider one of our tailored diet plans."
        resultDiv.className = "overweightResult"  
    }
    else {
        var resultDiv = document.getElementById("result")
        resultDiv.innerText = "You are obese. Please check out one of our tailored diet plans. If you would like to contact one of our specialists, here's a 15% voucher for the first 3 sessions."
        resultDiv.className = "obeseResult"
    }
}