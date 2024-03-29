import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink, RouterOutlet, Router} from '@angular/router';
import Tooltip from 'bootstrap/js/dist/tooltip';

@Component({
  selector: 'app-profile-setup',
  standalone: true,
  imports: [RouterOutlet,RouterLink,ReactiveFormsModule,CommonModule,MatChipsModule],
  templateUrl: './profile-setup.component.html',
  styleUrl: './profile-setup.component.scss'
})
export class ProfileSetupComponent {

  // Variable Initialization
  profileForm: FormGroup;
  formData: { [key: string]: any } = {};
  imageUrl: string | ArrayBuffer | null = null;
  genders = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' }
  ];

  constructor(private fb: FormBuilder, private router:Router){
    this.profileForm = this.createProfileForm();
  }

  ngOnInit(){
        // console.log("Form Status= ",this.profileForm.invalid);

  }

  createProfileForm(): FormGroup{
    return this.fb.group({
      profilePhoto:['',[Validators.required,imageValidator]],
      profileFullName:['Ishan Milind Patil',Validators.required],
      profileMobNumber:['7798014347',[Validators.required,Validators.pattern("[0-9 ]{10}")]],
      profileEmailAdd:['ishan@gmail.com',[Validators.required,Validators.pattern(/^[\w-]+(\.[\w-]+)*@(gmail\.com|outlook\.com)$/)]],
      profileFullAdd:['home',Validators.required],
      profilePinCode:['123456',[Validators.required,Validators.pattern("[0-9 ]{6}")]],
      profileAadharNum:['100000000000',[Validators.required,Validators.pattern("[0-9 ]{12}")]],
      profileVoterId:['ABC1234567',[Validators.required,Validators.pattern(/^[A-Z]{3}\d{7}$/)]],
      profileGender:['Male',Validators.required],
      profileFamily:[''],
      profileCreateTime: ['']},{ validators: imageRequiredValidator });
  }

  onImageChange(event: any): void {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };

      reader.readAsDataURL(fileInput.files[0]);
    } else {
      this.imageUrl = null;
    }
  }

  selectGender(gender: string) {
    this.profileForm.get('profileGender')?.setValue(gender);
  }

  getFormattedDate(date: Date): string {
    const day = date.getDate();
    const monthNames = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
  
    return `${this.getOrdinalSuffix(day)} ${month} ${year}`;
  }
  
  getOrdinalSuffix(n: number): string {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
  }

  onSubmit(){
    console.log("working")
    // Iske wajahse wo aake bhi emtpy rahega local storage add nagrik ho jayega tab tu local storage uda de
    if(localStorage.getItem('userProfileData')){
      this.formData= JSON.parse(localStorage.getItem('userProfileData') || '[]');
    }

    // console.log("Date Now",  this.getFormattedDate(new Date()));
    this.profileForm.patchValue({
      profileCreateTime: this.getFormattedDate(new Date()),
    });

    // console.log("fresh local storage",localStorage.getItem('userProfileData'));
    this.formData[this.profileForm.get('profileAadharNum')?.value]=this.profileForm.value;
    console.log("working2")
    localStorage.setItem('userProfileData', JSON.stringify(this.formData));
    console.log("working3")

    console.log("updated local storage",localStorage.getItem('userProfileData'));

    // console.log(" Form in JSON Format ",this.profileForm.value);
    console.log(" Form in Key Value Format ",this.formData);
    // console.log(" Form from local storage ",localStorage.getItem('userProfileData'));

    this.router.navigate(['/familySetup'], {queryParams: {userAadhar: this.profileForm.get('profileAadharNum')?.value}})

  }

}
export function imageValidator(control: AbstractControl): { [key: string]: any } | null {
  const allowedTypes = ['jpg', 'jpeg', 'png', 'gif']; 
  const file = control.value;

  if (!file) {
    return { 'required': true };
  }

  var fileType = file.split('.').pop().toLowerCase();
  console.log("haha",fileType);
  if (allowedTypes.indexOf(fileType) === -1) {
    return { 'invalidFileType': true };
  }

  return null;
}

export function imageRequiredValidator(group: FormGroup): { [key: string]: any } | null {
  const fileControl = group.get('profilePhoto');

  if (!fileControl?.value) {
    return { 'required': true };
  }

  return null;
}

