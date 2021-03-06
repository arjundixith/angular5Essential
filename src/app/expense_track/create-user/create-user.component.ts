import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { HttpModule, JsonpModule } from '@angular/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  closeResult: string;
  user : FormGroup;

  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(public fb: FormBuilder,private http: Http,private modalService: NgbModal) { }

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

      this.user = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
          email: ['', Validators.required],
        });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  open(content) {
    
    this.modalService.open(content).result.then((result) => {
      debugger;
    }, (reason) => {
      debugger;
    });
  }

  createUserSubmit({ value, valid }){
debugger;
  }

}
