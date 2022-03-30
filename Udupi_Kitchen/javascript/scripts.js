
function regdetails(){ 
    var name=document.getElementById("uname").value;
        alert("Welcome :"+name);
        window.location='homepage.html';
      
     
     /*  document.write("Registration Details<br><br>");
     document.write("Name:<br>");
     name=document.getElementById("uname"+"<br>").innerHTML;
     document.write("Email-Id:<br>");
     document.getElementById(email+"<br>").innerHTML;
     document.write("Password:<br>");
     document.getElementById(password+"<br>").innerHTML;*/
}
function login(){
    var email=document.getElementById("lemail").value;
    alert("Welcome :"+email);
        window.location='homepage.html';   
 /* document.write("Login details:<br><br>");
    document.write("Email-Id:<br>");
    document.getElementById(lemail+"<br>").innerHTML;
    document.write("Password:<br>");
    document.getElementById(password+"<br>").innerHTML;*/
    
}
function message(){
    alert("Your message has been sent");
}
function logout()
    {
    var ans=confirm("Are you sure you weant to Logout?");
    if(ans)
    {
        alert("Thank you for your time");
        window.location='index.html';
    }
    else{
        alert("Continue On This site");
    }

}
function order(){
    alert("This site is under construction you can order once it complete.");
    window.location='order.html';
}