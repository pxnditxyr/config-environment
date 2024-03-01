import { ConfigEnvironment } from './presentation'

console.log( '🚀 Config Environment  🐼🐈' )

const envs = {
  TEST_PORT: ConfigEnvironment.get( 'TEST_PORT', ).isPort().asNumber(),
  TEST_STRING: ConfigEnvironment.get( 'TEST_STRING' ).asString(),
  TEST_NUMBER: ConfigEnvironment.get( 'TEST_NUMBER' ).asNumber(),
  TEST_BOOL: ConfigEnvironment.get( 'TEST_BOOL' ).asBool(),
  TEST_REQUIRED: ConfigEnvironment.get( 'TEST_REQUIRED' ).isRequired().asString(),
  TEST_GET: ConfigEnvironment.get( 'TEST_GET' ).getValue()
}

console.log({ envs })
