import { Request, Response } from "express";
import { CreateStudyService } from "../../service/study/CreateStudyService";
import fs from "fs";
import path from "path";

class CreateStudyController {
  async handle(req: Request, res: Response) {
    const { title, description } = req.body;

    const createStudyService = new CreateStudyService();

    if (!req.file) {
      throw new Error("Erro ao enviar um arquivo");
    } else {
      const { originalname, filename: file } = req.file;

      const study = await createStudyService.execute({
        title,
        description,
        file,
      });

    //   const JSONDelete = (filePath: string) => {
    //     const promiseCallback = (resolve, reject) => {
    //       fs.unlink(filePath, (err) => {
    //         if (err) {
    //           reject(err);
    //           return;
    //         }
    //         resolve(true);
    //       });
    //     };
    //     return new Promise(promiseCallback);
    //   };

    //   const filePath = path.join(__dirname, "..", "..", "..", "tmp", image);

    //   JSONDelete(filePath)
    //     .then(() => {
    //       console.log("Arquivo excluído com sucesso");
    //     })
    //     .catch((err) => {
    //       console.error("Erro ao excluir o arquivo:", err);
    //     });

      return res.json(study);
    }
  }
}

export { CreateStudyController };
