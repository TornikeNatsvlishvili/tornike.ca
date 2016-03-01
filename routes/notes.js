var sql = require('mssql')
var express = require('express')
var constants = require('./../helpers/constants')
var router = express.Router()

router.get('/', function (req, res) {
    sql.connect(constants.db_config()).then(function () {
        new sql.Request().query('select * from Entries').then(function (recordset) {
            res.json(recordset)
        }).catch(generateErrorHandler(res))
    }).catch(generateErrorHandler(res))    
})

router.post('/', function (req, res) {
    note = req.body.note
    created_date = req.body.created_date

    sql.connect(constants.db_config()).then(function () {
        var request = new sql.Request()
        request.input('note', note)
        request.input('date_created', created_date)
        request.query('insert into Entries values (@note, @date_created)').then(function (recordset) {
            res.sendStatus(201)
        }).catch(generateErrorHandler(res))
    }).catch(generateErrorHandler(res))
})

router.delete('/:id', function (req, res) {
    id = req.params.id
    console.log(id)

    sql.connect(constants.db_config()).then(function () {
        var request = new sql.Request()
        request.input('id', id)
        request.query('delete from Entries where id=@id').then(function(recordset){
            res.sendStatus(200)
        }).catch(generateErrorHandler(res))
    }).catch(generateErrorHandler(res))
})

function generateErrorHandler(res) {
    return function(err){
        console.log(err.message)
        res.sendStatus(500)
    }
}

module.exports = router