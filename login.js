function login() {
 
  const fixedPassword = "022024";

 
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("msg");

  if ( pass === fixedPassword) {
     window.location.href = "main.html";
  } else {
   alert("Invalid username or password");
  }
}
