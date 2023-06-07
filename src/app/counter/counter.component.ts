import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>
    `,
})
export class CounterComponent {
    counter: number = 10;

    increaseBy(increment: number): void {
      this.counter += increment;
    }
    decreaseBy(increment: number): void {
      this.counter -= increment;
    }
    resetCounter(): void {
      this.counter = 10;
    }
}