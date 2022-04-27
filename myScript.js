//Mike (Li Zhuangxin)
function validateform(){
var fname=document.myform.fname.value;//Used to read the first name entered by the user
var lname=document.myform.lname.value;//Used to read the last name entered by the user
var address=document.myform.address.value;//Used to read the address entered by the user
var message=document.myform.message.value;//Used to read the message entered by the user
var telephone=document.myform.telephone.value;//Used to read the telephone entered by the user
if(fname==null || fname==""||lname==null || lname==""|| address==null || address==""||message==null || message==""||telephone==null || telephone==""){//Check if the value entered by the user is null
    alert("You have unentered information")
    return false;
}
}