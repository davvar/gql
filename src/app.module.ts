import { HttpModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstateModule } from './estate/estate.module';
import { LanguageResolver } from './language/language.resolver';
import { LanguagesModule } from './languages/languages.module';
import { AccountsModule } from './accounts/accounts.module';
import { CountriesModule } from './countries/countries.module';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [
    HttpModule,
    EstateModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    LanguagesModule,
    AccountsModule,
    CountriesModule,
    InvoicesModule,
  ],
  controllers: [AppController],
  providers: [AppService, LanguageResolver],
})
export class AppModule {}
