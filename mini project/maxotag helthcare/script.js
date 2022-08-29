

function validateForm(){
    var returnval = true;

    var x = document.forms["myForm"]["uname"].value;
   
    if(x.length<2){
        alert("Name length is to short");
        return false;
    }

    if(x !== String){
        alert("this is not a Name")
        return false;
    }

    

    var dob = document.forms["myForm"]["bdate"].value;
    if(dob == ""){
        alert("please enter a date")
        return false
    }

    var address = document.forms["myForm"]["adrs"].value;
    if(address.length<8){
        alert("please fill the full address")
        return false;
    }

    var pnumber = document.forms["myForm"]["phnumber"].value;
    if(pnumber !==Number){
        alert("please enter the valid number:")
        return false;
    }

   var cname = document.forms["myForm"]["cname"].value;
   
    if(cname.length<2){
        alert("Name length is to short");
        return false;
    }

    var rel = document.forms["myForm"]["rel"].value;
   
    if(rel.length<2){
           alert("Its cant be empty");
            return false;
        }

    var mnum = document.forms["myForm"]["mnum"].value;
    if(mnum !==Number){
        alert("please enter the valid number:")
        return false;
    }

    var hnum = document.forms["myForm"]["hnum"].value;
    if(hnum >5){
        alert("Its very large:")
        return false;
    }

   
    return returnval;

}
function myfun(){
 var a = document.getElementsByName("retired")
    var newvar = 0;
    var count;
    for(count=0; count<a.length; count++){
        if(a[count].checked == true){
            newvar = newvar + 1;

        }
    }
    if(newvar >1){
        alert("please sellect any one value")
        return false
    }    
}

function myfun1(){
    var b = document.getElementsByName("gender")
    var newval = 0;
    var count;
    for(count=0; count<b.length; count++){
        if(b[count].checked==true){
            newval = newval + 1;
        }
    }  
    if (newval > 1){
        alert("please select only one of this??")
        return false
    }
}

function myfun3(){
    var status = document.getElementsByName("status")
    var newwar = 0;
    var count;
    for(count=0; count<status.length; count++){
        if (status[count].checked==true){
            newwar = newwar + 1;
        }
    }
    if ( newwar > 1){
        alert("please choose any one this")
        return false
    }
}

