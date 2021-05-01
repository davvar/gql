import { HttpModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './models/accounts/accounts.module';
import { CitiesModule } from './models/cities/cities.module';
import { CountriesModule } from './models/countries/countries.module';
import { EstateModule } from './models/estates/estates.module';
import { InvoicesModule } from './models/invoices/invoices.module';
import { LanguagesModule } from './models/languages/languages.module';
import { RegionModule } from './models/regions/region.module';

@Module({
  imports: [
    HttpModule,
    EstateModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    LanguagesModule,
    AccountsModule,
    CountriesModule,
    InvoicesModule,
    CitiesModule,
    RegionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
