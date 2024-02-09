module.exports = [
  {
    id: 0, // optional
    question: "Who is the father of C language?",
    options: [
      "Steve Jobs",
      "James Gosling",
      "Dennis Ritchie",
      "Rasmus Lerdorf",
    ], // store options in an array
    correct: "Dennis Ritchie",
    hint: "", // optional
    fact: "Dennis Ritchie is the father of C Programming Language. C programming language was developed in 1972 at American Telephone & Telegraph Bell Laboratories of USA.", // optional
  },
  {
    id: 1, // optional
    question:
      "Which of the following declaration is not supported by C language?",
    options: [
      "String str;",
      "char *str;",
      "float str = 3e2;",
      "Both “String str;” and “float str = 3e2;”",
    ], // store options in an array
    correct: "String str;",
    hint: "", // optional
    fact: " It is legal in Java, but not in C language.", // optional
  },
  {
    id: 2, // optional
    question: " In C language, FILE is of which data type?",
    options: ["int", "char*", "struct", "None of the above"], // store options in an array
    correct: "struct",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 3, // optional
    question: "Who invented Java Programming?",
    options: [
      "Steve Jobs",
      "James Gosling",
      "Dennis Ritchie",
      "Rasmus Lerdorf",
    ], // store options in an array
    correct: "James Gosling",
    hint: "", // optional
    fact: " Java programming was developed by James Gosling at Sun Microsystems in 1995. James Gosling is well known as the father of Java.", // optional
  },
  {
    id: 4, // optional
    question: " Which one of the following is not a Java feature?",
    options: [
      "Object-oriented",
      " Use of pointers",
      "Portable",
      "Dynamic and Extensible",
    ], // store options in an array
    correct: " Use of pointers",
    hint: "", // optional
    fact: "Pointers is not a Java feature. Java provides an efficient abstraction layer for developing without using a pointer in Java. Features of Java Programming are Portable, Architectural Neutral, Object-Oriented, Robust, Secure, Dynamic and Extensible, etc.", // optional
  },
  {
    id: 5, // optional
    question: "Which environment variable is used to set the java path?",
    options: ["MAVEN_Path", "JavaPATH", "JAVA", "JAVA_HOME"], // store options in an array
    correct: "JAVA_HOME",
    hint: "", // optional
    fact: "JAVA_HOME is used to store a path to the java installation", // optional
  },
  {
    id: 6, // optional
    question: "Which of the following is not javascript data types?",
    options: [
      "Null type",
      "Undefined type",
      "Number type",
      " All of the mentioned",
    ], // store options in an array
    correct: " All of the mentioned",
    hint: "", // optional
    fact: " JavaScript is a dynamic, loosely typed language. Variables in JavaScript aren't tied to any specific value type, and each variable can be assigned and reassigned to values of all the types", // optional
  },
  {
    id: 7, // optional
    question:
      "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    options: ["Position", "Window", "Standard", "Location"], // store options in an array
    correct: "Window",
    hint: "", // optional
    fact: "All client-side JavaScript features and APIs are accessed through the Window object. It represents a web browser window or frame, and the identifier window can be used to refer to it.", // optional
  },
  {
    id: 8, // optional
    question:
      "Which of the following can be used to call a JavaScript Code Snippet?",
    options: ["Function/Method", "Preprocessor", "Triggering Event", "RMI"], // store options in an array
    correct: "Function/Method",
    hint: "", // optional
    fact: "A function call to the element on which JavaScript is to be run can be used to invoke JavaScript code. Other techniques include onclick, onload, and onsubmit, among others.", // optional
  },
  {
    id: 9, // optional
    question: "Who developed Python Programming Language?",
    options: [
      "Wick van Rossum",
      "Rasmus Lerdorf",
      "Guido van Rossum",
      "Niene Stom",
    ], // store options in an array
    correct: "Guido van Rossum",
    hint: "", // optional
    fact: "Python language is designed by a Dutch programmer Guido van Rossum in the Netherlands.", // optional
  },
  {
    id: 10, // optional
    question: "All keywords in Python are in _________",
    options: [
      "Capitalized",
      "lower case",
      "UPPER CASE",
      "None of the mentioned",
    ], // store options in an array
    correct: "None of the mentioned",
    hint: "", // optional
    fact: "True, False and None are capitalized while the others are in lower case.", // optional
  },
  {
    id: 11, // optional
    question:
      "Python supports the creation of anonymous functions at runtime, using a construct called __________",
    options: ["pi", "anonymous", "lambda", "none of the mentioned"], // store options in an array
    correct: "lambda",
    hint: "", // optional
    fact: "Python supports the creation of anonymous functions (i.e. functions that are not bound to a name) at runtime, using a construct called lambda. Lambda functions are restricted to a single expression. They can be used wherever normal functions can be used.", // optional
  },
  {
    id: 12, // optional
    question: "Which of the following is basis for SQL?",
    options: ["SQL Server", "DBMS", "RDBMS", "Oracle"], // store options in an array
    correct: "RDBMS",
    hint: "", // optional
    fact: "RDBMS is the basis for SQL, and for all modern database systems such as MS SQL Server, IBM DB2, Oracle, MySQL and Microsoft Access.", // optional
  },
  {
    id: 13, // optional
    question: " What is the full form of PL in PL/SQL?",
    options: [
      "Programming Language",
      "Programming Logic",
      "Procedural Language",
      "Procedural Logic",
    ], // store options in an array
    correct: "Procedural Language",
    hint: "", // optional
    fact: "PL in PL/SQL stands for Procedural Language. It is a block structured language that enables developers to combine the power of SQL with procedural language.", // optional
  },
  {
    id: 14, // optional
    question: "The SQL LIKE operator is used in which of the following clause?",
    options: ["Having", "Select", "Where", "Group by"], // store options in an array
    correct: "Where",
    hint: "", // optional
    fact: "The SQL LIKE operator is used in a WHERE clause to search for a specified pattern in a column.", // optional
  },
];
