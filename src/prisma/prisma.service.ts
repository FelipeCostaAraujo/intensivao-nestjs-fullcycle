import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        console.log('PrismaService has been initialized.');
        await this.$connect();
    }

    enableShutdownHooks(app: INestApplication) {
        const exitHandler = async () => {
            console.log('PrismaService has been disconnected.');
            await app.close();
        }
        process.on('beforeExit', exitHandler)
    }

}
