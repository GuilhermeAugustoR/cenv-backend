import prismaClient from "../../prisma";

interface ICreateStudyService {
  title: string;
  description: string;
  file: string;
}

class CreateStudyService {
  async execute({ title, description, file }: ICreateStudyService) {
    const study = await prismaClient.study.create({
      data: {
        title: title,
        description: description,
        file: file,
      },
    });

    return study;
  }
}

export { CreateStudyService };
