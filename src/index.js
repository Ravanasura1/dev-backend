

import connectDB from "./db/index.js";


connectDB()



// (async () => {
//   try {
//     const dbURI = `${process.env.MONGODB_URI}/${DB_NAME}`;
//     await mongoose.connect(dbURI);
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.error("Error connecting to the database: ", error);
//   }
// })();
