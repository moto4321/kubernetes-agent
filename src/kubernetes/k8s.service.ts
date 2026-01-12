import { Injectable } from '@nestjs/common';
import { KubeConfig, CoreV1Api, V1Namespace } from '@kubernetes/client-node';

@Injectable()
export class K8sService {
  private k8sApi: CoreV1Api;
  private kc: KubeConfig;

  onModuleInit() {
    this.kc = new KubeConfig();
    this.kc.loadFromDefault();
    this.k8sApi = this.kc.makeApiClient(CoreV1Api);
  }

  private buildNamespaceObject(name: string): V1Namespace {
    return {
      metadata: {
        name,
      },
    };
  }

  async createNamespace(name: string): Promise<V1Namespace> {
    /**
     * TODO
     * namespace naming rule validate
     */
    const namespaceObject = this.buildNamespaceObject(name);

    const response = await this.k8sApi.createNamespace({
      body: namespaceObject,
    });

    return response;
  }
}
