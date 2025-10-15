function restaurnt(){
    

    var tip=document.getElementById("tipValue").value;
    var print=document.getElementById("display");
    var bill= document.getElementById("billValue").value;

    //input= Strings: string to int
    tip=parseFloat(tip);
    bill= parseFloat(bill); //in developer.mozilla.org on canvas

    tip=tip/100; 
    var total =(bill*tip)+bill; 

    print.innerText="$"+ total.toFixed(2);//(2)-> 2 decimal places | toFixed in developer.mozilla.org
                                        


}