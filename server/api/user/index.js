'use strict';

import {Router} from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.put('/:id/profile', auth.isAuthenticated(), controller.registerProfile);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.get('/nonauth/:id',  controller.showall);
router.get('/bylang/:language', controller.getUsersByLang);
router.get('/byall/:language/:country/:gender/:interest/:myid', controller.getUsersByAll);
router.post('/', controller.create);

module.exports = router;
