import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from '../services/shared.service';
import { Subscription } from 'rxjs';
import ApplicationMessages from '../../../assets/i18n/en.json';
import { userListDisplayedColumns } from '../constant';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent implements OnInit {
  displayedColumns: string[] = userListDisplayedColumns;
  dataSource: any;
  data: any;
  appMessages: any;
  subscriptions: Subscription[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.appMessages = ApplicationMessages;
    const userData: any = sessionStorage.getItem('signUpObject');
    const userInfoData = [JSON.parse(userData)];
    if (userInfoData) {
      this.data = userInfoData ?? [];
      this.dataSource = new MatTableDataSource(this.data);
    } else {
      this.subscriptions.push(
        this.sharedService.userInfoEmitter.subscribe((res: any) => {
          console.log(res, 'userData');
          this.data = res ?? [];
          this.dataSource = new MatTableDataSource(this.data);
        })
      );
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
