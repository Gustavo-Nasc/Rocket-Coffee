const openDB = require('./config')

const initDB = {
    async init() {
        const db = await openDB()

        await db.exec(`
            CREATE TABLE brunches (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                description TEXT,
                price REAL
            )
        `)

        await db.exec(`
            CREATE TABLE drinks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                description TEXT,
                price REAL
            )`
        )


        await db.close()
    }
}

initDB.init();