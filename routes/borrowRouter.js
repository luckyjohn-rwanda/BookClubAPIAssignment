import express from "express";
import { addBorrows, viewborrows, viewAllborrows, updateborrows} from "../controllers/borrowController.js";

const borrowRouter = express.Router();

// Add a record
borrowRouter.post("/", addBorrows);

// View a record
borrowRouter.get("/:id",viewborrows);

// View all records
borrowRouter.get("/", viewAllborrows);

// Update a record
borrowRouter.put("/:id", updateborrows);



export default borrowRouter;




