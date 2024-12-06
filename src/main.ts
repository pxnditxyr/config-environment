import { get } from './presentation'

console.log( '🚀 Config Environment  🐼🐈' )

const envs = {
  TEST_PORT: get( 'TEST_PORT', { type: 'port', message: '🚫 Port not found' } ),
  TEST_STRING: get( 'TEST_STRING' ),
  TEST_NUMBER: get( 'TEST_NUMBER', { type: 'number' } ),
  TEST_BOOL: get( 'TEST_BOOL', { type: 'boolean' } ),
  TEST_REQUIRED: get( 'TEST_REQUIRED', { required: true } ),
  TEST_COMPLEX: get( 'TEST_COMPLEX', { type: 'port', required: true, defaultMessageLanguage: 'spanish' } )
}

console.log({ envs })
