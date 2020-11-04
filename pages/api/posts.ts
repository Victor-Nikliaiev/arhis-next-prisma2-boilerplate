import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = await prisma.post.findMany();
  res.status(200).json({ posts });
  // const post = await prisma.post.create({
  //   data: {
  //     title: "Just third post",
  //     body: "It's third one",
  //   },
  // });
  // res.status(200).json(post);
}
