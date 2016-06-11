/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/lang              ->  index
 * POST    /api/lang              ->  create
 * GET     /api/lang/:id          ->  show
 * PUT     /api/lang/:id          ->  update
 * DELETE  /api/lang/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Langs from './langs.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Langss
export function index(req, res) {
  return Langs.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Langs from the DB
export function show(req, res) {
  return Langs.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Langs in the DB
export function create(req, res) {
  return Langs.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Langs in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Langs.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Langs from the DB
export function destroy(req, res) {
  return Langs.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
