import { Injectable } from '@nestjs/common';

@Injectable()
export class FactorialService {
  private memoization: { [key: number]: number } = {};

  calculateFactorial(n: number) {
    if (n == 0 || n == 1) {
      return 1;
    }

    if (this.memoization[n]) {
      return this.memoization[n];
    }
    const result = n * this.calculateFactorial[n - 1];
    this.memoization[n] = result;
    return result;
  }
}
