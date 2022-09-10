var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  console.log(seats);
  console.log(students);

  let i = 0;
  let count = 0;
  while (i < seats.length) {
    count = count + Math.abs(seats[i] - students[i]);
    i++;
  }

  return count;
};

minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6]);
