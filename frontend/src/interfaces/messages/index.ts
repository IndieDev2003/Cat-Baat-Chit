import { IChatMember } from "../chat"

export interface IMessage {
    _id:string
    content:string
    sender:{
        _id:string
        username:string
        avatar:string
    }
    chat:string
    url:string
    attachments:Array<string> | []
    createdAt:Date
    updatedAt:Date
}

export interface IUnreadMessage {
    count:number
    message:{
        _id:string,
        content:string
    },
    sender:IChatMember
}

export interface IMessageEventPayloadData {
    chat:string
    content?:string
    url?:string
    members:Array<string>
}

export interface IMessageSeenEventPayloadData {
    chatId:string
    members:Array<string>
}

export interface IMessageSeenEventReceiveData {
    chat:string,
    user:IChatMember
    readAt:Date
}

export interface IUnreadMessageEventReceiveData {
    chatId:string
    message:IUnreadMessage['message']
    sender:IChatMember
}

export interface IUserTypingEventPayloadData extends IMessageSeenEventPayloadData {}