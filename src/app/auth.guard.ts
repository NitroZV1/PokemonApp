import {Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export const AuthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn) {
      return true;
  }

  router.navigate(['/login']);
  return false;
}
