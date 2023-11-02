const bookService = require('../services/book');

const findAll = async (req, res) => {
    try {
        const result = await bookService.findAll();
        return result;
    } catch (error) {
        throw error;
    }
};

const findOne = async (req, res) => {
    try {
        const result = await bookService.findOne(req.params.id);
        return result;
    } catch (error) {
        throw error;
    }
};

const create = async (req, res) => {
    try {
        const result = await bookService.create(req.body);
        return result;
    } catch (error) {
        throw error;
    }
};

const update = async (req, res) => {
    try {
        const result = await bookService.update(req.params.id, req.body);
        return result;
    } catch (error) {
        throw error;
    }
};

const remove = async (req, res) => {
    try {
        const result = await bookService.remove(req.params.id);
        return result;
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