export interface IConfigEnviromentMethodsOptions {
  readonly message?: string
  readonly defaultValue?: string | number | boolean | undefined
  readonly required?: boolean
  readonly type?: 'string' | 'number' | 'boolean' | 'port'
  readonly defaultMessageLanguage?: 'spanish' | 'english'
}
