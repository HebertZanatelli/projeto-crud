//importação dos módulos
const express = require('express');
const path = require('path');

const db = require('./database')
const routes = require('./routes')

//criando objeto a partir do express 
const app = express();

//conexão com o banco de dados
db.connect()

//definindo o tamplete engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//definindo arquivos publicos
app.use(express.static(path.join(__dirname, 'public')));

//habilita o server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }));

//definindo rotas
app.use('/', routes)

// 404 error (not found)
app.use((req, res) => {
    res.send('Página não encontrada!');
});

//executando o servirdor 
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
