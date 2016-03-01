module.exports.db_config = function(){    
    user = process.env.DB_USR
    pass = process.env.DB_PASS
    
    return db_config = {
        user: user,
        password: pass,
        server: 'tornike-ca-db.database.windows.net',
        database: 'Notes',

        options: {
            encrypt: true
        }
    }
}