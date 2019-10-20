import { prisma } from "../../../../generated/prisma-client";
import { COMMENT_FRAGMENT } from "../../../fragments";

export default {
    Query: {
        seeFullPost: async(_, args) => {
            const { id } = args;
            const post = await prisma.post({ id });
            const comments = await prisma.post({ id }).comments().$fragment(COMMENT_FRAGMENT);
            const files = prisma.post({ id }).files();
            const user = prisma.post({ id }).user();
            return { post, comments, likeCount, files, user };
        }
    }
}