import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    let dbData = [];
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return (dbData = JSON.parse(data));
  } catch (error) {
    console.error(error);
  }
};

console.log(await getAllContacts());