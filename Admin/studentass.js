var jobList = JSON.parse(localStorage.getItem("jobList")) || [];
display();
function display(){
  jobList.map(function(elem){
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.textContent = elem.Title;

    var td2 = document.createElement("td");
    td2.textContent = elem.Description;

    // var t3=document.createElement("checkbox");
    // t3.textContent=elem.t3;

     localStorage.setItem("jobList",JSON.stringify(jobList));
    tr.append(td1,td2);
    document.getElementById("body").append(tr);
});
}

  // const params = new URLSearchParams(location.search);
  // const title = params.get('title');
  // const description = params.get('description');
  // document.getElementById('display-area').innerHTML = `Title: ${title}<br>Description: ${description}`;