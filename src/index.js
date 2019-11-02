var selectors = document.getElementsByClassName("selector");
for (var i = 0; i < selectors.length; i++) {
  selectors[i].addEventListener("change", function(e) {
    this.setAttribute("data-value", e.target.value);
  });
}