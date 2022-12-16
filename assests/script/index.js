/*---------------------------------------------------
    Intro to Third party API's
    Kunal Mittal

    Assignment-02

--------------------------------------------------------*/
'use strict';
function onEvent(event,selector,callback){
    return selector.addEventListener(event,callback);
}
function select(selector,parent=document){
    return parent.querySelector(selector);
}

const emailInput = select('.email');
const passwordInput = select('.password');
const login  = select('.login');
const create = select('.create');
const error =  select('.error');

localStorage.setItem('email','kunal@email.com');
localStorage.setItem('pass','123');
console.log(localStorage);

onEvent('click',login,function(e){
    e.preventDefault();
    if(emailInput.value ==='' && passwordInput.value ==='' ){
        console.log('empty');
        error.innerText = 'Please fill all details';
        emailInput.value =' ';
        passwordInput.value = ' ';
    } else if (emailInput.value === localStorage.email && passwordInput.value === localStorage.pass ){
        console.log('working');
        let url = './home.html';
        window.location.assign(url);
    } else {
        console.log('incorrect details');
        error.innerText = 'Incorrect details';
        emailInput.value  = ' ' ;
        passwordInput.value =  ' ';
    }
});

onEvent('click',create,function(e){
    e.preventDefault();
    create.disable = true;
});