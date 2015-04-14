# Bower Demo Project

###Description

The simplest possible bower demo project using Angular and UI-router

### Usage

- Run ```npm install``` in the root folder to install all node modules.
- Run ```bower install``` in the root folder to download all bower_components

Add the following to your application and create a local implementation in the project root folder for 'partial-home.html'

```
<div ng-app="routerApp">
	<div ui-view></div>
</div>
```

### Additional reading material

- http://bob.yexley.net/creating-and-maintaining-your-own-bower-package/
- http://bower.io/docs/creating-packages/