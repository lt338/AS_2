function palindrome(){
    


    
    var get=document.getElementById("info").value; //value retrives 
    var show= document.getElementById("display");

    if(get.length<=1){
        var short="to short";
        show.innerText=short;
        return;

    }

    for(var i=0; i<get.length/2; i++){ //half of varibles to compare like mirror 
        if(get.charAt(i)!== get.charAt(get.length-1-i)){ //length exluding 0 ,-i(opposite index of i)
            var notP="Not a palindrome";
            show.innerText=notP
            return;
        }

    }
          
    
    var isP="is a palindrome";
    show.innerText=isP;

    
}