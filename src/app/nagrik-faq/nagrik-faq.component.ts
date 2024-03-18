import { Component } from '@angular/core';
import { NagrikHomeComponent } from '../nagrik-home/nagrik-home.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-nagrik-faq',
  standalone: true,
  imports: [NagrikHomeComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './nagrik-faq.component.html',
  styleUrl: './nagrik-faq.component.css'
})
export class NagrikFAQComponent {
  // Initialization
  faqForm: FormGroup;
  localFAQs: any[]=[];
  
  // Constructor
  constructor(private fb:FormBuilder){
    this.faqForm = this.createfaqForm();
  }

  // OnInit Function
  ngOnInit(){
    this.localFAQs=JSON.parse(localStorage.getItem("allFAQs") || '[]');
    console.log("local FAQ, ",this.localFAQs);
    console.log("local FAQ1, ",this.localFAQs.length);
    console.log("local FAQ2, ",this.localFAQs[6].faqResolved);
  }
  
  // Other Functions
  createfaqForm(): FormGroup{
    return this.fb.group({
    faqType:['nagrik',Validators.required],
    faqResolved:['false',Validators.required],
    faqQuestion:['',Validators.required],
    faqAnswer:['']});
  }

  onAddFAQ(){
    console.log("FAQ Logged");
    this.localFAQs.push(this.faqForm.value);
    console.log("faq query", this.localFAQs);
    localStorage.setItem("allFAQs",JSON.stringify(this.localFAQs));
    console.log("FAQ in local storage", localStorage.getItem("allFAQs"));
  }
}
