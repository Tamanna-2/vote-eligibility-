function cE() {
    
    var age = document.getElementById("age").value;

    
    if (age >= 18) {
        document.getElementById("result").innerHTML = "You are eligible to vote!";
    } else {
        document.getElementById("result").innerHTML = "Sorry, you are not eligible to vote yet.";
    }
}
