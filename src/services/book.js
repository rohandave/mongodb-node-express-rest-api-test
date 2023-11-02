const _ = require('lodash');
const bookModel = require('../models/book');

const findAll = async () => {
    try {
        const results = await bookModel.findAll();
        return results;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const findOne = async (id) => {
    try {
        if (_.isUndefined(id) || _.isNull(id) || _.isEmpty(id)) {
            throw {status: 500, message: `Book id can't be null or empty`};
        }

        const result = await bookModel.findOne(id);
        if (!result) throw {status: 404, message: `Can't find book with id - ${id}`};
        return result;
    } catch (error) {
        throw error;
    }
};

const create = async (params) => {
    try {
        if (_.isUndefined(params.title) || _.isNull(params.title) || _.isEmpty(params.title)
        || _.isUndefined(params.author) || _.isNull(params.author) || _.isEmpty(params.author)
        || _.isUndefined(params.summary) || _.isNull(params.summary) || _.isEmpty(params.summary)) {
            throw {status: 500, message: `Book title or author or summary can't be null or empty`};
        }

        const result = await bookModel.create(params);
        return result;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const update = async (id, params) => {
    try {
        if (_.isUndefined(id) || _.isNull(id) || _.isEmpty(id)
        || _.isUndefined(params.title) || _.isNull(params.title) || _.isEmpty(params.title)
        || _.isUndefined(params.author) || _.isNull(params.author) || _.isEmpty(params.author)
        || _.isUndefined(params.summary) || _.isNull(params.summary) || _.isEmpty(params.summary)) {
            throw {status: 500, message: `Book id or title or author or summary can't be null or empty`};
        }

        const bookData = await bookModel.findOne(id);
        if (!bookData) throw {status: 404, message: `Can't find book with id - ${id}`};

        const body = {
            $set: {
                title: params.title,
                author: params.author,
                summary: params.summary
            }
        };
        
        const result = await bookModel.update(id, body);
        return result;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const remove = async (id) => {
    try {
        if (_.isUndefined(id) || _.isNull(id) || _.isEmpty(id)) {
            throw {status: 500, message: `Book id can't be null or empty`};
        }

        const bookData = await bookModel.findOne(id);
        if (!bookData) throw {status: 404, message: `Can't find book with id - ${id}`};

        const result = await bookModel.remove(id);
        return result;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    findAll,
    findOne,
    create,
    update,
    remove,
};