const express = require('express');
const bookController = require('../controllers/book');
const router = express.Router();

function returnError(res, error) {
    res
        .status(error?.status || 500)
        .send({ code: res.statusCode, status: "FAILED", data: { error: error?.message || error } });
}

function returnSuccess(res, result) {
    res.status(200).send({ code: res.statusCode, status: "SUCCESS", data: result });
}

router.get('/', async (req, res, next) => {
    try {
        const result = await bookController.findAll(req, res);
        returnSuccess(res, result);
    } catch (error) {
        returnError(res, error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const result = await bookController.findOne(req, res);
        returnSuccess(res, result);
    } catch (error) {
        returnError(res, error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const result = await bookController.create(req, res);
        returnSuccess(res, result);
    } catch (error) {
        returnError(res, error);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const result = await bookController.update(req, res);
        returnSuccess(res, result);
    } catch (error) {
        returnError(res, error);
    }
});

router.delete('/:id', async (req, res, next) => {    try {
        const result = await bookController.remove(req, res);
        returnSuccess(res, result);
    } catch (error) {
        returnError(res, error);
    }
});

module.exports = router;