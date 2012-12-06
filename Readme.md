
# toObject

  toObject array utility. Creats an object with the given array.

## Installation

    $ component install retrofox/to-object

## API

### toObject(array)

  Returns an `object`

```js
var toObject = require('to-object');

var heroes = [
  {
    first: 'Manuel',
    last: 'Belgrano'
  },
   {
     first: 'Juan Jose',
     last: 'San Martin'
   },
  {
    first: 'Hipolito',
    last: 'Bouchard'
  },
  {
    first: 'Martin Miguel',
    last: 'de Güemes'
  }
];

// returns an object with number key
var heroesObject = toObject(heroes);
/*
{
  0: { first: 'Manuel', last: 'Belgrano' },
  1: { first: 'Juan Jose', last: 'San Martin' },
  2: { first: 'Hipolito', last: 'Bouchard' },
  3: { first: 'Martin Miguel', last: 'de Güemes' }
}
*/

// return an object with first value as key
var heroesObject = toObject(heroes, 'first');
/*
{
  'Manuel': { first: 'Manuel', last: 'Belgrano' },
  'Juan Jose': { first: 'Juan Jose', last: 'San Martin' },
  'Hipolito': { first: 'Hipolito', last: 'Bouchard' },
  'Martin Miguel': { first: 'Martin Miguel', last: 'de Güemes' }
}
*/

// return an object with first value as key and remove the key
var heroesObject = toObject(heroes, 'first', true);
/*
{
  'Manuel': { last: 'Belgrano' },
  'Juan Jose': { last: 'San Martin' },
  'Hipolito': { last: 'Bouchard' },
  'Martin Miguel': { last: 'de Güemes' }
}
*/

// return an object with first value modified as key using callback function
var heroesObject = toObject(heroes, 'first', function(key){
  return key.toLowerCase().replace(/\s/i, '_');
});
/*
{
  manuel: { first: 'Manuel', last: 'Belgrano' },
  juan_jose: { first: 'Juan Jose', last: 'San Martin' },
  hipolito: { first: 'Hipolito', last: 'Bouchard' },
  martin_miguel: { first: 'Martin Miguel', last: 'de Güemes' }
}
*/
```

## Tests

Download testing dependecies

```
npm install
```

Run tests

```
make test
```

# License

(The MIT License)
Copyright(c) 2012 Damian Suarez &lt;rdsuarez@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
