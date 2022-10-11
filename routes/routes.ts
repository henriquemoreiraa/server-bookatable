import express from "express";
import {
  createTable,
  allTables,
  updateTable,
  deleteTable,
} from "../controllers/table";
import { bookTable, allbookedTables } from "../controllers/book";

const router = express.Router();

router.route("/newTable").post(createTable);
router.route("/allTables").get(allTables);
router.route("/updateTable/:id").put(updateTable);
router.route("/deleteTable/:id").delete(deleteTable);

router.route("/bookTable").post(bookTable);
router.route("/allbookedTables").get(allbookedTables);

export { router };
