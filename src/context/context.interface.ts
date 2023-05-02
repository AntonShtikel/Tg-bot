import { Context } from "telegraf";

export interface SessionData {
    courselike: boolean;
}
export interface IBotContext extends Context {
    session: SessionData;
}