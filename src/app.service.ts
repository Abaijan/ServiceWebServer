import { Injectable } from '@nestjs/common';
import { HydratedDocument, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { cardMainPage, cardMainPageDocument } from './cards.schema';

@Injectable()
export class CardsService {
    constructor(@InjectModel(cardMainPage.name) private cardModel: Model<cardMainPageDocument>) {}

    async createCard(category: string, image: string, title: string): Promise<HydratedDocument<cardMainPageDocument>> {
        return this.cardModel.create({ category, image, title });
    }

    async getCards(): Promise<HydratedDocument<cardMainPageDocument>[]> {
        return this.cardModel.find().exec();
    }

    async deleteCard(id: string): Promise<HydratedDocument<cardMainPageDocument> | null> {
        return this.cardModel.findByIdAndDelete(id);
    }
    async updateCard(id: string, category: string, image: string, title: string): Promise<HydratedDocument<cardMainPageDocument> | null> {
        return this.cardModel.findByIdAndUpdate(id, { category, image, title });
    }
}
