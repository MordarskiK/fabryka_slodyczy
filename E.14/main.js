const BTN_zamow = document.getElementById("BTN_zamow");
const num_shape = document.getElementById("num_shape");
const zamowienie = document.getElementById("zamowienie");
const BTN_color = document.getElementById("BTN_color");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

BTN_zamow.addEventListener("click", function (fun) {
  fun.preventDefault();

  zamowienie.innerHTML = "Zamówiłeś żelka: ";
  if (num_shape.value == "1") {
    zamowienie.innerHTML += "miś";
  } else if (num_shape.value == "2") {
    zamowienie.innerHTML += "żabka";
  } else if (num_shape.value == "3") {
    zamowienie.innerHTML += "serce";
  } else {
    zamowienie.innerHTML += "inny kształt";
  }

  BTN_color.style.backgroundColor =
    "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
});
