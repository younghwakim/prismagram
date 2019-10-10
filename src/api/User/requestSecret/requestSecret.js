import { generatorSecret } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        requestSecret: async(_, args) => {
            const { email } = args;
            const loginSecret = generatorSecret();
            console.log(loginSecret);
            console.log(email);
            try {
                await prisma.updateUser({data: { loginSecret }, where: { email }});
                return true;
            } catch(e) {
                console.log(e);
                return false;
            }
        }
    }
}