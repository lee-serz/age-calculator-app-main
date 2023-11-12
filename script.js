var days = document.querySelector(".day");
var months = document.querySelector(".month");
var years = document.querySelector(".year");
var box = document.getElementsByClassName(".input_item");

var daysSpan = document.getElementById("day");
var monthsSpan = document.getElementById("month");
var yearsSpan = document.getElementById("year");

var today = new Date();

var dayToday = today.getDate(); 
var monthToday = today.getMonth() + 1; 
var yearToday = today.getFullYear(); 

var buttonElement = document.getElementById("calc");

buttonElement.addEventListener("click", function() {
    var daysValue = parseInt(days.value);
    var monthValue = parseInt(months.value);
    var yearValue = parseInt(years.value);

    if (isNaN(daysValue) || isNaN(monthValue) || isNaN(yearValue) ||
        daysValue < 1 || daysValue > 31 ||
        monthValue < 1 || monthValue > 12 ||
        yearValue < 1900 || yearValue > 2023) {
        alert("Поля заполнены некорректно.");
        box[0].classList.add("error");
        box[1].classList.add("error");
        box[2].classList.add("error");
    } else {
        var dayDiff = dayToday - daysValue;
        var monthDiff = monthToday - monthValue;
        var yearDiff = yearToday - yearValue;

        if (yearDiff < 0 || (yearDiff === 0 && monthDiff < 0) || (yearDiff === 0 && monthDiff === 0 && dayDiff < 0)) {
            alert("Введенная дата находится в будущем.");
        } else {
            daysSpan.textContent = dayDiff;
            monthsSpan.textContent = monthDiff;
            yearsSpan.textContent = yearDiff;
        }
    }
});
