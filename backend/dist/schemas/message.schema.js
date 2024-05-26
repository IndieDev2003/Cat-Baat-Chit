import { z } from "zod";
export const uploadAttachmentSchema = z.object({
    chatId: z.string({ required_error: "chatId is required" }),
    memberIds: z.string({ required_error: "member id's are required" }).array()
});
//# sourceMappingURL=message.schema.js.map