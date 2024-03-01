import { IConfigEnviromentMethodsOptions } from '../interfaces'

export abstract class ConfigEnvironmentDatasource {
  // abstract get ( key : string, options? : IConfigEnviromentMethodsOptions ) : any
  abstract asString ( options? : IConfigEnviromentMethodsOptions )          : string
  abstract asNumber ( options? : IConfigEnviromentMethodsOptions )          : number
  abstract asBool ( options? : IConfigEnviromentMethodsOptions )            : boolean
  abstract isRequired ( options? : IConfigEnviromentMethodsOptions )        : any
  abstract isString ( options? : IConfigEnviromentMethodsOptions )          : any
  abstract isNumber ( options? : IConfigEnviromentMethodsOptions )          : any
  abstract isBool ( options? : IConfigEnviromentMethodsOptions )            : any
  abstract isPort ( options? : IConfigEnviromentMethodsOptions )            : any
  abstract getValue ()                                                      : string | undefined
}
