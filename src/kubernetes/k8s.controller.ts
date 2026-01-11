import { Body, Controller, Post } from '@nestjs/common';
import { K8sService } from './k8s.service';

@Controller()
export class K8sController {
  constructor(private readonly k8sService: K8sService) {}
  @Post()
  async createNamespace(@Body('namespace') namespace: string) {
    return await this.k8sService.createNamespace(namespace);
  }
}
