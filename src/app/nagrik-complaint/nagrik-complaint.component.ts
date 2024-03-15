import { Component } from '@angular/core';
import {  ActivatedRoute, RouterOutlet, Router } from '@angular/router';
import { NagrikHomeComponent } from '../nagrik-home/nagrik-home.component';
import { CommonModule } from '@angular/common';
import complaintsList from './complaints';
import { AbstractControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nagrik-complaint',
  standalone: true,
  imports: [RouterOutlet,NagrikHomeComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './nagrik-complaint.component.html',
  styleUrl: './nagrik-complaint.component.css'
})
export class NagrikComplaintComponent {
  // Initialization
  section: string='';
  createComplaint: FormGroup;
  imageUrl: string | ArrayBuffer | null = null;
  complaintsList=complaintsList;
  complaintSize= complaintsList.complaint_categories.length;
  allComplaints: any[]=[];
  localComplaints:any[]=[];

  userAadhar=100000000000;

  // Constructor and ngOnInit
  // Constructor
  constructor(private route: ActivatedRoute, private fb:FormBuilder, private router:Router){
    this.createComplaint = this.createComplaintForm();
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.section = params['section'];
    });
    this.localComplaints=JSON.parse(localStorage.getItem("allComplaints") || '[]');
    console.log("local Complaints, ",this.localComplaints);
    // console.log("Load section, ",this.section);
    // console.log("Complaints, ",complaintsList.complaint_categories);
  }

  // Other Functions

  createComplaintForm(): FormGroup{
    return this.fb.group({
      complaintPhoto:['',[Validators.required,imageValidator]],
      complaintCategory:['Compensation',Validators.required],
      complaintSubject:['Pagar badhao',Validators.required],
      complaintDescription:['Pagar is too loww',Validators.required],
      complaintAssignedHR:[''],
      complaintStatus:['Pending'],
      complaintInitial:[this.userAadhar],
      complaintCreateTime: [ this.getFormattedDate(new Date())]},  
      { validators: imageRequiredValidator });
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

  onAddComplaint(){
    console.log("Congratulations you are a Karen");
    console.log(this.createComplaint.value);
    this.allComplaints.push(this.createComplaint.value);
    console.log("All Complaints",this.allComplaints); 
    // console.log("Date Now",  this.getFormattedDate(new Date()));
    this.createComplaint.patchValue({
      complaintPhoto:'',
      complaintCategory:'',
      complaintSubject:'',
      complaintDescription:'',
    });
    this.imageUrl='';
    localStorage.setItem("allComplaints", JSON.stringify( this.allComplaints));
    console.log("Complaints in local storage",localStorage.getItem("allComplaints"));
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
  const fileControl = group.get('complaintPhoto');

  if (!fileControl?.value) {
    return { 'required': true };
  }

  return null;
}
