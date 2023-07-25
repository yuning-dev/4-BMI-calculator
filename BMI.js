function calculateBMI() {
    var userWeight = document.getElementById("weight").value
    var userHeight = document.getElementById("height").value

    var BMI = userWeight / (userHeight * userHeight)
    if (BMI < 18.5) {
        alert("You are underweight. Please consider one of our tailored diet plans.")
    }
    else if (BMI < 25) {
        alert("You have a healthy weight. Keep up!")
    }
    else if (BMI < 30) {
        alert("You are overweight. Please consider one of our tailored diet plans.")
    }
    else {
        alert("You are obese. Please check out one of our tailored diet plans. If you would like to contact one of our specialists, here's a 15% voucher for the first 3 sessions.")
    }
}