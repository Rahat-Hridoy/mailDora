import { Injectable } from '@nestjs/common';
import * as Brevo from '@getbrevo/brevo';

@Injectable()
export class EmailService {
  private client;

  constructor() {
    this.client = new Brevo.TransactionalEmailsApi();


    this.client.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY as string);
  }

  async getEmails(batchSize: number, offset: number): Promise<string[]> {
    // TODO: Implement actual email fetching logic
    return [];
  }

  async sendEmail(emails: string[], subject: string, message: string) {
    const sendSmtpEmail = new Brevo.SendSmtpEmail();
    console.log(emails);

    sendSmtpEmail.sender = { name: 'MailDora', email: 'rahathridoyd2x@gmail.com' };
    sendSmtpEmail.to = emails.map((email: string) => ({ email }));
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.textContent = message;


    const result = await this.client.sendTransacEmail(sendSmtpEmail);
    return result;
  }
}
