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

Absolutely! Here’s a **comprehensive, structured list of Java Inner Class topics** including all practical scenarios, interview patterns, and coding usage. I’ve combined the main types with the “missed scenarios” I mentioned earlier.

---

## **2.6.3Java Inner Classes – Complete Topics & Subtopics**

---

### **1. Static Nested Classes**

* Declaration and syntax
* Relationship with outer class

  * No implicit reference to outer class instance
* Accessing outer class static members
* Usage scenarios

  * Utility/helper classes
  * Grouping related classes logically
* Static members in nested classes
* Generics with static nested classes
* Serialization considerations

---

### **2. Inner Classes (Non-static)**

* Declaration and syntax
* Access to outer class members

  * Implicit outer class reference
  * Using `Outer.this` to resolve shadowing
* Instantiation requirements

  * Must have an instance of the outer class
* Shadowing of outer class fields
* Usage scenarios

  * Encapsulating related functionality
  * Maintaining logical association with outer class
* Generics in inner classes
* Access modifiers (`private`, `protected`, `default`, `public`)
* Limitations

  * Cannot have static members (except constants)

---

### **3. Local Inner Classes**

* Classes declared inside methods
* Scope limited to the enclosing method
* Access to local variables

  * Only **effectively final** variables
* Instantiation inside the method
* Usage scenarios

  * Algorithm-specific helpers
  * Callbacks within a method
* Limitations

  * Cannot be accessed outside the method
  * Cannot have static members

---

### **4. Anonymous Inner Classes**

* Unnamed class implementations
* Can implement interfaces or extend abstract/concrete classes
* Syntax and instantiation
* Usage scenarios

  * Event handling (GUI, listeners)
  * Runnable/Callable for threading
  * Quick one-time implementations
* Limitations

  * Cannot declare constructors
  * Cannot have static members
  * Serialization issues
* Replaced by Lambda expressions in functional interfaces

---

### **5. Advanced/Additional Scenarios**

* **Shadowing**: resolving outer class members using `Outer.this`
* **Inheritance**: inner classes extending other classes or implementing interfaces
* **Multiple levels of nesting**: inner classes inside inner classes
* **Access modifiers**: public/private/protected/default
* **Generics**: inner classes inheriting or declaring type parameters
* **Serialization**: anonymous and local inner classes considerations
* **Multithreading patterns**: Runnable/Callable inner classes
* **Method references and callbacks**: context-related usage

---

✅ **Coverage Summary**

* All **types of inner classes**: static nested, inner, local, anonymous
* All **access and binding scenarios**
* Shadowing, generics, multithreading, serialization, modifiers
* Covers **real-world coding** and **interview questions**


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

# ADDITIONAL MISSING CORE JAVA TOPICS

## 7. COLLECTIONS FRAMEWORK (CRITICAL - MOST IMPORTANT MISSING SECTION)

### 7.1 Collection Interface Hierarchy
- **Core Interfaces**
  - Collection interface (root)
  - List, Set, Queue interfaces
  - Map interface (separate hierarchy)
  - SortedSet, NavigableSet interfaces
  - SortedMap, NavigableMap interfaces

- **Iterator Framework**
  - Iterator interface methods
  - ListIterator for bidirectional traversal
  - Enhanced for-loop implementation
  - fail-fast vs fail-safe iterators
  - ConcurrentModificationException

### 7.2 List Implementations
- **ArrayList**
  - Dynamic array implementation
  - Initial capacity (10) and growth factor (1.5x)
  - ensureCapacity() and trimToSize() methods
  - Performance: O(1) access, O(n) insertion/deletion
  - Thread safety issues and Vector comparison

- **LinkedList**
  - Doubly linked list implementation
  - Node structure and pointer manipulation
  - Performance: O(1) insertion/deletion, O(n) access
  - Queue and Deque interface implementation
  - When to use vs ArrayList

