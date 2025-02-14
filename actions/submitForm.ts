"use server";

export async function submitForm(data: FormData) {
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;

    console.log("Получены данные:", { name, phone });

    // Здесь можно добавить логику сохранения в базу данных
}
