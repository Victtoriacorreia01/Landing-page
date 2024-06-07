import { SMTPClient } from 'emailjs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { messageBody } = req.body;

    const client = new SMTPClient({
      user: process.env.EMAIL,
      password: process.env.PASSWORD,
      host: 'smtp.gmail.com',
      ssl: true,
    });

    try {
      const message = await client.sendAsync({
        text: messageBody,
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'Milk Landingpage',
      });

      console.log(message);
      res.status(200).json({ success: true, message: 'Email enviado com sucesso!' });
    } catch (err) {
      console.error('Erro ao enviar e-mail:', err);
      res.status(500).json({ success: false, error: 'Erro ao enviar e-mail.' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Método não permitido' });
  }
}
