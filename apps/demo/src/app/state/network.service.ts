import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NetworkService {
  async slowCheck(ms = 1200, signal?: AbortSignal): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const t = setTimeout(() => resolve(true), ms);
      signal?.addEventListener('abort', () => { clearTimeout(t); reject(new DOMException('Aborted','AbortError')); });
    });
  }
}
