module.exports.home = function(application, req, res){ //function to render home page
        res.render('index', {validacao : {}}); //render chat.ejs
}