import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-family-setup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,MatChipsModule],
  templateUrl: './family-setup.component.html',
  styleUrl: './family-setup.component.scss'
})
export class FamilySetupComponent {
  // Initialization of variables
  userAadhar: any='';
  familyForm: FormGroup;
  formFamilyData: { [key: string]: any } = {};
  genders = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' }
  ];

  // Constructor
  constructor(private route: ActivatedRoute, private fb:FormBuilder){
    this.familyForm = this.createFamilyForm();
  }

  ngOnInit(){
    this.userAadhar=this.route.snapshot.queryParamMap.get('userAadhar');
    console.log("Got it for family", this.userAadhar);
  }

  createFamilyForm(): FormGroup{
    return this.fb.group({
      profileFullName:['Milind Patil',Validators.required],
      profileMobNumber:['7424434194',[Validators.required,Validators.pattern("[0-9 ]{10}")]],
      profileFullAdd:['not home',Validators.required],
      profileAadharNum:[123456789012,[Validators.required,Validators.pattern("[0-9 ]{12}")]],
      profileVoterId:['DEF1234567',[Validators.required,Validators.pattern(/^[A-Z]{3}\d{7}$/)]],
      profileGender:['Male',Validators.required]});
  }
  
  selectGender(gender: string) {
    this.familyForm.get('profileGender')?.setValue(gender);
  }

  onFamilySubmit(){
    console.log("Added New Member!!");
  }

}
