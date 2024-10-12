const createCallback = async (req, res) => {
    try {
        const {name, phone, message} = req.body;

        if(!name || !email) {
            return res.status(400).json({error: 'All fields are required'});
        }
    }catch(error) {
        console.log(error);
        return res.status(500).json({error: 'Internal server error'})
    };
};