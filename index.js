document.getElementById('signin-btn').addEventListener('click', function(){
    const nameInput = document.getElementById('input-name');
    const userName = nameInput.value ;
    
    const inputPassword = document.getElementById('input-password');
    const userPassword = inputPassword.value ;

    if(userName == 'admin' && userPassword == 'admin123'){
        alert('signin success');
        window.location.assign("/home.html");
    }
    else{
        alert('signin failed');
        return;
    }
})