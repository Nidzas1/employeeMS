const express = require('express');
const app = express();

const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'user',
    host: 'host',
    password: 'password',
    database: 'database'
})

app.post('/create', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;
    const date_hired = req.body.date_hired;

    db.query('INSERT INTO employees (name,age,country,position,wage,date_hired) VALUES(?,?,?,?,?,?)', [name, age, country, position, wage, date_hired], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send('Values inserted.');
        }
    })
});

app.get('/employees', (req, res) => {
    db.query('SELECT * from employees', (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
});

app.put('/update', (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;
    const date_hired = req.body.date_hired;

    db.query('UPDATE employees SET name = ?, age = ?, country = ?, position = ?, wage = ?, date_hired = ? WHERE id = ?', [name, age, country, position, wage, date_hired, id],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result);
            }
        })
})
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result);
        }
    })
})
app.listen(3001, () => {
    console.log('working on port 3001')
});
