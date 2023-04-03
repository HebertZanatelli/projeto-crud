const router = require('express').Router()
const CustomersController = require('../controllers/customers')

//rotas
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Verificando as Alterações'
    });
});

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Formulário de Cadastro de Clientes'
    });
});
router.post('/register/add', CustomersController.add);



module.exports = router