import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(() => {
      $('#coin').click(() => {
        $('#coin').addClass('animated');
        setTimeout(() => { $('.dot-cont').addClass('animate'); }, 9000);
        setTimeout(() => { $('.coin-container').addClass('disapear'); }, 10000);
        setTimeout(() => { $('.coins-value-container').addClass('move'); }, 10000);
        setTimeout(() => {
          $('.coins-value-container').addClass('insert');
          const num  = $('#counter').html();
          for (let i = 0; i < 200; i++) {
            setTimeout(() => {
              const nextNum = parseInt(num) + i;
              $('#counter').html(nextNum.toString());
            }, 1000);
          }
        }, 15000);
        setTimeout(() => {
          $('.coins-value-container').removeClass('insert');
          $('.coins-value-container').removeClass('move');
          $('.coins-value-container').addClass('ends');
        }, 19000);
      });
    });
  }

}
