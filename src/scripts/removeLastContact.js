import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const dbData = JSON.parse(data);
    // console.log(dbData);
    if (dbData.length > 0) {
      dbData.pop();
      console.log(dbData);
      await fs.writeFile(PATH_DB, JSON.stringify(dbData, undefined, 2));
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();