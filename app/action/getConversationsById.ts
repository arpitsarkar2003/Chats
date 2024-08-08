import getCurrentUser from "./getCurrentUser";
import prisma from "@/app/libs/prismadb";

const getConversationsById = async (conversationId: string) => {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return null;
        }

        const conversations = await prisma.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                users: true,
                // messages: {
                //     include: {
                //         sender: true,
                //         seen: true
                //     },
                //     orderBy: {
                //         createdAt: 'desc'
                //     }
                // }
            }
        })

        return conversations;
    } catch (error: any) {
        return null;
    }
};

export default getConversationsById;