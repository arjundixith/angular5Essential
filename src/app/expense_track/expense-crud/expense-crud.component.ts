import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { HttpModule, JsonpModule } from '@angular/http';
class Person {
  id: number;
  firstName: string;
  lastName: string;
}


@Component({
  selector: 'app-expense-crud',
  templateUrl: './expense-crud.component.html',
  styleUrls: ['./expense-crud.component.scss']
})
export class ExpenseCrudComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  dtTrigger: Subject<any> = new Subject();
  constructor(private http: Http) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.http.get('./assets/fixture_data/datatable.json')
      .map(this.extractData)
      .subscribe(persons => {
        this.persons = persons;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
    

}
