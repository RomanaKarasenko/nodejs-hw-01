import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    // Записуємо порожній масив у файл
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));

    console.log('Successfully removed all contacts.');
  } catch (error) {
    console.error('Error', error);
  }
};

await removeAllContacts();
