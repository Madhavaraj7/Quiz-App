import express from "express";
import { connectDB } from "./infrastructure/database";
import quizRoutes from "./presentation/routes/quizRoutes";
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT; 

app.use('/api', quizRoutes);


const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error while starting the server:", error);
    process.exit(1); 
  }
};

startServer();
