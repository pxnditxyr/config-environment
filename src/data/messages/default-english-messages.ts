import { IMessages } from '../interfaces'

export const defaultEnglishMessages : IMessages = {
  get:        "It seems that the environment variable with the key '[[key]]' 🔑 couldn't be found or is not defined 🚫",
  asString:   "The conversion to a string with `asString` 📝 was not successful, the value of '[[key]]' is '[[type]]' 🚫",
  asNumber:   "Attempting to convert the value to a number with `asNumber` 🔢 failed, the value of '[[key]]' is '[[type]]' 🚫",
  asBool:     "The attempt to interpret the value as a boolean with `asBool` ✅❎ did not succeed, the value of '[[key]]' is '[[type]]' 🚫",
  asPort:     "The validation of `asPort` could not confirm that the value is a valid port, or it is out of range 🔌📡🛑.",
  isRequired: "The value of environment variable with the key [[key]] is undefined ❗🔎❌.",
}
