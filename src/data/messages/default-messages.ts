import { IMessages } from '../interfaces'

export const defaultMessages : IMessages = {
  "get": "It seems that the environment variable with the key '[[key]]' 🔑 couldn't be found or is not defined 🚫",
  "asString": "The conversion to a string with `asString` 📝 was not successful, the value of '[[key]]' is '[[type]]' 🚫",
  "asNumber": "Attempting to convert the value to a number with `asNumber` 🔢 failed, the value of '[[key]]' is '[[type]]' 🚫",
  "asBool": "The attempt to interpret the value as a boolean with `asBool` ✅❎ did not succeed, the value of '[[key]]' is '[[type]]' 🚫",
  "isRequired": "The value of environment variable with the key [[key]] is undefined ❗🔎❌.",
  "isString": "The validation with `isString` could not confirm the value as a string, or it is of a different type 🆎📄❓.",
  "isNumber": "The check with `isNumber` failed to validate the value as numeric, or it is of a different type 🔢🚫🔍.",
  "isBool": "The verification with `isBool` did not recognize the value as a boolean, or it is of a different type ✅❎🚫.",
  "isPort": "The validation with `isPort` could not confirm the value as a valid port, or it is out of range 🔌📡🛑."
} 
