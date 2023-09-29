import prismaClient from "../../prisma";

class CreateBannerService {
  async execute(banner: string) {
    const creteBanner = await prismaClient.banner.create({
      data: {
        banner: banner,
      },
      select: {
        id: true,
        banner: true,
      },
    });

    return creteBanner;
  }
}

export { CreateBannerService };
