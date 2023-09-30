import { Request, Response } from "express";
import { ListStudyService } from "../../service/study/ListStudyService";

class ListStudyController {
  async handle(req: Request, res: Response) {
    const listStudyService = new ListStudyService();

    const study = await listStudyService.execute();

    return res.json(study);
  }
}

export { ListStudyController };
