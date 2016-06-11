'use strict';

var app = require('../..');
import request from 'supertest';

var newLangs;

describe('Langs API:', function() {

  describe('GET /api/lang', function() {
    var langss;

    beforeEach(function(done) {
      request(app)
        .get('/api/lang')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          langss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      langss.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/lang', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/lang')
        .send({
          name: 'New Langs',
          info: 'This is the brand new langs!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newLangs = res.body;
          done();
        });
    });

    it('should respond with the newly created langs', function() {
      newLangs.name.should.equal('New Langs');
      newLangs.info.should.equal('This is the brand new langs!!!');
    });

  });

  describe('GET /api/lang/:id', function() {
    var langs;

    beforeEach(function(done) {
      request(app)
        .get('/api/lang/' + newLangs._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          langs = res.body;
          done();
        });
    });

    afterEach(function() {
      langs = {};
    });

    it('should respond with the requested langs', function() {
      langs.name.should.equal('New Langs');
      langs.info.should.equal('This is the brand new langs!!!');
    });

  });

  describe('PUT /api/lang/:id', function() {
    var updatedLangs;

    beforeEach(function(done) {
      request(app)
        .put('/api/lang/' + newLangs._id)
        .send({
          name: 'Updated Langs',
          info: 'This is the updated langs!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedLangs = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedLangs = {};
    });

    it('should respond with the updated langs', function() {
      updatedLangs.name.should.equal('Updated Langs');
      updatedLangs.info.should.equal('This is the updated langs!!!');
    });

  });

  describe('DELETE /api/lang/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/lang/' + newLangs._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when langs does not exist', function(done) {
      request(app)
        .delete('/api/lang/' + newLangs._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
