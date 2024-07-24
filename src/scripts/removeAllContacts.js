import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const dbData = JSON.parse(data);

    dbData.contacts = [];
    // console.log(dbData.contacts);

    await fs.writeFile(PATH_DB, JSON.stringify(dbData.contacts, undefined, 2));
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();