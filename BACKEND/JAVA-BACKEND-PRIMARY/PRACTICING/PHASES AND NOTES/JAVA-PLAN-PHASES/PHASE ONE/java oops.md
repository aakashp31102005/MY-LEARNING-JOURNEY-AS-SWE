# Complete Java Core & OOP Interview Syllabus
*Comprehensive guide for technical interviews at top tech companies*

## 1. JAVA FUNDAMENTALS

### 1.1 Data Types & Variables
- **Primitive Data Types**
  - byte, short, int, long, float, double, char, boolean
  - Size, range, and default values for each type
  - Literal representations (binary, octal, hexadecimal)
  - Underscore in numeric literals (Java 7+)

- **Reference Types**
  - Objects, arrays, interfaces
  - null reference and NullPointerException
  - Reference vs primitive comparison

- **Wrapper Classes**
  - Integer, Double, Character, Boolean, etc.
  - Autoboxing and unboxing mechanisms
  - Caching behavior (-128 to 127 for Integer)
  - Performance implications

- **Type Conversion**
  - Implicit vs explicit casting
  - Widening vs narrowing conversions
  - Loss of precision scenarios
  - ClassCastException

- **Variable Scopes**
  - Local variables, instance variables, class variables
  - Variable shadowing
  - Variable initialization rules

### 1.2 Operators & Expressions
- **Arithmetic Operators**
  - +, -, *, /, % operators
  - Integer division vs floating-point division
  - Overflow and underflow scenarios

- **Relational & Logical Operators**
  - ==, !=, <, >, <=, >= operators
  - && (short-circuit AND), || (short-circuit OR)
  - & (bitwise AND), | (bitwise OR), ^ (XOR)
  - ! (logical NOT), ~ (bitwise complement)

- **Assignment Operators**
  - =, +=, -=, *=, /=, %= operators
  - Compound assignment type casting

- **Unary Operators**
  - ++, -- (pre and post increment/decrement)
  - Difference between ++i and i++

- **Bitwise Operators**
  - <<, >>, >>> (left shift, right shift, unsigned right shift)
  - Bitwise operations on integers

- **Conditional Operator**
  - Ternary operator (? :)
  - Type compatibility in conditional expressions

- **instanceof Operator**
  - Type checking at runtime
  - Usage with inheritance hierarchies

- **Operator Precedence**
  - Order of evaluation
  - Associativity rules

### 1.3 Control Flow Statements
- **Conditional Statements**
  - if, if-else, nested if-else
  - switch statement (traditional and enhanced)
  - switch expressions (Java 12+)
  - Fall-through behavior

- **Loops**
  - for loop (traditional and enhanced for-each)
  - while and do-while loops
  - Nested loops and loop control

- **Jump Statements**
  - break and continue statements
  - Labeled break and continue
  - return statement behavior

### 1.4 Arrays
- **Array Basics**
  - Declaration and initialization syntax
  - Array length property
  - Arrays are objects in Java

- **Multi-dimensional Arrays**
  - 2D arrays, jagged arrays
  - Array of arrays concept
  - Memory layout

- **Array Operations**
  - Copying arrays (System.arraycopy, Arrays.copyOf)
  - Sorting and searching (Arrays.sort, Arrays.binarySearch)
  - Array comparison (Arrays.equals, Arrays.deepEquals)

- **Common Array Pitfalls**
  - ArrayIndexOutOfBoundsException
  - Array assignment compatibility
  - Arrays and generics limitations

### 1.5 Strings
- **String Characteristics**
  - Immutability of String objects
  - String literal vs String object creation
  - String pool (String constant pool)
  - intern() method behavior

- **String Operations**
  - Concatenation (+, concat())
  - String comparison (==, equals(), compareTo())
  - String methods (substring, indexOf, charAt, etc.)
  - String splitting and joining

- **StringBuilder & StringBuffer**
  - Mutable string alternatives
  - Performance differences
  - Thread safety (StringBuffer vs StringBuilder)
  - Capacity and length concepts

- **String Memory Management**
  - Heap vs string pool storage
  - Memory leaks with substring (Java 6 vs 7+)
  - Performance considerations

### 1.6 Methods
- **Method Declaration**
  - Method signature components
  - Parameter lists and return types
  - Access modifiers with methods

