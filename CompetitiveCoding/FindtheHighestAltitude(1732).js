//leetcode.com/problems/find-the-highest-altitude/
var largestAltitude = function (gain) {
  const altitudeArray = [0];

  for (let i = 0; i < gain.length; i++) {
    altitudeArray[i + 1] = gain[i] + altitudeArray[i];
  }

  return altitudeArray.sort((a, b) => a - b)[altitudeArray.length - 1];
};

largestAltitude([-5, 1, 5, 0, -7]);
