import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegistrationComponent } from './components/registration/registration.component';

export const routes: Routes = [
    {path: '', component: RegistrationComponent},
    {path: 'home', component: WelcomeComponent}
];
