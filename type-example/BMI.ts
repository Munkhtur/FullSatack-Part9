const BMIcalculator = (height: number, weight: number) => {
  const heightInM = height / 100;
  const bmi = weight / (heightInM * heightInM);
  console.log(bmi);
  if (bmi < 18) {
    return 'Under weight';
  } else if (bmi > 18 && bmi < 25) {
    return 'Normal weight';
  } else {
    return 'Over weight';
  }
};

try {
  console.log(BMIcalculator(170, 70));
} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
}
