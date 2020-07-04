import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import {configModule} from "./configure.root";
import { TokenModule } from './token/token.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    configModule,
    MongooseModule.forRoot(
    process.env.MONGO_WRITE_CONNECTION_STRING,
{
      useNewUrlParse: true,
      useUnifiedTopology: true,
    }),
    TokenModule,
    MailModule,
  ],
})
export class AppModule {}
