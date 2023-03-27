let currentLang = "en";

  function translateBestOption() {
    const clearButton = document.getElementById("clear-button");
    if (currentLang === "en") {
      document.getElementById("best-option").innerHTML = "La Mejor Opción";
      document.getElementById("welcome-text").innerHTML = "¡Bienvenidos a nuestro sitio web!";
      document.getElementById("lang-button").innerHTML = "English";
      document.getElementById("insulation-heading").classList.remove("title-en");
      document.getElementById("insulation-heading").classList.add("title-es");
      document.getElementById("quantity").placeholder = "Pies Cuadrados";
      document.getElementById("calculate-button").innerHTML = "Calcular";
      document.getElementById("result-label").innerHTML = "Costo total = $";
      document.getElementById("Now that text").innerHTML = "Ahora que conoce su presupuesto, ¡llámenos o escríbanos!";
      document.getElementById("insulation-heading").style.color = "#0066e4"; // add this line to change the title color
      currentLang = "es";
    } else {
      document.getElementById("best-option").innerHTML = "The Best Option";
      document.getElementById("welcome-text").innerHTML = "Welcome To Our Website!";
      document.getElementById("lang-button").innerHTML = "Español";
      document.getElementById("insulation-heading").classList.remove("title-es");
      document.getElementById("insulation-heading").classList.add("title-en");
      document.getElementById("quantity").placeholder = "Square Feet";
      document.getElementById("calculate-button").innerHTML = "Calculate";
      document.getElementById("result-label").innerHTML = "Total cost = $";
      document.getElementById("Now that text").innerHTML = "Now that you know your estimate, call or message us!";
      document.getElementById("insulation-heading").style.color = "#ff005dd8"; // add this line to change the title color back to the original color
      currentLang = "en";
    }
  }

  function calculate() {
    var quantity = parseInt(document.getElementById("quantity").value);
    if (quantity < 200) {
      document.getElementById("result").innerHTML = "Error.";
    } else {
      var price = 1.30;
      var result = quantity * price;
      document.getElementById("result").innerHTML = result.toFixed(2);
    }
  }

function calculate() {
  var quantity = parseInt(document.getElementById("quantity").value);
  if (quantity < 200) {
    document.getElementById("result").innerHTML = "Error.";
  } else {
    var price = 1.30;
    var result = quantity * price;
    document.getElementById("result").innerHTML = result.toFixed(2);
  }
}
