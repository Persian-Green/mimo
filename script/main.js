function changeText() {
  const p1 = document.getElementById("p1"); // Get the element with id "p1"

  const p = document.querySelectorAll("p.c2.c3");
  p[0].innerHTML = "first Selected";
  p[p.length - 1].innerHTML = "last Selected";
  p1.innerHTML = p.length;
}
