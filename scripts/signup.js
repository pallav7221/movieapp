document.querySelector("form").addEventListener("submit", formData);
var data;
if (localStorage.getItem('data') === null) {
    data = []
} else {
    data = JSON.parse(localStorage.getItem('data'));
}

function formData() {
    event.preventDefault();
    var userData = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        number: document.querySelector("#number").value,
        password: document.querySelector("#password").value,
    };

    data.push(userData);
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
    location.href = "./login.html";
}