const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname,'..','public');
app.use(express.static(publicPath));

// everytime when the page reloads, our react app tries to serve up for every error404. this means /create , /edit all comes from index.html
// so for every path, we need to go to index.html
app.get('*',(req,res) => {
    res.sendFile(path.join(publicPath,'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('server started at port 3000');
});