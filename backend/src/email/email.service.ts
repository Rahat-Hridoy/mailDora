import { Injectable } from '@nestjs/common';
import * as Brevo from '@getbrevo/brevo';

@Injectable()
export class EmailService {
  private client;

  constructor() {
    this.client = new Brevo.TransactionalEmailsApi();


    this.client.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY as string);
  }

  async sendEmail(to: string, name: string, subject: string, html: string) {
    const sendSmtpEmail = new Brevo.SendSmtpEmail();

    sendSmtpEmail.sender = { name: 'MailDora', email: 'rahathridoyd2x@gmail.com' };
    sendSmtpEmail.to = [{ email: to, name }];
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = html;

    const result = await this.client.sendTransacEmail(sendSmtpEmail);
    return result;
  }
}
