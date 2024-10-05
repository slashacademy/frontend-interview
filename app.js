window.onload = function() {
    if (window.sessionStorage.getItem("user")) {
      var usr = window.sessionStorage.getItem("user");
      if(user != "user1") {
        window.location.replace("signin/signin.html");
      }
    } else {
      window.location.replace("signin/signin.html");
    }
  }