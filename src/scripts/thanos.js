import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    // Читаємо існуючі контакти з файлу
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);

    // Проходимо по кожному контакту та з імовірністю 50% видаляємо його
    contacts = contacts.filter(() => Math.random() > 0.5);

    // Записуємо оновлений масив назад у файл
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

    console.log('Success');
  } catch (error) {
    console.error('Error', error);
  }
};

await thanos();
