const express = require('express');
const path = require('path');
const produtosRoutes = require('./routes/produtosRoutes');

const app = express();

app.use(express.json());
app.use(express.static(path.join(_dirname, 'public')));

app.use('/produtos', produtosRoutes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));