import express from 'express';
import Helper from './mailHelper.js';

const handelRequest = async (req,res) => {
    const {to, subject, text, html,from} = req.body;
    console.log(to, subject, text, html);
    if(!to || !subject || !text || !html || !from) {
        res.status(400).send('Missing required fields');
        return;
    }
    try {
        const messageId = await Helper(to, subject, text, html);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
    res.status(200).send({ messageId, message: "Message sent Successfully" });
}











const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello World');
    }
);

app.post('/sendMail', handelRequest);












