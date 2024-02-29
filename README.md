<p align="center">
    <a href="https://github.com/pxnditxyr/config-environment">
        <img width="20%" src="https://remind-me-plz.netlify.app/yuki.svg" alt="Pxndxs" />
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

Run the application in Development Mode: 🚀

```bash
import { ConfigEnvironment } from 'config-environment'

const envs = {
  TEST_PORT: ConfigEnvironment.get( 'TEST_PORT' ).isPort().asNumber(),
  TEST_STRING: ConfigEnvironment.get( 'TEST_STRING' ).asString(),
  TEST_NUMBER: ConfigEnvironment.get( 'TEST_NUMBER' ).asNumber(),
  TEST_BOOL: ConfigEnvironment.get( 'TEST_BOOL' ).asBool(),
  TEST_REQUIRED: ConfigEnvironment.get( 'TEST_REQUIRED' ).isRequired().asString(),
  TEST_GET: ConfigEnvironment.get( 'TEST_GET' ).getValue()
}
```

## Technologies Used 🛠️

- [Node JS  ](https://nodejs.org/)
- [Typescript  ](https://www.typescriptlang.org/)

## License 📄

This project is under the MIT License. Check the [LICENSE](LICENSE) file for more details. 📜