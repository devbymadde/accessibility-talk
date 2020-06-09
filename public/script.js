window.onload = function () {

    var form = document.getElementById("form");

    const config = {
        classTo: 'input',
        errorClass: 'error', 
        successClass: 'success'        
    }

    var pristine = new Pristine(form, config);

    form.addEventListener('submit', function (e) {
       e.preventDefault();
       
       var valid = pristine.validate();
       console.log(valid)

    });
};