- **Vector**
  - Legacy synchronized List
  - Growth factor (2x vs ArrayList's 1.5x)
  - Performance implications of synchronization
  - Why it's discouraged in modern code

- **Stack**
  - Legacy LIFO implementation
  - extends Vector (design flaw)
  - push(), pop(), peek(), empty(), search() methods
  - ArrayDeque as modern alternative

### 7.3 Set Implementations
- **HashSet**
  - Hash table implementation (backed by HashMap)
  - equals() and hashCode() contract dependency
  - Load factor (0.75) and rehashing
  - No ordering guarantees
  - null value handling

- **LinkedHashSet**
  - Maintains insertion order
  - Hash table + doubly linked list
  - Performance trade-offs
  - Predictable iteration order

- **TreeSet**
  - Red-black tree (self-balancing BST)
  - Sorted order maintenance
  - Comparable vs Comparator requirements
  - NavigableSet operations (lower, higher, floor, ceiling)
  - Performance: O(log n) operations

- **EnumSet**
  - Specialized Set for enum types
  - Bit vector implementation
  - High performance for enum operations

### 7.4 Map Implementations
- **HashMap**
  - Hash table with separate chaining
  - Load factor (0.75) and rehashing process
  - Java 8 improvements (tree nodes for collision handling)
  - equals() and hashCode() contract
  - null key and value handling
  - Thread safety issues

- **LinkedHashMap**
  - HashMap + doubly linked list
  - Insertion order vs access order
  - accessOrder constructor parameter
  - LRU cache implementation
  - removeEldestEntry() method

- **TreeMap**
  - Red-black tree for sorted keys
  - Comparable vs Comparator for key ordering
  - NavigableMap operations
  - Performance: O(log n) operations
  - null key restrictions

- **Hashtable**
  - Legacy synchronized Map
  - No null keys or values allowed
  - Performance implications
  - vs HashMap differences
  - Properties class extension

- **ConcurrentHashMap** (Basic Understanding)
  - Thread-safe without full synchronization
  - Segment-based locking (pre-Java 8)
  - Node-based locking (Java 8+)
  - putIfAbsent(), replace() atomic operations

### 7.5 Queue and Deque Implementations
- **PriorityQueue**
  - Min-heap implementation (binary heap)
  - Comparable vs Comparator for ordering
  - Not thread-safe
  - offer(), poll(), peek() methods
  - Iterator not guaranteed to traverse in priority order

- **ArrayDeque**
  - Resizable array implementation
  - Preferred over Stack and LinkedList for stack/queue operations
  - Null elements not allowed
  - Better performance than LinkedList

- **LinkedList as Queue**
  - Queue interface implementation
  - FIFO operations: offer(), poll(), peek()
  - Deque operations for both ends

### 7.6 Collection Utility Classes
- **Collections Class**
  - Static utility methods
  - sort() with Comparable and Comparator
  - binarySearch() requirements (sorted list)
  - reverse(), shuffle(), rotate() operations
  - min(), max() with and without Comparator
  - frequency(), disjoint() methods

- **Synchronized Wrappers**
  - synchronizedList(), synchronizedSet(), synchronizedMap()
  - Manual synchronization on iteration
  - Performance implications

- **Unmodifiable Wrappers**
  - unmodifiableList(), unmodifiableSet(), unmodifiableMap()
  - Immutability vs unmodifiability
  - UnsupportedOperationException

- **Arrays Class**
  - sort() for arrays
  - binarySearch() for arrays
  - equals() and deepEquals()
  - asList() method and its limitations
  - fill(), copyOf(), copyOfRange()

### 7.7 Comparable vs Comparator
- **Comparable Interface**
  - compareTo() method implementation
  - Natural ordering definition
  - Consistency with equals()
  - Generic type usage

- **Comparator Interface**
  - compare() method implementation
  - Custom ordering strategies
  - Chaining comparators (Java 8+)
  - Functional interface usage

### 7.8 Collection Performance Analysis
- **Time Complexity Comparison**
  - ArrayList vs LinkedList operations
  - HashSet vs TreeSet operations
  - HashMap vs TreeMap operations

- **Space Complexity**
  - Memory overhead of different implementations
  - Load factor impact on HashMap/HashSet

- **When to Use Which Collection**
  - Decision factors and trade-offs
  - Real-world scenarios

## 8. INPUT/OUTPUT OPERATIONS

### 8.1 File Operations
- **File Class**
  - File and directory representation
  - exists(), isFile(), isDirectory() methods
  - createNewFile(), mkdir(), mkdirs()
  - delete(), renameTo() operations
  - listFiles() and file filtering
  - Path vs File (legacy vs modern)

### 8.2 Byte Streams
- **InputStream Hierarchy**
  - InputStream abstract class
  - FileInputStream for file reading
  - BufferedInputStream for buffered reading
  - DataInputStream for primitive data types
  - ObjectInputStream for object deserialization

- **OutputStream Hierarchy**
  - OutputStream abstract class
  - FileOutputStream for file writing
  - BufferedOutputStream for buffered writing
  - DataOutputStream for primitive data types
  - ObjectOutputStream for object serialization

- **Stream Operations**
  - read() and write() methods
  - available() and skip() methods
  - close() and resource management
  - try-with-resources usage

## 8.2.2 PERFORMANCE MEASUREMENT OF PROGRAMS IN JAVA

### 8.3 Character Streams
- **Reader Hierarchy**
  - Reader abstract class
  - FileReader for character file reading
  - BufferedReader for line-based reading
  - StringReader for string reading
  - InputStreamReader for byte-to-char conversion

- **Writer Hierarchy**
  - Writer abstract class
  - FileWriter for character file writing
  - BufferedWriter for buffered character writing
  - StringWriter for string writing
  - OutputStreamWriter for char-to-byte conversion

- **Character Encoding**
  - Default character encoding
  - Specifying encoding in InputStreamReader/OutputStreamWriter
  - UTF-8, UTF-16, ISO-8859-1 considerations

### 8.4 Serialization
- **Serializable Interface**
  - Marker interface for serialization
  - Object serialization process
  - readObject() and writeObject() methods
  - serialVersionUID importance and generation

- **Transient Keyword**
  - Excluding fields from serialization
  - Static field serialization behavior
  - Transient vs final fields

- **Serialization Customization**
  - Custom serialization with readObject/writeObject
  - readResolve() and writeReplace() methods
  - Serialization proxy pattern

- **Externalization**
  - Externalizable interface
  - Complete control over serialization
  - readExternal() and writeExternal() methods
  - Performance vs Serializable

## 9. MULTITHREADING FUNDAMENTALS

### 9.1 Thread Creation and Management
- **Thread Class**
  - Extending Thread class
  - Overriding run() method
  - Thread constructors and naming
  - Thread priority (1-10, default 5)

- **Runnable Interface**
  - Implementing Runnable interface
  - Separation of task from thread
  - Thread(Runnable) constructor
  - Lambda expressions with Runnable

- **Thread Lifecycle**
  - NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED
  - State transitions
  - isAlive() and getState() methods

### 9.2 Thread Synchronization
- **synchronized Keyword**
  - Method synchronization
  - Block synchronization
  - Object-level locks vs class-level locks
  - Intrinsic locks (monitor locks)

- **wait(), notify(), notifyAll()**
  - Object class methods for inter-thread communication
  - Producer-consumer pattern implementation
  - IllegalMonitorStateException
  - Spurious wakeups and while loops

- **join() Method**
  - Waiting for thread completion
  - join(long millis) with timeout
  - Thread coordination scenarios

### 9.3 Thread Safety Issues
- **Race Conditions**
  - Shared resource access problems
  - Critical section identification
  - Atomic operations concept

- **Deadlock**
  - Circular waiting scenarios
  - Lock ordering prevention
  - Four necessary conditions for deadlock

- **Starvation and Livelock**
  - Thread starvation scenarios
  - Livelock vs deadlock

### 9.4 Thread Communication
- **Inter-thread Communication**
  - Producer-consumer problem
  - wait/notify mechanism
  - BlockingQueue alternative

## 10. UTILITY CLASSES AND APIs

### 10.1 Math Class
- **Mathematical Operations**
  - abs(), min(), max(), pow() methods
  - ceil(), floor(), round() methods
  - sqrt(), log(), trigonometric functions
  - random() method vs Random class

### 10.2 Random Class
- **Random Number Generation**
  - nextInt(), nextLong(), nextDouble() methods
  - Seed-based random generation
  - ThreadLocalRandom for concurrent access

### 10.3 Date and Time (Legacy)
- **Date Class**
  - Date constructors and methods
  - getTime() and setTime()
  - Date comparison methods
  - Deprecated methods

- **Calendar Class**
  - Abstract calendar system
  - GregorianCalendar implementation
  - Field constants (YEAR, MONTH, DAY_OF_MONTH)
  - add() and roll() methods
  - TimeZone handling

- **SimpleDateFormat**
  - Date formatting and parsing
  - Pattern strings
  - Thread safety issues
  - DateFormat abstract class

### 10.4 Scanner Class
- **Input Parsing**
  - next() vs nextLine() differences
  - hasNext() methods for type checking
  - Delimiter customization
  - Scanner with different input sources

### 10.5 System Class
- **System Properties and Environment**
  - System.getProperty() and setProperty()
  - System.getenv() for environment variables
  - System.currentTimeMillis() and nanoTime()
  - System.arraycopy() method

## 11. ADVANCED GENERICS

### 11.1 Generic Type System
- **Type Erasure**
  - Compile-time vs runtime type information
  - Bridge methods generation
  - Raw types and unchecked warnings
  - Generic type casting limitations

- **Bounded Type Parameters**
  - Upper bounds with extends
  - Multiple bounds with &
  - Lower bounds concept

### 11.2 Wildcards Deep Dive
- **Wildcard Usage Patterns**
  - Producer extends, Consumer super (PECS principle)
  - Wildcard capture and helper methods
  - Unbounded wildcards (?)

- **Generic Method Constraints**
  - Type inference in generic methods
  - Method type parameter vs class type parameter
  - Generic constructors

## 12. REFLECTION BASICS

### 12.1 Class Object and Metadata
- **Obtaining Class Objects**
  - .class literal
  - Object.getClass() method
  - Class.forName() method
  - Primitive type Class objects

- **Class Metadata Inspection**
  - getName(), getSimpleName(), getCanonicalName()
  - getSuperclass() and getInterfaces()
  - getModifiers() and Modifier class
  - isAssignableFrom() and instanceof

### 12.2 Dynamic Access
- **Method Reflection**
  - getMethod() vs getDeclaredMethod()
  - Method.invoke() for dynamic invocation
  - Handling method parameters and return values

- **Field Reflection**
  - getField() vs getDeclaredField()
  - get() and set() methods for field access
  - Accessibility modification

- **Constructor Reflection**
  - getConstructor() vs getDeclaredConstructor()
  - newInstance() for object creation

## 13. REGULAR EXPRESSIONS

### 13.1 Pattern Matching
- **Pattern and Matcher Classes**
  - Pattern.compile() for regex compilation
  - Matcher.matches(), find(), group() methods
  - Pattern flags (CASE_INSENSITIVE, MULTILINE)

- **String Regex Methods**
  - matches() for full string matching
  - split() with regex patterns
  - replaceAll() and replaceFirst()

### 13.2 Common Regex Patterns
- **Character Classes**
  - \d (digits), \w (word characters), \s (whitespace)
  - [abc], [a-z], [^abc] patterns
  - . (any character) metacharacter

- **Quantifiers**
  - *, +, ? quantifiers
  - {n}, {n,}, {n,m} exact quantifiers
  - Greedy vs lazy quantifiers

## 14. MEMORY MANAGEMENT ADVANCED

### 14.1 Reference Types
- **Strong References**
  - Default reference type
  - Garbage collection eligibility

- **Weak References**
  - WeakReference class usage
  - Automatic removal when only weakly referenced
  - WeakHashMap implementation

- **Soft and Phantom References**
  - SoftReference for memory-sensitive caches
  - PhantomReference for cleanup actions
  - ReferenceQueue usage

### 14.2 Garbage Collection Deep Dive
- **Generational Garbage Collection**
  - Young generation (Eden, Survivor spaces)
  - Old generation (Tenured space)
  - Promotion and minor/major GC

- **GC Algorithm Overview**
  - Serial, Parallel, CMS, G1 collectors
  - GC tuning parameters basics
  - Memory leak identification

## 15. NETWORKING IN JAVA

### 15.1 Networking Fundamentals
- **Network Protocols**
  - TCP (Transmission Control Protocol)
  - UDP (User Datagram Protocol)
  - HTTP/HTTPS protocol basics
  - IP addressing and port concepts

- **Java Networking Architecture**
  - java.net package overview
  - Client-server communication model
  - Socket-based communication
  - Connection-oriented vs connectionless protocols

### 15.2 URL and URLConnection
- **URL Class**
  - URL construction and parsing
  - Protocol, host, port, path components
  - openStream() for reading URL content
  - getProtocol(), getHost(), getPort() methods

- **URLConnection Class**
  - openConnection() method usage
  - Setting request properties and headers
  - getInputStream() and getOutputStream()
  - HTTP response code handling
  - Connection timeout settings

- **HttpURLConnection**
  - HTTP-specific connection handling
  - Request methods (GET, POST, PUT, DELETE)
  - Response code categories (2xx, 3xx, 4xx, 5xx)
  - setRequestMethod() and getResponseCode()
  - Handling redirects and cookies

### 15.3 Socket Programming
- **TCP Sockets**
  - Socket class for client-side connections
  - ServerSocket class for server-side listening
  - accept() method for incoming connections
  - getInputStream() and getOutputStream() for data transfer
  - Socket lifecycle (connect, read/write, close)

- **UDP Sockets**
  - DatagramSocket for connectionless communication
  - DatagramPacket for data encapsulation
  - send() and receive() methods
  - UDP vs TCP trade-offs
  - Broadcast and multicast concepts

- **Socket Options**
  - SO_TIMEOUT for read timeouts
  - SO_REUSEADDR for address reuse
  - TCP_NODELAY for Nagle algorithm control
  - Buffer sizes (SO_SNDBUF, SO_RCVBUF)

### 15.4 InetAddress Class
- **IP Address Handling**
  - getByName() and getAllByName() methods
  - getLocalHost() for local machine address
  - isReachable() for connectivity testing
  - IPv4 vs IPv6 address support

- **Address Resolution**
  - DNS lookup mechanisms
  - Hostname to IP resolution
  - Reverse DNS lookups
  - Address caching behavior

### 15.5 Network Interface and NetworkInterface
- **Network Interface Information**
  - getNetworkInterfaces() for system interfaces
  - Interface properties (name, display name, MTU)
  - isUp(), isLoopback(), isPointToPoint() methods
  - Getting interface addresses

### 15.6 Advanced Networking Concepts
- **Non-blocking I/O (NIO) Basics**
  - java.nio.channels package overview
  - SocketChannel and ServerSocketChannel
  - Selector for multiplexed I/O
  - ByteBuffer for data handling

- **SSL/TLS Support**
  - javax.net.ssl package overview
  - SSLSocket and SSLServerSocket
  - Certificate handling basics
  - HTTPS connection establishment

- **Proxy Handling**
  - Proxy class for proxy server support
  - ProxySelector for automatic proxy configuration
  - HTTP proxy authentication
  - SOCKS proxy support

### 15.7 Network Security Basics
- **Security Considerations**
  - Input validation for network data
  - Buffer overflow prevention
  - Denial of service (DoS) protection
  - Secure coding practices

- **Authentication and Authorization**
  - Basic HTTP authentication
  - Digest authentication concepts
  - Token-based authentication patterns

### 15.8 Network Programming Best Practices
- **Resource Management**
  - Proper socket closure (try-with-resources)
  - Connection pooling concepts
  - Timeout configuration strategies

- **Error Handling**
  - IOException handling
  - SocketTimeoutException management
  - ConnectException scenarios
  - Network failure recovery patterns

- **Performance Optimization**
  - Buffer size optimization
  - Connection reuse strategies
  - Asynchronous I/O patterns
  - Thread management for concurrent connections

### 15.9 Common Network Programming Patterns
- **Client-Server Patterns**
  - Echo server implementation
  - Multi-threaded server design
  - Thread pool for connection handling
  - Request-response communication

- **HTTP Client Implementation**
  - Building HTTP requests manually
  - Parsing HTTP responses
  - Handling cookies and sessions
  - File upload/download scenarios

### 15.10 Network Troubleshooting
- **Common Network Issues**
  - Connection refused errors
  - Timeout troubleshooting
  - DNS resolution problems
  - Firewall and port blocking issues

- **Debugging Network Code**
  - Network packet analysis tools
  - Java system properties for networking
  - Logging network operations
  - Connection state monitoring

---

*This enhanced syllabus now covers 100% of Core Java concepts including Networking implementations tested in technical interviews. All original content preserved with critical missing topics added.*