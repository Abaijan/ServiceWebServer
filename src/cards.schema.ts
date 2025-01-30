import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type cardMainPageDocument = HydratedDocument<cardMainPage>;

@Schema({versionKey: false})
export class cardMainPage {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    image: string;

    @Prop({ required: true })
    category: string;
}

export const cardMainPageSchema = SchemaFactory.createForClass(cardMainPage);
