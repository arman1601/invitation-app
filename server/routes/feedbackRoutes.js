import { feedbackController } from '../controllers/feedbackController.js';
import express from 'express';

const feedbackRouter = express.Router();

feedbackRouter.post('/feedback', feedbackController);

export default feedbackRouter;

