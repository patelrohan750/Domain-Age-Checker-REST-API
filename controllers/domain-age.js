const whoisinfo = require('whois-json');
const moment = require('moment');
const isValidDomain = require('is-valid-domain');

const getDomainInfo = async (req,res) =>{
    const domain = req.params.domain;
    
    // Domain Validation check.
    if(isValidDomain(domain)){
        var results = await whoisinfo(domain);
        var date = moment(results.creationDate).format('YYYY-MM-DD');
        var currentDate = moment(new Date()).format('YYYY-MM-DD');
        var a = moment(date);
        var b = moment(currentDate);
        var years = b.diff(a,'years');
        a.add(years,'years')

        var months = b.diff(a,'months');
        a.add(months,'months');

        var days = b.diff(a,'days');

        var domainAge = `${years} years ${months} months ${days} days`;
        res.status(200).json({
            data:results,
            age:domainAge
        })
    } else{
        res.status(200).json({messge:"Please enter domain name without http or https"});
    }
}

module.exports = {
    getDomainInfo
}