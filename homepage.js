function search_fun(){
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchbar');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    document.getElementById("search-before").style.display="none";
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //   li[i].style.display = "";
    document.getElementById("search-result").innerHTML = li[i].innerHTML;
    break;
      
    } else if (document.getElementById("search-result").innerHTML != ""){
    //   li[i].style.display = "none";
      document.getElementById("search-result").innerHTML= "No games found!"
    }
  }
  if (input.value.toUpperCase() == ""){
  document.getElementById("search-result").innerHTML= "Enter some keywords!";}
}