import express from "express";
const app = express();
app.get('/ads', (req, res) => {
    return res.json({ message: 'Hello World' });
});
app.listen(3333, () => {
    console.log('Example app listening on port 3333!');
});
