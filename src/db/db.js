import RxDB from 'rxdb';
import SQLiteAdapterFactory from 'pouchdb-adapter-react-native-sqlite';
import SQLite from 'react-native-sqlite-2';
const SQLiteAdapter = SQLiteAdapterFactory(SQLite)
RxDB.plugin(SQLiteAdapter);
import bookSchema from './bookSchema';

const collections = [
  { name: 'books', schema: bookSchema }
];

let dbPromise = null;

const _create = async function () {
  const db = await RxDB.create(
    {
      name: 'database',
      adapter: 'react-native-sqlite',
      password: '1234567890'
    }
  );

  await Promise.all(collections.map(colData => db.collection(colData)));

  // hooks
  // console.log('DatabaseService: add hooks');
  // db.collections.heroes.preInsert(function (docObj) {
  //   const color = docObj.color;
  //   return db.collections.heroes.findOne({ color }).exec().then(has => {
  //     if (has != null) {
  //       alert('another hero already has the color ' + color);
  //       throw new Error('color already there');
  //     }
  //     return db;
  //   });
  // });

  // sync
  // console.log('DatabaseService: sync');
  // collections.filter(col => col.sync).map(col => col.name).map(colName => db[colName].sync({
  //   remote: syncURL + colName + '/'
  // }));

  return db;
};

export function get() {
  if (!dbPromise)
    dbPromise = _create();
  return dbPromise;
}
