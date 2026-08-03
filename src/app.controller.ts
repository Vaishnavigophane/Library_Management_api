import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('config')
  getConfig() {
    return {
      appName: this.configService.get<string>('APP_NAME'),
      libraryName: this.configService.get<string>('LIBRARY_NAME'),
      version: this.configService.get<string>('API_VERSION'),
      port: this.configService.get<string>('PORT'),
    };
  }
}
