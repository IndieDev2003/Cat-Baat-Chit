import { memo } from "react"
import { useMediaQuery } from "../../hooks/useUtils/useMediaQuery"
import { IChatWithUnreadMessages } from "../../interfaces/chat"
import { ChatCard } from "./ChatCard"

type PropTypes = {
  chats:Array<IChatWithUnreadMessages>
  loggedInUserId:string
  selectedChatId:string | undefined
  updateSelectedChatId:(chatId: string) => void
  toggleChatBar:()=>void
  getChatName: (selectedChatDetails: IChatWithUnreadMessages | null, loggedInUserId: string | null | undefined) => string | undefined
  getChatAvatar: (selectedChatDetails: IChatWithUnreadMessages | null, loggedInUserId: string | null | undefined) => string | undefined
  clearExtraPreviousMessages: (chatId: string) => void
}
export const ChatList = memo(({chats,loggedInUserId,selectedChatId,clearExtraPreviousMessages,updateSelectedChatId,toggleChatBar,getChatAvatar,getChatName}:PropTypes) => {

  const isMd = useMediaQuery(768)

  return (
    <>
    <div className="flex flex-col gap-y-4">
        {
          chats.map(chat=>(

            <ChatCard
              key={chat._id}
              loggedInUserId={loggedInUserId}
              isGroupChat={chat.isGroupChat}
              members={chat.members}
              clearExtraPreviousMessages={clearExtraPreviousMessages}
              isMd={isMd}
              selectedChatId={selectedChatId}
              isTyping={chat.userTyping?.length>0}
              chatId={chat._id}
              chatName={getChatName(chat,loggedInUserId)!}
              avatar={getChatAvatar(chat,loggedInUserId)!}
              unreadMessage={chat.unreadMessages}
              updateSelectedChatId={updateSelectedChatId}
              toggleChatBar={toggleChatBar}
            />

          ))
        }
    </div>
    </>

  )
})
