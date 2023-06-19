function velidateForm() {
  var name = document.getElementById("note").value;

  if (note == "") {
    alert("Please enter your note");
    return false;
  }

  return true;

}


// self call function 
(function () {
  var peopleList;
  if (localStorage.getItem('peopleList') == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem('peopleList'));
  }

  // hide table if there is no data

})();



function showData() {
  var peopleList;

  if (localStorage.getItem('peopleList') == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem('peopleList'));
  }

  var tableRef = document.querySelector("#crud").getElementsByTagName('tbody')[0];
  tableRef.innerHTML = "";

  for (let index = 0; index < peopleList.length; index++) {
    tableRef.insertRow().innerHTML =
      "<th scope='row'>" + (index + 1).toString() + "</th>" +
      "<td>" + peopleList[index].note + "</td>" + "<td>" + peopleList[index].time + "</td>" +
      "<td><button onclick='deleteData(" + index + ")'>Delete</button></td>";
  }

}

function deleteData(index) {
  var peopleList;
  if (localStorage.getItem('peopleList') == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem('peopleList'));
  }
  peopleList.splice(index, 1);
  localStorage.setItem('peopleList', JSON.stringify(peopleList));

  // display block if there is data

  if (peopleList.length == 0) {
    document.getElementById("crud").style.display = "none";
  } else {
    document.getElementById("crud").style.display = "block";
  }
  showData();
}

function addNote() {
  console.log("add note");
  var note = document.getElementById("note").value;
  var peopleList;
  if (localStorage.getItem('peopleList') == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem('peopleList'));
  }
  var person = {
    note: note,
    time: new Date().toLocaleString()
  }
  peopleList.push(person);
  localStorage.setItem('peopleList', JSON.stringify(peopleList));
  showData();
  return true;
}

document.onlode = showData();