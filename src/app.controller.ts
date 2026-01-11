import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { K8sService } from './kubernetes/k8s.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly k8sService: K8sService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('k8s')
  getK8s(): string {
    return this.k8sService.test();
  }
}
