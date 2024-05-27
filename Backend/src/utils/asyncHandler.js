const asyncHandler = (fn) => (req, res, next) => {
    try {
        fn(req, res, next)
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
            success: false
        })
    }
}

export {asyncHandler}