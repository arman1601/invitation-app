import { db } from '../db.js';

export class FeedbackModel {
    static async createFeedback(name, phone, message) {
        console.log('mtav createFeedback')
        const query = 'INSERT INTO feedbacks (name,phone,message) VALUES (?, ?, ?)';
        await db.execute(query, [name, phone, message]);
        console.log('arec db execute')
    };
};