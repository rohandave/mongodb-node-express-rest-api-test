const _ = require('lodash');
const { ObjectId } = require('mongodb');
const db = require('../database/conn');

async function returnCollection(collectionName) {
    const dbBookManagement = await db.connectToDatabase();
    const collection = await dbBookManagement.collection(collectionName);
    return collection;
}

const findAll = async () => {
    try {
        const booksCollection = await returnCollection('_books');
        return booksCollection.find({}).toArray();
    } catch (error) {
        throw error;
    }
};

const findOne = async (id) => {
    try {
        const booksCollection = await returnCollection('_books');
        return booksCollection.findOne({_id: ObjectId(id)});
    } catch (error) {
        throw error;
    }
};

const create = async (params) => {
    try {
        const booksCollection = await returnCollection('_books');
        return booksCollection.insertOne(params);
    } catch (error) {
        throw error;
    }
};

const update = async (id, params) => {
    try {
        const booksCollection = await returnCollection('_books');
        const queryFilter = { _id: ObjectId(id) };        
        return booksCollection.updateOne(queryFilter, params);
    } catch (error) {
        throw error;
    }
};

const remove = async (id) => {
    try {
        const booksCollection = await returnCollection('_books');
        const queryFilter = { _id: ObjectId(id) };        
        return booksCollection.deleteOne(queryFilter);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    findAll,
    findOne,
    create,
    update,
    remove,
};