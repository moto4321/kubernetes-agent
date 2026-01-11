import { Injectable } from '@nestjs/common';
import {} from '@kubernetes/client-node';

@Injectable()
export class K8sService {
  test(): string {
    return 'Hello World!';
  }
}
