import getConversationsById from "@/app/action/getConversationsById";
import getMessages from "@/app/action/getMessages";
import EmptyState from "@/app/components/EmptyState";
import Header from "./components/Header";
import Body from "./components/Body";
import From from "./components/From";

interface IParams {
    conversationId: string
}

const ConversationId = async ({ params }: { params: IParams }) => {

    const conversation = await getConversationsById(params.conversationId);
    const messages = await getMessages(params.conversationId);

    if(!conversation) {
        return (
            <div className="lg:pl-80 h-full">
                <div className="h-full flex flex-col">
                    <EmptyState />
                </div>
            </div>
        )
    }

    return (
        <div className="lg:pl-80 h-full">
            <div className="h-full flex flex-col">
                <Header conversation={conversation!} />
                <Body  />
                <From />
            </div>
        </div>
    )
}

export default ConversationId;