import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { UserInformationsApiService } from 'src/app/services/user-informations-api.service';
import { UserInformations } from 'src/app/models/user-informations';

@Component({
  selector: 'app-user-informations',
  templateUrl: './user-informations.component.html',
  styleUrls: ['./user-informations.component.css']
})
export class UserInformationsComponent implements OnInit, OnDestroy {

  private subs = new Subscription();
  displayedColumns: string[] = ['id',
                                'first_name',
                                'middle_name',
                                'last_name',
                                'contact',
                                'gender',
                                'birth_date',
                                'pan_card_number',
                                'adhaar_card_number',
                                'is_handicap',
                                'handicap_details',
                                'maritial_status',
                                'user_id',
                                'accountable_type',
                                'accountable_id',
                                'created_at',
                                'updated_at',
                                'deleted_at'
                              ];
  public dataSource: MatTableDataSource<UserInformations>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private dataArray: any;

  constructor(private financeService: UserInformationsApiService, private _snackBar: MatSnackBar) { }


  ngOnInit() {
    this.subs.add(this.financeService.getRandomUsers()
      .subscribe((res) => {
        console.log(res);
        this.dataArray = res;
        this.dataSource = new MatTableDataSource<UserInformations>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        }));
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  public openRecord(id: number, first_name: string): void {
    this._snackBar.open(`Record ${id} ${first_name} `, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
