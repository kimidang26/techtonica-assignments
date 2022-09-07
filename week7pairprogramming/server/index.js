//This will be the server index

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8080;


/*
An array of student objects to show my 2pm class
const students = [
{firstname :"Lisa" , lastname: "Lee"},
{firstname: "cristina", lastname: "rodriguez"},
{firstname: "Diana", lastname: "Olivas"},
{firstname: "Andrea", lastname: "Sanchez"},
{firstname: "Paola", lastname: "Trejo"},
]
*/

//configuring cors middleware
app.use(cors());

app.get('/', (req, res) =>{
    res.json("Hello from techtonica")
})

//hardcode students response
app.get('/api/students', (req, res) =>{
    const STUDENTS = [
        {firstname :"Lisa" , lastname: "Lee"},
        {firstname: "cristina", lastname: "rodriguez"},
        {firstname: "Diana", lastname: "Olivas"},
        {firstname: "Andrea", lastname: "Sanchez"},
        {firstname: "Paola", lastname: "Trejo"},
        ]

        res.json(STUDENTS);
})

app.listen(PORT, () => console.log(`Hola! Server is running on http://localhost:${PORT}`));