import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailerService {
  sendEmail(email: string) {
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nova.mailer.test@gmail.com",
        pass: "novamailer"
      }
    });

    let mailDetails = {
      from: "Nova Shop",
      to: email,
      subject: "Email thank you",
      text: "Thank you for contacting us!"
    };

    mailTransporter.sendMail(mailDetails, function(err, data) {
      if (err) {
        console.log("Error Occurs");
      } else {
        console.log("Email sent successfully");
      }
    });
  }
}
