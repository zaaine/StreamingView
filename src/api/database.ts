import { EsperoDB } from "esperodb";

const dataStructure: any = [
  {
    'videos': [
      { indexes: [{ 'category': { unique: false } }], primaryKey: 'id' },
    ],
  },

];

// Create an instance of the local database
export const db = new EsperoDB('steamingView', dataStructure, 1);
console.log('DB instance créée', db)
