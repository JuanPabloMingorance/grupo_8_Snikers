const express = require('express');
const router = express.Router();
const {add,store,detail,edit,update,destroy} = require('../controllers/productsController');
const upload = require('../middlewares/imageProducts');
const productValidator = require('../validations/productValidator');

router.get('/add',add);
router.post('/add',upload.single('imagen'),productValidator,store);

router.get('/detail/:id',detail);

router.get('/edit/:id',edit);
router.put('/edit/:id',upload.single('imagen'),productValidator,update);

router.delete('/delete/:id',destroy);



module.exports = router;