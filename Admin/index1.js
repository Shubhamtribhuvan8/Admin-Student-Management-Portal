 // function handleFormSubmit(event) {
    //   event.preventDefault();
    //   const title = document.getElementById('title').value;
    //   const description = document.getElementById('description').value;
    //   window.open(`index2.html?title=${title}&description=${description}`, '_blank');
    // }
    var jobList = JSON.parse(localStorage.getItem("jobList")) || [];

    document.querySelector("form").addEventListener("submit",function(){
      event.preventDefault();

      var Title = document.getElementById("Title").value;
      var Description = document.getElementById("Description").value;
      // var textNode = "list";
      // var id = textNode+""+c++;
      
      jobList.push({"Title":Title,"Description":Description});
      localStorage.setItem("jobList",JSON.stringify(jobList));

    });