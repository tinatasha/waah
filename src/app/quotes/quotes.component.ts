import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quote(1, "If you can dream it, you can  it", "Walt Disney",0, 0, "Meg"),
    new Quote(2, "Never give up, for that is just the place and time that the tide will turn", "Harriet Beecher", 0, 0,"Sheila")
  ];
  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  deleteQuote(isDelete, index) {

    if (isDelete) {
      let toDelete = confirm("To go ahead please click ok, otherwise cancel.");
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  addNewQuote(quote){
    if (quote.enterQuote == "" || quote.author == "" || quote.submitter == "") {
    alert("Enter an input please!!!");
  }
  else {

    let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.submitDate = new Date();
        this.quotes.push(quote);
}
}

   plusVote(isPlus, index) {
    if (isPlus) {
      this.quotes[index].upVote += 1;
    }
  }

  minusVote(isMinus, index) {
    if (isMinus) {
      this.quotes[index].downVote += 1;
    }
  }

  constructor() { }


  ngOnInit() {
  }
}
