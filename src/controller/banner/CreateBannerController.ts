import { Request, Response } from "express";
import { CreateBannerService } from "../../service/banner/CreateBannerService";

class CreateBannerController {
  async handle(req: Request, res: Response) {
    const createBannerService = new CreateBannerService();

    if (!req.file) {
      throw new Error("Erro ao enviar um arquivo");
    } else {
      const { originalname, filename: file } = req.file;

      const createBanner = await createBannerService.execute(file);

      return res.json(createBanner);
    }
  }
}

export { CreateBannerController };
