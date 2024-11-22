import express from 'express';
import Helper from './mailHelper.js';
import cors  from 'cors';


const handelRequest = async (req,res) => {
    const {to, subject, text, html,from} = req.body;
    console.log(to, subject, text, html);
    if(!to || !subject || !text || !html || !from) {
        res.status(400).send('Missing required fields');
        return;
    }
    try {
        const messageId = await Helper(to, subject, text, html);
        return res.status(200).send({ messageId, message: "Message sent Successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal Server Error');
    }
}











const app = express();
app.use(express.json());

app.use(cors());


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello World');
    }
);

app.post('/sendMail', handelRequest);













