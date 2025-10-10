import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { authGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';

describe('authGuard (Class)', () => {
  let guard: authGuard;
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(() => {
    // Creamos "dobles" o "mocks" de los servicios para simular su comportamiento
    const authSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      // Le decimos a Angular que cuando alguien pida authGuard, lo cree
      providers: [
        authGuard,
        // Y cuando pidan AuthService o Router, entregue nuestras versiones falsas
        { provide: AuthService, useValue: authSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });

    // Inyectamos el guardia y los mocks para poder usarlos en las pruebas
    guard = TestBed.inject(authGuard);
    authServiceMock = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    routerMock = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('debería permitir el acceso si el usuario está logueado', () => {
    // Simulamos que el servicio dice que el usuario SÍ está logueado
    authServiceMock.isLoggedIn.and.returnValue(true);
    
    // Ejecutamos el guardia y esperamos que devuelva 'true'
    expect(guard.canActivate()).toBe(true);
  });

  it('debería bloquear el acceso y redirigir si el usuario NO está logueado', () => {
    // Simulamos que el servicio dice que el usuario NO está logueado
    authServiceMock.isLoggedIn.and.returnValue(false);
    
    // Ejecutamos el guardia y esperamos que devuelva 'false'
    expect(guard.canActivate()).toBe(false);

    // Además, verificamos que se haya intentado redirigir al usuario
    expect(routerMock.navigate).toHaveBeenCalledWith(['/']);
  });
});