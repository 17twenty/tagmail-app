# tagmail-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# app-tagmail
# app-tagmail


## Docker

### Build

`docker build -t tagmail-ui .`

### Run locally

`docker run --rm -it -p 9000:9000 --name tagmail-ui tagmail-ui`

### Remote into a local instance

`docker exec -it tagmail-ui /bin/sh`