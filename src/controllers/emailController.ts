import { Request, Response } from "express"; 
import nodemailer from 'nodemailer';

export const contato = async (req: Request, res: Response) => {

    // Passo 1: Configurar o transporter 
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "f005f90b413d0d",
          pass: "d7b00b7ca4af9c"
        }
      });

    // Passo 2: Configurar a mensagem 
    let message = {

        from: req.body.from, 
        to: 'gustavotinho@gmail.com', 
        replyTo: req.body.from,
        subject: req.body.subject, 
        html: req.body.email, 
        text: req.body.email

    };

    // Passo 3: Enviar a mensagem 
    let info = await transport.sendMail(message); 

    console.log("INFO", info)

    res.json({ success: true});
}