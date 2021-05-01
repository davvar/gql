import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstateModule } from './estate/estate.module';

@Module({
  imports: [HttpModule, EstateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
