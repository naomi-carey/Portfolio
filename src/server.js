const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = required("nodemailer");
const ck = require(ckey);
const emailGoogle = ck.EMAIL;
const passwdGoogle = ck.PASSWORD;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server is Running!"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailGoogle,
    pass: passwdGoogle,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: emailGoogle,
    subject: "Interested in your Web Development Services",
    html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
