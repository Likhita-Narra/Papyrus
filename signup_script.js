function validateForm() {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password_repeat = document.getElementById("password-repeat").value;

    if (email == "" || password == "" || password_repeat == "") {
        alert("Please enter all the fields");
        return false;
    } else if (password != password_repeat) {
        alert("Passwords do not match");
        return false;
    }

    var counter = new Array(0, 0, 0);
    if (containsSpecialChars(password)) counter[0]++;
    if (containsUpperCase(password)) counter[1]++;
    if (containsLowerCase(password)) counter[2]++;

    for(let i = 0; i < 3; i++) {
        if (counter[i] == 0) {
            alert("Invalid password format");
            return false;
        }
    }

    window.location.href = "index.html";
    
    return true;
}

function containsSpecialChars(input) {
    const specialCharRegex = /[^a-zA-Z0-9_]/;
    return specialCharRegex.test(input);
}

function containsUpperCase(input) {
    const upperCaseRegex = /[A-Z]/;
    return upperCaseRegex.test(input);
}

function containsLowerCase(input) {
    const lowerCaseRegex = /[a-z]/;
    return lowerCaseRegex.test(input);
}
