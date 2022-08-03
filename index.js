const express = require('express');
const app = express();

app.get('/', (request, response) => {
    return response.status(200).send('Heyy!!!')
})


app.listen(3000, () => {
    console.log('server is listening on port 3000')
})