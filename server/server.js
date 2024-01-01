require("dotenv").config();
const express = require("express");
const cors = require("cors");
const postmark = require("postmark");
const bodyParser = require('body-parser');
const passport = require("passport");
const authRoute = require("./routes/auth");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");
const app = express();

app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);
app.use(passport.initialize());
app.use(passport.session());


app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.use("/auth", authRoute);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const serverToken = process.env.POSTMARK_API_KEY;
const client = new postmark.ServerClient(serverToken);

const port = process.env.PORT || 3000;

app.post('/send-email', (req, res) => {
    const { to, subject, textbody } = req.body;
    const from = '205121111@nitt.edu';

    // Log received values to the console
    console.log('Recipient:', to);
    console.log('Subject:', subject);
    console.log('Message:', textbody);

    client.sendEmail({
        "From": from,
        "To": to,
        "Subject": subject,
        "TextBody": textbody
    }, (error, result) => {
        if (error) {
            console.error('Error occurred while sending email:', error);
            res.status(500).send('Error occurred while sending email.');
        } else {
            console.log('Email sent successfully!');
            console.log('Result:', result);
            res.status(200).send('Email sent successfully!');
        }
    });
});

app.use('/', (req, res) => {
    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Email Composer</title>
      </head>
      <body>
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <h2 style="text-align: center;">Compose Email</h2>
          <form action="/send-email" method="post" id="emailForm" style="margin-bottom: 20px;">
            <label for="recipient">Recipient:</label><br>
            <input type="email" id="recipient" name="to" style="width: 100%; padding: 10px; margin-bottom: 10px;" required><br>

            <label for="subject">Subject:</label><br>
            <input type="text" id="subject" name="subject" style="width: 100%; padding: 10px; margin-bottom: 10px;" required><br>

            <label for="message">Message:</label><br>
            <textarea id="message" name="textbody" rows="6" style="width: 100%; padding: 10px; margin-bottom: 10px;" required></textarea><br>

            <button type="submit" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; cursor: pointer; border-radius: 5px;">Send</button>
          </form>
          <div id="status" style="display: none;"></div>
        </div>
      </body>
    </html>
    `;

    // Set Content-Type as text/html
    res.header('Content-Type', 'text/html');

    // Send the HTML content as the response
    res.send(htmlContent);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
