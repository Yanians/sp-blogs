---
title: Introducing the Nashorn JavaScript Engine
description: Nashorn is a new JavaScript engine developed in the Java programming language by Oracle, released with Java 8. Nashorn’s goal is to implement a lightweight high-performance JavaScript runtime in Java with a native JVM. By making use of Nashorn, the developer can embed JavaScript in a Java application and also invoke Java methods and classes from the JavaScript code.
authors: ['Jean-De-Leon']
date: September 9, 2014
tags: ['JAVASCRIPT']
---

# Why Leave Rhino?
Rhino is the predecessor of Nashorn. It began as a project in 1997 at NetScape and got released in 1998.

There have been 16 years since the release of Rhino, and that JavaScript engine has lived its days. So the Java guys decided to have some fun by developing a new JavaScript engine from scratch instead of rewriting the existing one. This gave birth to Nashorn (fun fact: nashorn means rhino in German).

Almost everyone here has been using JavaScript in the browser, and some have been using it on the server (like Node.js), but Nashorn is developed for another purpose. By using Nashorn the developer can perform the magic of:

- **Running JavaScript as native Desktop code.**
- **Using JavaScript for shell scripting.**
- **Call Java classes and methods from JavaScript code.**


## The Goals of Nashorn

When Nashorn was designed, the developers decided a set of goals for it:

 - **It should be based on ECMAScript-262 Edition 5.1 language specification, and must pass the ECMAScript-262 compliance tests.**
 - **It should support the javax.script (JSR 223) API.**
 - **It should allow invoking Java from JavaScript and vice-versa.**
 - **It should define a command-line tool, jjs for evaluating JavaScript code in “shebang” scripts (that normally start with #!/bin/sh), herdocuments,  and edit strings.**

 - **Its performance should be significantly better than Rhino.**
 - **It should have no security risks.**

Furthermore, no one decided that Nashorn will not include debugging and not support CSS and JavaScript libraries/frameworks. This means Nashorn can be implemented in a browser without being a nightmare.

# javaScript in a (nut)Shell

In order to use JavaScript in the shell by using Nashorn’s jjs tool, you should first install the [JDK8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html), which you can download for free. To test its installation, execute:

```js
>_ javac -version
# it should echo
# java version "1.8.x"
jjs -version
# it should echo
# nashorn 1.8.x
jjs>
```

<code>
If you face any problems with the first or the second command, try adding JDK in the path
</code>

Now you can use JavaScript as a shell script. Check out this simple example:

```js
jjs> var a = 1
jjs> var b = 4
jjs> print (a+b)
5
jjs>
```

As you may have already figured out, you don’t have to write the code into the jjs shell. You can write the code into a JavaScript source file, and then call it from the shell. Consider the following JavaScript code:

```js
var isPrime = function(num) {
    if (isNaN(num) || !isFinite(num) || num < 2) 
        return false;

    var m = Math.sqrt(num);

    for (var i = 2;i <= m; i++) 
        if (num % i === 0) 
            return false;

    return true;
}

var numbers = [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

for (var i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i]))
        print(numbers[i] + " is prime");
    else
        print(numbers[i] + " is not prime");
}
```

Assuming the code is on a file called prime.js, we can run it in the shell, by executing:

```diff
>_ jjs prime.js
2 is prime
3 is prime
4 is not prime
5 is prime
6 is not prime
7 is prime
8 is not prime
9 is not prime
10 is not prime
```

This may remind you of Python code or bash scripting, but it is JavaScript. And to make it more bash-like, Nashorn gives the arguments variable to extract the command line arguments. Consider this example:


```js
if (arguments.length === 0)
    print("No command-line arguments.");
else {
    print("Called with these command-line arguments:");

    for each (cli_arg in arguments) {
        print(cli_arg);
    }
}
```

Running it will give this output (arguments go after --):

```diff
>_ jjs cliargs.js
No command-line arguments.

>_ jjs cliargs.js -- a b "c d e"
Called with these command-line arguments:
a
b
c d e
```

Also, JavaScript can use Java classes and methods. See this example of a multithreaded JavaScript code:

```js
var Thread = Java.type("java.lang.Thread"); 
var Runnable = Java.type('java.lang.Runnable');

var Run1 = Java.extend(Runnable, { 
    run: function() { 
        print("One thread");
        print("One thread");
    } 
}); 

new Thread(function() {
    print("Another thread");
    print("Another thread");
    print("Another thread");
}).start()

new Thread(new Run1()).start();
```

And the output would be:

```ts
Another thread
Another thread
One thread
One thread
Another thread
```

You can tell by the output that the code is multithreaded. By using 
<code>Java.type("java.lang.Thread");</code>
 we can call Java classes inside the JavaScript code. Nashorn allows even going in the other direction, calling JavaScript code inside Java code.

code. Nashorn allows even going in the other direction, calling JavaScript code inside Java code.

```js

package j2js.example;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class Main {

    public static void main(String[] args) {

        ScriptEngine nashorn = new ScriptEngineManager().getEngineByName("nashorn");
        
        try {
            nashorn.eval("print('Am I Java or JavaScript?')");
        } catch (ScriptException e) {
            e.printStackTrace();
        }
    }

}
```

This example just prints the Am I Java or JavaScript? question on line 14, but this is the simplest example of JavaScript code into Java. One can read the whole source code from the JavaScript file, using Java methods, and then pass that code as a String parameter to the eval() method. This would make the JavaScript code to execute inside Java.

## Conclusion

Nowadays JavaScript is everywhere! You may use it for client-side applications, server-side applications, and better yet, sometimes for [both client and server](file:///B:/offline%20website%2016.7Gig/pointsite/www.sitepoint.com/client-server-dart-app-getting-started/index.html). You may use it for [mobile applications](file:///B:/offline%20website%2016.7Gig/pointsite/www.sitepoint.com/native-vs-hybrid-app-development/index.html) or to set up a [small IoT](file:///B:/offline%20website%2016.7Gig/pointsite/www.sitepoint.com/controlling-arduino-nodejs-johnny-five/index.html). And now, with Nashorn, you may use it as a powerful shell-like scripting language, by taking advantage of the simplicity of JavaScript and the rich API of Java.



