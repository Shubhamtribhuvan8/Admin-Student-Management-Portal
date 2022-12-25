function signup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    if(name=="" ||email=="" ||password==""){
      alert("fill the form");
    }
    else{
      window.location.href="loginadmin.html"
    }
  }