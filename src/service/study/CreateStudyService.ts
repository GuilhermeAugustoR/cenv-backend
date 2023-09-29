import prismaClient from "../../prisma";

interface ICreateStudyService {
  title: string;
  description: string;
  image: string;
}

class CreateStudyService {
  async execute({ title, description, image }: ICreateStudyService) {
    const study = await prismaClient.study.create({
      data: {
        title: title,
        description: description,
        image: image,
      },
    });

    return study;
  }
}

export { CreateStudyService };
