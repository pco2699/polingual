'use strict';

var app = require('../..');
import request from 'supertest';

var newLang;

describe('Lang API:', function() {

  describe('GET /api/langs', function() {
    var langs;

    beforeEach(function(done) {
      request(app)
        .get('/api/langs')
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

    it('should respond with JSON array', function() {
      langs.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/langs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/langs')
        .send({
          name: 'New Lang',
          info: 'This is the brand new lang!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newLang = res.body;
          done();
        });
    });

    it('should respond with the newly created lang', function() {
      newLang.name.should.equal('New Lang');
      newLang.info.should.equal('This is the brand new lang!!!');
    });

  });

  describe('GET /api/langs/:id', function() {
    var lang;

    beforeEach(function(done) {
      request(app)
        .get('/api/langs/' + newLang._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          lang = res.body;
          done();
        });
    });

    afterEach(function() {
      lang = {};
    });

    it('should respond with the requested lang', function() {
      lang.name.should.equal('New Lang');
      lang.info.should.equal('This is the brand new lang!!!');
    });

  });

  describe('PUT /api/langs/:id', function() {
    var updatedLang;

    beforeEach(function(done) {
      request(app)
        .put('/api/langs/' + newLang._id)
        .send({
          name: 'Updated Lang',
          info: 'This is the updated lang!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedLang = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedLang = {};
    });

    it('should respond with the updated lang', function() {
      updatedLang.name.should.equal('Updated Lang');
      updatedLang.info.should.equal('This is the updated lang!!!');
    });

  });

  describe('DELETE /api/langs/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/langs/' + newLang._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when lang does not exist', function(done) {
      request(app)
        .delete('/api/langs/' + newLang._id)
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
