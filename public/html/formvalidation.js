function validateForm() {
    var x = document.forms["anthem"]["name"].value;
    var email=document.forms["anthem"]["email"].value;
    if (x === "") {
      alert("Name must be filled out");
      
     
      document.getElementById("name").focus();
      return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      return (true)
    }
      alert("You have entered an invalid email address!")

      document.getElementById("email").focus();
      return (false)
  

  }