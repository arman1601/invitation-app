import { ApiError } from '../error/ApiError';

export const errorHandlingMiddleware = (err, req, res, next) => {
    if (err instanceof ApiError) {
        res.status(err.status).json({ message: err.message });
    };
    
    console.log(err);
    return res.status(500).json({message: 'Not defined error'});
};

