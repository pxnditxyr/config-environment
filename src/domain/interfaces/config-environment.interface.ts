export interface IConfigEnvironmentGetValue {
  readonly message? : string
  readonly defaultValue? : string
}

export interface IConfigEnvironmentAsNumberOptions {
  readonly message? : string
  readonly defaultValue? : number
}

export interface IConfigEnvironmentAsBoolOptions {
  readonly message? : string
  readonly defaultValue? : boolean
}

export interface IConfigEnvironmentAsStringOptions {
  readonly message? : string
  readonly defaultValue? : string
}

export interface IConfigEnvironmentAsPortOptions {
  readonly message? : string
  readonly defaultValue? : number
}

export interface IConfigEnvironmentIsRequiredOptions {
  readonly message? : string
}
