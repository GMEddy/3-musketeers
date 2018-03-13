'use strict';

const convert = require('..');
const Big = require('big.js');

//The library exports a single function, Big, the constructor of Big number instances.
// It accepts a value of type number, string or Big number object.

/**
btcConvert.units()
Returns an Array of unit symbols that can be used for conversion.
*/


test('should default to returning a Number', () => {
  //convert(2, 'BTC', 'BTC');
  expect(typeof convert (2, 'BTC','BTC')).toBe('number');
});

test('should return a Number', () => {
  //convert(2, 'BTC', 'BTC', 'Number');
  expect(typeof convert(2, 'BTC', 'BTC', 'Number')).toBe('number');
});


test('should return a Big number', () => {
  //convert(2, 'BTC', 'BTC', 'Big');
  expect(typeof convert (2, 'BTC', 'BTC', 'Big' )).toBeInstanceOf('Big');

});

test('should return a String', () => {
  //convert(2100, 'mBTC', 'BTC', 'String');
  expect (typeof convert(2100, 'mBTC', 'BTC', 'String')).toBe('string');
});

test('should convert an integer', () => {
//convert(123456789012345, 'Satoshi', 'BTC', 'Number');
 expect(convert(123456789012345, 'Satoshi', 'BTC', 'Number')).toEqual(1234567.89012345);
});

test('should convert a number', () => {
  //convert(1234567.89012345, 'BTC', 'Satoshi', 'Number');
  expect(convert(1234567.89012345, 'BTC','Satoshi', 'Number')).toEqual(123456789012345);
});

test('should convert a string', () => {
  //convert('2', 'BTC', 'BTC', 'Number');
  expect(convert('2', 'BTC', 'BTC', 'Number')).toEqual(2);
});

test('should convert a Big number', () => {
  //convert(new Big(2), 'BTC', 'BTC', 'Number');
  expect(convert(new Big(2), 'BTC', 'BTC', 'Number')).toEqual(2);
});

test('should convert a NaN to a Number', () => {
  //convert(NaN, 'BTC', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'mBTC', 'Number');
  expect(convert(NaN, 'BTC', 'BTC', 'Number')).toBe('number');
  expect(convert(NaN, 'BTC', 'mBTC', 'Number')).toBe('number');
});

test('should convert a NaN to a String', () => {
  //convert(NaN, 'BTC', 'BTC', 'String');
  //convert(NaN, 'BTC', 'mBTC', 'String');
  expect(convert(NaN, 'BTC', 'BTC', 'String')).toBe('String');
  expect(convert(NaN, 'BTC', 'mBTC', 'String')).toBe('String');
});

test('should not convert a NaN to a Big', () => {
  //convert(NaN, 'BTC', 'BTC', 'Big');
   expect(() => {convert(NaN, 'BTC', 'BTC', 'Big')}).toThrow();
});

test('should handle rounding errors', () => {
  //convert(4.6, 'Satoshi', 'BTC', 'Number');
  //convert(0.000000046, 'BTC', 'Satoshi', 'Number');
  expect(convert(4.6, 'Satoshi', 'BTC', 'Number')).toBe('number');
  expect(convert(0.000000046, 'BTC', 'Satoshi', 'Number')).tobe('number');

});

test('should throw when untest is undefined', () => {
  //convert(new Big(2), 'x', 'BTC', 'Number');
  //convert(new Big(2), 'BTC', 'x', 'Number');
  //convert(NaN, 'x', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'x', 'Number');
   expect(() => {convert(new Big(2), 'x', 'BTC', 'Number')}).toThrow();
   expect(() => {convert(new Big(2), 'BTC', 'x', 'Number')}).toThrow();
   expect(() => {convert(NaN, 'x', 'BTC', 'Number')}).toThrow();
   expect(() => {convert(NaN, 'BTC', 'x', 'Number')}).toThrow();
});

test('should throw when representaion is undefined', () => {
  //convert(2, 'BTC', 'mBTC', 'x');
  //convert(NaN, 'BTC', 'mBTC', 'x');
  expect(() => {convert(2, 'BTC', 'mBTC', 'x')}).toThrow();
  expect(() => {convert(NaN, 'BTC', 'mBTC', 'x')}).toThrow();
});

test('should allow untest aliases', () => {
  //convert(4.6, 'Satoshi', 'sat');
  //convert(4.6, 'μBTC', 'btest');
    expect(convert(4.6, 'Satoshi', 'sat')).toEqual(4.6);
    expect(convert(4.6, 'μBTC', 'btest')).toEqual(4.6);
});


/**
btcConvert.addUnit (unit, factor)
Adds a new unit for conversion. Throws when unit already exists and the factors are different.

unit (string) - the new unit symbol
factor (number | string | Big) - conversion factor to yield a BTC.
*/
test('should add a new unit', () => {
  convert.addUnit('BTC', '1');
  
 
});



/**
btcConvert.removeUnit (unit)
Removes the unit from conversion. Throws when unit is pre-defined. Removing a non-existing symbol is allowed.

unit (string) - the unit symbol to remove.
*/
test('should remove an unit', () => {
  //convert.removeUnit();
  convert.removeUnit('BTC');
  });
