import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CommonserviceService } from '../commonservice.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  title = 'User';
  subTitle = '12';
  tabView: any = true;
  ind: any = 0;
  userData: any;
  importFileUrl(flag: any): void {
    console.log(flag);
    if (flag === true) {
      this.tabView = flag;
      this.ind = 0;
    } else if (flag === false) {
      this.tabView = flag;
      this.ind = 1;
    }
  }


  constructor(private commonService: CommonserviceService) {}

  ngOnInit(): void {
    this.blogsData();
   }

 
   blogsData() {
     this.commonService.getUser().subscribe((res: any) => {
       this.userData = res.body ? res.body : [];
       this.setDataSource();
     });
   }

   displayedColumns: string[] = ['position', 'name', 'designation', 'joiningdate'];
   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
   setDataSource(): void {
    this.dataSource = new MatTableDataSource(this.userData);
}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  designation: string;
  joiningdate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', designation: 'eng', joiningdate: 'H'},
  {position: 2, name: 'Helium', designation: 'eng', joiningdate: 'He'},
 
];
