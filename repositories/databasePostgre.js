import pg from 'pg'

async function connectDatabase() {
    if (global.connection) {
        return global.connection.connect()
    }
    const pool = new pg.Pool({
        connectionString: "postgres://shxuqzvn:EgOIMdxRLwNE8_dI9qN9f7-I2h4Y0UPC@kesavan.db.elephantsql.com/shxuqzvn"
    })
    global.connection = pool
    return pool.connect()
}

export {
    connectDatabase
}