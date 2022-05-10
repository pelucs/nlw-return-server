import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a53791de535478",
    pass: "48d1ec934d0fb3"
  }
});

export class NodeMailerMailAdapter implements MailAdapter{
  async sendMail({ body, subjetc }: SendMailData){
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedet.com>",
      to: "Pedro Lucas <pedro.lucs0089@gmail.com>",
      subject: subjetc,
      html: body
    }); 
  };
}