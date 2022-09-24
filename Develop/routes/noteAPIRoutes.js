const router = require('express').Router();
const fs = require('fs');

router.get('/api/notes', (req, res) => {
    fs.readFile('../db/db.json', 'utf-8', (err, data) => {
        res.json(data);
    })
})

router.post('/api/notes', (req, res) => {
    console.log(req.body);
    fs.appendFile('../db/db.json', 'utf-8', (err, data) =>{
        res.json(data);
    })

})

router.delete('/api/notes', (req, res) => {
    console.log('DELETE request received for /api');
    res.send("DELETE request")
})

module.exports = router