
function reverse(){
    
    var flip = document.getElementById("info").value; //value grabs user input (noshin)
    
    var reversedString = "";    //empty string 
    for (var i = 0; i < flip.length; i++) {
        reversedString =  flip.charAt(i) + reversedString;    //last updated placed on index 0 all else shifts right
        //reversedString + flip.charAt(i) = right way around 
    }

    //add it to htlp <p id=display> 
    var show=document.getElementById("display");
    show.innerText = reversedString; //(noshin)






    //First attempt--> cant do recurtion 

    //if(flip.length<=1){
        //return flip;
    //}
    //else{
        //var reversedString = flip.charAt(flip.length-1) + reverse(flip.slice(0,-1));
        
        //grab last char add to string not including last char
        //"Linah"-> "h" + "Lina"
    //}
   

    
    
}