import { connect, connection } from 'mongoose';

connect(process.env.MONGODB_URI);

var db = connection;

db.once('open', () => {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}: $${db.port}`);
})