import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  
  public logs: string[] = [];

  
  public async addLog(message: string)  {
    await this.delay(5000);
    await this.logs.push(message);
  }
  public delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  constructor() { }
}
