function validation(e){
    let fieldName=e.target.name;
    let fieldVal=e.target.value;
    switch(fieldName){
        case "FirstName":
            const firstNamePattern=/^[a-zA-Z]{1,}$/;
            if(!fieldVal){
                document.getElementById(fieldName+"-error").innerHTML="Please Enter First Name!!";
            }
            else if(firstNamePattern.test(fieldVal)==false){
                document.getElementById(fieldName+"-error").innerHTML=" ";
                document.getElementById(fieldName+"-error").innerHTML="Please Enter First Name in String!!";
            }
            else{
                document.getElementById(fieldName+"-error").innerHTML=" ";
            }
            break;

            case "LastName":
                const LastNamePattern=/^[a-zA-Z]{1,}$/;
                if(!fieldVal){
                    document.getElementById(fieldName+"-error").innerHTML="Please Enter Last Name!!";
                }
                else if(LastNamePattern.test(fieldVal)==false){
                    document.getElementById(fieldName+"-error").innerHTML=" ";
                    document.getElementById(fieldName+"-error").innerHTML="Please Enter Last Name in String!!";
                }
                else{
                    document.getElementById(fieldName+"-error").innerHTML=" ";
                }
                break;

            case "Email":
                const EmailPattern=/^[a-z0-9._%+\-]+@[a-z]+\.[a-z]{2,}$/;
                if(!fieldVal){
                    document.getElementById(fieldName+"-error").innerHTML="Please Enter Email!!";
                }
                else if(EmailPattern.test(fieldVal)==false){
                    document.getElementById(fieldName+"-error").innerHTML=" ";
                    document.getElementById(fieldName+"-error").innerHTML="Please Enter Email in valid format!!";
                }
                else{
                    document.getElementById(fieldName+"-error").innerHTML=" ";
                }
                break;
            
             case "Phone":
                const PhonePattern=/^[0-9]{10}$/
                if(!fieldVal){
                    document.getElementById(fieldName+"-error").innerHTML="Please Enter Phone Number!!";
                }
                else if(PhonePattern.test(fieldVal)==false){
                    document.getElementById(fieldName+"-error").innerHTML=" ";
                    document.getElementById(fieldName+"-error").innerHTML="Please Enter Phone Number in valid format!!";
                }
                else{
                    document.getElementById(fieldName+"-error").innerHTML=" ";
                }
                break;

            case "Password":
                const PasswordPattern=/^.{8,}$/
                if(!fieldVal){
                    document.getElementById(fieldName+"-error").innerHTML="Please Enter Password!!";
                }
                else if(PasswordPattern.test(fieldVal)==false){
                    document.getElementById(fieldName+"-error").innerHTML=" ";
                    document.getElementById(fieldName+"-error").innerHTML="Please Enter Password minimum 8 digit!!";
                }
                else{
                    document.getElementById(fieldName+"-error").innerHTML=" ";
                }
                break;
    }
}