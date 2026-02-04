
function checkName(){
    const name = document.getElementById("nameInput").value;

    if(name ===""){
        alert("please enter a name")
    }else{
        document.getElementById("result").innerText = "Hello, "+ name;
        
    }
}