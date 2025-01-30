import {Body, Controller, Get, Post} from '@nestjs/common';
import { CardsService} from './app.service';
import {HydratedDocument} from "mongoose";
import {cardMainPageDocument} from "./cards.schema";
interface CardProps {
  id: number;
  category: string;
  image: string;
  title: string;
}
@Controller('mainPageCards')
export class AppController {
  constructor(private readonly appService: CardsService) {}
  @Get()
  async getCards(): Promise<HydratedDocument<cardMainPageDocument, {}, {}>[]> {
    return this.appService.getCards();
  }
  @Post()
  async createCard(@Body() body: CardProps ): Promise<HydratedDocument<cardMainPageDocument, {}, {}>> {
    return this.appService.createCard(body.category, body.image, body.title);
  }

}
