<p align="center">
    <a href="https://github.com/pxnditxyr/config-environment">
        <img width="20%" src="./assets/logo.svg" alt="Pxndxs" />
        <h1 align="center"> Config Environments </h1>
    </a>
</p>
</br>

# Config Environment 🌐🛠️ |  Typescript 

Get your environment variables from a .env file in Node 20, without dependencies, and with type checking

## Prerequisites 📋

Make sure you have the following programs installed before getting started:

- [Node.js 🐦](https://nodejs.org/) (version 20.X.X)
- [npm  ](https://www.npmjs.com/) (version 10.X.X)

## Installation 🛠️

1. Install Dependency

```bash
npm i config-environment
```

## Usage 🚀

> [!IMPORTANT]
> For deployment on Node.js version 20 without any dependencies, it is crucial to initiate the application with the following command, incorporating the --env-file flag to ensure environment variables are correctly loaded:
>
> ```
> node --env-file=.env index.js
> ```
> If you are utilizing Bun as your JavaScript runtime, the process is streamlined. Simply execute:
> ```
> bun index.js
> ```

### Code Example 🐼

```bash
import { ConfigEnvironment } from 'config-environment'

const envs = {
  TEST_PORT: get( 'TEST_PORT', { type: 'port', message: '🚫 Port not found' } ),
  TEST_STRING: get( 'TEST_STRING' ),
  TEST_NUMBER: get( 'TEST_NUMBER', { type: 'number' } ),
  TEST_BOOL: get( 'TEST_BOOL', { type: 'boolean' } ),
  TEST_REQUIRED: get( 'TEST_REQUIRED', { required: true } ),
  TEST_COMPLEX: get( 'TEST_COMPLEX', { type: 'port', required: true, defaultMessageLanguage: 'spanish' } )
}
```


## Technologies Used 🛠️

- [Node JS  ](https://nodejs.org/)
- [Typescript  ](https://www.typescriptlang.org/)

## License 📄

This project is under the MIT License. Check the [LICENSE](LICENSE) file for more details. 📜
