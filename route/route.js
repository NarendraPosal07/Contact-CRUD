const express = require('express');
const route = express();
const controller = require('../controller/controller');
const fileupload = require('../middleweres/uploads');


route.get('/', controller.defaultpath);

route.post('/appDoc', fileupload.single('fileupload'),controller.appDoc);

route.get('/deleteDoc/:id' , controller.deleteDoc);

route.get('/editDoc/:id' ,controller.EditDoc);

route.post('/updateDoc' ,fileupload.single('fileupload'), controller.updateDoc);


module.exports = route;