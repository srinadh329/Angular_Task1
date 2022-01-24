import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dailogbox',
  templateUrl: './dailogbox.component.html',
  styleUrls: ['./dailogbox.component.scss']
})
export class DailogboxComponent implements OnInit {
  create_Form:any;
  constructor(public dialogRef: MatDialogRef<DailogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,public dialog: MatDialog,public formbuilder:FormBuilder) { }

  ngOnInit(): void {

    this.create_Form = this.formbuilder.group({
      id:['',[Validators.required]],
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
    })
console.log(this.data)

  }
  create_user(){
    if(this.create_Form.valid){}
  }

}
