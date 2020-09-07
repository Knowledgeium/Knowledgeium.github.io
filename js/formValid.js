var divs = document.querySelectorAll('.contact-input');
var formCtr = 0;

function formValidate(){
    for(var i=0; i<divs.length; ++i){
        if(divs[i].value === ""){
            alert('Please enter all details....');
            formCtr = 1;
            break;
        }
    }
    if(formCtr === 0){
        document.querySelector('.contact-submit-hidden').click();
    }
    else{
        formCtr = 0;
    }
}