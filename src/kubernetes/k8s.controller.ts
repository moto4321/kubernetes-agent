import { Body, Controller, Post } from '@nestjs/common';
import { K8sService } from './k8s.service';

@Controller('k8s')
export class K8sController {
  constructor(private readonly k8sService: K8sService) {}
  @Post('namespace')
  async createNamespace(@Body('namespace') namespace: string) {
    return this.k8sService.createNamespace(namespace);
  }
}
