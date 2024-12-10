import {
  IConfigEnvironmentAsBoolOptions,
  IConfigEnvironmentAsPortOptions,
  IConfigEnvironmentAsNumberOptions,
  IConfigEnvironmentAsStringOptions,
  IConfigEnvironmentIsRequiredOptions
} from '../interfaces'

export abstract class ConfigEnvironmentDatasource {
  abstract isRequired ( options? : IConfigEnvironmentIsRequiredOptions ) : ConfigEnvironmentDatasource
  abstract asNumber ( options? : IConfigEnvironmentAsNumberOptions )     : number
  abstract asPort ( options? : IConfigEnvironmentAsPortOptions )         : number
  abstract asBool ( options? : IConfigEnvironmentAsBoolOptions )         : boolean
  abstract asString ( options? : IConfigEnvironmentAsStringOptions )     : string
  abstract getValue ()                                                  : string | undefined
}
