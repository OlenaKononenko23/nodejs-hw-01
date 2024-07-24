import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    let dbData = [];
    const data = await fs.readFile(PATH_DB, 'utf-8');
    dbData = JSON.parse(data);

    const oneContact = createFakeContact();
    dbData.push(oneContact);

    await fs.writeFile(PATH_DB, JSON.stringify(dbData, undefined, 2));
  } catch (error) {
    console.error(error);
  }
};

addOneContact();