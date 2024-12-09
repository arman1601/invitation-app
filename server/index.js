import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// import { errorHandlingMiddleware } from './middleware/ErrorHandlingMiddleware';
import feedbackRouter from './routes/feedbackRoutes.js';
import multer from 'multer';
const app = express();
const upload = multer();

app.use(cors({credentials: true , origin : process.env.CLIENT_URL}));
app.use(express.static('./client/src'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', feedbackRouter);

// amenaverjum kancheci u aranc next,vorovhetev es amenaverji tochkena voric heto ban chi linelu el
// app.listen(errorHandlingMiddleware);

app.get('/test', (req, res) => {
  console.log('zaprosn ekav')
  res.send('blyaa')
})

// const db = database;
// db.connect((err) => {
//   if (err) {
//       console.error('Error to conected database:', err);
//   } else {
//       console.log('Success conected to database!');
//   }
// });

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running')
});

