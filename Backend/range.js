module.exports= (req, res, next) => {
    res.header('Content-Range', 'Products 0-5/10')
    next();
}