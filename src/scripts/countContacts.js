import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    let dbData = [];
    const data = await fs.readFile(PATH_DB, 'utf-8');
    dbData = JSON.parse(data);
    return dbData.length;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());