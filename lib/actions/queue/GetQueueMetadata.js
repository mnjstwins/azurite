'use strict';

const QueueManager = require('./../../core/queue/queuemanager'),
    AzuriteQueueResponse = require('./../../model/queue/AzuriteQueueResponse');

class GetQueueMetadata {
    constructor() {
    }

    process(request, res) {
        QueueManager.getQueueMetadata(request);
        const response = new AzuriteQueueResponse();
        res.set(response.httpProps);
        res.status(200).send();
    }
}

module.exports = new GetQueueMetadata();