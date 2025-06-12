const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: 'https://edsel675.github.io', // Permitir solo tu frontend en GitHub Pages
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Rutas
app.get('/', (req, res) => {
    res.send('Backend funcionando 🚀');
});

app.post('/register', (req, res) => {
    const { name, email } = req.body;
    console.log(`Nuevo registro recibido: Nombre=${name}, Email=${email}`);
    res.json({ message: 'Registro recibido correctamente' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en puerto ${PORT}`);
});