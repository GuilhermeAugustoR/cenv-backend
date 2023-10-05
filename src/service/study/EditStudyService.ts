import prismaClient from "../../prisma";

interface IEditStudyService {
  id: string;
  title?: string;
  description?: string;
  file?: string;
}

class EditStudyService {
  async execute({ id, title, description, file }: IEditStudyService) {
    const study = await prismaClient.study.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        description: description,
        file: file,
      },
    });

    return study;
  }
}

export { EditStudyService };
