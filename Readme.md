# Namaste Node JS

## Pre-requisites:-
- Download & install node js
- Any code editor

## Checking node & npm version:-
- ```node --version ```
- ```npm --version```

## Run js program outside the browser using node js environment:-
- ```node <file name>.js ```

## What is Node js?
- Node js it is js runtime environment, which allow us to execute js code outside of the Browser or anywhere. 

- Node JS is built on top of Chrome's V8 js engine.

- ```FunFact 😂😂😂:-``` Actually Node JS is C++ program / application with V8 embedded into it.

- It is written in C++ language.

- It is developed by "Ryan Dahl" in the year of 2009.

- It has an Event Driven Architecture which capable of Non Blocking/Asynchronous I/O. NodeJS has event queue & event loop.

- It is maintained by OpenJS Foundation.

- NodeJS is neither language nor a framework.


## JS on Server
- Earlier js primilarly run on only browser.

- now using node js runtime environment, you can run js code outside the browser or anywhere or on server.


## Server:-
#### "A server is a computer or software that continuously listens for client requests, processes them using algorithms or computations, and sends back responses."

A server can refer to hardware, software, or both, depending on the context:-

1. Hardware (Physical Machine):- A powerful computer designed to run server applications (e.g., a data center server).

1. Software (Server Application):- A program that listens for and processes client requests (e.g., Apache, Nginx, Node.js server).

1. Remote or Local Machine:-
    - A server can be remote (cloud-based, like AWS EC2).
   
    - It can also be local (your own computer acting as a server for testing).

1. Virtual Servers:- Cloud providers use virtualization to run multiple virtual servers on a single physical machine (e.g., AWS, Docker containers).


Server operates on the client-server architecture, where clients make requests, and the server responds.

It is designed to be highly available (24/7), reliable, and scalable, making it more robust than a personal computer. Servers allow us to deploy applications, files, and services, ensuring seamless access over a network."


### Types of Servers: 
1. Web servers (Apache, Nginx)
1. Application servers
1. Database servers (MongoDB, MySQL)
1. File servers 



### JS Engine:-
Without js engine js code cannot be executed a single line. 

Javascript engine is just some piece of code that is written in C++ which parses, compiles & execute javascript code.

Javascript engine (V8, SpiderMonkey) follows ECMAScript standards and ensures cross-browser consistency.

Every Browser has own js engine:-
1. Chrome & Node JS - V8 (Written in C++)
1. Firefox - SpiderMonkey
1. Microsoft Edge - V8 (previously used Chakra)
1. Safari - JavaScriptCore / Nitro



## ECMAScript:-
#### "It is specification / standard for Scripting  language like Javascript."

It is rules that followed by js engine. js implement things based on standard which is given by ECMA.

It is maintained by ECMA International (TC39 committee).

#### ECMA - European Computer Manufacturers Association.

#### NOTE:- Javascript includes additional features that are not part of ECMAScript specification( eg:- DOM API, setTimeout/setInterval, fs.readFile, process )


## Node JS REPL:-
REPL is Acrynom for Read, Evaluate, Print, Loop

we are write command ```node``` on terminal then we get Node REPL mode.

## Global in NodeJS:-
in browser :- "window" keyword is global object.

in node js environment :- "global" keyword is global object.

in any environment :- "globalThis" keyword is standard way to access the global object in any JavaScript environment.


## Modules:-
#### "A module is a separate file that encapsulates code (variables, functions, or classes) to promote reusability and maintainability."

- By default, modules protect their variables and functions from leaking into the global scope.

- To access them in another file, you must explicitly export and import them.




### Types of modules:-
### 1] CommonJS Module (Older way, Synchronous, .cjs) :-
- used in Node JS by default

- Loads modules synchronously.

- Doesn't work in browsers without a bundler like Webpack.

- #### Export Syntax:-

    ```javascript
    const sum = (a,b) => a+b

    module.exports = sum
    // OR
    module.exports = {sum}
    ```

- #### Import Syntax:-

    ```javascript
    const data = require("<module path>")
    ```
    

#### Note:- by default, module.exports is an empty object "{}"

### 2] ES Module (Newer way, Asynchronous, .mjs) :-
- Works natively in browsers and Node.js (if type: "module" is set in package.json).

- Supports asynchronous imports.

    
- #### Default Export & Import:-

    ``` javascript
    // Default Export
    export default < module name >

    // Default Import
    import < module name> from "< module path >"
    ```

- #### Named Export & Import:-

    ``` javascript
    // Named Export
    export < module name > 
    
    // Named Import
    import { < module name > } from "< module path >"
    ```