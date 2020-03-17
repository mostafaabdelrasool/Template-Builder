import { Component, OnInit, OnDestroy } from '@angular/core';
import { Form } from './model/forms';
import { FormService } from './form.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { FormEditComponent } from './form-edit/form-edit.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit, OnDestroy {
  forms: Form[];
  subscription: Subscription;
  constructor(public formService: FormService, public dialog: MatDialog) { }

  ngOnInit() {
    this.subscription = this.formService.get().subscribe((x: Form[]) => {
      this.forms = x;
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  addForm() {
    const dialogRef = this.dialog.open(FormEditComponent);

    dialogRef.afterClosed().subscribe((result: Form) => {
      if (result) {
        this.forms.push(result);
      }
    });
  }

  editForm(form: Form) {
    const dialogRef = this.dialog.open(FormEditComponent, { data: { ...form } });

    dialogRef.afterClosed().subscribe((result: Form) => {
      if (result) {
        const index=this.forms.indexOf(form);
        this.forms[index]=result;
      }
    });
  }
  deleteForm(form: Form) {
    this.formService.delete(form.id).subscribe(x=>{
      const index = this.forms.indexOf(form);
      this.forms.splice(index, 1);
    })
  }

}
