require('dotenv').config({ path: './.env.development.dist' });

global.fetch = jest.fn();
global.console.error = jest.fn();
global.URL.createObjectURL = jest.fn();
