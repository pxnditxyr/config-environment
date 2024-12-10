import { get } from './presentation'

console.log( '🚀 Config Environment  🐼🐈' )

const envs = {
  TEST_PORT: get( 'TEST_PORT', ).asPort(),
  TEST_STRING: get( 'TEST_STRING' ).asString(),
  TEST_NUMBER: get( 'TEST_NUMBER' ).asNumber(),
  TEST_BOOL: get( 'TEST_BOOL' ).asBool(),
  TEST_REQUIRED: get( 'TEST_REQUIRED' ).isRequired().asString(),
  TEST_GET: get( 'TEST_GET' ).getValue(),

  TEST_PORT_OPTIONS: get( 'TEST_PORT_OPTIONS', { languageMessages: 'spanish' } ).asPort(),
  TEST_STRING_OPTIONS: get( 'TEST_STRING_OPTIONS', { languageMessages: 'spanish' } ).asString({ message: '🚀 This is a custom error message 🐼' }),
  TEST_NUMBER_OPTIONS: get( 'TEST_NUMBER_OPTIONS', { languageMessages: 'spanish' } ).asNumber({ defaultValue: 10 }),
  TEST_BOOL_OPTIONS: get( 'TEST_BOOL_OPTIONS', { languageMessages: 'spanish' } ).asBool({ defaultValue: true }),
}

console.log({ envs })
