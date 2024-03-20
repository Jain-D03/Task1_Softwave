function openContactForm() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("contactFormContainer").style.display = "block";
  }
  
  function closeContactForm() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("contactFormContainer").style.display = "none";
  }
  
  function openLoginForm() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("loginFormContainer").style.display = "block";
  }
  
  function closeLoginForm() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("loginFormContainer").style.display = "none";
  }
  
  function validateContactForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    if (name.trim() == "") {
      alert("Please enter your name.");
      return false;
    }
  
    if (email.trim() == "") {
      alert("Please enter your email.");
      return false;
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (message.trim() == "") {
      alert("Please enter your message.");
      return false;
    }
  
    return true;
  }
  
  function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username.trim() == "") {
      alert("Please enter your username.");
      return false;
    }
  
    if (password.trim() == "") {
      alert("Please enter your password.");
      return false;
    }
  
    return true;
  }
  
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  