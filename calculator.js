function calculateInsulationCost() {
    var area = document.getElementById("area").value;
    var thickness = document.getElementById("thickness").value;
    var costPerSqFt = 0.75; // Change this value as per your pricing
    var totalCost = (area * thickness * costPerSqFt) / 12;
    document.getElementById("result").innerHTML = "$" + totalCost.toFixed(2);
  }
  
  function clearFields() {
    document.getElementById("area").value = "";
    document.getElementById("thickness").value = "";
    document.getElementById("result").innerHTML = "Estimate";
  }
  