import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CardsService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {cardMainPage, cardMainPageSchema} from "./cards.schema";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
      ConfigModule.forRoot(),
      MongooseModule.forRoot(process.env.MONGO_DB_URI),
      MongooseModule.forFeature([
          {name: cardMainPage.name, schema: cardMainPageSchema}
      ])
  ],
  controllers: [AppController],
  providers: [CardsService],
})
export class AppModule {}
