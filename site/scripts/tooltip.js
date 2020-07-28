function showTooltip(target, image) {
  var tooltip = document.getElementById("tooltip");
  if (tooltip) {
    tooltip.innerHTML = "";
    tooltip.innerHTML = "<img src='images/" + image + "' />";
    //tooltip.parentNode = target;
    tooltip.style.display = "block";
  }
}