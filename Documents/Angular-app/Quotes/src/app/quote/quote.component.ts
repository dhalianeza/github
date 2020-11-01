import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'Its okay to lose Losing teaches you something. Having to try and going through the trials and tribulations to actually overcome to get there to win to triumph thats what makes life interesting.','Elizebeth banks',0,0,new Date(2019,7,1)),
    new Quote(2,'Im learning to accept myself. Im still in the process of learning to love who I am. And its been really refreshing and really nice to be able to do that and be okay. I think my fans have brought that out in me.','Dua Lipa',0,0,new Date(2020,9,10)),
    new Quote(3,'I need to see my own beauty and to continue to be reminded that I am enough, that I am worthy of love without effort, that I am beautiful, that the texture of my hair and that the shape of my curves, the size of my lips, the color of my skin, and the feelings that I have are all worthy and okay.','Ellis rose',0,0,new Date(2020,10,1)),
    new Quote(4,'Sometimes its okay to give yourself a pat on the back and say, That was cool. That made me feel good.','Sebastian Stan',0,0,new Date(2020,9,10)),
    new Quote(5,'Youve got to love yourself first. Youve got to be okay on your own before you can be okay with somebody else.','Jennifer Lopez',0,0,new Date(2020,9,10)),
    new Quote(6,'Its okay to take time for yourself. We give so much of ourselves to others and we need to be fueled both physically and mentally. If we are in balance, it helps us in all our interactions.','Faith Hill',0,0,new Date(2020,10,1)),
  ];

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
