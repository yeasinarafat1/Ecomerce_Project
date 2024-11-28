import mongoose, { Mongoose } from "mongoose";
const MongoDbUrl = process.env.MONGO_URI;
interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}
let chashed: MongooseConnection = (global as any).mongoose;
if (!chashed) {
  chashed = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}
export const dbcon = async () => {
  if (chashed.conn) return chashed.conn;
  if (!MongoDbUrl) throw new Error("Mongo db url not found");
  chashed.promise =
    chashed.promise ||
    mongoose.connect(MongoDbUrl, {
      dbName: "ecomerce",
      bufferCommands: false,
    });
  chashed.conn = await chashed.promise;
  return chashed.conn;
};
