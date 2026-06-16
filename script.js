function checkPassword(){

    let password =
    document.getElementById("password").value;

    let score = 0;

    let result =
    document.getElementById("result");

    let suggestion =
    document.getElementById("suggestion");

    if(password.length >= 8)
        score++;

    if(/[A-Z]/.test(password))
        score++;

    if(/[a-z]/.test(password))
        score++;

    if(/[0-9]/.test(password))
        score++;

    if(/[!@#$%^&*(),.?":{}|<>]/.test(password))
        score++;

    let strength="";

    if(score<=2)
        strength="Weak";

    else if(score<=4)
        strength="Medium";

    else
        strength="Strong";

    result.innerHTML=
    "Password Strength: " + strength +
    "<br>Score: " + score + "/5";

    let strongPassword =
    generateStrongPassword();

    suggestion.innerHTML =
    "Suggested Strong Password: " +
    strongPassword;
}

function generateStrongPassword(){

    const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let password = "";

    for(let i=0;i<12;i++){

        password += chars.charAt(
            Math.floor(Math.random()*chars.length)
        );
    }

    return password;
}
