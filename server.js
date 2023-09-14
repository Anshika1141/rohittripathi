require('dotenv');
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const nodemailer = require('nodemailer')
const SMTPTransport = require('nodemailer/lib/smtp-transport')

const app = express()
const port = 3000

// Set public folder as static folder for static files
app.use(express.static(__dirname + '/public'));

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Set EJS as templating engine
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index')
})


app.get('/research', (req, res) => {

    res.render('research')
})


app.get('/publication', (req, res) => {

    res.render('publication')
})


app.get('/projects', (req, res) => {

    res.render('projects')
})


app.get('/patents', (req, res) => {

    res.render('patents')
})


app.get('/startups', (req, res) => {

    res.render('startups')
})


app.get('/currentopenings', (req, res) => {

    res.render('currentopenings')
})


app.get('/participations', (req, res) => {

    res.render('participations')
})


app.get('/supervisor', (req, res) => {

    res.render('supervisor')
})


app.get('/econtent', (req, res) => {
    res.render('econtent')
})


app.get('/contactus', (req, res) => {

    res.render('contactus')
})


app.post('/contactus', async (req, res) => {
    const name1 = req.body.name;
    const email = req.body.email;
    const msg = req.body.message;

    let transporter = nodemailer.createTransport(new SMTPTransport({
        service: 'gmail',
        auth: {
            user: `${process.env.ID}`,
            pass: `${process.env.PASSWORD}`
        }
    }));

    let mail = {
        from: `${process.env.ID}`,
        to: `${process.env.RECIEVE}`,
        subject: 'Hello',
        html: `
            <h3> Hello Dr. R. Tripathi </h3>
            <h4> You got a message from ${name1} with email ${email}. </h4>
            <h4> Message: <b> ${msg} </b> </h4>
        `,
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }  
    })

    // res.send('Email Send');
    res.redirect('/contactus');
})













app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})