- **Method Overloading**
  - Rules for method overloading 
  - precedency 1.no of paramenter,2.type of paramenters,3.    type promotion,4.type conversion
  
  - Type promotion in overloading
  - Ambiguous method calls
  - Overloading with varargs

- **Variable Arguments (Varargs)**
  - Syntax and usage
  - Varargs with overloading
  - Array vs varargs

- **Parameter Passing**
  - Pass-by-value concept in Java
  - Passing primitives vs objects
  - Modifying object state vs reference

- **Method Recursion**
  - Stack overflow considerations
  - Tail recursion optimization

### 1.7 Exception Handling
- **Exception Hierarchy**
  - Throwable → Error, Exception
  - Checked vs unchecked exceptions
  - RuntimeException subclasses
  - Error vs Exception

- **Exception Handling Mechanisms**
  - try-catch blocks
  - Multiple catch blocks
  - catch block ordering
  - finally block guarantees

- **Exception Propagation**
  - throws clause
  - Method signature requirements
  - Call stack unwinding

- **Try-with-Resources**
  - AutoCloseable interface
  - Resource management
  - Suppressed exceptions

- **Custom Exceptions**
  - Creating user-defined exceptions
  - Exception chaining
  - Best practices for custom exceptions

- **Common Exceptions**
  - NullPointerException, ArrayIndexOutOfBoundsException
  - IllegalArgumentException, IllegalStateException
  - ClassCastException, NumberFormatException

### 1.8 Memory Management
- **JVM Memory Structure**
  - Heap memory (young, old generation)
  - Stack memory (method calls, local variables)
  - Method area (class metadata)
  - PC register, native method stack

- **Object Creation Process**
  - new keyword behavior
  - Constructor invocation
  - Memory allocation steps

- **Garbage Collection Basics**
  - Automatic memory management
  - Reachability concept
  - finalize() method (deprecated)
  - Memory leaks in Java

## 2. OBJECT-ORIENTED PROGRAMMING

### 2.1 Classes and Objects
- **Class Definition**
  - Class declaration syntax
  - Class members (fields, methods, constructors)
  - Class vs object relationship
  - Class loading process

- **Object Creation**
  - new operator mechanics
  - Object initialization process
  - Object reference vs object
  - Anonymous objects

- **Constructors**
  - Default constructor provision
  - Parameterized constructors
  - Constructor overloading
  - Constructor chaining (this())
  - Constructor vs method differences

- **Instance vs Static Members**
  - Instance variables and methods
  - Static variables and methods
  - Static blocks and initialization
  - Static import statements

- **this Keyword**
  - this reference usage
  - this() constructor call
  - Resolving name conflicts
  - Method chaining pattern

### 2.2 Encapsulation
- **Data Hiding**
  - Private fields and methods
  - Information hiding principle
  - Benefits of encapsulation

- **Access Modifiers**
  - private: class-level access
  - default (package-private): package-level access
  - protected: inheritance-based access
  - public: universal access
  - Access modifier combinations

- **Getter and Setter Methods**
  - Property access patterns
  - Validation in setters
  - Computed properties
  - JavaBean conventions

- **Immutable Classes**
  - Characteristics of immutable objects
  - Creating immutable classes
  - Benefits (thread safety, caching)
  - Examples: String, Integer, LocalDate

- **Package Organization**
  - Package declaration and import
  - Package-private access
  - Package naming conventions
  - CLASSPATH and package structure

### 2.3 Inheritance
- **Inheritance Basics**
  - extends keyword
  - IS-A relationship
  - Single inheritance limitation
  - Object class as root

- **super Keyword**
  - Accessing parent class members
  - super() constructor call
  - Method disambiguation

- **Constructor Inheritance**
  - Constructor chaining in inheritance
  - Implicit super() calls
  - Constructor execution order

- **Method Inheritance**
  - Method inheritance rules
  - Inherited method accessibility
  - Method hiding (static methods)

- **Types of Inheritance**
  - Single inheritance
  - Multilevel inheritance
  - Hierarchical inheritance
  - Multiple inheritance (interfaces only)

- **Inheritance Design Principles**
  - Liskov Substitution Principle
  - Favor composition over inheritance
  - When to use inheritance

