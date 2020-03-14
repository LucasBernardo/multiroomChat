module.exports = function(application){
    application.post('/chat', function(req,res){ //post request
        application.app.controllers.chat.iniciaChat(application, req, res); //call controller
    })

    application.get('/chat', function(req,res){//get request
        application.app.controllers.chat.iniciaChat(application, req, res); //call controller
    })
}