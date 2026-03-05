import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from './user/user.module';
import { EmailModule } from './email/email.module';
import { CampaignService } from './campaign/campaign.service';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [PrismaModule, UserModule, EmailModule, QueueModule],
  controllers: [AppController],
  providers: [AppService, CampaignService],
})
export class AppModule {}
