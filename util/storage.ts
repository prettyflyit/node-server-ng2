const MongoClient = require('mongodb').MongoClient;
const databaseUrl = "mongodb://localhost:27017/testDB";

var database: any;

module.exports.initDB = () => {
        MongoClient.connect(databaseUrl, (err: any, db: any) => {
        if (err) throw err;
        database = db;
    });
};


module.exports.save = (entity: any, table: string) => {
    return new Promise((resolve: any, reject: any) => {
        database.collection(table).insertOne(entity, (err: any, result: any) => {
            if (err) {
                reject(new Error('Error retrieving from database'));
            } else {
                resolve(
                    module.exports.findAll()
                );
            }
        });
    });
};

module.exports.find = (table: string, id: string) => {
    return new Promise((resolve: any, reject: any) => {
        database.collection(table).find({}).toArray((err: any, result: any) => {
            if (err) {
                reject(new Error('Error retrieving from database'));
            } else {
                resolve(result);
            }
        });
    });
};

module.exports.findAll = (table: string) => {
    return new Promise((resolve: any, reject: any) => {
        database.collection(table).find({}).toArray((err: any, result: any) => {
            if (err) {
                reject(new Error('Error retrieving from database'));
            } else {
                resolve(result);
            }
        });
    });
};
