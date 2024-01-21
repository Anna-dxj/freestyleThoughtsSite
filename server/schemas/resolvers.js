const nodemailer = require('nodemailer')

const resolvers = {
    Mutation: {
        submitForm: async (_, { name, subject, message }) => {
            try {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: `${process.env.USER_EMAIL}`,
                        pass: `${process.env.USER_PW}`
                    }
                })

                const mailOptions = {
                    from: `${process.env.USER_EMAIL}`,
                    to: `${process.env.RECIPIENT_EMAIL}`,
                    subject: `${subject}`,
                    text: `From: ${name}\nMessage: ${message}`
                }

                const info = await transporter.sendMail(mailOptions)

                console.log('Email sent:', info)
                return {success: true, message: 'Email send success'}
            } catch (err) {
                console.error('Error sending email: ', err)
                return {success: false, message: 'Failed to send email'}
            }
        }
    }
}

module.exports = resolvers