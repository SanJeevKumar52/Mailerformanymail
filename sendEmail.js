require("dotenv").config();
const nodemailer = require('nodemailer');

// Your email credentials
const senderEmail = 'sk3616593@gmail.com';
const senderPassword = process.env.NODE_MAILER_PASSWORD;


// List of recipient emails
const recipients = [
    'Sanjeev74800@gmail.com',
    // 'sanjeev790397@gmail.com',
    // Add more recipients as needed
];

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    auth: {
        user: senderEmail,
        pass: senderPassword
    }
});


// Simple HTML template
const htmlTemplate = `
  <html>
  <head>
  <style>
  body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: red;
  padding: 20px;
}

h1, h2 {
  margin: 0;
  padding: 10px 0;
}

main {
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 5px;
}

.project h3 {
  font-weight: bold;
  margin-bottom: 5px;
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #f1f1f1;
  margin-top: 20px;
}

  </style>
  </head>

    <body>
  <header>
    <h1>Sanjeev Kumar</h1>
    <p>Mobile: +91 7903978152  Email: sk3616593@gmail.com  [Linkedin] [GitHub] [LeetCode]</p>
  </header>
  <main>
    <h2>Skills</h2>
    <ul>
      <li>Programming Languages: C++, JavaScript, SQL</li>
      <li>Front-end Technologies: HTML5, CSS3, ReactJS, Bootstrap, Zustand, Context API React redux</li>
      <li>Back-end Technologies: NodeJS, ExpressJS, MongoDB, Firebase</li>
      <li>Version Control: Git, GitHub</li>
      <li>Cloud Platforms: Microsoft Azure (basic knowledge)</li>
    </ul>
    <h2>Education</h2>
    <p>Loknayak Jai Prakash Institute of Technology, DEC 2020 - AUG 2024, Bachelor of Technology in Computer Science, CGPA: 8.26</p>
    <h2>Projects</h2>
    <h3>ShopCart (ReactJs, ExpressJs, MongoDB, Nodejs, React redux)</h3>
    <p>Engineered a comprehensive eCommerce platform with a MERN stack, featuring user authentication, product management, and order processing.</p>
    <p>Implemented a user-friendly dashboard for administrators to manage products, orders, and user accounts efficiently.</p>
    <h3>Instagram Clone (React.js, Firebase, Zustand, Chakra UI)</h3>
    <h2>Experience</h2>
    <h3>IBM SkillsBuild Internship, Online, Jan 2023 - Mar 2023</h3>
    <p>Skills Acquired: HTML, CSS, JavaScript, Bootstrap.</p>
    <p>Team Collaboration: Contributed to designing and developing a personal portfolio in a collaborative team setting.</p>
    <p>Responsive Design: Implemented Bootstrap for a responsive layout, improving mobile accessibility</p>
    <h2>Personal Portfolio</h2>
    <p>Link to your portfolio website (if applicable)</p>
  </main>
  <footer>
    <p>Sanjeev Kumar - &copy; 2024</p>
  </footer>
</body>
  </html>
`;

// Email options
const mailOptions = {
    from: senderEmail,
    subject: 'Subject of Your Email',
    html: htmlTemplate // Use html instead of text
};

// Function to send email to a single recipient
const sendEmail = (recipient) => {
    return new Promise((resolve, reject) => {
        transporter.sendMail({ ...mailOptions, to: recipient }, (error, info) => {
            if (error) {
                console.log(`Error sending email to ${recipient}:`, error);
                reject(error);
            } else {
                console.log(`Email sent to ${recipient}:`, info.response);
                resolve(info.response);
            }
        });
    });
};

// Function to send emails to all recipients
const sendEmails = async () => {
    const promises = recipients.map((recipient) => sendEmail(recipient));
    try {
        await Promise.all(promises);
        console.log('All emails sent successfully');
    } catch (error) {
        console.error('Error sending emails:', error);
    }
};

sendEmails();
