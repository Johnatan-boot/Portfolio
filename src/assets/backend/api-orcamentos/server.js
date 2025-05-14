
//CRIANDO CONSTANTES PARA INICIAR O SERVIDOR

/**const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());**/


//ULTILIZANDO O METODO POST PARA CRIAR UMA LISTA DE OBJETOS ORÇAMENTOS
/*app.post('/orcamentos', (req, res) => {
    const { nome, telefone, servico } = req.body;

    if (!nome || !telefone || !servico) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }

    console.log("Orçamento recebido:", req.body);
    res.status(200).json({ message: "Orçamento enviado com sucesso!" });
});*/


//CRIANDO ROTA E LISTA COM  DADOS DE ORÇAMENTOS

/*app.post('/orcamentos', (req, res) => {
    const { nome, telefone, servico } = req.body;

    if (!nome || !telefone || !servico) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }

    console.log("Orçamento recebido:", req.body);
    
    // Retornar os dados enviados no formato JSON
    res.status(200).json({
        message: "Orçamento enviado com sucesso!",
        dadosRecebidos: req.body
    });
});


//TRAZENDO UMA  ROTA C/ A LISTA QUE TRARÁ   DADOS DE ORÇAMENTOS
app.get('/orcamentos/lista', (req, res) => {
    // Simulando uma lista de orçamentos armazenada
    const orcamentos = [
        { id: 1, nome: "João", telefone: "123456789", servico: "Desenvolvimento_Web" },
        { id: 2, nome: "Maria", telefone: "987654321", servico: "sistema_web" },
        { id: 3, nome: "Anderson", telefone: "987654325", servico: "sistema_web_app" }
    ];

    res.json(orcamentos);
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});*/



/*LEVANTANDO UM SERVIDOR COM EXPRESS E NODE.JS*/

/**IMPLEMENTANDO UMA NOVA LOGICA PARA SALVAR DADOS NO SERVIDOR UM BANCO DE DADOS TEMPORARIO**/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Banco de dados temporário (simulação)
let orcamentos = [];

app.post('/orcamentos', (req, res) => {
    const { nome, telefone, servico } = req.body;

    if (!nome || !telefone || !servico) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }

    const novoOrcamento = {
        id: orcamentos.length + 1,
        nome,
        telefone,
        servico
    };

    orcamentos.push(novoOrcamento);

    console.log("Orçamento salvo:", novoOrcamento);
    res.status(200).json(novoOrcamento);
});

app.get('/orcamentos/lista', (req, res) => {
    res.json(orcamentos);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


/*LEVANTANDO UM SERVIDOR COM EXPRESS E NODE.JS E MYSQL*/
/*CRIANDO O BANCO DE DADOS E AS TABELAS*/

/*const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sua_senha',
    database: 'orcamentos_db'
});

db.connect(err => {
    if (err) throw err;
    console.log("Conectado ao MySQL!");
});

app.post('/orcamentos', (req, res) => {
    const { nome, telefone, servico } = req.body;
    if (!nome || !telefone || !servico) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }

    const query = "INSERT INTO orcamentos (nome, telefone, servico) VALUES (?, ?, ?)";
    db.query(query, [nome, telefone, servico], (err, result) => {
        if (err) throw err;
        res.status(200).json({ id: result.insertId, nome, telefone, servico });
    });
});

app.get('/orcamentos/lista', (req, res) => {
    db.query("SELECT * FROM orcamentos", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

*/