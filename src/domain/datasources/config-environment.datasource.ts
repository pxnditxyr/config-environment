import { IConfigEnviromentMethodsOptions } from '../interfaces'

export type TConfigEnvironmentDatasource = (
  key : string,
  options? : IConfigEnviromentMethodsOptions
) => string | number | boolean | undefined
