const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        mongoose.connect(process.env.DB_CONNECTION, {
            autoIndex: true
        })

        console.log('DB Connected.')
    } catch (error) {
        console.log(error)
        throw new Error('Error al conectar DB.')
    }
}
module.exports = { dbConnection }