import { Injectable } from '@nestjs/common';
import * as k8s from '@kubernetes/client-node';

@Injectable()
export class K8sService {
  private k8sApi: k8s.CoreV1Api;
  private kc: k8s.KubeConfig;

  onModuleInit() {
    this.kc = new k8s.KubeConfig();
    this.kc.loadFromDefault();
    this.k8sApi = this.kc.makeApiClient(k8s.CoreV1Api);
  }

  async createNamespace(name: string): Promise<k8s.V1Namespace> {
    const namespace: k8s.V1Namespace = {
      metadata: {
        name,
      },
    };

    const response = await this.k8sApi.createNamespace({ body: namespace });

    return response;
  }
}
