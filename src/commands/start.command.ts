import {Command} from "./command.class";
import {Markup, Telegraf} from "telegraf";
import {IBotContext} from "../context/context.interface";

export class StartCommand extends Command{
    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
    }

    handle(): void {
        this.bot.start((ctx) => {
            console.log(ctx.session);
            ctx.reply("Did you like course?", Markup.inlineKeyboard([
                Markup.button.callback("Yes", "course_like"),
                Markup.button.callback("No", "course_dislike"),
            ]));
        });

        this.bot.action("course_like", (ctx) => {
            ctx.session.courselike = true;
            ctx.editMessageText("Kaif!");
        })
        this.bot.action("course_dislike", (ctx) => {
            ctx.session.courselike = false;
            ctx.editMessageText("Why?(");
        })
    }
}