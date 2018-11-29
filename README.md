```
npm install
```

After installation, use browserify to compile `imports.js` for use in the browser:
```
node node_modules/browserify/bin/cmd.js exports.js --standalone modules > imports.js
```

## LICENSE [MIT](LICENSE)
