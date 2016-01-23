# ng-data-flow-fun
### *A fun project for testing (and teaching of) different data-flow principles.*

It's simple unreal webapp for managing lists of todos with these functionality.
* Add new list
* Delete list
* Edit list name
* Edit list content
* Assign/Reassign user to a list
* Add new user

For full functionality you need a backend from this repo - https://github.com/dominiktilp/node-data-flow-fun. It's build with node.js, express and nedb.

#### For installing all dependencies run `npm install`

## 01 - scope
Use angular.js basic principles - scope and two-way data binding. This method is very easy at the beginning and often used by beginners.

If you are using nested components you will soon run into the parent hell.

##### To start live dev server on localhost:8801
```
npm run watch:01
```

## 02 - controllerAs
ControllerAs syntax was introduced in Angular 1.2. It makes scoping much more clearer. Its best use this in combination with bindToController (introduced in 1.3 and improved in 1.4). This avoids parent hell, but we need pass all needed objects and methods to nested components.

If we pass methods from parent controller to nested one, we need watch out on context of function. (https://medium.com/@dominiktilp/watch-out-for-this-f5916a3c0759).

##### To start live dev server on localhost:8802
```
npm run watch:02
```
