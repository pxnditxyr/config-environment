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
import { get } from 'config-environment'

const envs = {
  TEST_PORT: get( 'TEST_PORT', ).asPort(),
  TEST_STRING: get( 'TEST_STRING' ).asString(),
  TEST_NUMBER: get( 'TEST_NUMBER' ).asNumber(),
  TEST_BOOL: get( 'TEST_BOOL' ).asBool(),
  TEST_REQUIRED: get( 'TEST_REQUIRED' ).isRequired().asString(),
  TEST_GET: get( 'TEST_GET' ).getValue(),

  TEST_PORT_OPTIONS: get( 'TEST_PORT_OPTIONS', { languageMessages: 'spanish' } ).asPort(),
  TEST_STRING_OPTIONS: get( 'TEST_STRING_OPTIONS', { languageMessages: 'spanish' } ).asString({ message: '🚀 This is a custom error message 🐼' }),
  TEST_NUMBER_OPTIONS: get( 'TEST_NUMBER_OPTIONS', { languageMessages: 'spanish' } ).asNumber({ defaultValue: 10 }),
  TEST_BOOL_OPTIONS: get( 'TEST_BOOL_OPTIONS', { languageMessages: 'spanish' } ).asBool({ defaultValue: true }),
}
```


## Technologies Used 🛠️

- [Node JS  ](https://nodejs.org/)
- [Typescript  ](https://www.typescriptlang.org/)

## License 📄

This project is under the MIT License. Check the [LICENSE](LICENSE) file for more details. 📜
