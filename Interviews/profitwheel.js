function getIndexBasedOnMonthName(monthName) {
  let monthNameByIndex = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  return monthNameByIndex[monthName] ?? "Please enter a correct month";
}

function getNameBasedOnDayIndex(dayIndex) {
  let weekDayByIndex = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  return weekDayByIndex[dayIndex];
}

function getDay1(year, monthName, date) {
  var month = getIndexBasedOnMonthName(monthName);
  if (month == "Please enter a correct month") {
    return "Please enter a correct month";
  } else if (date > 0 && date <= 31) {
    var dayOnGivenDate = new Date(year, month, date).getDay();
    var convertDayIndexToName = getNameBasedOnDayIndex(dayOnGivenDate);
    return convertDayIndexToName;
  } else {
    return "Please check your input";
  }
}

const result = getDay1(2022, "January", 7);
console.log(result);
