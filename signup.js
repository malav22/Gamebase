function final() {
    window.alert('Are you sure you want to signup ?');
}

//signup 
const signup = document.querySelector('#signup-form');
signup.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //get user info from signup-form
    const email = signup['signup-email'].value;
    const password = signup['signup-password'].value;

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        // console.log(cred.user);
        signup.reset();
        window.alert('User successfully signed up.');
        window.location.href ="homepage.html"
    });    
});