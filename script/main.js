function changeText() {
  const alterText = "Goodbye World!"
  const defaultText = document.getElementById("p1").innerHTML;
  if (defaultText !== alterText) {
    document.getElementById("p1").innerHTML = alterText;
  } else {
    document.getElementById("p1").innerHTML = defaultText;
  }
}
