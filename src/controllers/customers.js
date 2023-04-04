const CustomerModel = require('../models/customers')
const {crypto} = require('../utils/password')

const defaultTitle = 'Formulário de Cadastro de Clientes'

function index(req, res){
    res.render('register', {
        title: defaultTitle
    });
}

async function listUser(req, res){
    const users = await CustomerModel.find()

    res.render('listUsers', {
        title: 'Listagem de Usuários',
        users: users
    })
}

async function add(req, res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)
    
    const register = new CustomerModel({
        name,
        age,
        email,
        password: passwordCrypto
    })
    
    register.save()
    res.render('register', {
        title: defaultTitle,
        message: 'Cadastro realizado com sucesso!'
    })
}

module.exports = {
    add,
    index,
    listUser,
}