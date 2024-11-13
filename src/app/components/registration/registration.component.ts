import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {

  registeraionForm!: FormGroup
  passwordStrength: string = ''
  router = inject(Router)

  formBuilder = inject(FormBuilder)

  ngOnInit(): void {
    this.registeraionForm = this.formBuilder.group({
      userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/.*\d.*/)])
    })
  }

  checkPasswordStrength() {
    const password = this.registeraionForm.get('password')?.value || ''
    if (password.length < 8) {
      this.passwordStrength = 'Weak'
    } else if (password.length >= 8 && /\d/.test(password)) {
      this.passwordStrength = 'Medium'
    } else if (password.length >= 10 && /[A-Z]/.test(password) && /\d/.test(password)) {
      this.passwordStrength = 'Strong'
    }
  }

  onSubmit(){
    this.registeraionForm.reset()
    this.router.navigate(['/home'])
  }
}
