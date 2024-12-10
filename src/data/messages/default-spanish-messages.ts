
import { IMessages } from '../interfaces'

export const defaultSpanishMessages : IMessages = {
  get: "Parece que la variable de entorno con la clave '[[key]]' 🔑 no pudo ser encontrada o no está definida 🚫",
  asString: "La conversión a una cadena con `asString` 📝 no fue exitosa, el valor de '[[key]]' es '[[type]]' 🚫",
  asNumber: "El intento de convertir el valor a un número con `asNumber` 🔢 falló, el valor de '[[key]]' es '[[type]]' 🚫",
  asBool: "El intento de interpretar el valor como un booleano con `asBool` ✅❎ no tuvo éxito, el valor de '[[key]]' es '[[type]]' 🚫",
  asPort: "La validación de `asPort` no pudo confirmar que el valor es un puerto válido, o está fuera de rango 🔌📡🛑.",
  isRequired: "El valor de la variable de entorno con la clave [[key]] no está definido ❗🔎❌.",
}
