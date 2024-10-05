function myFunction() {

    var user = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
  
    if(user == "function" && pass == "var") {
      window.sessionStorage.setItem("user", "user1"); 
      window.location.href="../jside.html"
    } else if(user == "function" && pass == "let") {
      window.sessionStorage.setItem("user", "user2");
      window.location.href="../jscoursedocs.html"
      
    } else {
      alert("Incorrect username or password");
    }
    
}