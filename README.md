grunt-browserify-test
=====================

This is a repo to reproduce the bug

## Reproduce steps
#### install npm and run grunt task
```sh
npm install
grunt
```

#### modify files
You can modify `src/js/animal_modules/cat.js`,
add anything in it, or just press save. 
It doesn't trigger the watch.

## Fix
Either downgrade watchify to 3.2.3
or in watchify 3.3.1, go to line 99, add following:

```javascript
bundle.on('data', function() {});
```

