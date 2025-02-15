"use server";

import {dbClient} from "@/services/dbClient";
import axios from "axios";

export async function submitForm(data: FormData) {
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const comments = data.get("comments") as string;

    console.log("Получены данные:", {name, phone, comments});

    try {
        await dbClient.orders.postOrder({name, phone, comments});
    } catch (error) {
        console.error("Ошибка при записи заказа", error);
    }


    //Отправка в Telegram
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const groupId = process.env.TELEGRAM_GROUP_ID;

    if (!botToken || !groupId) {
        console.error("Ошибка: не заданы TELEGRAM_BOT_TOKEN или TELEGRAM_GROUP_ID");
        return;
    }

    const message = `*НОВАЯ ЗАЯВКА:*\n\n*Имя:* ${name}\n*Телефон:* ${phone}\n*Комментарий:* ${comments || "Нет"}`;

    try {
        await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            chat_id: groupId,
            text: message,
            parse_mode: "Markdown",
        });
        console.log("Заявка успешно отправлена в Telegram!");
    } catch (error) {
        console.error("Ошибка при отправке в Telegram:", error);
    }

}
