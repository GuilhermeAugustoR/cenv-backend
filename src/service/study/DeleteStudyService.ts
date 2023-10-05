import prismaClient from "../../prisma";

class DeleteStudyService {
  async execute(id: string) {
    if (!id) {
      throw new Error("Id não informado ou não encontrado.");
    }
    const study = await prismaClient.study.delete({
      where: {
        id: id,
      },
    });

    return study;
  }
}

export { DeleteStudyService };
