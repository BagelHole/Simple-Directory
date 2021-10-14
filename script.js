
function table_search() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1];
		td2 = tr[i].getElementsByTagName("td")[2];
		if (td || td2) {
		  txtValue = td.textContent || td.innerText;
		  txtValue2 = td2.textContent || td2.innerText;
		  if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 ) {
			tr[i].style.display = "";
		  } else {
			tr[i].style.display = "none";
		  }
		}
	  }
}

function dark_mode(){
  if (document.getElementById("main_body").style.backgroundColor = "f4f4f4"){
    document.getElementById("main_body").style.backgroundColor = "222222";
    document.getElementById("dark").src = "img/outline_light_mode_white_24dp.png";
    document.getElementById("myTable").style.color = "f4f4f4";
    document.getElementById("footer").style.color = "f4f4f4";
  }
  else {
    document.getElementById("main_body").style.backgroundColor = "f4f4f4";
    document.getElementById("dark").src = "img/outline_dark_mode_black_24dp.png";
  }
}

function date_updated() {
  document.getElementById("date_updated").innerHTML = (document.lastModified).substr(0, 10);
}

date_updated()