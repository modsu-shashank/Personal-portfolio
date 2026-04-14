const { inMemoryDB } = require('../config/db');
const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');

exports.submitContactForm = async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    try {
        // 1. Save to in-memory database
        const newMessage = {
            _id: Date.now().toString(),
            name,
            email,
            message,
            createdAt: new Date()
        };
        inMemoryDB.messages.push(newMessage);
        console.log('Message saved to in-memory database:', newMessage);

        // 2. Send Email Notification (If configured)
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_USER !== 'your_email@gmail.com') {
            try {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS
                    }
                });

                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: process.env.EMAIL_USER,
                    subject: `New Portfolio Contact from ${name}`,
                    text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.error('Email error:', error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
            } catch (emailError) {
                console.error('Email configuration error:', emailError);
            }
        }

        res.status(200).json({ msg: 'Message sent successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
