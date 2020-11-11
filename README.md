# Base JS Lib

Bare-bones to create a Javascript library

## Develop

To develop just change the code inside lib/**/* and execute the command

```sh
  npm run build
``` 

This makes the development code ready for production
and also packaged by npm in a file named 

```sh
  ${package name}-${package version}.tgz
```

## Testing

Inside the client folder you have an application to simulate the use of lib. To install the version just run

```sh
 cd client
 npm install ../dist/${package name}-${package version}.tgz
 npm start
```

Open the browser in the specified port (9000)
