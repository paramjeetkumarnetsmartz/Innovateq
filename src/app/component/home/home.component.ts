import { Component } from '@angular/core';
import { CommonserviceService } from '../commonservice.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'Home';
  subTitle = 'Home Page Description';
  titleSecond = 'Recent Blogs';
  cards = [
    {
      number: '330',
      icon: 'shopping_cart',
      order: 'Total Orders',
    },
    {
      number: '430',
      icon: 'account_balance_wallet',
      order: 'Total Orders',
    },
    {
      number: '50',
      icon: 'insert_chart',
      order: 'Total Orders',
    },
    {
      number: '130',
      icon: 'person_outline',
      order: 'Total Orders',
    },
  ];

  blogs = [
    {
      img: '../../../assets/Rectangle 907.png',
      text: 'Lorem ipsum dolor sit amet,',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
      img: '../../../assets/Rectangle 907.png',
      text: 'Lorem ipsum dolor sit amet,',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
      img: '../../../assets/Rectangle 907.png',
      text: 'Lorem ipsum dolor sit amet,',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
      img: '../../../assets/Rectangle 907.png',
      text: 'Lorem ipsum dolor sit amet,',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
  ];
  apiData: any;

  constructor(private commonService: CommonserviceService) {}

  ngOnInit(): void {
    this.blogsData();
   }
 
   blogsData() {
     this.commonService.getUser().subscribe((res: any) => {
       this.apiData = res.body ? res.body : [];
       console.log('apiData',res);
     });
   }
}
