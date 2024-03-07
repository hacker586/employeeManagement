import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { } from '@angular/forms';
@Component({
  selector: 'app-add-announcement',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-announcement.component.html',
  styleUrl: './add-announcement.component.css'
})
export class AddAnnouncementComponent {
  annoncementForm : FormGroup;
  constructor(private fb : FormBuilder){
    this.annoncementForm = this.createForm();

  }
  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  createForm(): FormGroup{
    return this.fb.group({
      photo: ['', Validators.required],
      title: ['',Validators.required],
      description: ['', Validators.required],

    })
  }
  onSubmit(){
    console.log(this.annoncementForm.valid)
    console.log(this.annoncementForm.value)
  }

}
