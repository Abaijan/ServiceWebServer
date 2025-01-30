import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
interface CardProps {
  id: number;
  category: string;
  image: string;
  title: string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getCards(): CardProps[]{
    return this.getCards()
  }
}
