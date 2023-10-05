import { Request, Response } from "express";
import { EditStudyService } from "../../service/study/EditStudyService";

class EditStudyController {
  async handle(req: Request, res: Response) {
    const { id, title, description } = req.body;

    const editStudyService = new EditStudyService();

    if (req.file) {
      const { originalname, filename: file } = req.file;

      const study = await editStudyService.execute({
        id,
        title,
        description,
        file,
      });

      if (study) {
        res.json({ message: "Estudo editado com sucesso!" });
      } else {
        res.json({ message: "Erro ao editar o estudo." });
      }
    } else {
      const study = await editStudyService.execute({
        id,
        title,
        description,
      });

      if (study) {
        res.json({ message: "Estudo editado com sucesso!" });
      } else {
        res.json({ message: "Erro ao editar o estudo." });
      }
    }
  }
}

export { EditStudyController };
