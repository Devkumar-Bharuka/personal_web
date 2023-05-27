const nodemailer = require('nodemailer');

export default async (req, res) => {
  if (req.method === 'POST') {
    // Get the form data from the request body
    const { firstName, lastName, email, phone, message } = req.body;

    // Configure the nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'devbharuka003@gmail.com', // Replace with your Gmail email address
        pass: 'dev003bharuka' // Replace with your Gmail password
      }
    });

    // Create the email message
    const mailOptions = {
      from: 'devbharuka003@gmail.com', // Replace with your Gmail email address
      to: 'devkumar.b@somaiya.edu', // Replace with your email address
      subject: 'New Contact Form Submission',
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);

      // Send a response indicating success
      res.status(200).json({ code: 200, message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      // Send a response indicating failure
      res.status(500).json({ code: 500, message: 'Something went wrong, please try again later' });
    }
  } else {
    // Send a response for unsupported HTTP methods
    res.status(405).end();
  }
};
