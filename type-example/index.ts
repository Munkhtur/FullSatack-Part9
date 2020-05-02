import express from 'express';
const app = express();
import { BMI } from './BMI';

app.get('/bmi', (req, res) => {
  const height = req.query.height;
  const weight = req.query.weight;
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
