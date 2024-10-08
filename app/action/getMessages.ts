import prisma from '@/app/libs/prismadb';

const getMessages = async (conversationId: string) => {
    try {
        const messages = await prisma.message.findMany({
            where: {
                conversationId
            },
            include: {
                sender: true,
                seen: true
            },
            orderBy: {
                createdAt: 'asc'
            }
        })

        if (!messages) {
            return null;
        }

        return messages;
    } catch (error: any) {
        return null;
    }
};

export default getMessages;