const router = require('express').Router()
const { check, validationResult } = require('express-validator') 
const Flash = require('../utils/Flash')

const upload = require('../middleware/uploadMiddleware')

router.get('/play', (req, res, next) => {
    
    res.render('playground/play', {
        title: 'Upload Your File', 
        submitValue: 'Submit',
        flashMessage: {}
    })
})

router.post('/play', upload.single('my-file'), (req, res, next) => {
    
    if (req.file) {
        console.log(req.file)
        console.log(req.file.mimeType)
    }

    res.redirect('/playground/play')
})

module.exports = router


let  numToWord = function (num){
    let myMap = new Map();
    myMap.set(1, 'One')
    myMap.set(2, 'Two')
    myMap.set(3, 'Three')
    myMap.set(4, 'Four')
    myMap.set(5, 'Five')
    myMap.set(6, 'Six')
    myMap.set(7, 'Seven')
    myMap.set(8, 'Eight')
    myMap.set(9, 'Nine')
    myMap.set(10, 'Ten')
    myMap.set(11, 'Eleven')
    myMap.set(12, 'Twelve')
    myMap.set(13, 'Thirteen')
    myMap.set(14, 'Fourteen')
    myMap.set(15, 'Fifteen')
    myMap.set(16, 'Sixteen')
    myMap.set(17, 'Seventeen')
    myMap.set(18, 'Eighteen')
    myMap.set(19, 'Nineteen')
    myMap.set(20, 'Twenty')
    myMap.set(30, 'Thirty')
    myMap.set(40, 'Fourty')
    myMap.set(50, 'Fifty')
    myMap.set(60, 'Sixty')
    myMap.set(70, 'Seventy')
    myMap.set(80, 'Eighty')
    myMap.set(90, 'Ninety')

    function buildWordNum(num) {
        if (num >= 1000000000) {
            let num_billions = Math.floor(num / 1000000000);
            let rest = num % 1000000000;
            return buildWordNum(num_billions) + ' BILLIONS' + (rest > 0 ? buildWordNum(rest) : '');
        } else if (num >= 1000000) {
            let num_millions = Math.floor(num / 1000000);
            let rest = num % 1000000;
            return buildWordNum(num_millions) + ' MILLIONS' + (rest > 0 ? buildWordNum(rest) : '');
        } else if (num >= 1000) {
            let num_thusands = Math.floor(num / 1000);
            let rest = num % 1000;
            return buildWordNum(num_thusands) + ' THUSANDS' + (rest > 0 ? buildWordNum(rest) : '');
        } else if (num >= 100) {
            let num_hundreds = Math.floor(num / 100);
            let rest = num % 100;
            return myMap.get(num_hundreds) + ' HUNDRED' + (rest > 0 ? buildWordNum(rest) : '');
        } else if (num >= 20) {
            let num_tens = Math.floor(num / 10) * 10;
            let rest = num % 10;
            return myMap.get(num_tens) + (rest > 0 ? buildWordNum(rest) : '');
        } else {
            return myMap.get(num)
        }
    }

    return num === 0 ? 'Zero' : buildWordNum(num);
}