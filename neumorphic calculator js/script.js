let output = document.getElementById("input-box") ; 


//gets input one by one as a concatenated string 
function display(num){
    output.value = output.value + num ; 
} 


//evaluates the input entered by user 
function Calculate() {
    output.value = eval(output.value) ; 
}


//clears the input screen 
function Clear(){
    output.value = "" ; 
} 


//deletes number one by one by using string slice function 
function del() {
    output.value = output.value.slice(0,-1) ; 
}