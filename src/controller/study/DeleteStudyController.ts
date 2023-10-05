import { Request, Response } from "express";
import { DeleteStudyService } from "../../service/study/DeleteStudyService";

class DeleteStudyController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const deleteStudyService = new DeleteStudyService();

    const study = await deleteStudyService.execute(id);

    if (study) {
      res.json({ message: "Estudo deletado com sucesso!" });
    } else {
      res.json({ message: "Erro ao deletar o estudo." });
    }
  }
}
export { DeleteStudyController };
