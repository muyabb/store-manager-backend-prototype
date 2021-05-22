import express from "express";
import {
  deleteStore,
  extractCreateStorePayload,
  getStores,
  validateCreateStore,
  writeStore,
} from "../controllers/storeController";
import { protect } from "../controllers/authController";
import { upload } from "../utils/multer";

const storeRoute = express.Router();

storeRoute.post(
  "/",
  protect,
  upload.single("logo"),
  extractCreateStorePayload,
  validateCreateStore,
  writeStore(false)
);

storeRoute.patch(
  "/:id",
  protect,
  upload.single("logo"),
  extractCreateStorePayload,
  writeStore(true)
);

storeRoute.get("/:id?", protect, getStores);

storeRoute.delete("/:id", protect, deleteStore);

export default storeRoute;
