import { FeedbackModel } from '../models/FeedbackModel.js';

export const feedbackController = async (req, res) => {
    const {name, phone, message} = req.body;
    console.log(name,phone || 'no phone',message || 'nomessage','datan ekav feedback controller')

    if (!name || !phone || !message) {
        console.log('mtav vat if')
        return res.status(400).json({message: 'All inputs required'});
    };

    try {
        console.log('mtav try')
        await FeedbackModel.createFeedback(name, phone, message);
        console.log('darav',name)
        res.status(201).json({message: 'Your request are submited'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Error'});
    };
};