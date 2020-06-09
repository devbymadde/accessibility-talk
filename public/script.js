window.onload = function () {

    var form = document.getElementById("form");

    const config = {
        classTo: 'input',
        errorClass: 'error', 
        errorTextParent: 'input', 
        
    }

    // create the pristine instance
    var pristine = new Pristine(form, config);

    form.addEventListener('submit', function (e) {
       e.preventDefault();
       
       // check if the form is valid
       var valid = pristine.validate(); // returns true or false
       console.log(valid)

    });
};