// const inquirer = require('inquirer');
const express = require('express');
const noteHTMLRoutes = require('./routes/noteHTMLRoutes')
// const noteAPIRoutes = require('./routes/noteAPIRoutes')
const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));
app.use('/',noteHTMLRoutes);
// app.use('/api', noteAPIRoutes);
// app.get('/', (req, res) => 
//     res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// app.get('*', (req, res) => 
// res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// app.get('/api/notes', (req, res) => res.json(notes),

// app.post('/api/notes', (req, res) => {
//     res.json(`${req.method} note taken`);
// }),
// app.delete('/api/notes/:id', (req, res) => {
//     res.send("DELETE Request Called")

// }),
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
})
// );