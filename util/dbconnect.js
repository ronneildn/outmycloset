import mongoose from 'mongoose';

const connection        = {};
const env				= process.env.npm_lifecycle_event || 'production'

async function dbConnect() {

    if (connection.isConnected) {
        return;
    }

    if (process.env.DB_HOST) {
        const db = await mongoose.connect(
            process.env.DB_HOST, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        connection.isConnected = db.connections[0].readyState;
        console.log(`connected to ${env} DB`);
    }
    else console.log("no DB URI to connect")
}

export default dbConnect;
