# MarvelApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


---

Aplicación Angular (Proyecto Marvel)
Este proyecto es una aplicación Angular que consume la API pública de JSONPlaceholder para listar usuarios y API publica de Marvel para mostrar los personajes. 

Características Principales
El proyecto cumple con los siguientes requerimientos técnicos:

Listado de Usuarios: Muestra una lista de usuarios en un diseño de tarjetas moderno.

Interceptor HTTP: Un interceptor global que gestiona todas las peticiones HTTP salientes.

Pipes Personalizados: Dos pipes personalizados para transformar y filtrar los datos en la vista.

Filtrado en Vivo: Un campo de búsqueda que filtra la lista de usuarios por ciudad en tiempo real.

Explicación Técnica
A continuación, se detalla el funcionamiento de las características clave implementadas.

1. Interceptor HTTP (userHubInterceptor)
Se ha implementado un interceptor funcional (HttpInterceptorFn) que se ejecuta automáticamente con cada petición HttpClient. Sus funciones son:

Añadir Headers: Clona cada petición saliente y le agrega un header personalizado: X-App-Name: UserHub.

Logging de Peticiones: Muestra un mensaje en la consola del navegador justo antes de que la petición sea enviada ("Enviando solicitud HTTP...").

Logging de Respuestas: Muestra un mensaje en la consola cuando se recibe una respuesta exitosa ("Respuesta recibida").

Manejo de Errores: Utiliza el operador catchError de RxJS para interceptar cualquier error HTTP. Si detecta un error 404 (Not Found) o 500 (Internal Server Error), mostrará un mensaje de error amigable en la consola.

2. Pipes Personalizados
Se crearon dos pipes para manipular la data directamente en las plantillas HTML:

capitalizeName
Función: Recibe un string (un nombre completo, ej: "leanne graham").

Transformación: Convierte el string a minúsculas, lo divide por palabras, y luego capitaliza la primera letra de cada palabra.

filterByCity
Función: Recibe dos argumentos: el array completo de usuarios y un string (el término de búsqueda).

Transformación: Filtra el array de usuarios y devuelve un nuevo array que contiene solo a aquellos usuarios cuya ciudad (user.address.city) incluye el texto del término de búsqueda (ignorando mayúsculas/minúsculas).

Uso: Se usa en el *ngFor de la lista, enlazado a un campo de texto con [(ngModel)].

Capturas de Pantalla

1. Lista de Usuarios y Buscador

Aquí puedes poner una captura de tu lista completa de usuarios con el buscador.

<img width="962" height="612" alt="image" src="https://github.com/user-attachments/assets/ac8cc883-c5fc-4bd0-bc4f-5bfc83bac1d2" />

2. Filtro por Ciudad en Acción

Aquí puedes poner una captura mostrando cómo la lista se filtra al escribir en el buscador.

3. Consola mostrando el Interceptor

Aquí puedes poner una captura de la consola del navegador donde se vean los mensajes "Enviando solicitud..." y "Respuesta recibida".

<img width="963" height="467" alt="image" src="https://github.com/user-attachments/assets/4b2f3f27-e7e9-4310-9950-e8939b4c5fff" />

