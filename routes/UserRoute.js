import express from "express";
import { getPelatihan, insertPelatihan, deleteUser} from "../controllers/UserController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(' GET "/users", \n POST "/users"');
});
router.get("/getPelatihan", getPelatihan);
router.post("/insertPelatihan", insertPelatihan);
router.delete("/users/:id", deleteUser);

export default router;
