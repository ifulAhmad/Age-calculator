document.getElementById("icon").addEventListener("click", function () {
  // get Element
  const dayInput = parseInt(document.getElementById("day-input").value);
  const monthInput = parseInt(document.getElementById("month-input").value);
  const yearInput = parseInt(document.getElementById("year-input").value);

  //get tampil
  let yearsDis = document.getElementById("dis-years");
  let monthsDis = document.getElementById("dis-months");
  let daysDis = document.getElementById("dis-days");
  //   calculate
  if (isValidDate(yearInput, monthInput, dayInput)) {
    let nowDate = new Date();
    let dateInput = new Date(yearInput, monthInput - 1, dayInput);

    //   get Difference
    let daysDifference = nowDate.getDay() - dayInput;
    let monthDifference = nowDate.getMonth() - monthInput + 1;
    let yearDifference = nowDate.getFullYear() - yearInput;

    //   cek difference
    if (daysDifference < 0) {
      monthDifference--;
      daysDifference += new Date(nowDate.getDate(), nowDate.getMonth(), 0).getDate();
    }

    if (monthDifference < 0) {
      yearDifference--;
      monthDifference += 12;
    }

    //   displayy

    yearsDis.innerHTML = yearDifference + " ";
    monthsDis.innerHTML = monthDifference + " ";
    daysDis.innerHTML = daysDifference + " ";
  } else {
    //
    let inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      input.classList.add("class", "err");
    });

    let divInput = document.querySelectorAll(".oke");
    divInput.forEach((input) => {
      input.classList.add("class", "err2");
    });

    // day invalid display
    let loseDay = document.createElement("span");
    let textSpan1 = document.createTextNode("must be a valid date");
    loseDay.appendChild(textSpan1);
    loseDay.setAttribute("class", "invDay");
    document.querySelector(".day").appendChild(loseDay);

    // month invalid display
    let loseMonth = document.createElement("span");
    let textSpan2 = document.createTextNode("must be a valid month");
    loseMonth.appendChild(textSpan2);
    loseMonth.setAttribute("class", "invMonth");
    document.querySelector(".month").appendChild(loseMonth);
    // year invalid display
    let loseYear = document.createElement("span");
    let textSpan3 = document.createTextNode("must be a valid post");
    loseYear.appendChild(textSpan3);
    loseYear.setAttribute("class", "invYear");
    document.querySelector(".month").appendChild(loseYear);
  }

  function isValidDate(year, month, day) {
    let date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
  }
});