### 2.4 Polymorphism
- **Types of Polymorphism**
  - Compile-time polymorphism (method overloading)
  - Runtime polymorphism (method overriding)

- **Method Overriding**
  - @Override annotation
  - Overriding rules and restrictions
  - Return type covariance
  - Exception handling in overriding
  - Access modifier rules

- **Dynamic Method Dispatch**
  - Virtual method invocation
  - Runtime type determination
  - Method resolution process

- **Reference Type vs Object Type**
  - Reference type determines accessible methods
  - Object type determines method implementation
  - Type casting scenarios

- **Binding**
  - Static binding (early binding)
  - Dynamic binding (late binding)
  - Method binding examples

### 2.5 Abstraction
- **Abstract Classes**
  - abstract keyword usage
  - Abstract methods declaration
  - Concrete methods in abstract classes
  - Constructor in abstract classes
  - Instantiation restrictions

- **Interfaces**
  - interface keyword
  - Method declarations (implicitly public abstract)
  - implements keyword
  - Multiple interface implementation

- **Interface Evolution (Java 8+)**
  - Default methods
  - Static methods in interfaces
  - Diamond problem resolution

- **Functional Interfaces**
  - Single Abstract Method (SAM)
  - @FunctionalInterface annotation
  - Lambda expression compatibility

- **Abstract Class vs Interface**
  - When to use abstract classes
  - When to use interfaces
  - Design decision factors

### 2.6 Advanced OOP Concepts

#### 2.6.1 equals() and hashCode()
- **equals() Method**
  - Object.equals() default implementation
  - equals() contract (reflexive, symmetric, transitive)
  - Overriding equals() properly
  - Common mistakes in equals()

- **hashCode() Method**
  - Hash code purpose and usage
  - hashCode() contract
  - Relationship with equals()
  - Hash collision scenarios

- **equals() and hashCode() in Collections**
  - HashMap, HashSet dependency
  - Performance implications
  - Consistent hashing requirements

#### 2.6.2 Object Cloning
- **Cloneable Interface**
  - Marker interface concept
  - clone() method in Object class
  - CloneNotSupportedException

- **Shallow vs Deep Cloning**
  - Shallow copy behavior
  - Deep copy implementation
  - References in cloned objects

- **Alternative Approaches**
  - Copy constructors
  - Static factory methods
  - Serialization-based cloning

#### 2.6.3 Nested Classes
- **Static Nested Classes**
  - Declaration and access
  - Relationship with outer class
  - Usage scenarios

- **Inner Classes (Non-static)**
  - Access to outer class members
  - Implicit outer class reference
  - Instantiation requirements

- **Local Inner Classes**
  - Classes inside methods
  - Access to local variables (effectively final)
  - Limited scope usage

- **Anonymous Inner Classes**
  - Unnamed class implementations
  - Interface/abstract class implementation
  - Event handling usage

#### 2.6.4 final Keyword
- **final Variables**
  - Constants declaration
  - Blank final variables
  - final with reference types
  - static final variables

- **final Methods**
  - Method overriding prevention
  - Design implications
  - Performance considerations

- **final Classes**
  - Inheritance prevention
  - Examples: String, Integer
  - Security and design reasons

#### 2.6.5 static Keyword
- **Static Variables**
  - Class-level variables
  - Shared among all instances
  - Initialization timing
  - Memory allocation

- **Static Methods**
  - Class-level methods
  - No instance context
  - Calling restrictions
  - Utility method usage

- **Static Blocks**
  - Class initialization code
  - Execution timing
  - Exception handling in static blocks

- **Static Import**
  - Importing static members
  - Usage and best practices
  - Avoiding name conflicts

## 3. CRITICAL INTERVIEW CONCEPTS

### 3.1 Object Class Methods
- **toString() Method**
  - Default implementation
  - Overriding for meaningful output
  - StringBuilder usage in toString()

- **equals() Method Deep Dive**
  - Implementing equals() step by step
  - Handling null values
  - Type checking strategies
  - Performance optimization

- **hashCode() Implementation**
  - Hash code generation strategies
  - Using Objects.hash() utility
  - Prime number usage
  - Performance vs distribution trade-offs

- **getClass() Method**
  - Runtime type information
  - Comparison with instanceof
  - Reflection usage

