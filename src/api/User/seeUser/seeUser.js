import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        seeUser: (_, args, { request }) => {
            const { username } = args;
            return prisma.user({ username });
        }
    }
}