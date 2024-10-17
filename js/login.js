document.getElementById('button-login').addEventListener("click",function(event){
    event.preventDefault()
    const phoneNumber =document.getElementById("input-phone").value;
   const pinNmuber= document.getElementById("pin-input").value;

   if(phoneNumber === "232" && pinNmuber === "5973"){
    console.log("your write parson")
    window.location.href = '/Home.html'
   }
   else {
        alert("sorry something is wrong")
   }
})
