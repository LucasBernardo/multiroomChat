module.exports.iniciaChat = function(application, req, res){//function to initialize chat

    var dadosForm = req.body; //receive the form data with body parser

    req.assert('apelido','Nome ou apelido é obrigatório').notEmpty; //message if name or nickname is empty
    req.assert('apelido','Nome ou apelido deve conter entre 3 e 15 caracteres').len(3,15); //message if name or nickname length isn't between 3 or 15 characters

    var erros = req.validationErrors();//validating the form data

    if(erros){ //if the form data has errors, render the index and show the error message
        res.render('index', {validacao : erros}); //return to index with the form data errors
        return;
    }

    application.get('io').emit(
        'msgParaCliente', 
        {apelido: dadosForm.apelido, mensagem: ' acabou de entrar no chat'}
    );

    res.render('chat', {dadosForm : dadosForm}); //render chat.ejs
}