### 3.2 String Manipulation Advanced
- **String Performance**
  - String concatenation performance
  - StringBuilder vs StringBuffer choice
  - String.format() vs concatenation
  - String interning implications

- **Regular Expressions**
  - Pattern and Matcher classes
  - Common regex patterns
  - String.matches(), split(), replaceAll()

### 3.3 Exception Handling Advanced
- **Exception Handling Best Practices**
  - Specific exception catching
  - Exception logging strategies
  - Resource cleanup patterns
  - Exception translation

- **Multi-catch Blocks**
  - Catching multiple exception types
  - Exception hierarchy considerations

- **Suppressed Exceptions**
  - try-with-resources suppression
  - getSuppressed() method
  - Exception masking scenarios

### 3.4 Design Principles
- **SOLID Principles Overview**
  - Single Responsibility Principle
  - Open/Closed Principle
  - Liskov Substitution Principle
  - Interface Segregation Principle
  - Dependency Inversion Principle

- **Composition over Inheritance**
  - HAS-A vs IS-A relationships
  - Flexibility advantages
  - Delegation patterns

### 3.5 Common Design Patterns
- **Singleton Pattern**
  - Eager vs lazy initialization
  - Thread-safe implementations
  - Enum singleton
  - Serialization issues

- **Factory Pattern**
  - Simple factory implementation
  - Factory method pattern
  - Abstract factory pattern

- **Builder Pattern**
  - Complex object construction
  - Method chaining
  - Immutable object building

## 4. ADVANCED TOPICS

### 4.1 Generics Basics
- **Generic Classes and Methods**
  - Type parameter declaration
  - Generic method syntax
  - Bounded type parameters

- **Wildcards**
  - ? wildcard usage
  - Upper bounded wildcards (? extends)
  - Lower bounded wildcards (? super)
  - PECS principle

### 4.2 Annotations
- **Built-in Annotations**
  - @Override, @Deprecated, @SuppressWarnings
  - @FunctionalInterface
  - Meta-annotations

### 4.3 Enum Types
- **Enum Declaration**
  - Enum constants
  - Enum methods and fields
  - Abstract methods in enums

- **Enum Usage**
  - Switch statements with enums
  - EnumSet and EnumMap
  - Singleton using enum

## 5. COMMON INTERVIEW QUESTIONS & SCENARIOS

### 5.1 Code Analysis Questions
- Predict output of inheritance hierarchies
- Method resolution in polymorphic calls
- Object creation and initialization order
- Exception propagation scenarios
- Static vs instance initialization

### 5.2 Design Questions
- Design class hierarchies for real-world problems
- Choose between abstract classes and interfaces
- Implement common design patterns
- Create thread-safe immutable classes

### 5.3 Debugging Scenarios
- Common NullPointerException causes
- Memory leaks identification
- Performance issues with strings
- Inheritance-related bugs

### 5.4 Best Practices
- Naming conventions
- Code organization principles
- Documentation standards
- Error handling strategies

## 6. PRACTICE CHECKLIST

### Must Implement
- [ ] Custom equals() and hashCode()
- [ ] Immutable class with all requirements
- [ ] Abstract class with concrete implementations
- [ ] Interface with default methods
- [ ] Nested class examples
- [ ] Exception hierarchy with custom exceptions
- [ ] Singleton pattern (multiple approaches)
- [ ] Builder pattern implementation

### Must Understand
- [ ] Method overloading vs overriding rules
- [ ] Static vs dynamic binding examples
- [ ] Memory allocation for objects and primitives
- [ ] String pool behavior and memory impact
- [ ] Constructor chaining in inheritance
- [ ] Access modifier effects across packages
- [ ] Type casting scenarios and exceptions
- [ ] Garbage collection reachability

### Common Pitfalls to Avoid
- [ ] Confusing == with equals()
- [ ] Breaking equals/hashCode contract
- [ ] Memory leaks with listeners/callbacks
- [ ] Incorrect exception handling
- [ ] Misusing static context
- [ ] Inheritance vs composition decisions
- [ ] Access modifier misunderstandings
- [ ] String concatenation performance issues

---

*This comprehensive syllabus covers all essential Java core and OOP concepts tested in technical interviews. Master each topic with practical implementation and understanding of underlying principles.*