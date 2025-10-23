import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

export const userHubInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

  // 2. Mensaje en consola antes de enviar
  console.log("Enviando solicitud HTTP...");

  // 1. Clonar la petición y agregar el header
  const clonedRequest = req.clone({
    headers: req.headers.set('X-App-Name', 'UserHub')
  });

  // 3. Pasar la petición clonada y manejar la respuesta
  return next(clonedRequest).pipe(
    tap((event: HttpEvent<unknown>) => {
      // Mensaje en consola al recibir respuesta
      if (event instanceof HttpResponse) {
        console.log("Respuesta recibida");
      }
    }),
    catchError((error: HttpErrorResponse) => {
      // 4. Manejo de errores 404 o 500
      if (error.status === 404 || error.status === 500) {
        console.error(`ERROR ${error.status}: Se detectó un error en el servidor. Mensaje: ${error.message}`);
      }
      // Re-lanzar el error
      return throwError(() => error);
    })
  );
};