window.onload = function () {
  var form = document.getElementById("form");

  const config = {
    classTo: "input",
    errorClass: "error",
    successClass: "success",
    errorTextParent: "input",
  };

  var pristine = new Pristine(form, config);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("chameleon").checked = false;

    var valid = pristine.validate();
    if (valid) {
      alert("Successfully submitted form!");

      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("chameleon").checked = false;
      document.getElementById("pug").checked = false;
      document.getElementById("penguin").checked = false;
    }
  });
};
