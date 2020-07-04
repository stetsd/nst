import { Injectable } from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AuthService {
    constructor(private readonly configService: ConfigService) {
        const mongoConnectionStr = this.configService.get<string>('MONGO_WRITE_CONNECTION_STRING')

        console.log(mongoConnectionStr)
    }
}
