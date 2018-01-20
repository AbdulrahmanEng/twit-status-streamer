const assert = require('chai').assert;
const env = require('dotenv').config().parsed;

describe('Envionment variables set', function() {
	describe('Consumer key', function(){
		it('should exist', function(){
			assert.typeOf(env.consumer_key, 'string');
		});
	});
	describe('Consumer secret', function(){
		it('should exist', function(){
			assert.typeOf(env.consumer_secret, 'string');
		});
	});
	describe('Access token', function(){
		it('should exist', function(){
			assert.typeOf(env.access_token, 'string');
		});
	});
	describe('Access token secret', function(){
		it('should exist', function(){
			assert.typeOf(env.access_token_secret, 'string');
		});
	});
});