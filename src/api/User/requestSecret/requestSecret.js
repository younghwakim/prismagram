import { generatorSecret, sendSecretMail } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        requestSecret: async(_, args, { request }) => {
            const { email } = args;
            const loginSecret = generatorSecret();
            try {
                await sendSecretMail(email, loginSecret);
                await prisma.updateUser({data: { loginSecret }, where: { email }});
                return true;
            } catch(e) {
                console.log(e);
                return false;
            }
        }
    }
}