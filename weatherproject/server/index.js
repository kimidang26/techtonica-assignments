import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 1212;

app.get('/', (req, res) =>{
    res.json("Weather App Information")
})

app.use(cors());

app.listen(PORT, () => console.log(`Hello! Server is running on port http://localhost${PORT}`));