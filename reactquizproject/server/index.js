import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());

app.get("/api", (req, res_web) => {
    // res.json({ message: "Hello from server!" });
    const URL= 'https://opentdb.com/api.php?amount=4&category=26&difficulty=easy&type=multiple';
    // if user selects new category, it will be on the req object, need body parser
    fetch(URL)
    //process the data as json
    .then((res_api) => {
        return res_api.json()
    })
    .then((data) => {
        console.log('API response' , data)
        //response sending to my website
        res_web.json(data)
    }) .catch((err) => {
        console.log('api error', err)
        res_web.status(500)
    })

  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});