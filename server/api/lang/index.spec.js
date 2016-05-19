'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var langCtrlStub = {
  index: 'langCtrl.index',
  show: 'langCtrl.show',
  create: 'langCtrl.create',
  update: 'langCtrl.update',
  destroy: 'langCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var langIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './lang.controller': langCtrlStub
});

describe('Lang API Router:', function() {

  it('should return an express router instance', function() {
    langIndex.should.equal(routerStub);
  });

  describe('GET /api/langs', function() {

    it('should route to lang.controller.index', function() {
      routerStub.get
        .withArgs('/', 'langCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/langs/:id', function() {

    it('should route to lang.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'langCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/langs', function() {

    it('should route to lang.controller.create', function() {
      routerStub.post
        .withArgs('/', 'langCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/langs/:id', function() {

    it('should route to lang.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'langCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/langs/:id', function() {

    it('should route to lang.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'langCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/langs/:id', function() {

    it('should route to lang.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'langCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
