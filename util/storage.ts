const MongoClient = require('mongodb').MongoClient;
const databaseUrl = "mongodb://localhost:27017/testDB";
const monk = require('monk')(databaseUrl);

var database: any;

module.exports = {

    initDB() {
        MongoClient.connect(databaseUrl, (err: any, db: any) => {
            if (err) throw err;
            database = db;
        });
    },

    getProducts() {
        const products = monk.get('products');
        products.find({}).then((response: any) => {
            return response;
        });
    },

    save(entity: any, table: string) {
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
    },

    find(table: string, id: string) {
        return new Promise((resolve: any, reject: any) => {
            database.collection(table).find({}).toArray((err: any, result: any) => {
                if (err) {
                    reject(new Error('Error retrieving from database'));
                } else {
                    resolve(result);
                }
            });
        });
    },

    findAll(table: string) {
        return new Promise((resolve: any, reject: any) => {
            database.collection(table).find({}).toArray((err: any, result: any) => {
                if (err) {
                    reject(new Error('Error retrieving from database'));
                } else {
                    resolve(result);
                }
            });
        });
    }
};