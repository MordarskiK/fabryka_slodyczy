const BTN_zamow = document.getElementById("BTN_zamow");
const num_shape = document.getElementById("num_shape");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const zamowienie = document.getElementById("zamowienie");
const BTN_color = document.getElementById("BTN_color");

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
});

BTN_color.addEventListener("click", function (fun) {
  fun.preventDefault();
  BTN_color.style.color();
});
