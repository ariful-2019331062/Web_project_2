import express from "express";
import {
  getAllOrders,
  createOrder,
  updateOrder,
  createSupplierRequest,
  getSingleOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/", getAllOrders); //done
router.get("/single", getSingleOrder); //done
router.post("/", createOrder); //done
router.post("/:id/supplier-req", createSupplierRequest); //done
router.patch("/:id", updateOrder); //done

export default router;
