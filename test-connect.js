const { Pool } = require('pg')

const pool = new Pool({
    user: 'developer',
    host: 'localhost',
    database: 'testdb',
    password: 'supersecret',
    port: 5432
})

