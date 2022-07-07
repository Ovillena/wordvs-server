export default function database() {
  const MongoClient = require("mongodb").MongoClient;
  const url = "mongodb://127.0.0.1:27017/WordVS";

  MongoClient.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err: any, client: any) => {
      if (err) {
        return console.log(err);
      }

      // Specify database you want to access
      // const db = client.db('WordVS');

      console.log(`MongoDB Connected: ${url}`);
    }
  );

  return MongoClient;
}
