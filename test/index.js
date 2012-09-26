var toObject = require('../');

function getArray(){
  return [
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
}

describe('toObject(arr)', function(){
  describe('should return an object with number key', function(){
    var obj = toObject(getArray());
    obj.should.eql({
      0: { first: 'Manuel', last: 'Belgrano' },
      1: { first: 'Juan Jose', last: 'San Martin' },
      2: { first: 'Hipolito', last: 'Bouchard' },
      3: { first: 'Martin Miguel', last: 'de Güemes' }
    });
  });
});

describe('toObject(arr, key)', function(){
  describe('should return an object with first value as key', function(){
    var obj = toObject(getArray(), 'first');
    obj.should.eql({
      'Manuel': { first: 'Manuel', last: 'Belgrano' },
      'Juan Jose': { first: 'Juan Jose', last: 'San Martin' },
      'Hipolito': { first: 'Hipolito', last: 'Bouchard' },
      'Martin Miguel': { first: 'Martin Miguel', last: 'de Güemes' }
    });
  });
});

describe('toObject(arr, key, removeKeyItem)', function(){
  describe('should return an object removing the key', function(){
    var obj = toObject(getArray(), 'first', true);
    obj.should.eql({
      'Manuel': { last: 'Belgrano' },
      'Juan Jose': { last: 'San Martin' },
      'Hipolito': { last: 'Bouchard' },
      'Martin Miguel': { last: 'de Güemes' }
    });
  });
});

 describe('toObject(arr, key, fn)', function(){
  describe('should return an object changing the key using the callback', function(){
    var obj = toObject(getArray(), 'first', function(key){
      return key.toLowerCase().replace(/\s/i, '_');
    });
    obj.should.eql({
      manuel: { first: 'Manuel', last: 'Belgrano' },
      juan_jose: { first: 'Juan Jose', last: 'San Martin' },
      hipolito: { first: 'Hipolito', last: 'Bouchard' },
      martin_miguel: { first: 'Martin Miguel', last: 'de Güemes' }
    });
  });
});
