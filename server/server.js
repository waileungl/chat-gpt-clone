const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const express = require('express')
const cors = require('cors');

const app = express()
const port = 8000


const configuration = new Configuration({
    apiKey: process.env.API_KEY
});
const openai = new OpenAIApi(configuration);


app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', async (req, res) => {
    res.status.send({
        message: 'Hello from William!'
    })
})

app.post('/', async (req, res) => {
    try {
        const prompt = req.body.prompt
        // console.log(require("dotenv").config())
        // console.log(process.env);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            max_tokens: 10000,
            temperature: 0,
        });
        res.status(200).send({
            ai:response.data.choices[0].text
        })
    } catch (err) {
        // console.log('Error to provide response', err)
        res.status(500).send({ err })
    }
})

app.listen(port, () => console.log(`>>>>listening on port ${port}<<<<`))