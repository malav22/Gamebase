// login
const login = document.querySelector('#login-form');
login.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = login['login-email'].value;
  const password = login['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    // reset form
    login.reset();
  });

});