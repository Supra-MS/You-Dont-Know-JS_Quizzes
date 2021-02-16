let quizData = [
  {
    "_id": 1,
    "book_name": "Up & Going",
    "chapters": [
      {
        "chapter_id": 1,
        "chapter_name": "Into Programming",
        "quizzes": [
          {
            "answers": [
              "1",
              "2",
              "3",
              "4"
            ],
            "question": "How many expressions are there in the following statement: a = b * 2; ?",
            "correctAnswer": 3,
            "explain": "This statement has four expressions in it: 2 is a literal value expression; b is a variable expression, which means to retrieve its current value; b * 2 is an arithmetic expression, which means to do the multiplication; a = b * 2 is an assignment expression, which means to assign the result of the b * 2 expression to the variable a."
          },
          {
            "answers": [
              "A planned series of future events or performances.",
              "A plan of action to accomplish a specified end.",
              "A set of special instructions to tell the computer what tasks to perform.",
              "A sheet or booklet giving details of items or performers at an event or performance."
            ],
            "question": "What is a computer program (source code / code)?",
            "correctAnswer": 2,
            "explain": "A program, often referred to as source code or just code, is a set of special instructions to tell the computer what tasks to perform. Usually code is saved in a text file, although with JavaScript you can also type code directly into a developer console in a browser."
          },
          {
            "answers": [
              "The arrangement of words and phrases to create well-formed sentences.",
              "A system of communication.",
              "The use of words in a structured and conventional way.",
              "The rules for valid format and combinations of instructions."
            ],
            "question": "What is a computer language (syntax)?",
            "correctAnswer": 3,
            "explain": "The rules for valid format and combinations of instructions is called a computer language, sometimes referred to as its syntax, much the same as English tells you how to spell words and how to create valid sentences using words and punctuation."
          },
          {
            "answers": [
              "Values that are included directly in the source code.",
              "A statement that performs actions with values and variables.",
              "The action of making known one's thoughts or feelings.",
              "Any reference to a variable or value OR a set of variable(s) and value(s) combined with operators."
            ],
            "question": "What is an expression?",
            "correctAnswer": 3,
            "explain": "Statements are made up of one or more expressions. An expression is any reference to a variable or value, or a set of variable(s) and value(s) combined with operators."
          },
          {
            "answers": [
              "Actions are performed with values and variables such as assignment and mathematic multiplication.",
              "The translation of commands is done ahead of time so when the program is executed, what's running is the already translated computer instructions.",
              "Translation of commands is typically done from top to bottom, line by line, every time the program is run.",
              "Changes to values are tracked as your program runs."
            ],
            "question": "Interpreting the code is when... ?",
            "correctAnswer": 2,
            "explain": "Statements like a = b * 2 are helpful for developers when reading and writing, but are not actually in a form the computer can directly understand. So a special utility on the computer (either an interpreter or a compiler) is used to translate the code you write into commands a computer can understand. For some computer languages, this translation of commands is typically done from top to bottom, line by line, every time the program is run, which is usually called interpreting the code."
          },
          {
            "answers": [
              "Changes to values are tracked as your program runs.",
              "Actions are performed with values and variables such as assignment and mathematic multiplication.",
              "Translation of commands is typically done from top to bottom, line by line, every time the program is run.",
              "The translation of commands is done ahead of time so when the program is executed, what's running is the already translated computer instructions."
            ],
            "question": "Compiling is when... ?",
            "correctAnswer": 3,
            "explain": "It's typically asserted that JavaScript is interpreted, because your JavaScript source code is processed each time it's run. But that's not entirely accurate. The JavaScript engine actually compiles the program on the fly and then immediately runs the compiled code."
          },
          {
            "answers": [
              "var newCounter = oldCounter + 1;",
              "var bool = 5 > minimum;",
              "var farm = 'cat' + 'dog' + 'cow';",
              "var even = 4;"
            ],
            "question": "Which of these next expressions has exactly one literal value, one variable, and one operator?",
            "correctAnswer": 3,
            "explain": "Characters like = and * are called operators. They perform actions with the values and variables such as assignment and mathematic multiplication. Variables are like simple boxes you can store any of your stuff in, and should be declared before they are used. In programs, variables hold values to be used by the program. By contrast to variables, literal values are the value itself. For example, 4 or 'cat' is a literal value. In other words, it stands alone without being stored in a variable."
          },
          {
            "answers": [
              "The user cannot view more than one alert() message at a time.",
              "Using alert() will block your user from interacting with your web page until the alert is closed.",
              "The user cannot view more than one console.log() message at a time.",
              "console.log() statements often have an interactive pointer to the line of code that issued the logged statement."
            ],
            "question": "Which of these next statements is NOT true about alert() and console.log()? Remember, you can open the console in your browser and experiment.",
            "correctAnswer": 2,
            "explain": "This statement is not true, because the console can display many log() messages simultaneously (unlike the alert() method, which only displays one at a time). This is what makes console.log() a great tool for debugging your code, and for finding out what's going on under the hood."
          },
          {
            "answers": [
              "var name = console.get('What is your name? ');",
              "var name = prompt('What is your name? ');",
              "var name = console.log('What is your name? ');",
              "var name = alert('What is your name? ');"
            ],
            "question": "Which is the correct way to get input from the user?",
            "correctAnswer": 1,
            "explain": "The prompt() method displays a dialog box that prompts the visitor for input. A prompt box is often used if you want the user to input a value before entering a page. The prompt() method returns the input value if the user clicks 'OK'. If the user clicks 'cancel' the method returns null."
          },
          {
            "answers": [
              "assign, variable, increase",
              "declare, variable, introduce",
              "assign, variable, declare",
              "introduce, variable, declare"
            ],
            "question": "Fill in the blanks: In the expression var num = 20;, the operator = is used to __ the literal value 20 to the ___ num. The keyword var is used to ___ the variable.",
            "correctAnswer": 2,
            "explain": "In the expression var num = 20;, the operator = is used to assign the literal value 20 to the variable num. The keyword var is used to declare the variable."
          },
          {
            "answers": [
              "b == a;",
              "var counter += 1;",
              "var diff -= 2;",
              "var even *= 2;"
            ],
            "question": "Which of these next expressions is NOT a compound assignment?",
            "correctAnswer": 0,
            "explain": "Compound Assignment examples: -=, *=, and += are compound operators that combine a math operation with assignment, as in a += 2 (same as a = a + 2). The double equal sign == is used to check equality."
          },
          {
            "answers": [
              "-'99' == -99.00;",
              "-'99' == 99;",
              "99 === Number('99');",
              "99 == '99.00';"
            ],
            "question": "Which of these next equations will output the boolean value false? Remember, you can open the console in your browser and experiment.",
            "correctAnswer": 1,
            "explain": "When we use the== loose equals operator to make the comparison like '99.00' == 99.00, JavaScript will convert the left-hand side '99.00' to its number equivalent 99.00. The comparison then becomes 99.00 == 99.00, which is of course true. This is even true when the negative sign is outside of the double quotes, like so: -'99' == -99.00; . However, comparing negative and positive values returns false even when using the loose equals ==."
          },
          {
            "answers": [
              "JavaScript defines a list of specific values that are considered 'falsy' (e.g: 0, ''). Any other value not on the 'falsy' list is automatically 'truthy' (e.g: 99.99, 'free')",
              "The if statement requires an expression that can be treated as either true or false.",
              "You can provide an alternative if the condition is not true, called an else clause.",
              "The code: if true { console.log('this is true!'); } is written in valid syntax and will print out the string."
            ],
            "question": "Which of these next statements is false?",
            "correctAnswer": 3,
            "explain": "JavaScript requires wrapping the conditional in parentheses, otherwise it returns a syntax error. You can test this by running the code if true { console.log('this is true!'); } in your browser console. Remember to also try running the same code with parentheses around the conditional."
          },
          {
            "answers": [
              "Each function gets its own scope, which includes a collection of variables as well as the rules for how those variables are accessed. This allows us to be in better control of our variables and prevent bugs.",
              "Functions allow us to split our code into reusable pieces which saves time and energy.",
              "Functions make our code more readable.",
              "All functions use loops (for, while, or do...while), which shorten our code significantly."
            ],
            "question": "Which of these next statements is NOT an example of how functions improve our code?",
            "correctAnswer": 3,
            "explain": "A function does not have to include a loop in order to save us time and make our code more readable. Some functions only have one line of code, for example console.log() (as shown in the chapter's examples)"
          },
          {
            "answers": [
              "types",
              "values",
              "variables",
              "operators"
            ],
            "question": "Fill in the blank: You need ___ to perform actions on values.",
            "correctAnswer": 3,
            "explain": "The =, +, /, and * characters are examples of operators. They perform actions with the values and variables such as assignment, summation, division and mathematic multiplication."
          },
          {
            "answers": [
              "functions",
              "loops",
              "if statements",
              "variables"
            ],
            "question": "Fill in the blank: You need ___ to store data (aka state) during the execution of your program.",
            "correctAnswer": 3,
            "explain": "Variables are like simple boxes you can store any of your stuff in. In programs, variables hold values (like the number 42) to be used by the program. Think of them as symbolic placeholders for the values themselves."
          },
          {
            "answers": [
              "functions, scope",
              "strings, 'Hello, Worlds'",
              "conditionals, if statements",
              "loops, do...while"
            ],
            "question": "You need ___ like ___ to make decisions.",
            "correctAnswer": 2,
            "explain": "Conditionals are just simple 'yes or no' questions used to make decisions. Does my account have enough balance to purchase this?. The most common conditional is an if statement."
          },
          {
            "answers": [
              "variables",
              "conditionals",
              "operators",
              "loops"
            ],
            "question": "You need ___ to repeat tasks until a condition stops being true.",
            "correctAnswer": 3,
            "explain": "Repeating a set of actions until a certain condition fails -- in other words, repeating only while the condition holds -- is the job of programming loops. Loops can take different forms, but they all satisfy this basic behavior."
          },
          {
            "answers": [
              "functions",
              "loops",
              "conditionals",
              "operators"
            ],
            "question": "You need ___ to organize your code into logical and reusable chunks.",
            "correctAnswer": 0,
            "explain": "A function is generally a named section of code that can be 'called' by name, and the code inside it will be run each time. Functions are often used for code that you plan to call multiple times, but they can also be useful just to organize related bits of code into named collections, even if you only plan to call them once."
          }
        ]
      },
      {
        "chapter_id": 2,
        "chapter_name": "Into Javascript",
        "quizzes": [
          {
            "answers": [
              "string, operator, boolean",
              "object, number, null",
              "boolean, scope, number",
              "undefined, string literal, object"
            ],
            "question": "Which of the following are ALL built-in types of values?",
            "correctAnswer": 1,
            "explain": "JavaScript has typed values, not typed variables. The following built-in types are available: string, number, boolean, null and undefined, object, symbol (new to ES6)"
          },
          {
            "answers": [
              "var",
              "obj",
              "typeof",
              "return"
            ],
            "question": "What is the operator that can be used to find out the type of a value?",
            "correctAnswer": 2,
            "explain": "JavaScript provides a typeof operator that can examine a value and tell you what type it is. The return value from the typeof operator is always one of six (seven as of ES6! - the 'symbol' type) string values. That is, typeof 'abc' returns 'string', not string."
          },
          {
            "answers": [
              "boolean",
              "object",
              "undefined",
              "number"
            ],
            "question": "What is the return value of: typeof null?",
            "correctAnswer": 1,
            "explain": "typeof null is an interesting case, because it errantly returns 'object', when you'd expect it to return 'null' (just like typeof undefined returns undefined). You can run this command in your console and see for yourself."
          },
          {
            "answers": [
              "True",
              "False",
              "undefined",
              "syntax error"
            ],
            "question": "What is the return value of: typeof [1,2,3] === typeof {val: 'a', val: 'b', val: 'c'}; ?",
            "correctAnswer": 0,
            "explain": "Arrays are special objects, so the typeof of both expressions are objects and the return value is true. Run both expressions in your console to see that the return value of typeof [1,2,3] and typeof {1, 2, 3} is object."
          },
          {
            "answers": [
              "with dot notation OR bracket notation",
              "by the values corresponding to the properties",
              "with the object's prototype",
              "the same as in an array"
            ],
            "question": "In which ways can properties be accessed in an object?",
            "correctAnswer": 0,
            "explain": "Properties can either be accessed with dot notation (i.e., obj.a) or bracket notation (i.e., obj'a'). Dot notation is shorter and generally easier to read, and is thus preferred when possible."
          },
          {
            "answers": [
              "the maximum length of values they can hold",
              "positions in arrays begin from 0 and in objects from 1",
              "arrays hold values with indexed positions instead of key/value pairs",
              "anything can be stored in objects but only strings and numbers in an array"
            ],
            "question": "What is the main difference between an array and an object?",
            "correctAnswer": 2,
            "explain": "An array is an object that holds values (of any type) not particularly in named properties/keys, but rather in numerically indexed positions. Languages that start counting at zero, like JS does, use 0 as the index of the first element in the array."
          },
          {
            "answers": [
              "values",
              "count",
              "limit",
              "length"
            ],
            "question": "Which of the following is an array property?",
            "correctAnswer": 3,
            "explain": "Because arrays are special objects (as typeof implies), they can also have properties, including the automatically updated length property."
          },
          {
            "answers": [
              "to have numeric properties (keys)",
              "to only store strings",
              "to hold pairs of named properties and values",
              "to find out the count of properties"
            ],
            "question": "What is the most appropriate use of an object?",
            "correctAnswer": 2,
            "explain": "You theoretically could use an array as a normal object with your own named properties, or you could use an object but only give it numeric properties (0, 1, etc.) similar to an array. However, this would generally be considered improper usage of the respective types. The best and most natural approach is to use arrays for numerically positioned values and use objects for named properties."
          },
          {
            "answers": [
              "natural and unnatural",
              "implicit and explicit",
              "normal and abnormal",
              "equal and unequal"
            ],
            "question": "What are the types of coercion (conversion from one type to another)?",
            "correctAnswer": 1,
            "explain": "Coercion comes in two forms in JavaScript: explicit and implicit. Explicit coercion is simply that you can see obviously from the code that a conversion from one type to another will occur, whereas implicit coercion is when the type conversion can happen as more of a non-obvious side effect of some other operation."
          },
          {
            "answers": [
              "var b = Number( '5' );",
              "var b = '5' * 1;",
              "var b = 'Hello, world' * 1;",
              "var b = String( 5 );"
            ],
            "question": "Which of these next statements is an implicit coercion (conversion from one type to another)?",
            "correctAnswer": 1,
            "explain": "Implicit coercion is when the type conversion can happen as more of a non-obvious side effect of some other operation, such as multiplication by 1 in the second answer."
          },
          {
            "answers": [
              "true / true",
              "false / true",
              "true / false",
              "false / false"
            ],
            "question": "If var a = 42 and var b = '42', what will the statements a === b AND a == b return?",
            "correctAnswer": 1,
            "explain": "== checks for value equality with coercion allowed, and === checks for value equality without allowing coercion; === is often called 'strict equality' for this reason. In the a == b comparison, JS notices that the types do not match, so it goes through an ordered series of steps to coerce one or both values to a different type until the types match, where then a simple value equality can be checked. The a === b produces false, because the coercion is not allowed, so the simple value comparison obviously fails."
          },
          {
            "answers": [
              "it is automatically declared and hoisted to the top of its scope",
              "it becomes available only in inner/lower scopes",
              "it is automatically created in the top-level global scope",
              "it makes the code easier to maintain"
            ],
            "question": "What happens when you assign a variable that has not yet been declared?",
            "correctAnswer": 2,
            "explain": "If you try to set a variable that hasn't been declared, you'll either end up creating a variable in the top-level global scope (bad!) or getting an error, depending on 'strict mode' (see 'Strict Mode')."
          },
          {
            "answers": [
              "If either value (aka side) in a comparison could be the true or false value.",
              "If either value in a comparison could be 0.",
              "If either value in a comparison could be undefined.",
              "If either value in a comparison could be an empty string '' or an empty array []."
            ],
            "question": "In which of these cases would we probably be safe using == rather than === for comparison?",
            "correctAnswer": 2,
            "explain": "You should avoid using == and use === in these incidents: (1) If either value (aka side) in a comparison could be the true or false value. (2) If either value in a comparison could be of these specific values: 0, '', or [] -- empty array. In all other cases, you're safe to use ==. Not only is it safe, but in many cases it simplifies your code in a way that improves readability."
          },
          {
            "answers": [
              "a < 20 ? true : false",
              "a < 20 : false ? true",
              "a < 20 : true : false",
              "a < 20 ? false : true"
            ],
            "question": "If a === 5, which of the following is a correct use of the ternary operator and returns true?",
            "correctAnswer": 0,
            "explain": "Another form of conditional in JavaScript is the 'conditional operator,' often called the 'ternary operator. It's like a more concise form of a single if..else statement. If the test expression evaluates as true, the first clause true results, otherwise the second clause false results."
          },
          {
            "answers": [
              "var counter;",
              "var _sumOf5;",
              "var 5thItem;",
              "var $amount;"
            ],
            "question": "Which of these next variable names is NOT a valid identifier?",
            "correctAnswer": 2,
            "explain": "An identifier must start with a-z, A-Z, $, or _. It can then contain any of those characters plus the numerals 0-9."
          },
          {
            "answers": [
              "When you declare a variable, it is only available anywhere in that scope.",
              "When you declare a variable, it is available anywhere in that scope, as well as any sibling scopes.",
              "When you declare a variable, it is available anywhere in that scope, as well as any upper/outer scopes.",
              "When you declare a variable, it is available anywhere in that scope, as well as any lower/inner scopes."
            ],
            "question": "Which of these next statements is true about scopes?",
            "correctAnswer": 3,
            "explain": "When you declare a variable, it is available anywhere in that scope, as well as any lower/inner scopes. This means that if you declare a function within a function, the outer function is able to access the variables declared inside it's child function. However, the child/inner function cannot access it's parent/outer function's scope."
          },
          {
            "answers": [
              "SyntaxError",
              "ReferenceError",
              "InternalError",
              "TypeError"
            ],
            "question": "What will happen if you try to access a variable's value in a scope where it's not available?",
            "correctAnswer": 1,
            "explain": "If you try to access a variable's value in a scope where it's not available, you'll get a ReferenceError thrown. The ReferenceError object represents an error when a non-existent variable is referenced. If you try to set a variable that hasn't been declared, you'll either end up creating a variable in the top-level global scope (bad!) or getting an error (depending on 'strict mode'). You can try this out in your console, and see for yourself."
          },
          {
            "answers": [
              "ES5 added a 'strict mode' to the language, which is seen as keeping the code to a safer and more appropriate set of guidelines.",
              "One key difference (improvement!) with strict mode is disallowing the implicit auto-global variable declaration from omitting the var.",
              "To invoke strict mode for an entire script, put the exact statement use strict mode; (or use strict mode;) before any other statements.",
              "You can opt in to strict mode for an individual function, or an entire file, depending on where you put the strict mode pragma."
            ],
            "question": "Which of these statements is NOT true about strict mode?",
            "correctAnswer": 2,
            "explain": "To invoke strict mode for an entire script, put the exact statement use strict;"
          },
          {
            "answers": [
              "(function (){ console( 'Hello!' ); })();",
              "function (){ console.log( 'Hello!' ); }();",
              "function (){ console.log( 'Hello!' ); }",
              "(function (){ console.log( 'Hello!' ); })();"
            ],
            "question": "Which of the lines below will print 'Hello!' to the console when executed?",
            "correctAnswer": 3,
            "explain": "Immediately Invoked Function Expressions (IIFE) is a way to execute a function expression. It requires an outer set of parentheses ( .. ) that surrounds the function expression. It also requires a final set of parentheses at the end of the expression, which is what actually executes the function expression referenced immediately before it."
          },
          {
            "answers": [
              "Taking the definition of a newer feature and producing code that offers equivalent behavior, but is able to run in newer JS environments.",
              "Taking the definition of a newer feature and producing code that offers equivalent behavior, but is able to run in older JS environments.",
              "A way to 'remember' and continue to access the scope of a function (its variables) even once the function has finished running.",
              "A way to 'remember' and continue to access the scope of a function (its variables) even before the function started running."
            ],
            "question": "What is Polyfilling?",
            "correctAnswer": 1,
            "explain": "The word 'polyfill' is an invented term used to refer to taking the definition of a newer feature and producing a piece of code that's equivalent to the behavior, but is able to run in older JS environments. For example, ES6 defines a utility called Number.isNaN(..) to provide an accurate non-buggy check for NaN values, deprecating the original isNaN(..) utility. But it's easy to polyfill that utility so that you can start using it in your code regardless of whether the end user is in an ES6 browser or not."
          },
          {
            "answers": [
              "A way to define private implementation details (variables, functions), as well as a public API that is accessible from the outside.",
              "A way to define public implementation details (variables, functions), as well as a private API that is not accessible to the outside.",
              "Using a tool that converts your older code into newer code equivalents.",
              "Using a tool that converts your newer code into older code equivalents."
            ],
            "question": "What is Transpiling?",
            "correctAnswer": 3,
            "explain": "Transpiling is using a tool that converts your newer code into older code equivalents. The term combines the terms for transforming + compiling. Essentially, your source code is authored in the new syntax form, but what you deploy to the browser is the transpiled code in old syntax form. You typically insert the transpiler into your build process, similar to your code linter or your minifier."
          },
          {
            "answers": [
              "var a = Object.assign({}, { foo : 'bar'})",
              "console.log('Hello World!');",
              "var el = document.getElementById( 'foo' );",
              "alert(document.URL);"
            ],
            "question": "Which of the following expressions is controlled by JavaScript specification?",
            "correctAnswer": 0,
            "explain": "The document variable exists as a global variable when your code is running in a browser. It's not provided by the JS engine, nor is it particularly controlled by the JavaScript specification. Similarly alert(..) and console.log(..) is provided to your JS program by the browser, not by the JS engine itself. The call you make sends the message to the browser internals and it handles drawing, displaying the message box or logging the message to console."
          },
        ]
      }
    ]
  },

  {
    "_id": 2,
    "book_name": "Scopes & Closures",
    "chapters": [
      {
        "chapter_id": 1,
        "chapter_name": "What is Scope?",
        "quizzes": [
          {
            "answers": [
              "The ability for a program to execute",
              "The ability for a program to be compiled",
              "The ability to store values and pull values out of variables",
              "The process of creating an Abstract Syntax Tree"
            ],
            "question": "What gives a program state?",
            "correctAnswer": 2,
            "explain": "A program is described as stateful if it is designed to remember preceding events or user interactions. The remembered information is called the state. Without state, a program could perform some tasks, but they would be extremely limited in functionality."
          },
          {
            "answers": [
              "Tokenizing/Lexing, Parsing, Code-Generation",
              "Tokenizing/Lexing, Code-Generation, Parsing",
              "Parsing, Code-Generation, Tokenizing/Lexing",
              "Code-Generation, Tokenizing/Lexing, Parsing"
            ],
            "question": "In a traditional compiled-language process, what is the correct order of the three main steps a program will undergo before executing?",
            "correctAnswer": 0,
            "explain": "Tokenizing/Lexing is the process of breaking up a string of characters into meaningful chunks called tokens. Parsing is the act of taking a stream of tokens and turning it into a tree of nested elements which represent the structure of the program. Code-Generation is the process of taking the tree and turning it into executable code."
          },
          {
            "answers": [
              "Code-generation phase",
              "Parsing phase",
              "Execution phase",
              "Tokenizing/Lexing phase"
            ],
            "question": "In a traditional compiled-language process, during which phase is a string of characters broken into meaningful chunks?",
            "correctAnswer": 3,
            "explain": "A string of characters is broken into meaningful chunks during the tokenization/lexing phase. A token is a string with an assigned meaning. It is structured as a pair consisting of a token name and optional token value. Some common token names include: Identifiers, Keywords, Separators, operators, and literals."
          },
          {
            "answers": [
              "Parsing and code-generation",
              "Collecting and maintaining a look-up list of all declared variables",
              "Start-to-Finish compilation and execution of the javaScript program",
              "Taking a stream of tokens and turning it into a tree of nested elements"
            ],
            "question": "Which of the following is the responsibility of Scope?",
            "correctAnswer": 1,
            "explain": "The Scope is responsible for maintaining a look-up list of all declared identifiers and enforcing a strict set of rules as to how these are accessible to currently executing code."
          },
          {
            "answers": [
              "Compiler declares a variable (if not previously declared) while simultaneously Engine looks up the variable in Scope and assigns to it, if found.",
              "Compiler declares a variable regardless of whether or not it was previously declared, while simultaneously Engine looks up the variable in Scope and assigns to it.",
              "First, Compiler declares a variable (if not previously declared in the current scope), and second, when executing, Engine looks up the variable in Scope and assigns to it, if found.",
              "First, Engine declares a variable (if not previously declared in the current scope), and second, when executing, Compiler looks up the variable in Scope and assigns to it, if found."
            ],
            "question": "Two distinct actions are taken for a variable assignment such as var a = 2;",
            "correctAnswer": 2,
            "explain": "Two distinct actions are taken for a variable assignment: First, Compiler declares a variable (if not previously declared in the current scope), and second, when executing, Engine looks up the variable in Scope and assigns to it, if found."
          },
          {
            "answers": [
              "LHS and RHS meaning \"left/right-hand side of an assignment\" always literally mean \"left/right side of the = assignment operator\"",
              "The reference to a in the statements console.log( a ); and in a = 2; is a LHS statement.",
              "In console.log( a ); the reference to a is an LHS reference, while in a = 2; the reference to a is an RHS statement.",
              "In console.log( a ); the reference to a is an RHS reference, while in a = 2; the reference to a is an LHS statement."
            ],
            "question": "Which of the statements below are true?",
            "correctAnswer": 3,
            "explain": "The reference to a in console.log( a ); is an RHS reference, because nothing is being assigned to a here. By contrast, in a = 2; the reference to a is an LHS reference, because we don't actually care what the current value is. We simply want to find the variable as a target for the = 2 assignment operation."
          },
          {
            "answers": [
              "Engine starts looking for a variable at the outermost global scope.",
              "Engine starts looking for a variable at the innermost global scope.",
              "If the variable was not found at the currently executing Scope, Engine keeps going down one level, and so on.",
              "Engine starts looking for the variable at the currently executing Scope."
            ],
            "question": "Which of these next statements is true for traversing nested Scope?",
            "correctAnswer": 3,
            "explain": "Engine starts at the currently executing Scope, looks for the variable there, then if not found, keeps going up one level, and so on. If the outermost global scope is reached, the search stops, whether it finds the variable or not."
          },
          {
            "answers": [
              "Because these two types of look-ups behave differently when the variable has been declared and assigned the value undefined.",
              "Because these two types of look-ups behave differently when the variable has been declared on global Scope vs. the currently executing Scope.",
              "Because these two types of look-ups behave differently when the variable has not yet been declared (is not found in any consulted Scope).",
              "If an LHS look-up fails to ever find a variable, anywhere in the nested Scopes, this results in a ReferenceError being thrown by the Engine."
            ],
            "question": "Why does it matter whether we call it LHS or RHS?",
            "correctAnswer": 2,
            "explain": "The names matter because these two types of look-ups behave differently in the circumstance where the variable has not yet been declared (is not found in any consulted Scope). If an RHS look-up fails to ever find a variable, this results in a ReferenceError being thrown by the Engine. By contrast, if the Engine is performing an LHS look-up and arrives at the top floor (global Scope) without finding it, and if the program is not running in 'Strict Mode', then the global Scope will create a new variable of that name in the global scope."
          },
          {
            "answers": [
              "Taking an abstract syntax tree and converting it into zeroes and ones",
              "Taking a string and converting it into tokens",
              "Taking a string and converting it into assembly",
              "Taking a stream of tokens and converting them into an abstract syntax tree"
            ],
            "question": "What is Parsing?",
            "correctAnswer": 3,
            "explain": "Parsing is typically thought of as taking a string of text and making sense of it. However, the string of text is actually converted into tokens first. Parsing is actually taking the tokens and making them useful by converting them into an abstract syntax tree"
          },
          {
            "answers": [
              "Find all unused code and remove it before code generation",
              "Handling all the dirty work of parsing and code-generation",
              "Writing JavaScript code that is missing from the file",
              "Start-to-finish compilation and execution of our JavaScript program"
            ],
            "question": "What is the responsibility of a JavaScript engine?",
            "correctAnswer": 3,
            "explain": "The engine is the entirety of what reads and executes your code. Each browser has their own engine as does Node (built on Chrome's V8 JavaScript engine)."
          },
          {
            "answers": [
              "LHS looks for the variable container whereas RHS looks for the value of the variable",
              "LHS looks for the existence of a variable whereas RHS looks for the history of that variable",
              "LHS lookups search for variables whereas RHS search for values",
              "LHS looks for assignment operator whereas RHS looks for the value to be assigned"
            ],
            "question": "What is the difference between an LHS lookup and an RHS lookup?",
            "correctAnswer": 0,
            "explain": "LHS stands for 'left hand side', and RHS stands for 'right hand side'. For a = b, the RHS looks for the value of b, and the LHS looks for the location of a in memory, so that it can update its value."
          },
          {
            "answers": [
              "1",
              "2",
              "3",
              "4"
            ],
            "question": "How many LHS look-ups are in the code below:\nfunction foo(a){\n  var b = a; \n  return a + b\n}\n\nvar c = foo( 2 );",
            "correctAnswer": 2,
            "explain": "c = .., a = 2 (implicit param assignment) and b = .."
          },
          {
            "answers": [
              "1",
              "2",
              "3",
              "4"
            ],
            "question": "How many RHS look-ups are in the code below:\nfunction foo(a){\n  var b = a; \n  return a + b\n}\n\nvar c = foo( 2 );",
            "correctAnswer": 3,
            "explain": "foo(2.., = a;, a + .. and .. + b"
          },
          {
            "answers": [
              "ReferenceError",
              "SyntaxError",
              "TypeError",
              "EvalError"
            ],
            "question": "If an RHS look-up fails to find a variable, what kind of error is thrown?",
            "correctAnswer": 0,
            "explain": "A ReferenceError is thrown when trying to dereference a variable that has not been declared. The only way for an RHS look-up to fail is if the variable has not been declared."
          },
        ]
      },
      {
        "chapter_id": 2,
        "chapter_name": "Lexical Scope",
        "quizzes": [
          {
            "answers": [
              "At run-time",
              "At author-time",
            ],
            "question": "When is scoping determined in JavaScript?",
            "correctAnswer": 1,
            "explain": "In JavaScript, scoping is lexical. It is based on where variables and blocks of scope are authored, by you, at write time, and thus is (mostly) set in stone by the time the lexer processes your code."
          },
          {
            "answers": [
              "ReferenceError",
              "2 4 12",
              "2 4 undefined",
              "undefined undefined undefined"
            ],
            "question": "What is logged to the console when the following code is executed:\n\nfunction foo(a) {\n    var b = a * 2;\n    function bar(c) {\n        console.log( a, b, c );\n    }\n    bar(b * 3);\n}\nfoo( 2 );",
            "correctAnswer": 1,
            "explain": "c is scoped to bar, a and b are scoped to foo. bar looks for a and b in its local scope, but can't find it, so checks its outer scope, foo, where it finds variables a and b. bar looks for c in its local scope, and finds it."
          },
          {
            "answers": [
              "undefined",
              "null",
              "1",
              "2"
            ],
            "question": "What is logged to the console when the following code is executed:\n\nfunction foo() {\n    const a = 2\n    function bar() {\n        console.log(a);\n    }\n    bar();\n}\nconst a = 1\nfoo();",
            "correctAnswer": 3,
            "explain": "c is scoped to bar, a and b are scoped to foo. bar looks for a and b in its local scope, but can't find it, so checks its outer scope, foo, where it finds variables a and b. bar looks for c in its local scope, and finds it."
          },
          {
            "answers": [
              "undefined",
              "ReferenceError",
              "5",
              "10"
            ],
            "question": "What is logged to the console when the following code is executed:\n\nfunction bar(b) {\n    console.log(a);\n}\nfunction foo() {\n    const a = 5\n    bar(10);\n}\nfoo();",
            "correctAnswer": 1,
            "explain": "bar does not have a in its scope, so the engine looks in its outer scope, the global scope. It does not see an a, so it throws a ReferenceError."
          },
          {
            "answers": [
              "undefined",
              "ReferenceError",
              "7",
              "9"
            ],
            "question": "What is logged to the console when the following code is executed:\n\nlet a;\nfunction bar(b) {\n    console.log(a);\n}\nfunction foo() {\n    const a = 7\n    bar(9);\n}\nfoo();",
            "correctAnswer": 0,
            "explain": "bar does not have a in its scope, so the engine looks in its outer scope, the global scope. It sees a, but notices that there is no value assigned to it, thus it is undefined."
          },
          {
            "answers": [
              "null",
              "nothing is logged to the console",
              "1",
              "undefined"
            ],
            "question": "What is logged to the console when the following code is executed and the user clicks the button:\n\nconst button = document.querySelector('button');\n\nfunction bar() {\n    const b = 1\n    console.log(b)\n    button.addEventListener('click', bar)\n}",
            "correctAnswer": 1,
            "explain": "bar never gets called, so console.log(b) is never executed."
          },
          {
            "answers": [
              "5",
              "ReferenceError",
              "7",
              "undefined"
            ],
            "question": "What is logged to the console when the following code is executed:\n\nfunction bar(b) {\n    function baz(a) {\n        console.log(a)\n    }\n    const a = 7\n}\nfunction foo(a) {\n    a = 5;\n    baz(a)\n}\nfoo(4);",
            "correctAnswer": 1,
            "explain": "We first call foo with a value of 4. Inside foo, a's value is changed from 4 to 5. We then try to call baz. baz is not in foo's scope, so the engine looks at the outer scope, the global scope. It does not find baz, so it throws a ReferenceError."
          },
          {
            "answers": [
              "eval and with",
              "eval and innerHTML",
              "this and eval",
              "this and with"
            ],
            "question": "Which two mechanisms in JavaScript can \"cheat\" lexical scope?",
            "correctAnswer": 0,
            "explain": "with and eval are the only mechanisms that allow code to be executed dynamically which means they can 'cheat' lexical scope."
          },
          {
            "answers": [
              "They are not readable",
              "They prevent the engine from using some or all of its optimizations",
              "There is no reason to not use them",
              "They are not implemented in all browsers"
            ],
            "question": "There are two mechanisms in JavaScript that can \"cheat\" lexical scope. Why should they not be used?",
            "correctAnswer": 1,
            "explain": "If the Engine finds an eval(..) or with in the code, it essentially has to assume that all its awareness of identifier location may be invalid, because it cannot know at lexing time exactly what code you may pass to eval(..) to modify the lexical scope, or the contents of the object you may pass to with to create a new lexical scope to be consulted."
          },
        ]
      },
      {
        "chapter_id": 3,
        "chapter_name": "Function vs Block Scope",
        "quizzes": [
          {
            "answers": [
              "ES6 classes",
              "The code is injected and inserted as is",
              "They use global namespaces",
              "They are each wrapped in an IIFE"
            ],
            "question": "What is going on under the hood when importing modules to prevent collisions?",
            "correctAnswer": 3,
            "explain": "IIFEs are used to 'insert' code without collisions. The IIFE gives each module its own scope which allows it to use whatever non-global variables it wants without side effects."
          },
          {
            "answers": [
              "You don't actually want to name your functions if possible because then you can't use IIFEs",
              "Browser optimization",
              "Easier debugging",
              "You have to name all functions, so this is a moot point"
            ],
            "question": "What is the main reason you should name your functions?",
            "correctAnswer": 2,
            "explain": "If you are debugging an error, you might check the stack trace. If you encounter an anonymous function in the stack trace, you can't easily know which function it is referring to."
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "JavaScript did not have a concept of block scoping before ES6",
            "correctAnswer": 1,
            "explain": "Technically, it had block scoping in catch blocks as early as ES3. Standard block scoping was introduced in ES6 via let and const."
          },
          {
            "answers": [
              "undefined",
              "0",
              "ReferenceError",
              "null"
            ],
            "question": "What will be logged to the console upon execution of the code below:\n\n{let i = 0}\nconsole.log(i)",
            "correctAnswer": 2,
            "explain": "Because let is block scoped, i is only within scope inside the curly braces in the first line, not in the global scope."
          },
          {
            "answers": [
              "null",
              "ReferenceError",
              "undefined",
              "0"
            ],
            "question": "What will be logged to the console upon execution of the code below:\n\n{var i = 0}\nconsole.log(i)",
            "correctAnswer": 3,
            "explain": "Because var is not block scoped, i is stored in the global scope."
          },
        ]
      },
      {
        "chapter_id": 4,
        "chapter_name": "Hoisting",
        "quizzes": [
          {
            "answers": [
              "3",
              "null",
              "undefined",
              "a"
            ],
            "question": "What will be logged to the console upon execution of the code below:\n\na = 3\nvar a;\nconsole.log(a)",
            "correctAnswer": 0,
            "explain": "var a is 'hoisted' before the other lines of code are executed, thus by the time the engine executes the assignment and console logging, var a will have been declared and available."
          },
          {
            "answers": [
              "undefined",
              "a",
              "null",
              "3"
            ],
            "question": "What will be logged to the console upon execution of the code below:\n\nconsole.log(a)\nvar a = 3;",
            "correctAnswer": 0,
            "explain": "var a is 'hoisted' before the other lines of code are executed. By the time the engine executes the console.log, var a will have been declared, but the definition will not have occurred."
          },
          {
            "answers": [
              "undefined",
              "TypeError",
              "'hello'",
              "ReferenceError"
            ],
            "question": "What will be logged to the console upon execution of the code below:\n\nfoo();\nvar foo = function() {\n    console.log('hello')\n};",
            "correctAnswer": 1,
            "explain": "var foo is 'hoisted' but the function is not. By the time the engine executes the first line, var foo will have been declared, so it is not a ReferenceError. We try to call it as a function, but its value is undefined which leaves us with a TypeError."
          },
          {
            "answers": [
              "1",
              "2",
              "1 and then 2",
              "2 and then 1"
            ],
            "question": "What will be logged to the console upon execution of the code below:\n\nfoo();\nvar foo;\nfunction foo() {\n\tconsole.log( 1 );\n}\nfoo = function() {\n\tconsole.log( 2 );\n};",
            "correctAnswer": 0,
            "explain": "Because functions are 'hoisted' before variables, function foo gets hoisted before var foo, and ultimately var foo is ignored."
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "Declarations themselves are hoisted, but assignments, even assignments of function expressions, are not hoisted.",
            "correctAnswer": 0,
            "explain": "The compiler does a first pass through your code to determine lexical scope. This is what is known as 'hoisting'."
          },
        ]
      },
      {
        "chapter_id": 5,
        "chapter_name": "Closures",
        "quizzes": [
          {
            "answers": [
              "When a function returns another function, it is said to have a closure over the second function",
              "When a function is nested within another function",
              "The ability of a function to access its lexical scope when that function is executing outside its lexical scope.",
              "When a function is used as a callback"
            ],
            "question": "What is closure?",
            "correctAnswer": 2,
            "explain": "Another way to explain closure is to say that functions always have access to their lexical scope, no matter how or when they are called."
          },
          {
            "answers": [
              "undefined",
              "null",
              "1",
              "2"
            ],
            "question": "What is logged to the console after executing the code below:\nvar a = 1\nfunction foo() {\n  var a = 2;\n  function bar() {\n    console.log( a );\n  }\n  return bar;\n}\nvar baz = foo();\n baz();",
            "correctAnswer": 3,
            "explain": "foo returns the function bar which is assigned to baz. bar still has access to a in foo even after foo has been called because of closure."
          },
          {
            "answers": [
              "When arrow functions are executed",
              "When shadowing occurs",
              "When functions are passed around as variables and then executed",
              "When this is used in a function"
            ],
            "question": "When is closure observed?",
            "correctAnswer": 2,
            "explain": "Because closure is just a function accessing lexical scope when it's executed outside of its lexical scope, that can only happen if the function is passed around as a variable"
          },
          {
            "answers": [
              "yes",
              "no",
            ],
            "question": "Is closure observed when the code below is executed:\nfunction wait(message) {\n  setTimeout( function timer(){\n    console.log( message );\n  }, 1000 );\n}\nwait( \"Hello!\" );",
            "correctAnswer": 0,
            "explain": "wait gets executed immediately, but timer executes every 1000ms, and it still can access message."
          },
          {
            "answers": [
              "6 is printed 5 times at one second intervals",
              "1, 2, 3, 4, 5 are printed each at one second intervals",
              "6 is printed 5 times all at 6 seconds",
              "1, 2, 3, 4, 5 are printed all at 6 seconds"
            ],
            "question": "What happens when this code is executed:\n\nfor (var i=1; i<=5; i++) {\n  setTimeout( function timer(){\n    console.log( i );\n  }, i*1000 );\n}",
            "correctAnswer": 0,
            "explain": "setTimeout is executed immediately which means the i in i*1000 is what you would expect. However, timer does not get executed immediately. By the time timer is executed, the loop is finished, and i has a value of 6."
          },
        ]
      },
    ]
  },
  {
    "_id": 3,
    "book_name": "this & Object Prototypes",
    "chapters": [
      {
        "chapter_id": 1,
        "chapter_name": "this or That?",
        "quizzes": [
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "When 'this' is used in a function, it refers to that function itself.",
            "correctAnswer": 1,
            "explain": "'this' can refer to many different elements depending on how the function is called."
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "When 'this' is used in a function, it refers to that function's scope.",
            "correctAnswer": 1,
            "explain": "'this' can refer to many different elements depending on how the function is called."
          },
          {
            "answers": [
              "`this` mechanism provides an elegant way of implicitly \"passing along\" an object reference, leading to clean API design and easy re-use.",
              "It is generally regarded as bad practice and should not be used",
              "It allows you to do things in JavaScript that you can't do without it",
              "It helps filter out less experienced JavaScript developers"
            ],
            "question": "Why is `this` helpful?",
            "correctAnswer": 0,
            "explain": "The more complex your usage pattern is, the more clearly you'll see that passing context around as an explicit parameter is often messier than passing around a this context."
          },
          {
            "answers": [
              "undefined",
              "null",
              "1",
              "2"
            ],
            "question": "What is logged to the console in the code below:\nfunction foo() {\n  var a = 2;\n  this.bar();\n}\nfunction bar() {\n  var a = 1\n  console.log( this.a );\n}\nfoo();   ",
            "correctAnswer": 0,
            "explain": "In both uses of the keyword this, it refers to the global object. Because there is no a in the global object, it is undefined."
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "`this` is actually a binding that is made when a function is invoked",
            "correctAnswer": 0,
            "explain": "Because this changes depending on HOW the function was called, its value is unknown at the time the function is defined. It is not like lexical scope which is determined at function definition."
          },
        ]
      }, // End of chapters object inside array
      {
        "chapter_id": 2,
        "chapter_name": "this All Makes Sense Now",
        "quizzes": [
          {
            "answers": [
              "WHAT",
              "HOW",
              "WHEN",
              "WHY"
            ],
            "question": "____ a function is called matters the most when determining the value of `this`.",
            "correctAnswer": 1,
            "explain": "While knowing where the function is called is helpful, the most important part is the HOW. Was it called with call or apply? Or with the new keyword? Was it called via an object? Or was it called regularly?"
          },
          {
            "answers": [
              "The location of your code in memory",
              "The location in code where a function is executed",
              "The location of the server that serves your content",
              "The location in code where a function is declared"
            ],
            "question": "What is a call-site?",
            "correctAnswer": 1,
            "explain": "The call-site is simply where a function is called."
          },
          {
            "answers": [
              "undefined",
              "TypeError",
              "pony",
              "rocket ship"
            ],
            "question": "What is logged to the console when the following code is executed:\n 'use strict'\nfunction foo() {\n  var a = 'pony'\n  console.log( this.a );\n}\nvar a = 'rocket ship';\nfoo();",
            "correctAnswer": 1,
            "explain": "When not in strict mode, default binding rules are valid which means this would be the global object, and the answer would be 'rocket ship'. However, since we are in strict mode, default binding rules do not apply, so this is undefined. Accessing a property of undefined results TypeError."
          },
          {
            "answers": [
              "undefined",
              "null",
              "\"Joanna\"",
              "\"Ralphie\""
            ],
            "question": "What is logged to the console when the following code is executed:\n 'use strict'\nfunction printName() {\n  console.log( this.name );\n}\nvar person = {\n  name: 'Ralphie',\n  printName: printName\n};\nperson.printName();\nlet name = 'Joanna'",
            "correctAnswer": 3,
            "explain": "person has a key printName with a value of printName which refers to the function printName. When person.printName() is executed, the function reference that is stored in person.printName (printName) is executed within the person context, thus the implicit binding rules say that this is person."
          },
          {
            "answers": [
              "undefined",
              "null",
              "\"Joanna\"",
              "\"Ralphie\""
            ],
            "question": "What is logged to the console when the following code is executed:\nvar firstName = 'Joanna';\nfunction printFirstName() {\n  console.log(this.firstName);\n}\nvar person = {\n  firstName: 'Ralphie',\n  printfirstName: printFirstName(),\n};",
            "correctAnswer": 2,
            "explain": "This one is a bit tricky. When printFirstName() is executed, the call-site actually does not have a context object because the call-site does not use the person context to reference the function. The default binding rule is therefore used to explain why the this falls back to the global object where there is a var with firstName of 'Joanna'."
          }
        ]
      },
      {
        "chapter_id": 3,
        "chapter_name": "Objects",
        "quizzes": [
          {
            "answers": [
              "NaN",
              "array",
              "SyntaxError",
              "object"
            ],
            "question": "What is typeof []?",
            "correctAnswer": 3,
            "explain": "Arrays are also a form of objects, with extra behavior. The organization of contents in arrays is slightly more structured than for general objects."
          },
          {
            "answers": [
              "array",
              "undefined",
              "object",
              "function"
            ],
            "question": "What is typeof function () {}?",
            "correctAnswer": 3,
            "explain": "Functions are technically callable objects, thus they are a type of an object. typeof function () {} will return 'function'.",
          },
          {
            "answers": [
              "A class for constructing strings",
              "One of the 5 simple primitive types in JavaScript",
              "A callable object that has many properties/methods",
              "None of the above"
            ],
            "question": "What is String in JavaScript?",
            "correctAnswer": 2,
            "explain": "strings in JavaScript are immutable and have no properties/methods. When you run str.length or str.charAt(3), str is coerced into the object String which has properties length and method charAt.",
          },
          {
            "answers": [
              "in obj",
              "somewhere else that depends on the implementation",
              "in obj.a",
              "in window"
            ],
            "question": "Where is the value 2 stored in var obj = {a: 2}?",
            "correctAnswer": 1,
            "explain": "Values in key-value pairs are not actually stored in the object. The object stores the key and a reference to the value. Exactly how/where it is stored is dependent on the engine implementation.",
          },
          {
            "answers": [
              "true",
              "false",
            ],
            "question": "In objects, property names are always strings",
            "correctAnswer": 0,
            "explain": "If you use any other value besides a string (primitive) as the property, it will first be converted to a string. This even includes numbers, which are commonly used as array indexes, so be careful not to confuse the use of numbers between objects and arrays.",
          }
        ]
      },
      {
        "chapter_id": 4,
        "chapter_name": "Mixing (Up) 'Class' Objects",
        "quizzes": [
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "JavaScript classes work like Ruby's and Python's dynamic classes and unlike Java's and C++'s static classes.",
            "correctAnswer": 0,
            "explain": "JavaScript ES6 classes are objects, which allows us to add and remove fields and methods at runtime."
          },
          {
            "answers": [
              "In a child class, we can store copies of the parent's behaviors if we explicitly program them in.",
              "By default, when a child class inherits from a parent class, the child has a copy of the parent's behaviors.",
              "By default, changing the parent's behaviors does not change the child's behaviors.",
              "It's not possible to inherit behaviors in JavaScript because classes are an abstraction over objects."
            ],
            "question": "Which of the following is true about classes in JavaScript?",
            "correctAnswer": 0,
            "explain": "By default, inheritance in JavaScript works by linking two classes (objects) together, not by copying one over to another. Class copy behavior can be emulated using the mixin pattern (both explicit and implicit), but this usually leads to ugly and brittle syntax like explicit pseudo-polymorphism (OtherObj.methodName.call(this, ...)), which often results in harder to understand and maintain code.",
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "JavaScript does not provide a native mechanism for 'multiple inheritance'.",
            "correctAnswer": 0,
            "explain": "strings in JavaScript are immutable and have no properties/methods. When you run str.length or str.charAt(3), str is coerced into the object String which has properties length and method charAt.",
          },
          {
            "answers": [
              "Explicit mixins are recommended.",
              "Explicit mixins are not native to Javascript while implicit mixins are.",
              "Explicit mixin is when the properties of the parent are copied over to the child.",
              "Explicit mixins are native to JavaScript while implicit mixins are not."
            ],
            "question": "What is the main difference between an explicit mixin and an implicit mixin?",
            "correctAnswer": 2,
            "explain": "Implicit mixin is when there isn't an explicit mixin function that copies all of the properties from the parent to the child. Rather, it is when the parent method is called with the this bound to the child's this",
          },
          {
            "answers": [
              "They are both native to JavaScript",
              "They are both recommended",
              "With either, you cannot always avoid absolutely (as opposed to relatively) referring to the parent",
              "None of the above"
            ],
            "question": "Implicit mixin is when there isn't an explicit mixin function that copies all of the properties from the parent to the child. Rather, it is when the parent method is called with the this bound to the child's this",
            "correctAnswer": 2,
            "explain": "Implicit mixins always require absolutely referring to the parent, and explicit mixins require absolutely referring to the parent when shadowing is desired.",
          }
        ]
      },
      {
        "chapter_id": 5,
        "chapter_name": "Prototypes",
        "quizzes": [
          {
            "answers": [
              "undefined",
              "null",
              "2",
              "3"
            ],
            "question": "What will be logged to the console when the following code is executed: 'use strict' \n var anotherObject = { a: 2 }; \n var myObject = Object.create( anotherObject ); var a = 3; console.log(myObject.a);",
            "correctAnswer": 2,
            "explain": "var myObject = Object.create( anotherObject ); links myObject with anotherObject via the prototype chain. If a key does not exist in myObject, it follows its prototype chain and looks for the key in anotherObject."
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "A for..in loop only iterates over the specified object",
            "correctAnswer": 1,
            "explain": "It also iterates over all enumerable properties in its prototype chain.",
          },
          {
            "answers": [
              "3 2",
              "3 3",
              "2 3",
              "2 2"
            ],
            "question": "What is logged to the console when the following code is executed: var anotherObject = { a: 2 }; var myObject = Object.create( anotherObject ); myObject.a++; console.log(anotherObject.a, myObject.a)",
            "correctAnswer": 2,
            "explain": "Though it may appear that myObject.a++ should (via delegation) look-up and just increment the anotherObject.a property itself in place, instead the ++ operation corresponds to myObject.a = myObject.a + 1. The result is [[Get]] looking up a property via [[Prototype]] to get the current value 2 from anotherObject.a, incrementing the value by one, then [[Put]] assigning the 3 value to a new shadowed property a on myObject.",
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "It is better to think about object oriented programming in JavaScript as Object Links than Classes",
            "correctAnswer": 0,
            "explain": "JavaScript simply does not have classes. ES6 classes are syntactic sugar on top of what are simply just objects.",
          },
          {
            "answers": [
              "undefined ReferenceError",
              "'Meow' 'sleeping...'",
              "'Bark' 'sleeping...'",
              "'Meow' ReferenceError"
            ],
            "question": "What will be logged to the console when the following code is executed: var Dog = { speak: function () { console.log('Bark'); }, sleep: function () { console.log('sleeping...') } }; var Cat = Object.create(Dog); Cat.speak = function () { console.log('Meow') }; Cat.speak()Cat.sleep()",
            "correctAnswer": 1,
            "explain": "Cat has a property speak, but it does not have a property sleep. Because Cat was linked to Dog via Object.create(), and Dog has a property sleep, Dogs sleep property was called.",
          }
        ]
      },
      {
        "chapter_id": 6,
        "chapter_name": "Behavior Delegation",
        "quizzes": [
          {
            "answers": [
              "Functions are delegated as objects",
              "It bridges the gap with the help of ES6 classes",
              "There is no idea of parent and child, just object linkages",
              "Delegation-Oriented Design involves explicit and implicit mixins"
            ],
            "question": "What is the main fundamental concept of Delegation-Oriented Design in comparison to the traditional Object-Oriented Design?",
            "correctAnswer": 2,
            "explain": "Fundamentally, the prototype chain does not have a concept of 'copying' or 'parent creating child'. All it does is chain objects together."
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "In OLOO design, shadowing is a helpful tool used to make API design more robust",
            "correctAnswer": 1,
            "explain": "Having name collisions creates awkward/brittle syntax to disambiguate references (see Chapter 4), and we want to avoid that if we can.",
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "In general, with [[Prototype]] delegation involved, you want state to be on the delegators, not on the delegate",
            "correctAnswer": 0,
            "explain": "In OOD, it is easy to relatively access the state of the parent. In OLOO, this is not the case. There is no easy way to specifically access state relatively, so it makes sense to hold state on the delegators.",
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "If you make B linked to A, and then try to link A to B, you will get an error.",
            "correctAnswer": 1,
            "explain": "You cannot create a cycle where two or more objects are mutually delegated (bi-directionally) to each other.",
          },
          {
            "answers": [
              "There are no real classes in JavaScript, so true OOD is not possible. The language naturally lends itself to OLOO given its focus on objects.",
              "OLOO is a cleaner design than OOD in general",
              "It \'s not a better mental model because OOD and OLOO are the same thing",
              "ES6 is not supported by all browsers"
            ],
            "question": "Which statement below best describes why OLOO is a better mental model than OOD in JavaScript",
            "correctAnswer": 0,
            "explain": "With OLOO there are just objects linked to each other, without needing all the cruft and confusion of things that look (but don't behave!) like classes, with constructors and prototypes and new calls. Ask yourself: if I can get the same functionality with OLOO style code as I do with 'class' style code, but OLOO is simpler and has less things to think about, isn't OLOO better?",
          }
        ]
      },
    ]
  },
  {
    "_id": 4,
    "book_name": "Types & Grammar",
    "chapters": [
      {
        "chapter_id": 1,
        "chapter_name": "Types",
        "quizzes": [
          {
            "answers": [
                "number",
                "long",
                "short",
                "float",
                "int"
            ],
            "question": "Which is a valid JavaScript type for numerical data?",
            "correctAnswer": 0,
            "explain": "Unlike many coding languages, JavaScript has only one primitive numerical type: number. This is used for both integers and floating point values."
          },
          {
            "answers": [
                "undefined",
                "list",
                "object",
                "array"
            ],
            "question": "What is the output of console.log(typeof [])?",
            "correctAnswer": 2,
            "explain": "In JavaScript, arrays are a type of object. There is no 'array' type."
          },
          {
            "answers": [
                "true",
                "false",
                "undefined",
                "TypeError"
            ],
            "question": "What will be logged to the console when the following code is executed: var a = null; console.log(!a && typeof a === 'object');",
            "correctAnswer": 0,
            "explain": "It would have been nice if typeof null returned 'null', but this original bug in JS has persisted for nearly two decades, and will likely never be fixed because there's too much existing web content that relies on its buggy behavior that 'fixing' the bug would create more 'bugs' and break a lot of web software."
          },
          {
            "answers": [
                "if(a !== undefined)...",
                "if (a)...",
                "if(a.isDefined())...",
                "if(typeof a !== 'undefined')..."
            ],
            "question": "What is a good way to safely check if a variable has been declared?",
            "correctAnswer": 3,
            "explain": "All of the other options will throw an error if a has not been declared."
          },
          {
            "answers": [
                "undefined",
                "TypeError",
                "1",
                "2"
            ],
            "question": "What will be logged to the console when the following code is executed: function a(b, c) { var d = 5 return d + 1 }; console.log(a.length);",
            "correctAnswer": 3,
            "explain": ""
          },
        ]
      },
      {
        "chapter_id": 2,
        "chapter_name": "Values",
        "quizzes": [
          {
            "answers": [
                "True",
                "False",

            ],
            "question": "Once an array is assigned data of a particular type, it can only hold data of that type.",
            "correctAnswer": 1,
            "explain": "In JS, arrays are simple containers that can hold any combination of types, including all primitive types, objects, other arrays, and even functions."
          },
          {
            "answers": [
                "undefined",
                "number",
                "null",
                "NaN"
            ],
            "question": "What is the output of console.log(typeof NaN)?",
            "correctAnswer": 1,
            "explain": "An oddity of JavaScript, the property NaN ('not a number') is actually of type 'number'."
          },
          {
            "answers": [
                "True",
                "False",
            ],
            "question": "What is 0.1 + 0.2 === 0.3?",
            "correctAnswer": 1,
            "explain": "The most (in)famous side effect of using binary floating-point numbers (which, remember, is true of all languages that use IEEE 754 -- not just JavaScript as many assume/pretend) is that representations of decimals are not exact."
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "JavaScript strings are immutable",
            "correctAnswer": 0,
            "explain": "You might have thought of string methods as mutating the original string. However, all of the string methods that alter its contents must create and return new strings."
          },
          {
            "answers": [
                "1",
                "Infinity",
                "TypeError",
                "undefined"
            ],
            "question": "What is 1 / 0 in JavaScript?",
            "correctAnswer": 1,
            "explain": "In JS, this operation is well-defined and results in the value Infinity (aka Number.POSITIVE_INFINITY)."
          },
        ]
      },
      {
        "chapter_id": 3,
        "chapter_name": "Natives",
        "quizzes": [
          {
            "answers": [
                "string",
                "object",
                "class",
                "function"
            ],
            "question": "What is logged to the console after the following code is executed: var a = new String( 'abc ); console.log(typeof a); ",
            "correctAnswer": 1,
            "explain": "The result of the constructor form of value creation (new String('abc')) is an object wrapper around the primitive ('abc') value. Importantly, typeof shows that these objects are not their own special types, but more appropriately they are subtypes of the object type."
          },
          {
            "answers": [
                "RegExp()",
                "Symbol()",
                "Error()",
                "Date()"
            ],
            "question": "Which native was added in ES6?",
            "correctAnswer": 1,
            "explain": "Symbol() was added in ES6"
          },
          {
            "answers": [
                "They give JavaScript objects all of their functionality",
                "They allow you to call methods on primitives that aren't objects",
                "They are a mechanism for JavaScript engines to improve performance",
                "They allow for the use of ES6 classes"
            ],
            "question": "What purpose do boxing wrappers serve?",
            "correctAnswer": 1,
            "explain": "Ever wondered why you can call str.length or str.toUpperCase()? Or maybe you just accepted it as fact and didn't think much about it. Primitive types such as string or number get automatically wrapped by boxing wrappers as needed which have methods such as length and toUpperCase."
          },
          {
            "answers": [
                "Boxing is converting from object wrapper to primitive, and unboxing is converting from primitive to object wrapper.",
                "Boxing is merging of your JavaScript files into one, and unboxing is using source maps to undo the merging",
                "Boxing is temporarily coercing one primitive type to another, unboxing is coercing it back to its original type",
                "Boxing is converting from primitive to object wrapper, and unboxing is converting from object wrapper to primitive."
            ],
            "question": "What is 'boxing' and 'unboxing'?",
            "correctAnswer": 3,
            "explain": "Boxing is wrapping a primitive value, and unboxing is extracting the primitive value from a wrapper. Boxing/Unboxing can be done explicitly or implicitly."
          },
          {
            "answers": [
                "True",
                "False"
            ],
            "question": "var a = new String( 'abc' ); is more performant than var a = 'abc';",
            "correctAnswer": 1,
            "explain": "You might think that it would be more performant to use the object wrapper form, so that the engine doesn't have to wrap the primitive. However, engines have been optimizing based on the assumption that almost everyone constructs using primitives, thus they are actually more performant."
          },
        ]
      },
      {
        "chapter_id": 4,
        "chapter_name": "Coercion",
        "quizzes": [
          {
            "answers": [
                "True",
                "False",
            ],
            "question": "Everyone has more or less agreed that implicit coercion is a good feature in JavaScript",
            "correctAnswer": 1,
            "explain": "There are rules for linters to disallow implicit coercion because it can happen unexpectedly if the developer isn't careful. Implicit coercion is a valuable tool once you fully understand how it works."
          },
          {
            "answers": [
                "'6'",
                "'42'",
                "6",
                "42"
            ],
            "question": "What is logged to the console when the following code is executed: var a = '4'; var b = '2'; console.log(a + b);",
            "correctAnswer": 1,
            "explain": "+ means concatenation when any of the operands are strings"
          },
          {
            "answers": [
                "Nothing is actually logged to the console",
                "{}",
            ],
            "question": "What is logged to the console when the following code is executed: var a = {}; if (a) { console.log(a); }",
            "correctAnswer": 1,
            "explain": "There is no such thing as a falsy object in JavaScript"
          },
          {
            "answers": [
                "'405'",
                "405",
                "45",
                "'45'"
            ],
            "question": "What is logged to the console when the following code is executed: console.log(40 + 0 + '5')",
            "correctAnswer": 0,
            "explain": "+ means concatenation when any of the operands are strings"
          },
          {
            "answers": [
                "Nothing is logged to the console",
                "5 2 6 0 9",
                "0",
            ],
            "question": "What is logged to the console when the following code is executed: var a = [5,2,6,0,9]; a.forEach(num => { if (num) { // ...do stuff } else { console.log(num); } });",
            "correctAnswer": 2,
            "explain": "0 is actually falsy which can be unexpected. If you have a list of values and you want to make sure none of them are undefined or null you can't just check if they are truthy."
          },
        ]
      },
      {
        "chapter_id": 5,
        "chapter_name": "Grammar",
        "quizzes": [
          {
            "answers": [
                "It is a statement containing multiple expressions",
                "It is an expression containing multiple statements",
            ],
            "question": "What best describes the code, var a = 3 * 6;",
            "correctAnswer": 0,
            "explain": "Statements are to English sentences as expressions are to English phrases"
          },
          {
            "answers": [
                "43",
                "85",
                "84",
                "undefined"
            ],
            "question": "What is logged to the console when the following code is executed: var a = 42; var b = a++; console.log(a + b);",
            "correctAnswer": 1,
            "explain": "a++ increments a by 1, but the return value of a++ is the previous value of a. So when we get to line 3, a has a value of 43 and b has a value of 42."
          },
          {
            "answers": [
                "'c'",
                "true",
                "false",
                "TypeError"
            ],
            "question": "What is logged to the console when the following code is executed: var obj = { a: {  b: 'c' } } console.log(obj.a && obj.a.b)",
            "correctAnswer": 0,
            "explain": "The && operator doesn't actually return true if both operands are truthy. It returns the last value. Ever get an error when you try to access a.length when a is undefined? You could instead try a && a.length."
          },
          {
            "answers": [
                "ASI is an 'error correction' routine that inserts semicolons to fix parser errors",
                "Mechanism that automatically inserts semicolons in the middle of a line if it notices two statements on one line.",
                "A deprecated system that used to replace commas with semicolons as needed",
            ],
            "question": "What is Automatic Semicolon Insertion (ASI) in JavaScript?",
            "correctAnswer": 0,
            "explain": "There are many opinions on whether semicolons should be used in JavaScript. Per the spec, ASI is an error fixing mechanism which suggests that developers should use semicolons."
          },
          {
            "answers": [
                "'Expression 1 is true. '",
                "'Expression 2 is true.'",
                "'Expression 1 is true. Expression 2 is true.'",
                "''"
            ],
            "question": "What is logged to the console when the following code is executed: var a = b = 1; var c = 2; var d = ''; if (a === b || a === b && b === c) { d += 'Expression 1 is true. '; } if ((a === b || a === b) && b === c) { d += 'Expression 2 is true.'; } console.log(d);",
            "correctAnswer": 0,
            "explain": "You might expect JavaScript expressions to work left to right with the exception that everything in parentheses gets executed first. That is not the case. You might know that, in math, the '' operator executes before '+'. So, 1 + 1 5 = 6, not 7. Similarly, in JavaScript, the && operator executes before ||."
          },
        ]
      }
    ]
  },
  {
    "_id": 5,
    "book_name": "Async & Performance",
    "chapters": [
      {
        "chapter_id": 1,
        "chapter_name": "Asynchrony: Now & Later",
        "quizzes": [
          {
            "answers": [
                "True",
                "False",
            ],
            "question": "console.log() is always executed synchronously",
            "correctAnswer": 1,
            "explain": "While it is up to the hosting environment how they want to implement console, it is often asynchronous because blocking I/O takes a lot of time."
          },
          {
            "answers": [
                "The html for google.com",
                "undefined",
            ],
            "question": "What will be logged to the console when the following code is executed: var data = ajax( 'https://google.com' ); console.log( data );",
            "correctAnswer": 1,
            "explain": "Because ajax is asynchronous, data will not yet be defined when it is logged to the console."
          },
          {
            "answers": [
                "True",
                "False",
            ],
            "question": "Until ES6, JavaScript itself has actually never had any direct notion of asynchrony built into it.",
            "correctAnswer": 0,
            "explain": "What you typically think of asynchrony is often the Web APIs, not the JavaScript engine."
          },
          {
            "answers": [
                "graph",
                "stack",
                "queue",
                "binary tree",
            ],
            "question": "What data structure best explains the event loop?",
            "correctAnswer": 2,
            "explain": "The event loop is FIFO, or first-in-first-out, which is similar to that of a queue."
          },
          {
            "answers": [
                "callbackFn will be executed once 1000ms has elapsed.",
                "callbackFn will be executed in at least 1000ms.",
                "callbackFn will be executed in at most 1000ms.",
            ],
            "question": "What statement about setTimeout(callbackFn, 1000) below is the most accurate.",
            "correctAnswer": 1,
            "explain": "Once the timer is up, the callback will get added to the event loop. If the event loop has 20 items, then the callback will execute once those 20 items are executed."
          },
        ]
      },
      {
        "chapter_id": 2,
        "chapter_name": "Callbacks",
        "quizzes": [
          {
            "answers": [
                "Writing many lines of code within one file",
                "Making so many ajax calls that your page takes forever to load",
                "Manually hardcoding callbacks makes your code so convoluted that it's hard to ever maintain or update it.",
                "When you have several nested callbacks, and your code gets extremely indented",
            ],
            "question": "What is 'callback hell' all about?",
            "correctAnswer": 2,
            "explain": "But the brittle nature of manually hardcoded callbacks (even with hardcoded error handling) is often far less graceful. Once you end up specifying (aka pre-planning) all the various eventualities/paths, the code becomes so convoluted that it's hard to ever maintain or update it. That is what 'callback hell' is all about! The nesting/indentation are basically a side show, a red herring."
          },
          {
            "answers": [
                "The callback is an anonymous function",
                "You are trusting this analytics library to ensure that critical functions get executed",
                "You are using analytics to track a purchase",
                "The functions are named poorly",
            ],
            "question": "What is troubling about the code below: analytics.trackPurchase( purchaseData, function(){ chargeCreditCard();displayThankyouPage(); } );",
            "correctAnswer": 1,
            "explain": "This library could run this critical callback 1 time or 0 times or many times."
          },
          {
            "answers": [
                "Once the callback is run, fail to execute the rest of your code",
                "Fail to pass along any necessary environment/parameters to your callback",
                "Call the callback too few or too many times",
                "Call the callback too late (or never)",
            ],
            "question": "What scenario below is not a potential problem that needs to be handled when using callbacks:",
            "correctAnswer": 0,
            "explain": "Once the callback is run, any issue in your code is not the fault of the callback."
          },
          {
            "answers": [
                "The second option is more performant",
                "Practically, there is no difference",
                "When fn is called on the second option, it will be called with an event argument",
                "The first option will be executed right away, and the second will first be added to the event loop.",
            ],
            "question": "What is the difference between fn() and setTimeout(fn, 0)?",
            "correctAnswer": 3,
            "explain": "setTimeout is handled by the web API, and once the timer is up, it pushes the callback onto the event loop."
          },
          {
            "answers": [
                "ReferenceError",
                "2",
                "1",
                "undefined",
            ],
            "question": "What will be logged to the console when the following code is executed: var a = 1setTimeout(() => console.log(a), 0)for (let i = 0; i < 1000; i++) { }a++",
            "correctAnswer": 1,
            "explain": "The callback gets pushed onto the event loop immediately, but it doesn't run until the call stack is empty which occurs after the for loop and after a++ is executed."
          },
        ]
      },
      {
        "chapter_id": 3,
        "chapter_name": "Promises",
        "quizzes": [
          {
            "answers": [
                "They break asynchrony and coerce the functions into synchronous functions",
                "With Promises, we can expect it to return us a capability to know when its task finishes. Then, our code can decide what to do next.",
                "You promise to fulfill the request by calling the callback function",
                "They require you to send two callback functions: one for success and one for error case.",
            ],
            "question": "How do Promises uninvert the inversion of control?",
            "correctAnswer": 1,
            "explain": "Promises allow you to remain in control when you make a request to a third party library."
          },
          {
            "answers": [
                "undefined",
                "1",
                "2",
                "3",
            ],
            "question": "What will be logged to the console when the following code is executed: let prom1 = new Promise((resolve, reject) => { setTimeout(() => resolve(1), 1000) }) let prom2 = new Promise((resolve, reject) => { setTimeout(() => resolve(2), 500) }) Promise.all([prom1, prom2]).then(function onComplete(results) { const sum = results.reduce((acc, val) => { return acc + val }, 0); console.log(sum) })",
            "correctAnswer": 3,
            "explain": "Promise.all() creates a single promise that resolves when all of the input promises resolve. In the example above, onComplete won't run until prom1 and prom2 have resolved."
          },
          {
            "answers": [
                "10",
                "'uh oh'",
                "10 'uh oh'",
                "undefined",
            ],
            "question": "What will be logged to the console when the following code is executed: let promArr = []; for (let i = 0; i < 10; i++) { promArr.push( new Promise((resolve, reject) => { setTimeout(() => resolve(1), 1000); }) ); } promArr.push( new Promise((resolve, reject) => { setTimeout(() => reject('uh oh'), 1500); }) ); Promise.all(promArr) .then(function onComplete(results) { const sum = results.reduce((acc, val) => { return acc + val; }, 0); console.log(sum); }) .catch(err => console.log(err));",
            "correctAnswer": 1,
            "explain": "If one promise rejects in Promise.all, then they all fail. Even though 10 of the promises passed to Promise.all resolved, we don't have access to the resolved data if one fails."
          },
          {
            "answers": [
                "1",
                "2",
                "[1, 2]",
                "[2, 1]",
            ],
            "question": "What will be logged to the console when the following code is executed: let prom1 = new Promise((resolve, reject) => { setTimeout(() => resolve(1), 1000) }) let prom2 = new Promise((resolve, reject) => { setTimeout(() => resolve(2), 500) }) Promise.race([prom1, prom2]).then(function onComplete(results) { console.log(results) })",
            "correctAnswer": 1,
            "explain": "With Promise.race(), as soon as the first promise resolves, the resolved value is sent to onComplete. Because prom2s timer was for less time than prom1, prom2 won the race."
          },
          {
            "answers": [
                "'uh oh 2'",
                "'uh oh 2' 'uh oh 3'",
                "['uh oh 2' 'uh oh 3']",
                "'uh oh 3"
            ],
            "question": "What will be logged to the console when the following code is executed: const prom1 = Promise.resolve(1); const prom2 = Promise.reject('uh oh 2'); const prom3 = Promise.reject('uh oh 3'); Promise.all([prom1, prom2, prom3]) .then(results => console.log(results)) .catch(err => console.log(err));",
            "correctAnswer": 0,
            "explain": "The error that gets sent to Promise.all.catch() is the rejected value of the first promise to reject. In this case that would be prom2."
          },
        ]
      },
      {
        "chapter_id": 4,
        "chapter_name": "Generators",
        "quizzes": [
          {
            "answers": [
                "3 3",
                "1 1",
                "1 2",
                "2 3",
            ],
            "question": "What will be logged to the console when the following code is executed: var x = 1; function* foo() { x++; yield; x++; } var bar = foo() bar.next() console.log(x) bar.next() console.log(x)",
            "correctAnswer": 3,
            "explain": "The first time bar.next is called foo is run until yield. The second time, bar.next is called, foo is run until completion."
          },
          {
            "answers": [
                "42",
                "TypeError",
                "42 'Hello'",
                "NaN"
            ],
            "question": "What will be logged to the console when the following code is executed: function* foo(x) { var y = x * (yield 'Hello'); return y; } var it = foo(6); var res = it.next(); res = it.next(7); console.log(res.value);",
            "correctAnswer": 0,
            "explain": "The first it.next() starts foo, and the second one replaces 'Hello' with 7, thus y is 42."
          },
          {
            "answers": [
                "3",
                "5",
                "1",
                "undefined",
            ],
            "question": "What will be logged to the console when the following code is executed: function* foo() { var x = yield; var y = yield x; return x + y; } var it1 = foo(); var it2 = foo(); var val1 = 3; var val2 = 5; it1.next(); it2.next(); val1 = it1.next(val1).value; val2 = it2.next(val2).value; let returnVal1 = it1.next(val2).value; console.log(returnVal1);",
            "correctAnswer": 2,
            "explain": "The answer ends up being x of it1 plus x of it2 which is just val1 + val2."
          },
          {
            "answers": [
                "1",
                "undefined",
                "TypeError",
                "6",
            ],
            "question": "What will be logged to the console when the following code is executed: function* foo() { let x = 1; while (true) { yield x; x += 1; } } let sumNextVar = 0; for (let nextVar of foo()) { if (nextVar > 3) { break; } sumNextVar += nextVar; } console.log(sumNextVar);",
            "correctAnswer": 3,
            "explain": "for..of will keep calling next() until the function returns. Because we have an infinte loop in foo, we need to manually stop our for..of loop, otherwise it will not stop."
          },
          {
            "answers": [
                "1",
                "2",
                "ReferenceError",
                "undefined",
            ],
            "question": "What will be logged to the console when the following code is executed: function foo(x, y) { return new Promise((resolve, reject) => { setTimeout(() => resolve(y + 1), x); }); } function* main() { var num = yield foo(500, 1); console.log(num); } var it = main(); var p = it.next().value; p.then(num => { it.next(num); });",
            "correctAnswer": 1,
            "explain": "it.next().value starts main and gets the value from foo(500, 1) which is a promise. We then resolve the promise, and then continue running main."
          },
        ]
      },
      {
        "chapter_id": 5,
        "chapter_name": "Program Performance",
        "quizzes": [
          {
            "answers": [
                "That would make our code less readable",
                "It would not be possible to make everything synchronous",
                "For performance reasons",
                "JavaScript is moving towards removing asynchrony"
            ],
            "question": "Why do we care about asynchrony? Why not make everything synchronous?",
            "correctAnswer": 2,
            "explain": "Our code would be very slow if all of our requests were blocking."
          },
          {
            "answers": [
                "A continuous and open connection with a server",
                "An ES7 feature that allows functions to not have run-to-completion behavior",
                "A separate instance of the JavaScript engine allowing task parallelism",
                "It is a function that is required in order to make PWAs",
            ],
            "question": "What is a web worker?",
            "correctAnswer": 2,
            "explain": "An environment like your browser can easily provide multiple instances of the JavaScript engine, each on its own thread, and let you run a different program in each thread. Each of those separate threaded pieces of your program is called a '(Web) Worker.' This type of parallelism is called 'task parallelism,' as the emphasis is on splitting up chunks of your program to run in parallel"
          },
          {
            "answers": [
                "Via closures",
                "Via lexical scoping",
                "Via the postMessage API",
                "Via the global scope",
            ],
            "question": "How do workers share scope or resources with each other or the main program?",
            "correctAnswer": 2,
            "explain": "Workers do not share any scope or resources with each other or the main program -- that would bring all the nightmares of threaded programming to the forefront -- but instead have a basic event messaging mechanism connecting them called the postMessage API."
          },
          {
            "answers": [
                "Sorting large data sets",
                "High-traffic network communications",
                "Processing intensive math calculations",
                "DOM diffing algorithm",
            ],
            "question": "What is not a common use for a web worker?",
            "correctAnswer": 3,
            "explain": "Web workers do not have access to the DOM"
          },
          {
            "answers": [
                "True",
                "False",
            ],
            "question": "Shared Workers allow multiple instances of an app to share the same web worker",
            "correctAnswer": 0,
            "explain": "If your site or app allows for loading multiple tabs of the same page (a common feature), you may very well want to reduce the resource usage of their system by preventing duplicate dedicated Workers and using a Shared Worker."
          },
        ]
      },
      {
        "chapter_id": 6,
        "chapter_name": "Benchmarking & Tuning",
        "quizzes": [
          {
            "answers": [
                "True",
                "False",
            ],
            "question": "All performance optimizations matter and should be seriously evaluated",
            "correctAnswer": 1,
            "explain": "There is no point in chasing after small performance optimizations if you don't know have any reason to believe that it is causing your app to be slow."
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "The code below is a valid way to test performance: var start = (new Date()).getTime(); // do some operation var end = (new Date()).getTime(); console.log( 'Duration:', (end - start) );",
            "correctAnswer": 1,
            "explain": "There are many things wrong with this, but one of the main reasons is that this is only one run, one data point and is not statistically significant."
          },
          {
            "answers": [
                "Using polyfills",
                "The amount of battery left on a smartphone that is running the test in Chrome",
                "Running the test one time vs many times",
                "The time of day that your tests are run",
            ],
            "question": "Which of the following will not potentially affect your performance test?",
            "correctAnswer": 3,
            "explain": "Almost everything you can imagine can potentially affect your performance tests. Especially if your question isn't just 'is x faster than y' but if the question includes 'is it a big enough difference for me to care'. Maybe x is consistently faster than y, but maybe it is so close that no one can tell the difference."
          },
          {
            "answers": [
                "Benchmark.js is lower level and gives a statistical analysis of the test. jsPerf uses Benchmark.js to test in a browser.",
                "jsPerf is compatible with ES6+ and Benchmark.js is not",
                "They are two libraries that do more or less the same thing",
            ],
            "question": "What is the difference between jsPerf and Benchmark.js?",
            "correctAnswer": 0,
            "explain": "jsPerf uses the Benchmark.js library to run statistically accurate and reliable tests, and makes the test on an openly available URL that you can pass around to others. Each time a test is run, the results are collected and persisted with the test, and the cumulative test results are graphed on the page for anyone to see."
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "The browser will always execute your code as you wrote it",
            "correctAnswer": 1,
            "explain": "Browser JavaScript engines have come up with 'engine optimizations' which speed up the execution of your code. They might execute your code differently from the way you wrote it if their way is faster and results in the same output as your way. This is one of the reasons why it is not directly obvious how to analytically compare two pieces of code. Especially when you consider that browsers are constantly updating and improving their engines."
          },
        ]
      }
    ]
  },
  {
    "_id": 6,
    "book_name": "ES6 & Beyond",
    "chapters": [
      {
        "chapter_id": 1,
        "chapter_name": "ES? Now and Future",
        "quizzes": [
          {
            "answers": [
                "True",
                "False",
            ],
            "question": "Transpiling is transforming your ES6+ code into equivalent code that works in ES5 environments.",
            "correctAnswer": 0,
            "explain": "The idea behind a technique called transpiling (transformation + compiling) is to use a special tool to transform your ES6 code into equivalent (or close!) matches that work in ES5 environments."
          },
          {
            "answers": [
                "Objects that contain multiple functions",
                "A new feature of ES6 that provides syntactic sugar on top of functions",
                "3rd party libraries you use in your code base",
                "A pattern for defining equivalent behavior from a newer environment into an older environment, when possible.",
            ],
            "question": "What are polyfills?",
            "correctAnswer": 3,
            "explain": "Transpiling with polyfills allows you to develop using the latest JavaScript APIs without worrying about breaking your app in certain browsers."
          },
          {
            "answers": [
                "True",
                "False",
            ],
            "question": "In general, new APIs cannot be polyfilled, but syntax often can be.",
            "correctAnswer": 1,
            "explain": "Not all new ES6 features need a transpiler. Polyfills (aka shims) are a pattern for defining equivalent behavior from a newer environment into an older environment, when possible. Syntax cannot be polyfilled, but APIs often can be."
          },
        ]
      },
      {
        "chapter_id": 2,
        "chapter_name": "Async Flow Control",
        "quizzes": [
          {
            "answers": [
                "Fulfilled and rejected",
                "Returned and incomplete",
                "Completed and in progress",
            ],
            "question": "What are the two possible outcomes of a Promise?",
            "correctAnswer": 0,
            "explain": "If there are no errors, then the Promise will get resolved, but if an error occurs typically the Promise will get rejected."
          },
          {
            "answers": [
                "True",
                "False",
            ],
            "question": "A promise can only be resolved (fulfilled or rejected) once",
            "correctAnswer": 0,
            "explain": "Promises can only be resolved (fulfillment or rejection) once. Any further attempts to fulfill or reject are simply ignored. Thus, once a Promise is resolved, it's an immutable value that cannot be changed."
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "This is a valid way to construct a promise: var p = new Promise(() => { return setTimeout(() => 5, 1000) } );",
            "correctAnswer": 1,
            "explain": "There are a couple things wrong with this code. For one, setTimeout does not return the return value of the callback. fn in new Promise(fn) needs to have an argument, such as resolve, which you call on your desired return value."
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "This is a valid way to construct and consume a promise: var p = new Promise((resolve) => { setTimeout(() => resolve(5), 1000); } ); p.done(val => { console.log(val); });",
            "correctAnswer": 1,
            "explain": "done is not a valid method for a Promise. The code above would be valid if it were replaced with .then()"
          },
          {
            "answers": [
                "another promise",
                "an object",
                "a function",
                "undefined",
            ],
            "question": "What do .then(..) and .catch(..) methods return when invoked on a promise?",
            "correctAnswer": 0,
            "explain": "Both then(..) and catch(..) automatically construct and return another promise instance, which is wired to receive the resolution from whatever the return value is from the original promise's fulfillment or rejection handler (whichever is actually called)"
          },
          {
            "answers": [
                "The next version of promises introduced in ES7",
                "Promises that are used with generators",
                "Promise-like objects that generally can interoperate with Promise mechanisms",
                "Just another word for Promises",
            ],
            "question": "What are thenables?",
            "correctAnswer": 2,
            "explain": "Any object (or function) with a then(..) function on it is assumed to be a thenable. Any place where the Promise mechanisms can accept and adopt the state of a genuine promise, they can also handle a thenable."
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "p1 and p2 have essentially the same behavior: var p1 = Promise.resolve( 42 ); var p2 = new Promise( function pr(resolve){ resolve( 42 ); } );",
            "correctAnswer": 0,
            "explain": "Promise.resolve creates a resolved promise. To access the value 42, you need to call .then()"
          },
          {
            "answers": [
                "[42, 43, 44]",
                "42",
                "43",
            ],
            "question": "What will be logged to the console when the following is executed? const a = 42, b = Promise.resolve(43), c = 44; Promise.all([a, b, c]).then(val => console.log(val));",
            "correctAnswer": 0,
            "explain": "Promise.all([ .. ]) accepts an array of one or more values (e.g., immediate values, promises, thenables). It returns a promise back that will be fulfilled if all the values fulfill, or reject immediately once the first of any of them rejects"
          },
          {
            "answers": [
              "43",
              "[42, 43, 44]",
              "42",
            ],
            "question": "What will be logged to the console when the following is executed?",
            "correctAnswer": 2,
            "explain": "While Promise.all([ .. ]) waits for all fulfillments (or the first rejection), Promise.race([ .. ]) waits only for either the first fulfillment or rejection."
          },
          {
            "answers": [
                "42",
                "43",
                "'Oops'",
            ],
            "question": "What will be logged to the console when the following is executed? const a = Promise.resolve(43), b = 42, c = Promise.reject('Oops'); Promise.race([a, b, c]) .then(val => console.log(val)) .catch(e => console.log(e));",
            "correctAnswer": 0,
            "explain": "While Promise.all([ .. ]) waits for all fulfillments (or the first rejection), Promise.race([ .. ]) waits only for either the first fulfillment or rejection (whichever happens first). In the code snippet above, if we changed the order of the array to Promise.race([c, b, a]) then we'd get 'Oops' printed instead."
          },
        ]
      },
      {
        "chapter_id": 3,
        "chapter_name": "Collections",
        "quizzes": [
          {
            "answers": [
                "Provide structured access to binary data using array-like semantics",
                "Create arrays of a specific type of values, like an array of only strings",
            ],
            "question": "What do typed arrays allow you to do in JavaScript?",
            "correctAnswer": 0,
            "explain": "It'd be tempting to look at a feature named 'typed array' and assume it means an array of a specific type of values, like an array of only strings. However, typed arrays are really more about providing structured access to binary data using array-like semantics (indexed access, etc.). The 'type' in the name refers to a 'view' layered on type of the bucket of bits, which is essentially a mapping of whether the bits should be viewed as an array of 8-bit signed integers, 16-bit signed integers, and so on."
          },
          {
            "answers": [
                "Maps are immutable, and objects are not",
                "Objects are the JavaScript version of maps",
                "There is no difference",
                "Object keys have to be strings, and map keys can be any value",
            ],
            "question": "What is the difference between maps and objects?",
            "correctAnswer": 3,
            "explain": "Maps were added in ES6 and are just like objects except the keys can be anything, even arrays or objects!"
          },
          {
            "answers": [
                "True",
                "False",
            ],
            "question": "The following code is valid ES6: var m = new Map(); var x = { id: 1 } y = { id: 2 }; m[x] = y;",
            "correctAnswer": 1,
            "explain": "Maps do not support the [] syntax. set operations must be done like m.set(x, y)."
          },
          {
            "answers": [
                "WeakMaps do not expose any iterators over their keys, values, or entries",
                "If an object used as a key in a WeakMap is garbage collected, the entry is not removed",
                "WeakMaps take only objects as keys",
                "WeakMaps do not have a size property or clear() method",
            ],
            "question": "Which of the following statements about WeakMaps is not true:",
            "correctAnswer": 1,
            "explain": "WeakMaps take (only) objects as keys. Those objects are held weakly, which means if the object itself is GC'd, the entry in the WeakMap is also removed."
          },
          {
            "answers": [
                "TypeError",
                "SyntaxError",
                "8",
                "5",
            ],
            "question": "What will be logged to the console when the following code is executed: let duplicates = [1, 2, 2, 3, 4, 4, 4, 5]; let newSet = new Set(duplicates) console.log(newSet.size);",
            "correctAnswer": 3,
            "explain": "Sets can be constructed with iterators such as arrays, and they only store unique values. They are kind of like objects with keys but no values."
          },
          {
            "answers": [
                "let copy = setValues.copy()",
                "let copy = Set.assign(new Set(), setValues)",
                "let copy = new Set([setValues])",
                "let copy = new Set(setValues)",
            ],
            "question": "What is one way to copy a set: let values = [1, 1, 2, 3]; let setValues = new Set(values)",
            "correctAnswer": 3,
            "explain": "The constructor is the only way to make a new set, and it will copy values from the set into a new set."
          },
          {
            "answers": [
                "The get() method is used to retrieve an item from a set",
                "The add() method is used to add new items to a set",
                "The add() method is used to add new items to a set",
                "A set is a collection of unique values (duplicates are ignored)",
            ],
            "question": "Which of the following statements about Sets is not true:",
            "correctAnswer": 0,
            "explain": "A set doesn't need (and doesn't have) a get(..) because you don't retrieve a value from a set, but rather test if it is present or not, using has(..)"
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "This is a valid way to create an array from a set: let s = new Set([1, 2, 2, 3, 3, 3]) let a = [...s];",
            "correctAnswer": 0,
            "explain": "You can use the spread operator with sets"
          },
          {
            "answers": [
                "newMap.entries()",
                "newMap.keys()",
                "newMap.keys",
                "newMap.forEach(key => {...})",
            ],
            "question": "Which of the following are valid ways to make an iterator of map keys: var newMap = new Map() var x = {'foo': 1 var xVal = 'foo1'; var y = {'foo': 2 var yVal = 'foo2'; newMap.set(x, xVal newMap.set(y, yVal)",
            "correctAnswer": 1,
            "explain": "newMap.keys() will create an iterator of the keys. newMap.forEach() iterates over the values, and entries() creates a two dimensional array of keys and values."
          },
          {
            "answers": [
                "A WeakSet holds its values weakly",
                "A WeakSet holds its keys weakly",
                "WeakSet values can be primitives like strings or numbers",
            ],
            "question": "Which of the following statements about WeakSets is true:",
            "correctAnswer": 0,
            "explain": "Whereas a WeakMap holds its keys weakly (but its values strongly), a WeakSet holds its values weakly (there aren't really keys)."
          },
        ]
      },
      {
        "chapter_id": 4,
        "chapter_name": "API Additions",
        "quizzes": [
          {
            "answers": [
                "0",
                "1",
                "4",
                "5",
            ],
            "question": "What will be logged to the console when the following code is executed? let arr = Array(5); console.log(arr.length);",
            "correctAnswer": 3,
            "explain": "There's a well known gotcha with the Array(..) constructor, which is that if there's only one argument passed, and that argument is a number, instead of making an array of one element with that number value in it, it constructs an empty array with a length property equal to the number."
          },
          {
            "answers": [
                "True",
                "False",
            ],
            "question": "What will be logged to the console when the following code is executed? Array(1, 2, 3).length === Array.of(5, 6, 7).length",
            "correctAnswer": 0,
            "explain": "Array.of(..) replaces Array(..) as the preferred function-form constructor for arrays"
          },
          {
            "answers": [
                "[undefined, undefined, undefined, undefined]",
                "['foo', 'bar']",
                "['foo', undefined, 'bar', undefined]",
            ],
            "question": "What will be logged to the console when the following code is executed? let arrLike = { length: 4, 0: 'foo', 2: 'bar' }; console.log(Array.from(arrLike));",
            "correctAnswer": 3,
            "explain": "Array.from(..) looks to see if the first argument is an iterable, and if so, it uses the iterator to produce values to 'copy' into the returned array. If you pass an array-like object as the first argument, it simply loops over the value, accessing numerically named properties from 0 up to whatever the value of length is. Array.from(..) never produces empty slots."
          },
          {
            "answers": [
                "filtering",
                "reducing",
                "mapping",
                "sorting",
            ],
            "question": "Array.from(..) takes an optional second argument, which is a ____ callback.",
            "correctAnswer": 2,
            "explain": "The second argument, if provided, is a mapping callback (almost the same as the regular Array#map(..) expects) which is called to map/transform each value from the source to the returned target."
          },
          {
            "answers": [
                "It creates an array with two undefined values",
                "It creates an array with two empty slots",
            ],
            "question": "What does the following line of code do? let a = Array.from( { length: 2 } );",
            "correctAnswer": 0,
            "explain": "You can use Array.from() to create an array of undefined values"
          },
          {
            "answers": [
                "false / false",
                "false / true",
                "true / true",
                "true / false",
            ],
            "question": "What will be logged to the console when the following code is executed? let x = NaN, y = 0, z = -0; console.log(Object.is(x, x)); console.log(Object.is(y, z));",
            "correctAnswer": 3,
            "explain": "Object.is(..) is basically the same as ===, with two exceptions: Object.is(NaN, NaN) is true and Object.is(0, -0) is false"
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "What will be logged to the console when the following code is executed? console.log(Number.isInteger(4.0));",
            "correctAnswer": 0,
            "explain": "In JavaScript, there’s no difference between 4, 4., 4.0, or 4.0000. All of these would be considered an “integer”"
          },
          {
            "answers": [
                "2^53 - 1",
                "Infinity",
                "2^32",
                "2^32 - 1",
            ],
            "question": "What is Number.MAX_SAFE_INTEGER?",
            "correctAnswer": 0,
            "explain": "Max safe integer is the highest integer that can safely be represented in a JavaScript number value which is 2^53 - 1."
          },
          {
            "answers": [
                "If you are literally checking for the value NaN",
                "If you want to use the faster, ES6 version",
                "If you want to determine if a value is not of type number, so that does not include NaN",
                "If you want to determine if a value is not of type number, including NaN",
            ],
            "question": "Why would you use Number.isNaN() instead of isNaN()?",
            "correctAnswer": 0,
            "explain": "isNaN() checks for things that are not a number. So that includes NaN and any other value that isn't a number."
          },
          {
            "answers": [
                "{ a: 4 }",
                "TypeError",
                "{ a: 4, b: obj1 }",
                "{ a: 4, b: '[Object object]' }",
            ],
            "question": "What will be logged to the console when the following code is executed: var obj1 = { a: 4 }; var obj2 = { b: obj1 } Object.assign(obj1, obj2) console.log(obj1)",
            "correctAnswer": 2,
            "explain": "Object.assign(obj1, obj2) takes obj2 and merges it into obj1. In the example above, after the merge, the attribute 'b' actually references obj1 itself recursively."
          },
          {
            "answers": [
                "[7]",
                "[3, 3, 3, 3]",
                "TypeError",
                "[4, 4, 4]",
            ],
            "question": "What will be logged to the console when the following code is executed: console.log(Array(4).fill(3))",
            "correctAnswer": 1,
            "explain": "Array(4) creates an array with 4 spots, and fill(3) fills them with the value 3"
          },
          {
            "answers": [
                "'2,2,21'",
                "NaN",
                "'21'",
                "3",
            ],
            "question": "What will be logged to the console when the following code is executed: var foo = [1, '2', 2, 4, '2']; var newFoo = foo.find((val) => { return val == 2 }) console.log(newFoo + 1)",
            "correctAnswer": 2,
            "explain": "foo.find() returns the first value for which the comparison is truthy, so '2' at index 1. 1 is then coerced into '1' and added to '2' which is '21'."
          },
        ]
      },
      {
        "chapter_id": 5,
        "chapter_name": "Meta Programming",
        "quizzes": [
          {
            "answers": [
                "['def', 'name']",
                "undefined",
                "'def'",
                "'abc'",
            ],
            "question": "What will be logged to the console when the following code is executed: var abc = function def()  let a = 5 console.log(abc.name)",
            "correctAnswer": 2,
            "explain": "The name property of a function will refer to the lexical binding name if it exists. In this case, it is 'def'. If the function was anonymous, the name property would be 'abc'."
          },
          {
            "answers": [
                "[2,1,'b','a']",
                "Order cannot be guaranteed",
                "[1,2,'b','a']",
                "[1,2,'a','b']",
            ],
            "question": "What will be logged to the console when the following code is executed: var o = {}; o[2] = true o[1] = true o.b = 'awesome' o.a = 'cool'; console.log(Object.getOwnPropertyNames( o ));",
            "correctAnswer": 2,
            "explain": "The ordering is: 1. First, enumerate any owned properties that are integer indexes, in ascending numeric order. 2. Next, enumerate the rest of the owned string property names in creation order 3. Finally, enumerate owned symbol properties in creation order."
          },
          {
            "answers": [
                "[3, 3, 3, 3]",
                "[4, 5, 6, 7]",
                "[3, 3, 3]",
                "[4, 5, 6]",
            ],
            "question": "What will be logged to the console when the following code is executed: var arr = [4, 5, 6, 7]; arr[Symbol.iterator] = function* ()  var idx = 0 do  yield 3 } while ((idx += 1) < this.length) }; console.log([...arr])",
            "correctAnswer": 0,
            "explain": "The generator defines how to iterate through values in arr. We defined it to return the value 3 for each element in the array."
          },
          {
            "answers": [
                "True",
                "False",
                "SyntaxError",
                "TypeError",
            ],
            "question": "What will be logged to the console when the following code is executed: var obj1 = { a: 3 } var obj2 = { b: 3 } obj1.toString = () => 'foo' obj2[Symbol.toStringTag] = 'foo'; console.log(obj1.toString() === obj2.toString())",
            "correctAnswer": 1,
            "explain": "obj1.toString() is 'foo' and obj2.toString() is '[object foo]'"
          },
          {
            "answers": [
                "TypeError",
                "ReferenceError",
                "'1,2,3,4,510'",
                "15",
            ],
            "question": "What will be logged to the console when the following code is executed: var arr = [1, 2, 3, 4, 5]; arr[Symbol.toPrimitive] = function () {return 5}; console.log(arr + 10);",
            "correctAnswer": 3,
            "explain": "toPrimitive is used when an object must be coerced to a primitive value. We are overriding its typical functionality for arr and forcing it to be 5."
          },
          {
            "answers": [
                "null",
                "undefined",
                "No such property/method!",
            ],
            "question": "What will be logged to the console when the following code is executed? let obj = {a: 1, b: 2}; let handlers = { get(target,key,context) { if (Reflect.has( target, key )) { return Reflect.get(target, key, context); } else { throw 'No such property/method!'; } } } let proxy = new Proxy(obj, handlers); console.log(proxy.c);",
            "correctAnswer": 2,
            "explain": "A proxy is a special kind of object you create that 'wraps' -- or sits in front of -- another normal object. You can register special handlers (aka traps) on the proxy object which are called when various operations are performed against the proxy. These handlers have the opportunity to perform extra logic in addition to forwarding the operations on to the original target/wrapped object."
          },
          {
            "answers": [
                "True",
                "False",
            ],
            "question": "The following code is a valid way for testing whether arrow functions work in the runtime environment: try { a = () => {}; ARROW_FUNCS_ENABLED = true; } catch (err) { ARROW_FUNCS_ENABLED = false; }",
            "correctAnswer": 1,
            "explain": "Unfortunately, this doesn't work, because our JS programs are compiled. Thus, the engine will choke on the arrow function syntax if it doesn't already support it. The alternative would be to use new Function( '(() => { })' ); inside the try block."
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "Tail Call Optimization helps us save memory when we do object oriented programming",
            "correctAnswer": 1,
            "explain": "Certain patterns of function calls in recursive programming, called tail calls, can be optimized in a way to avoid the extra allocation of stack frames. Instead of creating a new stack frame for the next function call, the engine just reuses the existing stack frame. That works because a function doesn't need to preserve any of the current state."
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "Tail Call Optimization (TCO) can only be applied in strict mode",
            "correctAnswer": 0,
            "explain": "This optimization can only be applied in strict mode. Yet another reason to always be writing all your code as strict!"
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "Tail Call Optimization will be applied to the following code: 'use strict'; function foo(x) { return x * 2; } function bar(x) { x = x + 1; if (x > 10) { return foo( x ); } else { return bar( x + 1 ); } } bar( 5 );",
            "correctAnswer": 0,
            "explain": "foo(..) and bar(..) both are in tail position, as they're the last thing to happen in their code path (other than the return). In both cases, the function calls are in proper tail position. Proper Tail Calls (PTC) of these forms can be optimized."
          },
        ]
      },
      {
        "chapter_id": 6,
        "chapter_name": "Beyond ES6",
        "quizzes": [
          {
            "answers": [
                "a promise",
                "a callback",
                "a resolved promise",
                "an object",
            ],
            "question": "What do async functions return?",
            "correctAnswer": 0,
            "explain": "async functions return a promise which can then be consumed via await or with .then()."
          },
          {
            "answers": [
                "True",
                "False",
            ],
            "question": "The await keyword can only be used inside an async function",
            "correctAnswer": 0,
            "explain": "The await expression causes async function execution to pause until a Promise is resolved, that is fulfilled or rejected, and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise."
          },
          {
            "answers": [
                "'change'",
                "[{change: {a: 3}}]",
                "{change: {a: 3}}",
                "TypeError",
            ],
            "question": "What will be logged to the console when the following code is executed: var obj = { a: 1, b: 2 }; Object.observe obj function (changes)  console.log(changes ) obj.a = 3",
            "correctAnswer": 0,
            "explain": "Trick question! Object.observe() has been deprecated. ES6 Proxies are recommended as an alternative."
          },
          {
            "answers": [
              "True",
              "False",
            ],
            "question": "What will be logged to the console when the following code is executed? let a = 2; console.log(a ** 4 === Math.pow(a, 4));",
            "correctAnswer": 0,
            "explain": "The ** operator has been proposed for JavaScript to perform exponentiation in the same way that Math.pow(..) does"
          },
          {
            "answers": [
                "3 4",
                "4",
                "1 2 3 4",
                "TypeError",
            ],
            "question": "What will be logged to the console when the following code is executed: var o1 = { a: 1, b: 2 }, o2 = { c: 3 }, o3 = { ...o1, ...o2, d: 4 }; console.log(o3.a, o3.b, o3.c, o3.d);",
            "correctAnswer": 2,
            "explain": "The spread operator here works similar to that with arrays."
          },
          {
            "answers": [
                "{a: 1, c: 3}",
                "{a: 1, b: 2, c: 3}",
                "{a: 1, b: 2}",
                "{b: 2, c: 3}",
            ],
            "question": "What will be logged to the console when the following code is executed: let o1 = {a: 1, b: 2, c: 3}; let {b, ...o2} = o1; console.log(o2);",
            "correctAnswer": 0,
            "explain": "The ... operator might also be used to gather an object's de-structured properties back into an object"
          },
          {
            "answers": [
              "True",
              "False",
              "TypeError",
            ],
            "question": "What will be logged to the console when the following code is executed: var arr = [1, 2, 3, 'hello']; console.log(arr.includes('hello'));",
            "correctAnswer": 0,
            "explain": "Array.prototype.includes(x) simply checks to see if an element value is equal to x"
          },
          {
            "answers": [
                "A new binary representation of code",
                "The future replacement of JavaScript",
                "A new programming language",
                "A new JavaScript framework",
            ],
            "question": "What is WebAssembly?",
            "correctAnswer": 0,
            "explain": "WebAssembly proposes a format for a binary representation of a highly compressed AST (syntax tree) of code, which can then give instructions directly to the JS engine and its underpinnings, without having to be parsed by JS, or even behave by the rules of JS."
          },
        ]
      }
    ]
  },
  {
    "_id": 7,
    "book_name": "Other Miscellaneous",
    "chapters": [
      {
        "chapter_id": 1,
        "chapter_name": "Misc chapters",
        "quizzes": [
          {
            "answers": [
                "Client-side JavaScript does not allow the reading or writing of files.",
                "JavaScript can not be used for Networking applications because there is no such support available.",
                "JavaScript doesn't have any multi-threading or multi-process capabilities.",
                "All of the above.",
            ],
            "question": "Which of the following is a disadvantage of using JavaScript?",
            "correctAnswer": 3,
            "explain": "All of the above options are correct."
          },
        ]
      }
    ]
  },
]


module.exports = quizData;