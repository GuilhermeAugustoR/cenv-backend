import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { LoginController } from "./controller/user/LoginController";
import { DetailUserController } from "./controller/user/DetailUserController";
import { Authenticated } from "./middlewares/Authenticated";
import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateStudyController } from "./controller/study/CreateStudyController";
import { CreateBannerController } from "./controller/banner/CreateBannerController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));
const uploadBanner = multer(uploadConfig.upload("./tmp/Banner"));

router.post("/createUser", new CreateUserController().handle);
router.post("/login", new LoginController().handle);
router.get("/me", Authenticated, new DetailUserController().handle);

router.post(
  "/createStudy",
  Authenticated,
  upload.single("file"),
  new CreateStudyController().handle
);
router.post(
  "/createBanner",
  Authenticated,
  uploadBanner.single("file"),
  new CreateBannerController().handle
);

export { router };
