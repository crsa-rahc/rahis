import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export class PasswordValidation implements Validators {
  public static PasswordMatch(
    control: AbstractControl
  ): ValidationErrors | null {
    let password = control.get('password'); // to get value in input tag
    if (password) {
      let confirmPassword = control.get('confirmPassword')?.value; // to get value in input tag
      if (password.value !== confirmPassword) {
        return { passwordMatch: true };
      } else {
        return null;
      }
    }

    return null;
  }

  public static PasswordRule(
    control: AbstractControl
  ): ValidationErrors | null {
    let password = control.get('password')?.value; // to get value in input tag
    let pattern = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[#$^+=!*()@%&]).{8,}$'
    );
    if (!pattern.test(password)) {
      return { passwordRule: true };
    } else {
      return null;
    }
  }
}