import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserModel as User } from 'src/app/models';
import { AuthRequestDto } from 'src/app/web-api-client';
import { loadUser, login } from '../../store/actions/auth.actions';
import { AuthState, getUserLoading } from '../../store/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  defaultAuth: any = {
    username: '',
    password: '',
  };

  loginForm: FormGroup;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;
  user: User;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<AuthState>
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.isLoading$ = this.store.select(getUserLoading);
    this.store.dispatch(loadUser());

    // get return url from route parameters or default to '/'
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm?.controls;
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: [
        this.defaultAuth.username,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320),
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }

  submit() {
    const credentials: AuthRequestDto = new AuthRequestDto({
      username: this.f?.username.value,
      password: this.f?.password.value,
    });
    this.store.dispatch(login(credentials));
  }
}
