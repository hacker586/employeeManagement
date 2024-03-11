import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';
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

  // Constructor
  constructor(private route: ActivatedRoute, private fb:FormBuilder, private router:Router){
    this.familyForm = this.createFamilyForm();
  }

  ngOnInit(){
    // Get user Aadhar for adding family details
    this.userAadhar=this.route.snapshot.queryParamMap.get('userAadhar');
    // console.log("Got it for family", this.userAadhar);
  }

  createFamilyForm(): FormGroup{
    return this.fb.group({
      familyFullName:['Milind Patil',Validators.required],
      familyMobNumber:['7424434194',[Validators.required,Validators.pattern("[0-9 ]{10}")]],
      familyFullAdd:['not home',Validators.required],
      familyAadharNum:['123456789012',[Validators.required,Validators.pattern("[0-9 ]{12}")]],
      familyVoterId:['DEF1234567',[Validators.required,Validators.pattern(/^[A-Z]{3}\d{7}$/)]],
      familyGender:['Male',Validators.required]});
  }
  
  selectGender(gender: string) {
    this.familyForm.get('familyGender')?.setValue(gender);
  }

  noFamily(){
    let userProfile= JSON.parse(localStorage.getItem('userProfileData') || '[]');
    userProfile[this.userAadhar].profileFamily="No family Added";
    localStorage.setItem('userProfileData',JSON.stringify(userProfile));
    console.log(" Local Storage(without Family) ",userProfile);
    this.router.navigate(['']);
  }

  onFamilySubmit(){
    // console.log(" Form in Key Value Format ",this.familyForm.value);
    this.formFamilyData[this.familyForm.get('familyAadharNum')?.value]=this.familyForm.value;
    // console.log(" Form in Object ",this.formFamilyData);
    let userProfile= JSON.parse(localStorage.getItem('userProfileData') || '[]');
    // console.log(" Local Storage ",userProfile);
    userProfile[this.userAadhar].profileFamily=this.formFamilyData;
    // console.log(" profile Family ",userProfile[this.userAadhar].profileFamily);
    // console.log(" Profile Details Updated ",userProfile);
    localStorage.setItem('userProfileData',JSON.stringify(userProfile));
    console.log(" Local Storage Updated ",JSON.parse(localStorage.getItem('userProfileData')|| '[]'));
  }

}
