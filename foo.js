
var Foo = function(name, age) {
    this.getName = function() { return name; };
    this.setName = function(newName) { name = newName; };
    this.getAge = function() { return age; };
    this.setAge = function(newAge) { age = newAge; };
}

Foo.prototype.somePublicMethod = function() {
    return this.getName();
};

module.exports = Foo;