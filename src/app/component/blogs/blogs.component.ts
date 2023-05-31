import { Component } from '@angular/core';
import { CommonserviceService } from '../commonservice.service'

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  title = 'Blogs';
  subTitle = '12';

  blogs = [
    {
      img: '../../../assets/oil-gas-rigs-vector-illustration_92926-186 1.png',
      icon: 'query_builder',
      iconUser: 'person_outline',
      text: 'Lorem ipsum dolor,',
      description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      date: '22 july 2020',
      name: 'Alex Paul',
      hyper: 'Read More'
    },
    {
      img: '../../../assets/oil-gas-rigs-vector-illustration_92926-186 1.png',
      icon: 'query_builder',
      iconUser: 'person_outline',
      text: 'Lorem ipsum dolor,',
      description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      date: '22 july 2020',
      name: 'Alex Paul',
      hyper: 'Read More'
    },
    {
      img: '../../../assets/oil-gas-rigs-vector-illustration_92926-186 1.png',
      icon: 'query_builder',
      iconUser: 'person_outline',
      text: 'Lorem ipsum dolor,',
      description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      date: '22 july 2020',
      name: 'Alex Paul',
      hyper: 'Read More'
    },
    {
      img: '../../../assets/oil-gas-rigs-vector-illustration_92926-186 1.png',
      icon: 'query_builder',
      iconUser: 'person_outline',
      text: 'Lorem ipsum dolor,',
      description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      date: '22 july 2020',
      name: 'Alex Paul',
      hyper: 'Read More'
    },

  ];
  userData: any;
  constructor(
    private commonService: CommonserviceService
  ) { }

  ngOnInit(): void {
    this.blogsData();
   }
 
   blogsData() {
     this.commonService.getBlogs().subscribe((res: any) => {
       this.userData = res.body ? res.body : [];
       console.log('apiData',res);
     });
   }
}
