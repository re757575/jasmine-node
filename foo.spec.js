var Foo = require('./foo.js');

describe("My Unit 測試", function() {

    var foo = new Foo('Alex', '25');
    it('should increment a variable', function () {
	var result = foo.somePublicMethod();
        expect(result).toEqual('Alex');
    });

    var foo = new Foo('Alex', '25');
    it('should increment a variable', function () {
	var result = foo.getAge();
        expect(result).toBeGreaterThan(20);
    });
});