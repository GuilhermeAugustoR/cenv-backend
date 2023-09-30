import prismaClient from "../../prisma";

class ListStudyService {
  async execute() {
    const study = await prismaClient.study.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        file: true,
      },
    });

    if (!study) {
      throw new Error("Nenhum estudo foi eontrado!");
    }

    return study;
  }
}

export { ListStudyService };
