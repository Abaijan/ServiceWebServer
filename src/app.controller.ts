import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { CardsService} from './app.service';
import {HydratedDocument} from "mongoose";
import {cardMainPageDocument} from "./cards.schema";
interface CardProps {
  id: string;
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
  @Delete(':id')
  async deleteCard(@Param('id') id: string ): Promise<HydratedDocument<cardMainPageDocument, {}, {}>> {
    return this.appService.deleteCard(id);
  }
  @Put(':id')
  async updateCard(@Param('id') id: string, @Body() body: CardProps ): Promise<HydratedDocument<cardMainPageDocument, {}, {}>> {
    return this.appService.updateCard(id, body.category, body.image, body.title);
  }
}
