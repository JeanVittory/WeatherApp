# Weather App
Esta aplicación fue construida con el fín de mostrar informacion concerniente al clima a nivel global. Para ello usé la api [Weatherbit](https://www.weatherbit.io/)  para asi recuperar dicha información y poder mostrarla en el cliente. Sumado a esto decidi conectarme a la api [quotes15](https://rapidapi.com/martin.svoboda/api/quotes15/) la cual me provee de frases celebres de manera aleatoria con el fin de mejorar la UI en el estado inicial de la aplicación.

## Tech
Las dependecias usadas para el desarrollo de esta aplicación fueron:
- [React v.18.1](https://es.reactjs.org/) - Framework de JS para el desarrollo de la UI.
- [Redux v.4.2](https://es.redux.js.org/) -Manejador de estado que me permite comunicar todos los componentes a un estado global para asi lograr compartir cierto tipo de información de manera más sencilla y escalable
- [Reduxjs/toolkit v.1.8](https://redux-toolkit.js.org/) - Una forma de escribir la lógica de redux con el fin de mejorar la legibilidad y la invocacion de herramientas como "store", "reducers" y "dispatch" entre otras.
- [Tailwind v.3.0](https://tailwindcss.com/) - Framework CSS usado por su implementación de utilty classes dentro del mismo HTML o JSX en el caso de react facilitando el flujo de trabajo y la rápidez con la que se puede maquetar y personalizar los diseños. 
- [React-icons v.3.0](https://react-icons.github.io/react-icons/) - Framework CSS usado por su implementación de utilty classes dentro del mismo HTML o JSX en el caso de react facilitando el flujo de trabajo y la rápidez con la que se puede maquetar y personalizar los diseños. 



## Instalación

Weather fue desarrollado usando [Node.js](https://nodejs.org/es/) v.18.1 como entorno de ejecución, así que se recomienda la instalacion del mismo para poder correr la aplicación. 

Una vez intalado NodeJs se recomienda clonar el repositorio con

```sh 
git clone https://github.com/JeanVittory/WeatherApp
```

Seguido de lo anterior y, usando el manejador de paquetes de node [npm](https://www.npmjs.com/), se ejecuta la aplicación con el siguiente comando: 

```sh
npm run start
```




