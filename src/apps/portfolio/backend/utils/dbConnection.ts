import mongoose, { ConnectOptions } from 'mongoose';
import config from '../config';

const conn: { isConnected: boolean } = { isConnected: false };

const dbConnection = async () => {
  if (!conn.isConnected) {
    try {
      const db = await mongoose.connect(config.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      } as ConnectOptions);
      conn.isConnected = true;
      console.log(`MongoDb connected succesfully at : ${db.connection.name}`);
    } catch (err) {
      console.log({ message: 'Error during MongoDb connection', err });
    }
  } else {
    console.log('MongoDB was already connected');
  }
};

export default dbConnection;
