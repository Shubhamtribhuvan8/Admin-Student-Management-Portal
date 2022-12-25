var obj = JSON.parse(localStorage.getItem("todo")) || [];
displaytodo();

document.querySelector("form").addEventListener("submit", function () {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var Email = document.getElementById("Email").value;

  if (name == "" || Email == "") {
    alert("Please Filled the Data!");
  }
  else {

    obj.push({ name: name, Email: Email });
    localStorage.setItem("todo", JSON.stringify(obj));
    displaytodo();

  }
});

function displaytodo() {
  document.querySelector("tbody").textContent = "";
  obj.map(function (e, index) {
    var tr = document.createElement("tr");
    var t1 = document.createElement("td");
    var t2 = document.createElement("td");
    var t3 = document.createElement("td");
    t1.textContent = e.name;
    t2.textContent = e.Email;


    

    t3.textContent = "Delete";
    t3.style.background = "green";
    t3.addEventListener("click", function () {
      console.log(obj);
      obj.splice(index, 1);
      localStorage.setItem("todo", JSON.stringify(obj));
      console.log(obj);
      displaytodo();
    });
    console.log(obj);
    tr.append(t1, t2, t3);
    document.querySelector("tbody").append(tr);
    console.log(index);
  });
}

  //   window.open(`index3.html?Name=${Name}&Surname=${Surname}`, '_blank');
  // }