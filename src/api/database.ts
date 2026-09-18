import { EsperoDB } from "esperodb";

const dataStructure: any = [
  {
    'videos': [
      { indexes: [{ 'category': { unique: true } }], primaryKey: '_id' },
    ],
  },
 
];

// Create an instance of the local database
 export const db = new EsperoDB('steamingView', dataStructure, 1);

 