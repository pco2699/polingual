'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var langsCtrlStub = {
  index: 'langsCtrl.index',
  show: 'langsCtrl.show',
  create: 'langsCtrl.create',
  update: 'langsCtrl.update',
  destroy: 'langsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var langsIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './langs.controller': langsCtrlStub
});

describe('Langs API Router:', function() {

  it('should return an express router instance', function() {
    langsIndex.should.equal(routerStub);
  });

  describe('GET /api/lang', function() {

    it('should route to langs.controller.index', function() {
      routerStub.get
        .withArgs('/', 'langsCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/lang/:id', function() {

    it('should route to langs.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'langsCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/lang', function() {

    it('should route to langs.controller.create', function() {
      routerStub.post
        .withArgs('/', 'langsCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/lang/:id', function() {

    it('should route to langs.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'langsCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/lang/:id', function() {

    it('should route to langs.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'langsCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/lang/:id', function() {

    it('should route to langs.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'langsCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
