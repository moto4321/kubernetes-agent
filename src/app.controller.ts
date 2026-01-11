import { Controller, Get } from '@nestjs/common';
import { K8sService } from './kubernetes/k8s.service';

@Controller()
export class AppController {
  constructor(private readonly k8sService: K8sService) {}

  @Get('ping')
  ping(): boolean {
    return true;
  }
}
