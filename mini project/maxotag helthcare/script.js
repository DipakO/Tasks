

function validateForm(){
    var returnval = true;

    var x = document.forms["myForm"]["uname"].value;
    var correctWay = /^[A-Za-z]+$/;
   
    if(x.length<2){
        alert("**Name length is to short");
        return false;
    }

    if(x.match(correctWay)){
        // console.log(typeof(x))
        true;
    }
    else{
        alert("**this is not a Full-Name")
        return false;
        }    

    

    var dob = document.forms["myForm"]["bdate"].value;
    if(dob == ""){
        alert("**please enter a Valid date of birth")
        return false
    }

    var address = document.forms["myForm"]["adrs"].value;
    if(address.length<8){
        alert("**please fill the full address")
        return false;
    }

    var pnumber = document.forms["myForm"]["phnumber"].value;
    

    if(isNaN(pnumber)){
        alert("**please enter the valid Phone number:")
        return false;
    }
    if(pnumber.length==10){
        true;
    }
    else{
        alert("**phone number should be 10 digit")
    }
    // if(pnumber.charAt(0)!=9) && (pnumber.charAt(0)!=7)
    // {
    //     alert("**Number should be start at 9, 8")
    // }

   var cname = document.forms["myForm"]["cname"].value;
   
    if(cname.length<2){
        alert("**Contact-Name length is to short");
        return false;
    }

    var rel = document.forms["myForm"]["rel"].value;
   
    if(rel.length<2){
           alert("**Which type of relation is must be mention");
            return false;
        }

    var mnum = document.forms["myForm"]["mnum"].value;
    if(isNaN(mnum)){
        alert("**please enter the valid Mobile Number Of Relative:")
        return false;
    }

    var hnum = document.forms["myForm"]["hnum"].value;
    if(hnum >5){
        alert("**Home number is not to long:")
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
        alert("**please sellect any one if you are retired or Not")
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
        alert("**please select only one type of Gender??")
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
        alert("**please choose any one Status")
        return false
    }
}