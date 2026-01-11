import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { K8sService } from './kubernetes/k8s.service';
import { K8sController } from './kubernetes/k8s.controller';

@Module({
  imports: [],
  controllers: [AppController, K8sController],
  providers: [K8sService],
})
export class AppModule {}
