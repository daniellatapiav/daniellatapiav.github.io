$(document).ready(function() {

    var allFields = $('.form-login-registro * :input');
    $(allFields).next().css('display', 'none');

    console.log($(allFields).next());

    var firstNameField = $('#first_name');
    var lastNameField = $('#last_name');
    var usernameField = $('#username');
    var emailField = $('#email');
    var passwordField = $('#password');
    var repasswordField = $('#password-confirm');

    function validateFields() {

      $(firstNameField).blur(function() {
        var error = $(this).next();
        var errorJs = $(this).next().children()[1];
        if($(this).val() == "") {
          $(error).css('display', 'block');
          $(errorJs).text('El campo ' + $(this).attr('data-nombre') + ' es obligatorio');
          return false;
        } else if ($(this).val().length > 50) {
          $(error).css('display', 'block');
          $(errorJs).text('El ' + $(this).attr('data-nombre') + ' debe contener máximo 50 caracteres');
          return false;
        } else {
          $(error).css('display', 'none');
        }
      });

      $(lastNameField).blur(function() {
        var error = $(this).next();
        var errorJs = $(this).next().children()[1];
        if($(this).val() == "") {
          $(error).css('display', 'block');
          $(errorJs).text('El campo ' + $(this).attr('data-nombre') + ' es obligatorio');
          return false;
        } else if ($(this).val().length > 50) {
          $(error).css('display', 'block');
          $(errorJs).text('El ' + $(this).attr('data-nombre') + ' debe contener máximo 50 caracteres');
          return false;
        } else {
          $(error).css('display', 'none');
        }
      });

      $(usernameField).blur(function() {
        var error = $(this).next();
        var errorJs = $(this).next().children()[1];
        if($(this).val() == "") {
          $(error).css('display', 'block');
          $(errorJs).text('El campo ' + $(this).attr('data-nombre') + ' es obligatorio');
          return false;
        } else if ($(this).val().length > 50) {
          $(error).css('display', 'block');
          $(errorJs).text('El ' + $(this).attr('data-nombre') + ' debe contener máximo 50 caracteres');
          return false;
        } else {
          $(error).css('display', 'none');
        }
      });

      $(emailField).blur(function() {
        var error = $(this).next();
        var errorJs = $(this).next().children()[1];
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if($(this).val() == "") {
          $(error).css('display', 'block');
          $(errorJs).text('El campo ' + $(this).attr('data-nombre') + ' es obligatorio');
          return false;
        } else if (!emailRegex.test(emailField.val())) {
          $(error).css('display', 'block');
          $(errorJs).text('El correo ingresado no es válido');
          return false;
        } else if ($(this).val().length > 100) {
          $(error).css('display', 'block');
          $(errorJs).text('El ' + $(this).attr('data-nombre') + ' debe contener máximo 100 caracteres');
          return false;
        } else {
          $(error).css('display', 'none');
        }
      });

      $(passwordField).blur(function() {
        var error = $(passwordField).next();
        var errorJs = $(passwordField).next().children()[1];
        if($(this).val() == "") {
          $(error).css('display', 'block');
          $(errorJs).text('El campo ' + $(this).attr('data-nombre') + ' es obligatorio');
          return false;
        }
      });

      $(repasswordField).blur(function() {
        var error = $(passwordField).next();
        var errorJs = $(passwordField).next().children()[1];
        if ($(this).val() != $(passwordField).val()) {
          $(error).css('display', 'block');
          $(errorJs).text('Las contraseñas ingresadas no coinciden');
          return false;
        } else {
          $(error).css('display', 'none');
        }
      });

      return true;
    }

    var urlPaises = "http://pilote.techo.org/?do=home&do=api.getPaises";
    var urlRegiones = "http://pilote.techo.org/?do=api.getRegiones?idPais=";
    var urlCiudades = "  http://pilote.techo.org/?do=api.getCiudades?idRegionLT=";
    var urlSedes = " http://pilote.techo.org/?do=api.getUnidadesOrganizacionales?idPais=";

    var selectPaises = document.getElementById('selectPaises');
    var selectRegiones = document.getElementById('selectRegiones');
    var selectCiudades = document.getElementById('selectCiudades');
    var selectSedes = document.getElementById('selectSedes');

    function resetSelect (select, placeholder) {
      select.innerHTML = "<option value=''>Debes seleccionar " + placeholder + "</option>";
    }

    function ajaxCall(method, url, callback) {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var respuesta = xmlhttp.responseText;
          var resultado = JSON.parse(respuesta);
          callback(resultado);
        }
        xmlhttp.open(method, url);
        xmlhttp.send();
      }
    }

    ajaxCall("GET", urlPaises, getCountries);

    function getCountries(resultado) {
      for (var i in resultado.contenido) {
        var option = document.createElement('option');
        option.innerText = index;
        option.setAttribute('value', resultado.contenido[i]);
        selectPaises.appendChild(option);
      }
      selectPaises.onchange = function() {
        ajaxCall("GET", urlRegiones, getProvinces);

        if (selectProvincias.hasChildNodes()) {
          selectProvincias.innerText = '';
        }
      }
    }

    var result = validateFields();
    $('.form-login-registro').submit(function(e) {
      if(!result) {
        e.preventDefault();
      };
    });

});
