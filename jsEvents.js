users = [{"id":1, "username":"cp", "password":123}, {"id":2, "username":"pc", "password":1234}]

function regEventListeners(){
    var loginBtn = document.getElementById('loginBtn')
    //loginBtn.onclick = authenticate
    if(loginBtn)
        loginBtn.addEventListener("click", authenticate, true)
}

$(document).ready(function(){
    init();
    displayMovies()
})

function init(){
    regEventListeners()
}

function authenticate(event){
    //username and password
    var uname = document.getElementById('uname')
    var pass = document.getElementById('pass')
    var isAuthenticated = false
    if(uname.value && pass.value){
        users.forEach(u => {
            if(u.username == uname.value && u.password == pass.value){
                isAuthenticated = true
                return;
            }
        });
    }
    if(isAuthenticated){
        window.location.href = "profile.html"
    } else {
        alert("Authentication Failed!")
        window.location.href = "login.html"
    }
}