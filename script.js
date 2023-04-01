function replaceMapWithImage() {
  var map = document.getElementById("map");
  var image = document.getElementById("map-image");
  if (map.style.display === "none") {
    // The image is already shown, so show the map
    map.style.display = "block";
    image.style.display = "none";
  } else {
    // The map is currently shown, so show the image
    map.style.display = "none";
    image.style.display = "block";
  }
}

