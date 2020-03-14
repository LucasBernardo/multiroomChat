module.exports = function(application){
    application.get('/', function(req,res){ //get request
        application.app.controllers.index.home(application, req, res); //call controller to render index
    })
}