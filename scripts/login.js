document.querySelector("form").addEventListener('submit', loginfun);
var registerdUserData = JSON.parse(localStorage.getItem("data"));


function loginfun() {
    event.preventDefault();
    var enteredEmail = document.querySelector("#mail").value;
    var enteredPassword = document.querySelector("#password").value;
    registerdUserData.forEach(data => {
        if (data.email === enteredEmail && data.password === enteredPassword) {
            alert("login successful");
            window.location.href = "./index.html";
            return;
        }
        else {
            alert("invalid Credentials")
            return;
        }
    });
}