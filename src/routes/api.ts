import { Router } from 'express';
import { privateRoute, privateRoute_1 } from '../config/passport';

import { Auth } from '../middlewares/auth';

import * as ApiController from '../controllers/apiController';
import * as EmailController from '../controllers/emailController';

const router = Router();

router.get('/ping', ApiController.ping);

router.post('/contato', EmailController.contato);

router.post('/register', ApiController.register);
router.post('/login', privateRoute, ApiController.login);

router.get('/list', privateRoute, ApiController.list);
router.get('/list', privateRoute_1, ApiController.list);

export default router;