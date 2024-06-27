const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

let favorites = [];

app.get('/api/videos', async (req, res) => {
    const query = req.query.query;
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=YOUR_API_KEY`);
    res.json(response.data);
});

app.post('/api/favorites', (req, res) => {
    const { videoId } = req.body;
    if (!favorites.includes(videoId)) {
        favorites.push(videoId);
    }
    res.sendStatus(200);
});

app.delete('/api/favorites', (req, res) => {
    const { videoId } = req.body;
    favorites = favorites.filter(id => id !== videoId);
    res.sendStatus(200);
});

app.get('/api/favorites', (req, res) => {
    res.json({ items: favorites });
});

app.get('/api/favorites/count', (req, res) => {
    res.json({ count: favorites.length });
});

app.listen(3001, () => {
    console.log('BFF listening on port 3001');
});
