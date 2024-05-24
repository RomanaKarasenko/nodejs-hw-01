import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        // Читаємо існуючі контакти з файлу
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        // Генеруємо новий контакт
        const newContact = createFakeContact();

        // Додаємо новий контакт до існуючого масиву
        contacts.push(newContact);

        // Записуємо оновлений масив назад у файл
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

        console.log('Successfully added one new contact.');
      } catch (error) {
        console.error('Error adding new contact:', error);
      }
};

await addOneContact();
