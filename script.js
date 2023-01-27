var show1 = document.getElementById("show");
var count = localStorage.length + 1;
var table = "";
var inputbox1 = "";
var countl = localStorage.length + 1;

showtable();
//showtask();
// function addTask() {
//   var inputbox1 = document.getElementById("inputbox").value;
//   // show1.innerHTML = "how are you"

//   show1.innerHTML += count + ".     " + inputbox1 + "<br>";
//   count++;
//   inputbox1.value = " "
// }

function addTask() {
  // Find a <table> element with id="myTable":
  table = document.getElementById("myTable");
  inputbox1 = document.getElementById("inputbox").value;
  if (inputbox1 == "") {
    alert("We don't insert null values in list");
  } else {
    localStorage.setItem(count, inputbox1);

    //showtable();
    clearInput();
    window.location.reload();
  }
}

function deleteAll() {
  //  // show1.innerHTML = "";
  //   alert("delete");
  // $("#table").remove();
  localStorage.clear();

  table.innerHTML = " ";

  count = 1;
  countl = 1;
}

function clearInput() {
  var getValue = document.getElementById("inputbox");
  if (getValue.value != "") {
    getValue.value = "";
  }
}

function edit(i) {
  //alert(i);

  //alert("called");
  editSave(i);
  // var editvalue = document.getElementById("inputbox")
  // var  value1 = localStorage.setItem(i , ('hello'))
  //  alert( value1 )
}

function editSave(i) {
  var editbox1 = document.getElementById("editbox").value;

  //var deletevalue1 = localStorage.getItem(i+1)
  //alert(editbox1);
  //alert (deletevalue1)
  if (editbox1 === "") {
    // alert("hello hiii");
    alert("Please enter a value");
  } else {
    localStorage.setItem(i, editbox1);
  }
  //localStorage.removeItem(i+1)

  window.location.reload();
}

function delete1(i) {
  //   var li = localStorage.getItem(count - 1);
  //   //localStorage.setItem((count-1), inputbox1);
  //   alert("delete function called");

  //   localStorage.removeItem(li);
  // alert(i);
  // if (iplus != null) {
  for (let j = i; j < localStorage.length; j++) {
    var iplus = localStorage.getItem(j + 1);
    localStorage.setItem(j, iplus);
  }
  localStorage.removeItem(localStorage.length);

  //}
  //else{
  //localStorage.removeItem(i)
  //}
  window.location.reload();

  //var deletevalue = localStorage.getItem(i);

  // alert ( deletevalue )
}

function showtable() {
  for (let i = 1; i <= localStorage.length; i++) {
    table = document.getElementById("myTable");
    // inputbox1 = document.getElementById("inputbox").value;
    //localStorage.setItem(count, inputbox1);
    table.innerHTML += ` <tr>
                <th>
                    ${i}
                </th>
                <th>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                 
              </div>
                </th>
                <th>
                    ${localStorage.getItem(i)}
                </th>
                <td>
                    <button class=" mx-4 btn btn-outline-primary" onclick ='edit(${i})' >Edit</button>
                </td>
                <td>
                <button class="mx-4  btn btn-outline-danger" onclick ='delete1(${i})'>delete</button> 
                </td>
                </tr>`;
  }
}

//let check =document.getElementById("flexCheckDefault").value;

//alert(check.checked);
