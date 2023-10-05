import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateUserController } from "./controller/user/CreateUserController";
import { LoginController } from "./controller/user/LoginController";
import { DetailUserController } from "./controller/user/DetailUserController";
import { Authenticated } from "./middlewares/Authenticated";
import { CreateStudyController } from "./controller/study/CreateStudyController";
import { CreateBannerController } from "./controller/banner/CreateBannerController";
import { ListStudyController } from "./controller/study/ListStudyController";
import { EditStudyController } from "./controller/study/EditStudyController";
import { DeleteStudyController } from "./controller/study/DeleteStudyController";

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
router.get("/listStudy", new ListStudyController().handle);
router.put(
  "/editStudy",
  Authenticated,
  upload?.single("file"),
  new EditStudyController().handle
);
router.delete("/deleteStudy/:id", Authenticated, new DeleteStudyController().handle);

export { router };
