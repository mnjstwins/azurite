'use strict';

const env = require('./../../core/env'),
    AzuriteQueueRequest = require('../../model/queue/AzuriteQueueRequest'),
    Operations = require('./../../core/Constants').Operations;

/*
 * Route definitions for all operation on the 'queue' resource type.
 * See https://docs.microsoft.com/rest/api/storageservices/operations-on-queues
 * for details on specification.
 */
module.exports = (app) => {
    app.route(`/${env.emulatedStorageAccountName}/:queue/`)
        .get((req, res, next) => {
            if (req.query.comp === 'metadata'){
                req.azuriteOperation = Operations.Queue.GET_QUEUE_METADATA;
            }
            req.azuriteRequest = new AzuriteQueueRequest({req: req})
            next();
        })
        .head((req, res, next) => {
            if (req.query.comp === 'metadata'){
                req.azuriteOperation = Operations.Queue.GET_QUEUE_METADATA;
            }
            req.azuriteRequest = new AzuriteQueueRequest({req: req})
            next();
        })
        .put((req, res, next) => {
            if (req.query.comp === 'metadata') {
                req.azuriteOperation = Operations.Queue.SET_QUEUE_METADATA;
            } else {
                req.azuriteOperation = Operations.Queue.CREATE_QUEUE;
            }
            req.azuriteRequest = new AzuriteQueueRequest({ req: req });
            next();
        })
        .delete((req, res, next) => {
            req.azuriteOperation = Operations.Queue.DELETE_QUEUE;
            req.azuriteRequest = new AzuriteQueueRequest({ req: req });
            next();
        });
}