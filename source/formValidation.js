/*******************FORM VALIDATION***********************/

let nameErr = document.getElementById('name-err');
let phoneErr = document.getElementById('phone-err');
let mailErr = document.getElementById('mail-err');
let msgErr = document.getElementById('msg-err');
let sendErr = document.getElementById('send-err');

function validateName(){
    let name = document.getElementById("contact-name").value;
    if (!name.match(/^([a-zA-Z]+\s?)*$/)) {
        nameErr.textContent = "Invalid characters"
        return false;
    } else if (name.length === 0){
        nameErr.textContent = 'Please enter your full name';
        return false;
    }

        nameErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

        return true;

    
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if (phone.length === 0){
        phoneErr.textContent="Please Enter Your Mobile Number";
        return false;

    } else if(phone.length != 11){
        phoneErr.textContent = "Enter a valid Phone number";
        return false;
    } else if (!phone.match(/^[0-9]{11}$/)){
        phoneErr.textContent= "Enter a Valid Phone Number";
        return false;
    }
        phoneErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMail(){
    let mail = document.getElementById('contact-mail').value;


    // if (mail === null) {
    //     console.error('Element with ID "contact-mail" not found');
    //     return;
    // }

    if (mail.length === 0){
        mailErr.textContent ="Email is required";
        return false;
    } else if (!mail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        mailErr.textContent = "Enter a valid Email Address";
        return false;
    }
    else{
        mailErr.innerHTML='<i class="fa-solid fa-circle-check"></i>' ;
        return true;
    }
    
}

function validateMsg(){
    let msg = document.getElementById('contact-msg').value;
    var len = 50;
    var left = len - msg.length;

    if (!msg){
        msgErr.textContent='Message Required';
        return false;
    } else if (left > 0){
        msgErr.textContent = `${left} more characters remaining`;
        return false;
    }
    else{
        msgErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

// function validateForm(){

// let send = document.getElementById("send-btn");
// let form = document.getElementById("form");
// send.addEventListener("click", ()=>{
//     if(!validateName() || !validatePhone() || !validateMail() || !validateMsg()){
//         sendErr.style.display ="block";
//         sendErr.textContent = 'please fill all fields!';
//         // let snderr = 
//         setTimeout(()=>{ sendErr.style.display ='none'}, 3000);
//         // snderr();
//         return false;
//     }
//     else{
//         // clearTimeout(snderr);
//         // sendErr.textContent = "";
//         form.remove();
//         // msgSent();

//         return true;
//     }
// })} validateForm();

// function msgSent() {
//   let temp = document.getElementsByTagName("template")[0];
//   let clon = temp.content.cloneNode(true);
//   form.appendChild(clon);
// }

// function msgSent() {
//     let 
// }
function validateForm(){

    var send = document.getElementById("send-btn");
    var form = document.getElementById("form");
    // let body = document.body;
    send.addEventListener("click", ()=>{
        if(validateName() && validatePhone() && validateMail() && validateMsg()){

            // form.remove();
            let temp = document.getElementsByTagName("template")[0];
            console.log(temp)
            let sent = temp.content.cloneNode(true);
            while (form.firstChild) {
                form.removeChild(form.firstChild);
            }
            form.classList.add("new-look")
            form.appendChild(sent);
            // msgSent();
            return true;
        }
        else{
            sendErr.style.display ="block";
            sendErr.textContent = 'please fill all fields!';
            // let snderr = 
            setTimeout(()=>{ sendErr.style.display ='none'}, 3000);
            // snderr();
            return false;



        }
    })} validateForm();
    
    
    
    
    
    
    
    



