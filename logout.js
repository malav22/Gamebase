// logout
// const auth = firebase.auth();
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
   e.preventDefault();
  auth.signOut().then(() => {
    // console.log('user signed out');
  });
});

auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    document.getElementById("add-game").style.display = '';
    document.getElementById("logout").style.display = '';
  } else {
    console.log('user logged out');
    document.getElementById("add-game").style.display = 'none'
    document.getElementById("logout").style.display = 'none';
  }
});