exports.getIndex = (req, res) => {
    return res.status(200).json({
        status: 'success',
        message: 'Welcome to tutoring api'
    });
};
