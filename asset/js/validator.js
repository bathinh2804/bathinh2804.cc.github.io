function Validator(options) {
    var selectorRules ={}
    //hàm thuc hien validateva

    function validate(inputElement,rule){
        var errorMessage 
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        // lay ra rule selector
        var rules =selectorRules[rule.selector];
        // lap qua tung rule va kiem tra
        for(var i=0;i<rules.length;++i){
            errorMessage =rules[i](inputElement.value)
            if(errorMessage)break;
        }
        if (errorMessage){
          errorElement.innerText = errorMessage;
          inputElement.parentElement.classList.add('invalid')
        }else{
          errorElement.innerText='';
          inputElement.parentElement.classList.remove('invalid')
        }
        return !errorMessage;
    }
    //láy element của form validate
var formElement =document.querySelector(options.form)

if (formElement) {
    // khi submitform
    formElement.onsubmit = function(e){
        e.preventDefault();
        var isFormValid= true;
        // lap qua tung rule và validate
        options.rules.forEach(function(rule){
            var inputElement=formElement.querySelector(rule.selector);
           var isValid= validate(inputElement,rule);
           if(!isValid){
               isFormValid= false;
           }
        });
       
        

        if(isFormValid){
           if(typeof options.onSubmit ==='function'){
            var enableInputs =formElement.querySelectorAll('[name]');
            var formValues= Array.from(enableInputs).reduce(function(values,input){
                return (values[input.name]=input.value) && values;
            }, {});
            options.onSubmit(formValues);
           }
        }
    }
    // lapqua rule va xu li xu kien
    options.rules.forEach(function(rule){
        // lưulaij rule iput
        if (Array.isArray(selectorRules[rule.selector])){
            selectorRules[rule.selector].push(rule.test);
        }else{
            selectorRules[rule.selector]=[rule.test];
        }
var inputElement=formElement.querySelector(rule.selector)

        if (inputElement) {

            //xử lí trường hơp khi blur khỏi input
            inputElement.onblur = function(){
               
              validate(inputElement,rule)
            }
            //xử lí trường hợp ng dung nhap vào input
            inputElement.oninput= function(){
                var errorElement = inputElement.parentElement.querySelector('.form-message')
                errorElement.innerText='';
                inputElement.parentElement.classList.remove('invalid')
            }
        }
    });
    }
}
Validator.isRequired = function(selector) {
return{
    selector:selector,
    test:function(value) {
        return value.trim() ? undefined : 'Vui lòng nhập trường này'
    }
}
}
Validator.isEmail = function(selector){
    return{
        selector:selector,
        test:function(value) {
            var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập email'
        }
    }
}
Validator.minLength = function(selector, min){
    return{
        selector:selector,
        test:function(value) {
            return value.length >=min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    }
}
 Validator.isConfirmed = function(selector,getConfirmValue,message){
     return{
         selector:selector,
         test:function(value) {
return value === getConfirmValue() ? undefined :message||'Giá trị nhập vào không chính xác'
         }
     }
 }