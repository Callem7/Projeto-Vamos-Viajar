let express = require('express'); //Conneta express ao ficheiro app.js
let app = express();
let mongoose = require('mongoose');
let Post = require('./models/post.model').Post; //Importa o objeto Post

mongoose.connect('mongodb://127.0.0.1:27017/Viagens', {useNewUrlParser: true, useUnifiedTopology: true}); //Conecta na Base de dados

//Para o Cliente ir buscar submissões do Servidor
app.get('/posts', async (request, response) => { //é um processo assincrono
    let posts = await Post.find();
    response.send(posts);
}); 

app.use(express.static('public')); //Imforma que express.static('public') e o ficheiro de raiz

//Começa servidor local
app.listen(3000, () => console.log('Listening 3000...'));