<p align="center">
    <a href="https://github.com/pxnditxyr/config-environment">
        <img width="20%" src="https://camo.githubusercontent.com/88a3d6c2df50a4514fe5058ac033ad70aa295adce83327062b7158ab647a27c9/68747470733a2f2f72656d696e642d6d652d706c7a2e6e65746c6966792e6170702f79756b692e737667" alt="Pxndxs" />
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
