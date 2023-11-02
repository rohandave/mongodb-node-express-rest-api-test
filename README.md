# MongoDB Altlas with NodeJs and Express.js REST API Test

This repository contains the sample application for the [MongoDB Altlas with NodeJs and Express.js REST API Test].

## How To Run

1. You can follow the [Getting Started with Atlas](https://docs.atlas.mongodb.com/getting-started/) guide, to learn how to create a free Atlas account, create your first cluster and get your Connection String to the database.
Then, set the MongoDB Atlas URI connection parameter (userName, password, database etc) in `config/index.js`

2. Start the Express server:
```
npm install
npm run start
```

3. API endpoints

## GET - /api/v1/books

**Response**

{
    "code": 200,
    "status": "SUCCESS",
    "data": [
        {
            "_id": "65434445969b235042261ea3",
            "title": "Book 1",
            "author": "Abc Author",
            "summary": "Nice to read this book"
        },
        {
            "_id": "654392ac8d86dba8570e7467",
            "title": "Book 2",
            "author": "Xyz Author",
            "summary": "Good book"
        }
    ]
}

## GET - /api/v1/books/<bookId>

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `id` | required | objectID | must be a string of 12 bytes or a string of 24 hex characters or an integer

**Response**

{
    "code": 200,
    "status": "SUCCESS",
    "data": {
        "_id": "65434445969b235042261ea3",
        "title": "Book 1",
        "author": "Abc Author",
        "summary": "Nice to read this book"
    }
}

or

{
    "code": 404,
    "status": "FAILED",
    "data": {
        "error": "Can't find book with id - <bookId>"
    }
}

## POST - /api/v1/books

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `title` | required | string | string value
|     `author` | required | string | string value
|     `summary` | required | string | string value

**Response**

{
    "code": 200,
    "status": "SUCCESS",
    "data": {
        "acknowledged": true,
        "insertedId": "65439e1255307f2f900c95f4"
    }
}

or

{
    "code": 500,
    "status": "FAILED",
    "data": {
        "error": "Book title or author or summary can't be null or empty"
    }
}

## PUT - /api/v1/books/<bookId>

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `id` | required | objectID | must be a string of 12 bytes or a string of 24 hex characters or an integer
|     `title` | required | string | string value
|     `author` | required | string | string value
|     `summary` | required | string | string value

**Response**

{
    "code": 200,
    "status": "SUCCESS",
    "data": {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    }
}

or

{
    "code": 500,
    "status": "FAILED",
    "data": {
        "error": "Book id or title or author or summary can't be null or empty"
    }
}

or

{
    "code": 404,
    "status": "FAILED",
    "data": {
        "error": "Can't find book with id - <bookId>"
    }
}

## DELETE - /api/v1/books/<bookId>

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `id` | required | objectID | must be a string of 12 bytes or a string of 24 hex characters or an integer

**Response**

{
    "code": 200,
    "status": "SUCCESS",
    "data": {
        "acknowledged": true,
        "deletedCount": 1
    }
}

or

{
    "code": 404,
    "status": "FAILED",
    "data": {
        "error": "Can't find book with id - <bookId>"
    }
}

## Disclaimer

Use at your own risk;
