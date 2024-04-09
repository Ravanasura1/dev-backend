import app from "./app.js";
import connectDB from "./db/index.js";


connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running port : ${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log("MONGO db connection failed !!! ", err);
})



// (async () => {
//   try {
//     const dbURI = `${process.env.MONGODB_URI}/${DB_NAME}`;
//     await mongoose.connect(dbURI);
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.error("Error connecting to the database: ", error);
//   }
// })();
