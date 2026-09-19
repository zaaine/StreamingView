import { EsperoDB } from "esperodb";


const dataStructure = [
  {
    'videos': [
      { indexes: [{ category: { unique: false } }], primaryKey: '_id' },
    ],
  },

];

// Create an instance of the local database
export const db = new EsperoDB('steamingView', dataStructure, 3);

console.log('DB instance créée', db)
