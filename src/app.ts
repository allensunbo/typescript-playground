/// <reference path="node.d.ts" />

var name: string = 'Hello, world!';
var revenue: number = 100.24;
var list: number[] = [1, 2, 3];
var i: number;
for (i = 0; i < list.length; i++) {
    console.log(list[i])
}

var list2: Array <number> = [4, 5, 6];
for (i = 0; i < list2.length; i++) {
    console.log(list2[i])
}

enum Color {
    RED, GREEN, BLUE
}

var c: string = Color[2];
console.log(c);

var list3: Array <any> = [1, 'haha', Color[1]];
for (i = 0; i < list3.length; i++) {
    console.log(list3[i])
}

function greet(): void {
    console.log('hello!');
}
greet()

/*
function printAge(user: {age:number}) : void {
	console.log('user age = ' + user.age);
}

printAge({age:100, name:'john'})
*/

interface WithNameAndOptionalAge {
    name: string;
    age ? : number;
}

function printAge(user: WithNameAndOptionalAge): void {
    console.log('user = ' + user.name + ' | ' + user.age);
}

printAge({
    name: 'Alex'
});
printAge({
    age: 56,
    name: 'Smith'
});

function getUser(): WithNameAndOptionalAge {
    return {
        name: 'Huh'
    }
}

console.log(getUser());

interface IsAdmin {
    (name: string): boolean;
}

var testAdmin: IsAdmin;
testAdmin = function(name) {
    return name === 'haha'
}

console.log(testAdmin('2'))

interface Dictionary {
    [index: string]: string;
}

var p: Dictionary = {
    'key1': 'value1',
    'key2': 'value2'
};
var q: string;
for (q in p) {
    console.log(q + ':' + p[q]);
}

interface IUser {
    getUserAgeByUserName(name: String): number;
}

class UserImpl implements IUser {

    private users: Array <WithNameAndOptionalAge> = [{
        age: 56,
        name: 'Smith'
    }, {
        name: 'Alex'
    }];

    constructor() {
        function reqListener () {
  		 	console.log(this.responseText);
		}

		var oReq = new XMLHttpRequest();
		oReq.onload = reqListener;
		oReq.open("get", "http://api.openweathermap.org/data/2.5/weather?q=London,uk", true);
		oReq.send();
    }

    getUserAgeByUserName(name: String): number {
        var p: number;
        for (p = 0; p < this.users.length; p++) {
            if (this.users[p].name === name) {
                if (!this.users[p].age) {
                    console.log('user ' + name + ' does not have age!');
                }
                return this.users[p].age;
            }
        }
        console.log('user ' + name + ' is not found');
        return undefined;
    }
}

var user = new UserImpl();
var age = user.getUserAgeByUserName('Smith');
console.log(age);

age = user.getUserAgeByUserName('Alex');
console.log(age);

age = user.getUserAgeByUserName('Aley');
console.log(age);
