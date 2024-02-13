const express = require('express');
const router = express.Router();
const {getDomainInfo} = require('../controllers/domain-age');

router.route('/').get((req,res)=>{
    res.send("Hi i am Live");
});
router.route('/domain-age/:domain').get(getDomainInfo);


module.exports = router;