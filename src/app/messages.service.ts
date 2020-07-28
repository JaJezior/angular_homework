import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  
  public logs: string[] = [];
  public logDelay = 100;

  
  public async addLog(message: string)  {
    await this.logs.push(message);
    await this.delay(this.logDelay);
  }
  public delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  public async resetLog(){
    this.logs.splice(0, this.logs.length);
    await this.addLog('Sprzątanie po bitwie...');
    await this.delay(this.logDelay / 5);
    await this.logs.push('3');
    await this.delay(this.logDelay / 5);
    await this.logs.push('2');
    await this.delay(this.logDelay / 5);
    await this.logs.push('1');
    await this.delay(this.logDelay / 5);
    await this.logs.push('Gotowe!');
    await this.delay(this.logDelay);
    this.logs.splice(0, this.logs.length);
  }
  constructor() {}
}
