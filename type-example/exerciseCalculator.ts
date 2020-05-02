interface excerciseResult {
  periodLength: Number;
  trainingDays: Number;
  succes: Boolean;
  rating: Number;
  ratingDescription: String;
  target: Number;
  average: Number;
}

const calculateExercises = (array): excerciseResult => {
  console.log(array);
  const newArray = array.slice(1);
  const target = array[0];
  const average = newArray.reduce((t, n) => t + n);
  const rating = target === average ? 3 : target - average < 1 ? 2 : 1;
  const ratingDescription =
    rating === 3 ? 'Good' : rating === 2 ? 'Not bad' : 'Not good';
  return {
    periodLength: array.length - 1,
    trainingDays: newArray.length,
    target,
    average,
    rating,
    ratingDescription,
    succes: target === average ? true : false,
  };
};

const week = [3, 3, 0, 2, 4, 0, 6, 2];

console.log(calculateExercises(week));
