import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { K8sService } from './kubernetes/k8s.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [K8sService],
})
export class AppModule {}
