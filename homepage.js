document.getElementById("search-result").innerHTML = "Your search suggestions will appear here.";
document.getElementById("search-result").style.color="#F00";
function search_fun(){
  
  var input, filter, ul, li, a, i, txtValue;
  
  input = document.getElementById('searchbar');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  document.getElementById("search-result").innerHTML = "";
  
  for (i = 0; i < li.length; i++) {

    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
    document.getElementById("search-result").innerHTML = document.getElementById("search-result").innerHTML + li[i].innerHTML + "<br>";
    continue;
    } 
  }
  if (input.value.toUpperCase() == ""){
  document.getElementById("search-result").innerHTML= "Enter some keywords!";}
}

const cafeList = document.querySelector('#myUL') ;
// create element and render cafe
function renderCafe(doc){
  let li = document.createElement('li');
  let games = document.createElement('a');
  
  li.setAttribute('data-id', doc.id);
  games.textContent = doc.data().Game;
  games.setAttribute('href',doc.data().Link); 
  games.setAttribute('target',"_blank");

  li.appendChild(games);

  cafeList.appendChild(li);
};

// getting data
// db.collection('Games').get().then(snapshot =>{
//   snapshot.docs.forEach(doc => {
//       renderCafe(doc);
//   })
// })

// real time listener
db.collection('Games').orderBy('Game').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
      // console.log(change.doc.data());
      if(change.type == 'added'){
          renderCafe(change.doc);
      } else if (change.type == 'removed'){
          let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
          cafeList.removeChild(li);
      }
  });
});

// const loggedoutlinks = document.querySelectorAll('.loggedout');
// const loggedinlinks = document.querySelectorAll('.loggedin');

// const setupUI = (user) => {
//   if (user) {
//     loggedinlinks.forEach(item => item.style.display='block');
//     loggedoutlinks.forEach(item => item.style.display='none');
//     getElementById
//   }
//   else{
//     loggedinlinks.forEach(item => item.style.display='none');
//     loggedoutlinks.forEach(item => item.style.display='block');
//   }
// }

auth.onAuthStateChanged(user => {
  if (!user) {
    console.log('user logged in: ', user);
    document.getElementById("login-nav").style.display = '';
    document.getElementById("signup-nav").style.display = '';
  } else {
    console.log('user logged out');
    document.getElementById("login-nav").style.display = 'none'
    document.getElementById("signup-nav").style.display = 'none';
  }
});