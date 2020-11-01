import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'The purpose of our lives is to be happy','Dalai Lama',new Date(2020,11,1)),
    new Quote(2,'Life is what happens when you’re busy making other plans','John Lennon',new Date(2020,11,1)),
    new Quote(3,'Get busy living or get busy dying','Stephen King',new Date(2020,11,1)),
    new Quote(4,'You only live once, but if you do it right, once is enough','Mae West',new Date(2020,11,1)),
    new Quote(5,'Many of life’s failures are people who did not realize how close they were to success when they gave up.','Thomas A Edison',new Date(2020,11,1)),
    new Quote(6,'If you want to live a happy life, tie it to a goal, not to people or things','Albert Einstein',new Date(2020,11,1)),
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
