// queue/queue.module.ts

import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'email-queue',
    }),
  ],
  exports: [BullModule],
})
export class QueueModule { }
