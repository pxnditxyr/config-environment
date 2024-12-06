
import { IMessages } from '../interfaces'

export const defaultSpanishMessages : IMessages = {
  get: "Parece que la variable de entorno con la clave '[[key]]' 🔑 no pudo ser encontrada o no está definida 🚫",
  asString: "La conversión a una cadena con `asString` 📝 no fue exitosa, el valor de '[[key]]' es '[[type]]' 🚫",
  asNumber: "El intento de convertir el valor a un número con `asNumber` 🔢 falló, el valor de '[[key]]' es '[[type]]' 🚫",
  asBool: "El intento de interpretar el valor como un booleano con `asBool` ✅❎ no tuvo éxito, el valor de '[[key]]' es '[[type]]' 🚫",
  isRequired: "El valor de la variable de entorno con la clave [[key]] no está definido ❗🔎❌.",
  isString: "La validación con `isString` no pudo confirmar el valor como una cadena, o es de un tipo diferente 🆎📄❓.",
  isNumber: "La verificación con `isNumber` falló en validar el valor como numérico, o es de un tipo diferente 🔢🚫🔍.",
  isBool: "La verificación con `isBool` no reconoció el valor como un booleano, o es de un tipo diferente ✅❎🚫.",
  isPort: "La validación con `isPort` no pudo confirmar el valor como un puerto válido, o está fuera de rango 🔌📡🛑."
}
