module.exports = function(req,res,next){
    if(Math.random() > 0.5) next();
    res.send('the random num less than 0.5')
}