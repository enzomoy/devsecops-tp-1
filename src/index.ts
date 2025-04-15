import express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware de base
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route de base
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});