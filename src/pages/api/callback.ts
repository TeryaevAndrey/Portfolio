import { NextApiRequest, NextApiResponse } from "next";
import TelegramBot from "node-telegram-bot-api";

const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;

const bot = new TelegramBot(TOKEN!, { polling: true });

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const body: {
        name: string;
        email: string;
        telegram?: string;
      } = req.body;

      if (!body.name || !body.email) {
        return res.status(400).json({ message: "Вы заполнили не все поля." });
      }

      const text = `
        Имя: ${body.name}
        Email: ${body.email}
        Telegram: ${body.telegram ? body.telegram : "Не заполнено"}
      `;

      await bot.sendMessage(CHAT_ID!, text);

      return res.status(200).json({ message: "Успешно" });
    } catch (err) {
      return res.status(500).json({ message: "Ошибка сервера", err });
    }
  } else {
    return res.status(500).json({ message: "Неподходящий запрос" });
  }
};

export default handler;
