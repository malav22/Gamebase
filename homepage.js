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
    document.getElementById("search-before").style.display="none";

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
db.collection('Games').get().then(snapshot =>{
  snapshot.docs.forEach(doc => {
      renderCafe(doc);
  })
})
