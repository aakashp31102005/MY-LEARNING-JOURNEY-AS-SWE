Great question 👌 — exceptions are one of the **hottest Java interview topics**, and many companies test candidates with practical **code snippets** rather than just theory.

Here’s a curated list of **20 popular Java exception-related interview questions / code snippets** (from beginner to tricky).

---

# 🔥 Top 20 Exception Handling Interview Tasks in Java

---

### 1. **Difference between `throw` and `throws`**

```java
public class Test {
    public static void main(String[] args) throws Exception {
        throw new Exception("Checked Exception");
    }
}
```

👉 Q: Difference between `throw` and `throws`?

---

### 2. **Checked vs Unchecked Exception**

```java
public class Test {
    public static void main(String[] args) {
        int x = 5 / 0; // unchecked
        // throw new IOException("Checked"); // needs throws or try/catch
    }
}
```

👉 Q: What is the difference between Checked and Unchecked exceptions?

---

### 3. **Catch block order**

```java
try {
    int x = 5 / 0;
} catch (Exception e) {
    System.out.println("Exception");
} /*catch (ArithmeticException e) { // Compile error
    System.out.println("Arithmetic");
} */
```

👉 Q: Why must catch blocks go from specific → general?

---

### 4. **Multiple catch vs multi-catch**

```java
try {
    String s = null;
    System.out.println(s.length());
} catch (NullPointerException | ArithmeticException e) {
    System.out.println("Handled: " + e);
}
```

👉 Q: Can we use multi-catch (`|`)?

---

### 5. **Finally block execution**

```java
try {
    int x = 10 / 0;
} catch (Exception e) {
    System.out.println("Catch");
} finally {
    System.out.println("Finally always runs");
}
```

👉 Q: Does `finally` always execute?

---

### 6. **Return inside try/finally**

```java
public static int test() {
    try {
        return 1;
    } finally {
        return 2;
    }
}
public static void main(String[] args) {
    System.out.println(test()); // ?
}
```

👉 Q: What will be printed?

---

### 7. **Exception swallowed in finally**

```java
try {
    throw new RuntimeException("from try");
} finally {
    throw new RuntimeException("from finally");
}
```

👉 Q: Which exception propagates?

---

### 8. **Try-with-resources**

```java
try (Scanner sc = new Scanner(System.in)) {
    System.out.println("Enter: " + sc.nextLine());
} catch (Exception e) {
    e.printStackTrace();
}
```

👉 Q: What is try-with-resources?

---

### 9. **Custom Exception**

```java
class MyException extends Exception {
    MyException(String msg) { super(msg); }
}
public class Test {
    public static void main(String[] args) throws MyException {
        throw new MyException("Custom Error");
    }
}
```

👉 Q: How do you create a custom checked exception?

---

### 10. **Custom Runtime Exception**

```java
class MyRuntimeException extends RuntimeException {}
```

👉 Q: Difference between custom checked vs unchecked exceptions?

---

### 11. **Overriding methods with exceptions**

```java
class Parent {
    void m1() throws Exception {}
}
class Child extends Parent {
    @Override
    void m1() throws IOException {} // Allowed
}
```

👉 Q: Can overridden methods throw broader exceptions?

---

### 12. **Static block exception**

```java
class Test {
    static {
        int x = 10 / 0; // ExceptionInInitializerError
    }
}
```

👉 Q: What happens if an exception occurs in static initializer?

---

### 13. **Exception in constructor**

```java
class Test {
    Test() throws Exception {
        throw new Exception("Error in constructor");
    }
}
```

👉 Q: Can constructors throw exceptions?

---

### 14. **Suppressed exceptions**

```java
try (Scanner sc = new Scanner(System.in)) {
    throw new Exception("Main");
} catch (Exception e) {
    for (Throwable t : e.getSuppressed()) {
        System.out.println("Suppressed: " + t);
    }
}
```

👉 Q: What are suppressed exceptions?

---

### 15. **Exception in finally hides try**

```java
try {
    throw new RuntimeException("From try");
} finally {
    throw new RuntimeException("From finally"); 
}
```

👉 Q: Which exception is propagated?

---

### 16. **Error vs Exception**

```java
public static void main(String[] args) {
    throw new StackOverflowError("Error"); // unchecked but not Exception
}
```

👉 Q: Difference between `Error` and `Exception`?

---

### 17. **Re-throwing exception**

```java
try {
    throw new IOException("IO");
} catch (IOException e) {
    throw e; // must declare or handle
}
```

👉 Q: Why must re-thrown checked exceptions be declared?

---

### 18. **Throwing null**

```java
public static void main(String[] args) {
    try {
        throw null;
    } catch (Exception e) {
        System.out.println("Caught: " + e);
    }
}
```

👉 Q: What happens if you throw `null`?

---

### 19. **Catching multiple exceptions**

```java
try {
    int[] arr = new int[2];
    arr[5] = 10;
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Array exception");
} catch (Exception e) {
    System.out.println("General exception");
}
```

👉 Q: What happens here?

---

### 20. **Unreachable catch**

```java
try {
    int x = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Arithmetic");
} catch (Exception e) { // must come after
    System.out.println("General");
}
```

👉 Q: Why order matters?

---

✅ These are **real-world interview-style exception questions** — many of them test **tricky execution flow** rather than just theory.

Do you want me to **rank these by difficulty (easy → tricky)** so you can practice step by step like an interview prep path?

Perfect 💡 Let’s upgrade the **sticky notes deck** with **mini Java code snippets** for each context.
These are **short, memory-triggering** examples so that even after weeks you’ll recall both the concept *and* how it looks in code.

---

# 📝 Sticky Notes: Encapsulation in Different Contexts (with Java Snippets)

---

### 📌 **Basic Class Encapsulation**

* **Pattern:** `private` fields + `public` methods.
* **Good Encapsulation:** Add logic in methods.

```java
class Account {
    private double balance = 1000;

    public void deposit(double amt) {
        if (amt > 0) balance += amt; // ✅ validation
    }
    public double getBalance() { return balance; }
}
```

👉 Outside world can’t touch `balance` directly.

---

### 📌 **Encapsulation + Inheritance**

* `private` not visible in subclass.
* Use `protected` carefully.

```java
class Parent {
    private int secret = 42;
    protected int semiSecret = 99;
}
class Child extends Parent {
    void print() {
        // System.out.println(secret); // ❌ not allowed
        System.out.println(semiSecret); // ✅ allowed
    }
}
```

👉 Prefer methods instead of exposing `protected` fields.

---

### 📌 **Encapsulation + Inner Classes**

* Inner class can access private members of outer class.

```java
class Outer {
    private String hidden = "secret";

    class Inner {
        void show() {
            System.out.println(hidden); // ✅ allowed
        }
    }
}
```

👉 Inner class is like a “friend with keys.”

---

### 📌 **Encapsulation + `final`**

* Prevents mutation or overriding.

```java
final class Secure {}
class Base {
    public final void lock() {}
}
class User extends Base {
    // void lock() {} // ❌ cannot override
}
class Person {
    private final String name = "John"; // immutable field
}
```

👉 `final` = sealed, safe, predictable.

---

### 📌 **Encapsulation + `static`**

* `static` shared across objects.

```java
class Logger {
    private static Logger instance = new Logger(); // encapsulated singleton
    private Logger() {} // private constructor

    public static Logger getInstance() {
        return instance;
    }
}
```

👉 Never expose `public static` mutable fields.

---

### 📌 **Encapsulation + Interfaces**

* Contract hides implementation.

```java
interface Vehicle {
    void move();
}
class Car implements Vehicle {
    public void move() { System.out.println("Drive"); }
}
class Plane implements Vehicle {
    public void move() { System.out.println("Fly"); }
}
```

👉 Users call `move()`, don’t care how.

---

### 📌 **Encapsulation + Abstract Classes**

* Define template, hide details.

```java
abstract class Animal {
    public abstract void sound();
    public void eat() { System.out.println("Eating..."); }
}
class Dog extends Animal {
    public void sound() { System.out.println("Bark"); }
}
```

👉 Abstract hides *how eating works*, exposes only extension points.

---

### 📌 **Encapsulation + Packages / Modules**

* Package-private hides details within package.

```java
package bank;
class InternalHelper { } // default access → hidden outside
public class Account { } // exposed API
```

👉 Encapsulation at *package* level.

---

### 📌 **Encapsulation + Immutability**

* Strongest form of encapsulation.

```java
final class User {
    private final String name;
    public User(String name) { this.name = name; }
    public String getName() { return name; }
}
```

👉 No setters, all fields `private final`.

---

### 📌 **Encapsulation + Design Patterns**

* Singleton, Factory, Builder, Proxy = applied encapsulation.

```java
// Factory hides object creation
class ShapeFactory {
    public static Shape getShape(String type) {
        if (type.equals("circle")) return new Circle();
        else return new Square();
    }
}
```

👉 Client doesn’t know *how* objects are created.

---

# ⚡ Quick Encapsulation Rules of Thumb

* Hide fragile details, expose stable API.
* Never expose raw mutable fields.
* If you change inside code and outside still works → ✅ encapsulation.

---
Alright 🔥 you asked for **in-depth, no-nonsense explanation** of

* **default (package-private)**
* **protected (inheritance-based access)**

in Java.
Let’s break this down with **all the corners and tricky cases** so nothing’s left out.

---

# 📝 Default (a.k.a. *Package-private*)

### ✅ What it means

* If you don’t specify `public`, `protected`, or `private`, the member/class gets *default access*.
* Scope = **only accessible inside the same package**.

---

### 🔎 Where it applies

* **Classes**:

    * Top-level class with no modifier → visible *only inside its package*.
    * Example:

      ```java
      package pkg1;
      class A {} // not visible in other packages
      ```

* **Fields, methods, constructors**:

    * Visible to all other classes in the *same package*.
    * Invisible outside the package.

---

### ⚡ Tricky Cases

1. **Subclass in another package** ❌ cannot access package-private members.

   ```java
   package pkg1;
   class Parent { int x = 10; }  // default
   ```

   ```java
   package pkg2;
   class Child extends Parent {
       void test() {
           // System.out.println(x); // ❌ not allowed
       }
   }
   ```

2. **Package = unit of friendship**

    * Classes in the same package can freely touch each other’s package-private stuff.
    * This is why large projects often use `package-private` for “internal APIs.”

3. **Top-level only**

    * Only `public` or default are allowed on *top-level* classes.
    * You cannot have a `protected` or `private` top-level class.

---

👉 **Think of default as “friend access within package walls.”**

---

# 📝 Protected (Inheritance-based access)

### ✅ What it means

* `protected` =

    * Accessible in **same package** (like default).
    * PLUS: Accessible in **subclasses**, even if they are in *different packages*.

---

### 🔎 Rules in Subclasses

* Subclass can access `protected` members of the parent, **but only through inheritance** (not object reference if in another package).

Example:

```java
package pkg1;
public class Parent {
    protected int val = 42;
}
```

```java
package pkg2;
import pkg1.Parent;

class Child extends Parent {
    void test() {
        System.out.println(val);  // ✅ allowed via inheritance
    }
}
```

But:

```java
package pkg2;
import pkg1.Parent;

class Test {
    void test() {
        Parent p = new Parent();
        // System.out.println(p.val); // ❌ not allowed, even though it's protected
    }
}
```

---

### ⚡ Tricky Cases

1. **Inheritance vs. reference confusion**

    * Inside subclass (different package) → access via `this` or subclass reference ✅.
    * But if you create a `Parent` object → cannot touch `protected` ❌.

2. **Same package access**

    * Even non-subclasses in the same package can access `protected` members.
    * So inside the same package, `protected` behaves like default.

3. **Protected + final**

    * Subclasses can see it, but can’t override if it’s a method marked `final`.

4. **Protected constructor**

    * Allows subclass instantiation, but prevents outside instantiation.
    * Common in inheritance-based frameworks.

---

### ✅ Why “inheritance-based access”?

Because `protected` is **tied to the “is-a” relationship**:

* A subclass inherits its parent’s `protected` fields/methods.
* Even if they’re in different packages, inheritance relationship overrides package wall.

---

# 🔥 Side-by-side Comparison

| Modifier      | Same Class | Same Package | Subclass (same pkg) | Subclass (diff pkg) | World |
| ------------- | ---------- | ------------ | ------------------- | ------------------- | ----- |
| `private`     | ✅          | ❌            | ❌                   | ❌                   | ❌     |
| **default**   | ✅          | ✅            | ✅                   | ❌                   | ❌     |
| **protected** | ✅          | ✅            | ✅                   | ✅ (via inheritance) | ❌     |
| `public`      | ✅          | ✅            | ✅                   | ✅                   | ✅     |

---

# 💡 Mental Models

* **default** → “Everyone inside my house (package) can touch my stuff, outsiders can’t.”
* **protected** → “Family (subclass) can inherit my stuff, even if they live in another house (package).”

---

Great question 👍 Let’s go step by step through **Getter and Setter methods** in Java, covering all the points you mentioned:

---

## **1. Getter and Setter Methods – Basics**

* **Getter** → used to *read* (get) the value of a private field.
* **Setter** → used to *update* (set) the value of a private field.

```java
class Student {
    private String name;  // private field

    // Getter
    public String getName() {
        return name;
    }

    // Setter
    public void setName(String name) {
        this.name = name;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.setName("Alice");              // setter used
        System.out.println(s.getName()); // getter used
    }
}
```

---

## **2. Property Access Patterns**

There are **two main styles** of accessing object properties:

### a) **Direct Field Access** (not recommended – breaks encapsulation):

```java
s.name = "Alice";
System.out.println(s.name);
```

### b) **Encapsulated Access (via Getters/Setters)** (recommended):

```java
s.setName("Alice");
System.out.println(s.getName());
```

👉 Encapsulation allows validation, lazy loading, logging, or computed logic inside the setter/getter.

---

## **3. Validation in Setters**

You can add **validation logic** in setters to protect the object from invalid data.

```java
class Student {
    private int age;

    public void setAge(int age) {
        if (age > 0 && age < 120) {
            this.age = age;
        } else {
            throw new IllegalArgumentException("Invalid age: " + age);
        }
    }

    public int getAge() {
        return age;
    }
}
```

---

## **4. Computed Properties**

Sometimes a getter **doesn’t just return a field**, but computes a value.

```java
class Rectangle {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    // Computed property (no separate field)
    public double getArea() {
        return width * height;
    }
}
```

👉 Here, `getArea()` looks like a property but **calculates on the fly**.

---

## **5. JavaBean Conventions**

JavaBeans follow specific **naming conventions** for getters and setters:

* Getter: `getFieldName()`
* Setter: `setFieldName(value)`
* For **boolean fields**: `isFieldName()` instead of `getFieldName()`

```java
class Employee {
    private boolean active;

    public boolean isActive() {   // Boolean getter uses "is"
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
```

✅ These conventions are used by frameworks (Spring, Hibernate, JSP, etc.) to automatically detect properties.

---

## 🔑 **Summary**

* **Getter/Setter** = encapsulation of fields.
* **Property access patterns** = either direct (not recommended) or via encapsulation.
* **Validation in setters** = ensures data integrity.
* **Computed properties** = getters that calculate instead of just returning a field.
* **JavaBean conventions** = standard naming patterns for framework compatibility.

---

Got it 👍 Let’s go deep into **Immutable Classes** in Java.

---

## **1. Characteristics of Immutable Objects**

An object is **immutable** if its state **cannot change** after creation.
Key characteristics:

* All fields are **private** and **final**.
* No **setter methods** (no way to modify fields).
* Fields are initialized only in the **constructor**.
* If a field refers to a mutable object, return a **defensive copy** in getters.
* The class itself should be marked `final` (or methods marked `final`) to prevent subclassing that might break immutability.

---

## **2. Creating Immutable Classes**

Example: Immutable `Student` class

```java
public final class Student {
    private final String name;
    private final int age;

    // Constructor sets all fields
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Only getters (no setters)
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}
```

### Example with Mutable Field (Defensive Copy)

If a class holds a mutable object (e.g., `Date`), we must **clone** it:

```java
import java.util.Date;

public final class Event {
    private final String title;
    private final Date date;  // mutable object

    public Event(String title, Date date) {
        this.title = title;
        this.date = new Date(date.getTime()); // defensive copy
    }

    public String getTitle() {
        return title;
    }

    public Date getDate() {
        return new Date(date.getTime()); // return copy, not original
    }
}
```

---

## **3. Benefits of Immutable Classes**

✅ **Thread-safety** → Immutable objects can be safely shared across threads (no synchronization needed).
✅ **Caching** → Since state never changes, objects can be cached or reused (like `Integer` or `String` pool).
✅ **Simplicity** → Easier to reason about because state doesn’t change.
✅ **Security** → Prevents accidental or malicious changes to sensitive data.

---

## **4. Examples of Immutable Classes in Java**

* **`String`** → Once created, cannot be modified. `"abc" + "d"` creates a *new String*.
* **Wrapper classes** → `Integer`, `Long`, `Double`, etc. are immutable.
* **Date/Time API (Java 8+)** → `LocalDate`, `LocalTime`, `LocalDateTime` are immutable.

```java
public class Main {
    public static void main(String[] args) {
        // String
        String s = "Hello";
        s.concat(" World"); // doesn't modify original
        System.out.println(s); // "Hello"

        // Integer
        Integer x = 10;
        Integer y = x + 5; // creates new Integer

        // LocalDate
        java.time.LocalDate today = java.time.LocalDate.now();
        java.time.LocalDate tomorrow = today.plusDays(1); // new object
        System.out.println(today);    // unchanged
        System.out.println(tomorrow);
    }
}
```

---

## 🔑 **Summary**

* **Immutable objects** → state cannot change after creation.
* **Creating immutable classes** → make fields private + final, no setters, defensive copies.
* **Benefits** → thread-safety, caching, simplicity, security.
* **Examples** → `String`, `Integer`, `LocalDate`, etc.

---

Got it 👍 You want **sticky-note style notes** that give you the *big picture* **and** highlight the tricky parts so you won’t forget.

Here’s a compact but deep guide on **Inner Classes in Java**:

---

# 📝 Inner Classes in Java — Sticky Notes

---

## 🔹 Types of Nested Classes

1. **Static Nested Class**

    * Declared with `static`.
    * Does **not** need outer class object.
    * Can only access `static` members of outer.

   ```java
   class A {
       static class B { }
   }
   ```

2. **Inner Class (Non-static)**

    * Belongs to an instance of outer class.
    * Needs an outer object to be created.
    * Can access **all members** (even private) of outer.

   ```java
   A a = new A();
   A.B b = a.new B();
   ```

3. **Local Inner Class**

    * Declared inside a method.
    * Visible only within that method.
    * Can access `final` / *effectively final* local variables.

   ```java
   void m() {
       class Local { }
       Local l = new Local();
   }
   ```

4. **Anonymous Inner Class**

    * Class without a name, declared and instantiated in one shot.
    * Often used with interfaces or abstract classes.

   ```java
   Runnable r = new Runnable() {
       public void run() { System.out.println("Running"); }
   };
   ```

---

## 🔹 Key Tricky Points to Remember

1. **Outer.this vs this**

    * `this` → current inner object.
    * `OuterClass.this` → enclosing outer object.

   ```java
   class Outer {
       String name="Outer";
       class Inner {
           String name="Inner";
           void print() {
               System.out.println(this.name);         // Inner
               System.out.println(Outer.this.name);   // Outer
           }
       }
   }
   ```

---

2. **Access Rules**

* Inner class can access *all* outer fields (even private).
* Outer class **cannot directly access** inner fields. Needs an object of inner.

---

3. **Instantiation Gotcha**

* Inner class always tied to an outer object:

  ```java
  Outer.Inner i = new Outer().new Inner();
  ```
* Static nested class:

  ```java
  Outer.Nested n = new Outer.Nested();
  ```

---

4. **Local Inner Class Variable Capture**

* Local inner classes inside methods can only use *effectively final* local variables.

  ```java
  void m() {
      int x=10;
      class Local {
          void show() { System.out.println(x); } // okay if x not reassigned
      }
  }
  ```

---

5. **Anonymous Inner Class Shortcut**

* Used heavily in event handling and callbacks.
* Can only extend one class or implement one interface.

---
# 🔹 1. **Car and Engine Example**

A car *has* an engine, but an engine by itself isn’t useful outside a car context.

```java
class Car {
    private String model;

    public Car(String model) {
        this.model = model;
    }

    // Inner class
    class Engine {
        private int horsepower;

        public Engine(int horsepower) {
            this.horsepower = horsepower;
        }

        public void start() {
            System.out.println(model + " engine with " + horsepower + " HP is starting...");
        }
    }

    public static void main(String[] args) {
        Car car = new Car("Tesla");
        Car.Engine engine = car.new Engine(500);
        engine.start();
    }
}
```

✅ Output:

```
Tesla engine with 500 HP is starting...
```

Here, `Engine` is an **inner class** because it makes sense only *inside* a `Car`.

---

## 🔹 When to Use Inner Classes

✅ Use when the class:

* **Logically belongs** only inside another class (e.g., `Map.Entry`).
* Is **tightly coupled** with outer object (e.g., `Car.Engine`).
* Helps keep code **clean and encapsulated**.
* Used for **event handling** or **single-use implementations** (via anonymous inner class).

---

## 🔹 Mental Model

Think of inner classes as **mini-classes glued to an outer object**:

* They are like “children” that need their “parent” to exist.
* Static nested classes are “independent cousins” inside the family.

---

⚡ Sticky Formula to Recall:

* **Static → No outer object needed.**
* **Non-static → Needs outer object.**
* **Local → Lives inside a method.**
* **Anonymous → Shortcut for one-off use.**

# ⚡ Super Sticky Formula

* **Static** → helper, no outer state.
* **Inner (non-static)** → part of outer, needs outer state.
* **Local** → temporary, hidden inside method.
* **Anonymous** → one-time use, quick custom behavior.
---


# **Java `this` Keyword Problems**

The problems I provided cover **all critical aspects** of the `this` keyword that interviewers typically test. However, to ensure **complete readiness**, let’s analyze:

## **✅ What’s Covered (Comprehensive)**
| Topic | Coverage | Real-World Relevance |
|--------|----------|----------------------|
| **`this` reference** | Shadowing, nested classes, lambda scoping | Resolving variable conflicts |
| **`this()` constructor** | Chaining, recursion error | Avoiding duplicate initialization |
| **Method chaining** | Fluent APIs, broken chaining | Builder pattern (`StringBuilder`) |
| **Edge cases** | Static context, recursion, lambda `this` | Java language quirks |

## **🔥 Key Strengths of These Problems**
1. **Tricky name shadowing** (most common interview question).
2. **Constructor chaining pitfalls** (`this()` must be first).
3. **Method chaining** (used in real-world APIs like `Stream`).
4. **Advanced scenarios** (lambdas, static context).

---

## **🚀 Final Checklist for Interview Mastery**
### **1. Can You Solve These Variations?**
#### **Problem 1: Constructor Ambiguity**
```java
class Test {
    Test() {
        this(10);
        System.out.println("Default");
    }
    
    Test(int x) {
        this();  // What happens?
        System.out.println(x);
    }
}
```
**Answer:**  
❌ **Recursive constructor invocation error** (infinite loop).

#### **Problem 2: `this` in Inheritance**
```java
class Parent {
    String name = "Parent";
    void print() {
        System.out.println(this.name);
    }
}

class Child extends Parent {
    String name = "Child";
    public static void main(String[] args) {
        new Child().print(); // What’s printed?
    }
}
```
**Answer:**  
✅ **"Parent"** (`this` respects inheritance and refers to the **runtime object’s field**).

---

### **2. Can You Explain These Concepts?**
| Question | Expected Answer |
|----------|----------------|
| **Why can’t `this()` and `super()` both be used in a constructor?** | They must be the **first statement** (Java enforces one or the other). |
| **When would you use `return this`?** | Method chaining (e.g., Builder pattern). |
| **What does `this` refer to in a lambda?** | The **enclosing class instance** (lambdas don’t have their own `this`). |
| **Can `this` be used in a static method?** | ❌ No (static methods have no instance context). |

---

## **📌 Verdict: Are These Enough?**
- **For 90% of interviews:** **Yes** (covers all fundamentals + edge cases).
- **For senior/architect roles:** Add **design patterns** (Builder, Factory) using `this`.

### **💡 Quick Decision Tree**
1. **Is the code inside...**
    - A **regular method**? → `this` = current object
    - A **constructor**? → `this()` calls another constructor
    - A **static method**? → ❌ `this` is forbidden (no instance!)
    - An **anonymous class**? → `this` = the anonymous class (use `Outer.this` for outer class)
    - A **lambda**? → `this` = enclosing class (lambdas have no own `this`)

---
# **Mastering Java Inheritance: Complete Guide for Interviews**

Here's a **foolproof system** to understand inheritance in Java, covering all contexts and core principles you'll encounter in interviews.

## **🚀 Core Principle of Inheritance**
> **"Inheritance allows a class to acquire properties (fields/methods) from another class, creating an IS-A relationship."**

### **The Golden Rule**
- **`extends` keyword** establishes parent-child relationship
- **Single inheritance only** (one direct parent)
- **Object class** is the ultimate root (all classes inherit from it implicitly)

---

## **🔥 Memory Tricks for Key Concepts**

### **1. `extends` Keyword**
🔹 **Trick:** *"Parents extend their legacy to children"*
```java
class Parent { }
class Child extends Parent { } // Child IS-A Parent
```

### **2. IS-A Relationship**
🔹 **Trick:** *"Every Child IS-A Parent (but not vice versa)"*
```java
Parent p = new Child(); // ✅ Valid (upcasting)
Child c = new Parent(); // ❌ Compile error
```

### **3. Single Inheritance Limitation**
🔹 **Trick:** *"Java is loyal - one parent only!"*
```java
class A {}
class B {}
class C extends A {} // ✅
class D extends A, B {} // ❌ Multiple inheritance forbidden
```

### **4. Object Class as Root**
🔹 **Trick:** *"All roads lead to Object"*
```java
class MyClass {} 
// Equivalent to:
class MyClass extends Object {}
```

---

## **💡 Inheritance Interview Cheat Sheet**

| Concept | Rule | Example | Exception |
|---------|------|---------|-----------|
| **extends** | Creates parent-child relationship | `class B extends A` | None |
| **IS-A** | Upcasting always works | `Animal a = new Dog()` | Downcasting needs `instanceof` check |
| **Single inheritance** | One direct parent only | `class A extends B` | Interfaces allow multiple "inheritance" |
| **Object class** | Implicit superclass | `toString()`, `equals()` | Can override Object methods |
| **Constructor chaining** | Child constructors call parent constructor first | `super()` | Must be first statement |

---

## **🎯 Tricky Interview Problems**

### **Problem 1: Constructor Chaining**
```java
class Parent {
    Parent() { System.out.println("Parent"); }
}
class Child extends Parent {
    Child() { 
        System.out.println("Child"); 
    }
}
public class Test {
    public static void main(String[] args) {
        new Child();
    }
}
```
**Output:**
```
Parent
Child
```
**Key Insight:** Parent constructor runs before child constructor.

---

### **Problem 2: Method Overriding**
```java
class A {
    void show() { System.out.println("A"); }
}
class B extends A {
    void show() { System.out.println("B"); }
}
public class Test {
    public static void main(String[] args) {
        A obj = new B();
        obj.show(); // What's printed?
    }
}
```
**Answer:** `"B"` (Runtime polymorphism - JVM uses actual object type)

---

### **Problem 3: The Object Class**
```java
class MyClass {
    // No explicit extends
}
public class Test {
    public static void main(String[] args) {
        System.out.println(new MyClass() instanceof Object);
    }
}
```
**Answer:** `true` (All classes inherit from Object)

---

### **Problem 4: Inheritance + Static**
```java
class Parent {
    static void print() { System.out.println("Parent"); }
}
class Child extends Parent {
    static void print() { System.out.println("Child"); }
}
public class Test {
    public static void main(String[] args) {
        Parent p = new Child();
        p.print(); // What's printed?
    }
}
```
**Answer:** `"Parent"` (Static methods don't support runtime polymorphism)

---

## **⚡ Advanced Scenarios**

### **1. Downcasting Danger**
```java
class Animal {}
class Dog extends Animal {}
public class Test {
    public static void main(String[] args) {
        Animal a = new Animal();
        Dog d = (Dog)a; // ❌ Runtime ClassCastException
    }
}
```
**Fix:** Always use `instanceof` check
```java
if (a instanceof Dog) {
    Dog d = (Dog)a; // Safe
}
```

### **2. The Final Limitation**
```java
final class Parent {}
class Child extends Parent {} // ❌ Compile error
```
**Rule:** `final` classes cannot be extended

### **3. Object Method Overrides**
```java
class Person {
    @Override
    public String toString() {
        return "Custom toString";
    }
}
public class Test {
    public static void main(String[] args) {
        System.out.println(new Person());
    }
}
```
**Output:** `"Custom toString"` (Overriding Object methods is common)

---

## **🎮 Practice Hack: The 3-Question Inheritance Test**

When solving inheritance problems, ask:

1. **What's the IS-A relationship?**  
   (Is the reference type compatible with object type?)

2. **Is there method overriding?**  
   (Remember: instance methods use runtime polymorphism)

3. **Are we dealing with constructors?**  
   (Parent constructor runs first)

---

## **📚 Ultimate Inheritance Mind Map**
```
Inheritance
├── extends → Creates hierarchy
├── IS-A → Upcasting always works
├── Single Inheritance → One parent only
├── Object Class → Root of all classes
├── Constructors → super() must be first
└── Overriding → @Override annotation
```
# **Mastering the `super` Keyword in Java: Complete Interview Guide**

Here's a **comprehensive breakdown** of the `super` keyword with memory tricks, core principles, and tricky interview problems.

---

## **🚀 Core Principle of `super`**
> **"`super` provides access to parent class members and must be the first statement in a child constructor."**

### **Golden Rules**
1. **Access parent members** (when child has same-named members)
2. **Call parent constructor** (`super()`)
3. **Resolve method ambiguity** (when overriding)

---

## **🔥 Memory Tricks for Each Context**

### **1. Accessing Parent Class Members**
🔹 **Trick:** *"Same name? Use `super` to reach upwards!"*
```java
class Parent {
    String name = "Parent";
}

class Child extends Parent {
    String name = "Child";
    
    void printNames() {
        System.out.println(name);       // "Child" (current class)
        System.out.println(super.name); // "Parent" (parent class)
    }
}
```

### **2. `super()` Constructor Call**
🔹 **Trick:** *"Parents must be built before children!"*
```java
class Parent {
    Parent() { System.out.println("Parent constructor"); }
}

class Child extends Parent {
    Child() {
        super(); // ⚠️ Must be FIRST line
        System.out.println("Child constructor");
    }
}
```
**Key Point:** If omitted, Java inserts `super()` automatically (default constructor only).

### **3. Method Disambiguation**
🔹 **Trick:** *"Overridden but need the original? `super` to the rescue!"*
```java
class Phone {
    void call() { System.out.println("Basic call"); }
}

class SmartPhone extends Phone {
    @Override
    void call() {
        super.call(); // Parent's call()
        System.out.println("Video call");
    }
}
```

---

## **💡 `super` Interview Cheat Sheet**

| Context | Syntax | Rule | Example |
|---------|--------|------|---------|
| **Access parent field** | `super.field` | Resolves name conflicts | `super.name` |
| **Call parent constructor** | `super()` or `super(args)` | Must be first line in child constructor | `super(10);` |
| **Call overridden method** | `super.method()` | Bypasses current override | `super.print();` |
| **Static context** | ❌ Not allowed | `super` is instance-specific | `static { super.x; }` → Error |

---

## **🎯 Tricky Interview Problems**

### **Problem 1: Constructor Chain**
```java
class A {
    A() { System.out.println("A"); }
}
class B extends A {
    B() { 
        System.out.println("B"); 
    }
}
public class Test {
    public static void main(String[] args) {
        new B();
    }
}
```
**Output:**
```
A
B
```
**Why?** Java inserts invisible `super()` in `B()`.

---

### **Problem 2: super() with Parameters**
```java
class Parent {
    Parent(int x) { System.out.println(x); }
}
class Child extends Parent {
    Child() { 
        super(10); // ✅ Explicit call needed
        System.out.println("Child");
    }
}
```
**Key Insight:** If parent lacks default constructor, you **must** call `super(args)`.

---

### **Problem 3: super vs this**
```java
class X {
    void print() { System.out.println("X"); }
}
class Y extends X {
    void print() { 
        super.print(); // X's print()
        System.out.println("Y"); 
    }
    
    void show() {
        this.print();  // Y's print()
    }
}
```
**Output for `new Y().show()`:**
```
X
Y
```

---

### **Problem 4: super in Multi-Level Inheritance**
```java
class Grandparent {
    void dance() { System.out.println("Grandparent"); }
}
class Parent extends Grandparent {
    @Override
    void dance() { System.out.println("Parent"); }
}
class Child extends Parent {
    @Override
    void dance() {
        super.dance(); // Which version runs?
    }
}
```
**Answer:** `"Parent"` (`super` only goes **one level up**).

---

## **⚡ Advanced Scenarios**

### **1. super in Method Overriding**
```java
class Database {
    void connect() { System.out.println("SQL connection"); }
}
class MongoDB extends Database {
    @Override
    void connect() {
        System.out.println("MongoDB connection");
    }
    
    void connectAll() {
        this.connect();  // MongoDB
        super.connect(); // SQL
    }
}
```
**Use Case:** Extending functionality while preserving original behavior.

### **2. super() with Interfaces**
```java
interface A { default void foo() {} }
class B implements A {
    B() { 
        super(); // Calls Object's constructor!
    }
}
```
**Key Point:** `super()` in interfaces context calls `Object`'s constructor.

### **3. The Diamond Problem (Simulated)**
```java
class A { void show() { System.out.println("A"); } }
class B extends A { void show() { System.out.println("B"); } }
class C extends A { void show() { System.out.println("C"); } }
// class D extends B, C {} ❌ Multiple inheritance forbidden
```
**Java's Solution:** Use interfaces with default methods instead.

---

## **🎮 Practice Hack: The 3-Question `super` Test**

When you see `super`, ask:

1. **Is this accessing a member or calling a constructor?**
    - Member: `super.field/method()`
    - Constructor: `super(args)`

2. **In a constructor, is `super()` first?**
    - If not, it's a compile error!

3. **Am I in a static context?**
    - `super` is forbidden in static methods/blocks.

---

## **📚 Ultimate `super` Mind Map**
```
super
├── Access Members → super.field/method()
├── Constructors → super() (first line!)
├── Method Resolution → Bypass override
└── Limitations → ❌ Static, ❌ Multiple inheritance
```

# **Mastering Constructor Inheritance in Java**

Here's a **complete guide** to constructor inheritance with all the tricky details interviewers love to test:

## **🚀 Core Principles**
1. **Constructors aren't inherited** - Child classes must define their own
2. **super() must be first** - Parent must be initialized before child
3. **Default super()** - Java inserts it if you don't (only for no-arg constructors)

## **🔥 Memory Tricks**
🔹 *"Parents come first in construction, just like in real life!"*  
🔹 *"No free constructor inheritance - kids must build their own!"*

## **💡 Constructor Chaining Rules**

| Scenario | What Happens | Example |
|----------|--------------|---------|
| **No constructor in child** | Gets default constructor with implicit super() | `class Child extends Parent {}` → Auto `super()` |
| **Child constructor with no super()** | Java inserts `super()` if parent has no-arg constructor | `Child() { }` → Auto `super()` |
| **Parent lacks no-arg constructor** | Must explicitly call `super(args)` | `Child() { super(10); }` |
| **this() vs super()** | Can't have both - must choose one first | `Child() { this(10); }` OR `super()` |

## **🎯 Tricky Interview Problems**

### **Problem 1: Basic Chaining**
```java
class A {
    A() { System.out.print("A"); }
}
class B extends A {
    B() { System.out.print("B"); }
}
public class Test {
    public static void main(String[] args) {
        new B();
    }
}
```
**Output:** `AB`  
**Why?** Auto `super()` calls A's constructor first

### **Problem 2: Missing No-Arg Constructor**
```java
class Parent {
    Parent(int x) { System.out.print(x); }
}
class Child extends Parent {
    Child() { 
        // Compiler error - no default super() available
    }
}
```
**Fix:** `Child() { super(10); }`

### **Problem 3: this() vs super()**
```java
class X {
    X() { System.out.print("X"); }
}
class Y extends X {
    Y() { 
        this(10); 
        System.out.print("Y1");
    }
    Y(int a) { 
        System.out.print("Y2"); 
    }
}
```
**Output:** `XY2Y1`  
**Flow:** `Y()` → `Y(10)` → (auto `super()`) → `X()` → `Y(10)` body → `Y()` body

### **Problem 4: Multi-Level Inheritance**
```java
class Grandparent {
    Grandparent() { System.out.print("G"); }
}
class Parent extends Grandparent {
    Parent() { System.out.print("P"); }
}
class Child extends Parent {
    Child() { System.out.print("C"); }
}
```
**Output:** `GPC`  
**Order:** Grandparent → Parent → Child

## **⚡ Advanced Scenarios**

### **1. Static Blocks vs Constructors**
```java
class Parent {
    static { System.out.print("S1"); }
    Parent() { System.out.print("P1"); }
}
class Child extends Parent {
    static { System.out.print("S2"); }
    Child() { System.out.print("C1"); }
}
```
**Output for `new Child()`:** `S1S2P1C1`  
**Rule:** Static blocks run first (parent before child), then constructors

### **2. Exception in Parent Constructor**
```java
class Parent {
    Parent() { throw new RuntimeException(); }
}
class Child extends Parent {
    Child() { 
        super(); // Will always throw
        System.out.print("Unreachable");
    }
}
```
**Behavior:** Child instantiation fails - can't handle parent constructor exceptions

## **🎮 Practice Hack: 3-Question Constructor Test**
1. **Is there an explicit super()/this()?**  
   If not, Java inserts `super()` (if parent has no-arg constructor)

2. **What's the execution order?**  
   Parent classes first → current class → static blocks first if any

3. **Can I compile this?**  
   Check: (1) super()/this() conflict, (2) parent constructor exists, (3) proper order

## **📚 Ultimate Constructor Mind Map**
```
Constructor Inheritance
├── No Inheritance → Must redefine
├── super() Rules → First line only
├── Default super() → Auto-inserted if possible
├── Execution Order → Parent first
└── this() Alternative → Must choose super() or this()
```

# **Mastering Method Inheritance in Java: Complete Guide**

## **🚀 Core Principles of Method Inheritance**
1. **Instance Methods**:
    - Follow **runtime polymorphism** (based on actual object type)
    - Can be **overridden** in child classes
    - Respect access modifiers (`private`, `protected`, `public`)

2. **Static Methods**:
    - Follow **compile-time binding** (based on reference type)
    - Can be **hidden**, not overridden
    - Not polymorphic

3. **Final Methods**:
    - Cannot be overridden
    - Prevent polymorphism for that method

## **🔥 Memory Tricks**
🔹 *"Instance methods - what you ARE (object type)"*  
🔹 *"Static methods - what you CLAIM TO BE (reference type)"*  
🔹 *"Private methods don't participate in inheritance"*

## **💡 Method Inheritance Rules Cheat Sheet**

| Method Type | Inheritance Behavior | Overriding? | Polymorphism? |
|------------|----------------------|-------------|---------------|
| **Instance** | Inherited | Can override | Yes (runtime) |
| **Static** | Inherited | Can hide (shadow) | No (compile-time) |
| **Private** | Not inherited | N/A | N/A |
| **Final** | Inherited | Cannot override | No |
| **Abstract** | Must be implemented | Must override | N/A |

## **🎯 Tricky Interview Problems**

### **Problem 1: Basic Overriding**
```java
class Animal {
    void sound() { System.out.println("Animal sound"); }
}
class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); }
}
public class Test {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
    }
}
```
**Output:** `Bark`  
**Why?** Runtime polymorphism uses Dog's implementation

### **Problem 2: Static Method Hiding**
```java
class Parent {
    static void print() { System.out.println("Parent"); }
}
class Child extends Parent {
    static void print() { System.out.println("Child"); }
}
public class Test {
    public static void main(String[] args) {
        Parent p = new Child();
        p.print();
    }
}
```
**Output:** `Parent`  
**Why?** Static methods use reference type, not object type

### **Problem 3: Private Method "Overriding"**
```java
class A {
    private void show() { System.out.println("A"); }
}
class B extends A {
    public void show() { System.out.println("B"); }
}
public class Test {
    public static void main(String[] args) {
        A a = new B();
        // a.show(); // Compile error - private not visible
        ((B)a).show(); // Works - outputs "B"
    }
}
```
**Key Insight:** This isn't overriding - just a new method in B

### **Problem 4: Final Method Attempt**
```java
class Vehicle {
    final void start() { System.out.println("Starting"); }
}
class Car extends Vehicle {
    // void start() { } // Compile error - cannot override final
}
```

## **⚡ Advanced Scenarios**

### **1. Covariant Return Types**
```java
class Parent {
    Parent get() { return this; }
}
class Child extends Parent {
    @Override
    Child get() { return this; } // Valid - narrower return type
}
```
**Allowed since Java 5:** Return type can be subclass of parent's return type

### **2. Exception Handling in Overrides**
```java
class Parent {
    void process() throws IOException { }
}
class Child extends Parent {
    @Override
    void process() throws FileNotFoundException { } // Valid - narrower exception
    // void process() throws Exception { } // Invalid - broader exception
}
```
**Rule:** Can throw same or narrower exceptions, but not broader ones

### **3. Method Hiding with Variables**
```java
class Parent {
    static String type = "Parent";
    static void print() { System.out.println(type); }
}
class Child extends Parent {
    static String type = "Child";
    public static void main(String[] args) {
        Child.print(); // Outputs "Parent" - hides variables too!
    }
}
```

## **🎮 Practice Hack: 3-Question Method Test**
1. **Is it static or instance?**
    - Static: Reference type matters
    - Instance: Object type matters

2. **What's the access modifier?**
    - Private: Not inherited
    - Protected/Public: Inherited

3. **Is there any special modifier?**
    - Final: Can't override
    - Abstract: Must override

## **📚 Ultimate Method Inheritance Mind Map**
```
Method Inheritance
├── Instance Methods
│   ├── Overriding (runtime poly)
│   └── Access rules (private/protected)
├── Static Methods
│   ├── Hiding (compile-time)
│   └── No polymorphism
└── Special Cases
    ├── Final methods
    ├── Abstract methods
    └── Covariant returns
```

# **Comprehensive Guide to Inheritance Design Principles in Java**

## **1. Core Inheritance Principles**

### **1.1 Liskov Substitution Principle (LSP)**
**Golden Rule:**  
*"Child classes should be substitutable for their parent classes without breaking functionality."*

**Key Aspects:**
- **Preconditions** cannot be strengthened in child classes
- **Postconditions** cannot be weakened in child classes
- **Invariants** (class rules) must be preserved
- **Exception rules** must be same or more specific

**Violation Example:**
```java
class Rectangle {
    protected int width, height;
    
    void setWidth(int w) { width = w; }
    void setHeight(int h) { height = h; }
    int area() { return width * height; }
}

class Square extends Rectangle {
    @Override
    void setWidth(int w) {
        super.setWidth(w);
        super.setHeight(w); // Violates LSP!
    }
    
    @Override
    void setHeight(int h) {
        super.setHeight(h);
        super.setWidth(h); // Violates LSP!
    }
}

// Client code expecting Rectangle behavior breaks
void testArea(Rectangle r) {
    r.setWidth(5);
    r.setHeight(4);
    assert r.area() == 20; // Fails for Square!
}
```

**Solution:**  
Don't make Square inherit from Rectangle. Use composition instead.

### **1.2 Favor Composition Over Inheritance**
**When to use composition:**
- You need to **change behavior at runtime**
- You want to **share behavior** between unrelated classes
- You need to **avoid deep inheritance hierarchies**

**Composition Example:**
```java
interface Engine {
    void start();
}

class ElectricEngine implements Engine {
    public void start() { /* ... */ }
}

class Car {
    private Engine engine; // Composition
    
    Car(Engine e) { this.engine = e; }
    
    void start() {
        engine.start();
    }
}

// Can change behavior at runtime
Car tesla = new Car(new ElectricEngine());
```

### **1.3 When to Use Inheritance**
**Valid cases for inheritance:**
- **True "is-a" relationships** (Penguin IS-A Bird)
- **Framework extension points** (Android's View class)
- **Template Method pattern** implementations
- **Interface implementation** (when multiple classes share common behavior)

**Good Inheritance Example:**
```java
abstract class PaymentProcessor {
    // Template method
    final void process() {
        validate();
        performPayment();
        notifyUser();
    }
    
    abstract void performPayment();
    
    void validate() { /* common validation */ }
    void notifyUser() { /* common notification */ }
}

class CreditCardProcessor extends PaymentProcessor {
    void performPayment() { /* credit card specific */ }
}
```

## **2. Frequently Missed Concepts**

### **2.1 The Fragile Base Class Problem**
**Issue:** Changes to parent classes can **unintentionally break child classes**

**Example:**
```java
class Stack {
    protected Object[] elements;
    protected int size = 0;
    
    public void push(Object e) {
        elements[size++] = e;
    }
    
    public Object pop() {
        return elements[--size];
    }
}

class CountingStack extends Stack {
    private int count = 0;
    
    @Override
    public void push(Object e) {
        count++;
        super.push(e);
    }
    
    // What if Stack's pop() implementation changes to:
    // public Object pop() { size--; return elements[size]; }
    // Now count becomes inaccurate!
}
```

**Solution:**
- Make classes **final** by default
- Use **composition** when extension isn't necessary
- Document **extension contracts** clearly

### **2.2 Interface Inheritance vs Implementation Inheritance**
| Aspect | Interface Inheritance | Implementation Inheritance |
|--------|-----------------------|----------------------------|
| **What's inherited** | Method signatures | Actual code implementation |
| **Multiple** | Yes (multiple interfaces) | No (single class only) |
| **Flexibility** | High (any class can implement) | Low (tight coupling) |
| **When to use** | Defining contracts | Sharing common code |

### **2.3 The Diamond Problem (Java's Approach)**
**Issue:** Multiple inheritance ambiguity

**Java's Solution:**
```java
interface A { default void foo() { System.out.println("A"); } }
interface B { default void foo() { System.out.println("B"); } }

class C implements A, B {
    @Override  // Must resolve the conflict
    public void foo() {
        A.super.foo(); // Explicitly choose A's version
    }
}
```

## **3. Practical Decision Framework**

### **Inheritance Checklist (Ask Before Extending)**
1. **Is the relationship truly "is-a"?**  
   (Not "has-a" or "behaves-like")

2. **Will child classes maintain LSP?**  
   (No strengthened preconditions/weakened postconditions)

3. **Is the hierarchy likely to remain shallow?**  
   (Deep hierarchies become unmaintainable)

4. **Do you need runtime behavior changes?**  
   (If yes, prefer composition)

5. **Is the base class stable?**  
   (Frequent changes break child classes)

## **4. Advanced Interview Problems**

### **Problem 1: LSP Violation Detection**
```java
class Bird {
    void fly() { /* ... */ }
}

class Penguin extends Bird {
    @Override
    void fly() {
        throw new UnsupportedOperationException();
    }
}
```
**Issue:** Breaks LSP - client code expecting birds to fly will break

### **Problem 2: Composition Refactoring**
```java
// Before (bad inheritance)
class Stack extends Vector { /* ... */ }

// After (good composition)
class Stack {
    private Vector elements;
    /* ... */
}
```
**Why Better:**
- Prevents unwanted Vector methods in Stack API
- More flexible for implementation changes

### **Problem 3: Template Method Pattern**
```java
abstract class Game {
    final void play() { // Template method
        initialize();
        startPlay();
        endPlay();
    }
    
    abstract void initialize();
    abstract void startPlay();
    void endPlay() { /* default impl */ }
}

class Chess extends Game {
    void initialize() { /* ... */ }
    void startPlay() { /* ... */ }
}
```
**Key Insight:** Good use of inheritance for algorithm structure

## **5. Pro Tips for Interviews**
1. **Always mention LSP** when discussing inheritance
2. **Discuss alternatives** (composition, interfaces)
3. **Recognize anti-patterns**:
    - Deep hierarchies (> 3 levels)
    - Overriding to change behavior completely
    - Inheriting just for code reuse

4. **Know these quotes cold**:
    - *"Prefer composition over inheritance"* - GoF
    - *"Subtypes must be substitutable for their base types"* - Liskov

This comprehensive approach ensures you'll handle any inheritance design question with confidence!

# METHOD SIGNATURE
* 1.number of parameters
* 2.type of parameters
* 3.order of parameters by data types
* return types ,throws ,access modifiers cant be signature of methods

---
# POLYMORPHISM

### **Explanation**

* At **compile-time**, the compiler only knows that `a1` and `a2` are of type `Animal`.
* But **at run-time**, the JVM looks at the **actual object** (`Dog` or `Cat`) that the reference is pointing to and decides which method to execute.

This decision is made during **runtime**, not compile-time → hence, **method overriding is called run-time polymorphism**. ✅

---
# **Java Polymorphism: 10 Tricky Problems to Master Forever**

## **🚀 Core Concepts Recap**
- **Compile-time Polymorphism (Overloading)**: Same method name, different parameters (decided at compile time)
- **Runtime Polymorphism (Overriding)**: Same method signature, different implementations (decided at runtime)

---

## **🔥 10 Tricky Polymorphism Problems**

### **Problem 1: Basic Overloading**
```java
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}

public class Test {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(5, 10));      // 15
        System.out.println(calc.add(5.5, 10.5));  // 16.0
        System.out.println(calc.add(5, 10.5));    // ❓ What happens?
    }
}
```
<details>
<summary>Answer</summary>
**Output:** 15.5  
**Why?** int + double promotes to double, calls `add(double, double)`
</details>

---

### **Problem 2: Method Resolution Priority**
```java
class Test {
    void process(int num) { System.out.println("int: " + num); }
    void process(Integer num) { System.out.println("Integer: " + num); }
    void process(Object num) { System.out.println("Object: " + num); }
    
    public static void main(String[] args) {
        Test t = new Test();
        t.process(10);     // ❓ Which method?
        t.process(null);   // ❓ Which method?
    }
}
```
<details>
<summary>Answer</summary>
**Output:**  
`int: 10` (exact match preferred)  
`Integer: null` (most specific reference type)  
</details>

---

### **Problem 3: Overriding with Access Modifiers**
```java
class Parent {
    protected void show() { System.out.println("Parent"); }
}
class Child extends Parent {
    public void show() { System.out.println("Child"); } // ❓ Valid?
}
```
<details>
<summary>Answer</summary>
**✅ Valid!** Overriding can widen access (protected → public) but not narrow (public → protected)
</details>

---

### **Problem 4: Static Method "Overriding"**
```java
class A {
    static void print() { System.out.println("A"); }
}
class B extends A {
    static void print() { System.out.println("B"); }
}

public class Test {
    public static void main(String[] args) {
        A a = new B();
        a.print(); // ❓ What's printed?
    }
}
```
<details>
<summary>Answer</summary>
**Output:** `A`  
**Why?** Static methods are hidden, not overridden (compile-time binding)
</details>

---

### **Problem 5: Variable Hiding**
```java
class Parent {
    String name = "Parent";
    void print() { System.out.println(name); }
}
class Child extends Parent {
    String name = "Child";
}

public class Test {
    public static void main(String[] args) {
        Parent p = new Child();
        System.out.println(p.name);    // ❓
        p.print();                     // ❓
    }
}
```
<details>
<summary>Answer</summary>
**Output:**  
`Parent` (variables don't override - reference type matters)  
`Parent` (method uses Parent's `name` variable)  
</details>

---

### **Problem 6: Constructor Overloading**
```java
class Box {
    Box() { this(0); System.out.print("A"); }
    Box(int size) { System.out.print("B"); }
    Box(String type) { this(); System.out.print("C"); }
}

public class Test {
    public static void main(String[] args) {
        new Box("test"); // ❓ Output?
    }
}
```
<details>
<summary>Answer</summary>
**Output:** `BAC`  
**Flow:** `Box("test")` → `this()` → `Box(0)` → prints "B" → back to `Box()` → prints "A" → back to `Box("test")` → prints "C"
</details>

---

### **Problem 7: Overriding with Exceptions**
```java
class Parent {
    void process() throws IOException { }
}
class Child extends Parent {
    void process() throws SQLException { } // ❓ Valid?
}
```
<details>
<summary>Answer</summary>
**❌ Invalid!** Overriding method cannot throw broader checked exceptions
</details>

---

### **Problem 8: The Double Dispatch Problem**
```java
class Animal {
    void interact(Animal a) { System.out.println("Animal meets Animal"); }
    void interact(Dog d) { System.out.println("Animal meets Dog"); }
}
class Dog extends Animal {
    void interact(Animal a) { System.out.println("Dog meets Animal"); }
    void interact(Dog d) { System.out.println("Dog meets Dog"); }
}

public class Test {
    public static void main(String[] args) {
        Animal a1 = new Dog();
        Animal a2 = new Dog();
        a1.interact(a2); // ❓ Output?
    }
}
```
<details>
<summary>Answer</summary>
**Output:** `Dog meets Animal`  
**Why?** Java uses single dispatch - runtime type of `a1` but compile-time type of `a2`
</details>

---

### **Problem 9: Private Method "Overriding"**
```java
class A {
    private void secret() { System.out.println("A's secret"); }
    public void reveal() { secret(); }
}
class B extends A {
    private void secret() { System.out.println("B's secret"); }
}

public class Test {
    public static void main(String[] args) {
        B b = new B();
        b.reveal(); // ❓ Output?
    }
}
```
<details>
<summary>Answer</summary>
**Output:** `A's secret`  
**Why?** Private methods aren't overridden - `reveal()` calls A's `secret()`
</details>

---

### **Problem 10: Overloading + Overriding Combo**
```java
class Parent {
    void process(int num) { System.out.println("Parent int: " + num); }
}
class Child extends Parent {
    void process(double num) { System.out.println("Child double: " + num); }
    void process(int num) { System.out.println("Child int: " + num); }
}

public class Test {
    public static void main(String[] args) {
        Parent p = new Child();
        p.process(10);     // ❓
        p.process(10.5);   // ❓ Compile error?
    }
}
```
<details>
<summary>Answer</summary>
**Output:** `Child int: 10` (overriding works)  
**Compile error:** `process(double)` not in Parent's contract  
**Key:** Overloading is compile-time, overriding is runtime
</details>

---

## **🎯 Ultimate Polymorphism Cheat Sheet**

### **Overloading Rules**
1. Same method name, different parameters
2. Can change return type
3. Can change access modifiers
4. Compile-time decision

### **Overriding Rules**
1. Same method signature
2. Covariant return types allowed
3. Can't narrow access (can widen)
4. Can't throw broader checked exceptions
5. Runtime decision

### **Variable Rules**
1. No overriding - always reference type
2. Use `super` to access parent variables

### **Static Methods**
1. Hidden, not overridden
2. Always compile-time binding

---

## **💡 Memory Tricks**
- **Overloading** → "Compile-time sees parameters"
- **Overriding** → "Runtime sees object type"
- **Variables** → "Never polymorphic"
- **Static** → "Always chooses reference type"

# **Java Polymorphism Deep Dive: 15 Tricky Problems**

## **🚀 Core Concepts Recap**
1. **Exception Handling in Overriding**
2. **Access Modifier Rules**
3. **Dynamic Method Dispatch**
4. **Reference Type vs Object Type**
5. **Static vs Dynamic Binding**

---

## **🔥 15 Tricky Problems**

### **Problem 1: Exception Handling in Overriding**
```java
class Parent {
    void process() throws IOException { }
}
class Child extends Parent {
    void process() throws FileNotFoundException { } // ✅ Valid?
}
```
<details>
<summary>Answer</summary>
**✅ Valid!** FileNotFoundException is narrower than IOException
</details>

---

### **Problem 2: Access Modifier Rules**
```java
class A {
    protected void method() { }
}
class B extends A {
    void method() { } // ❓ Compile error?
}
```
<details>
<summary>Answer</summary>
**❌ Compile error!** Cannot reduce visibility (protected → package-private)
</details>

---

### **Problem 3: Dynamic Method Dispatch**
```java
class Animal {
    void sound() { System.out.println("Animal sound"); }
}
class Dog extends Animal {
    void sound() { System.out.println("Bark"); }
    void wagTail() { System.out.println("Wagging"); }
}

public class Test {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();    // ✅ "Bark"
        a.wagTail();  // ❓ Compile error?
    }
}
```
<details>
<summary>Answer</summary>
**❌ Compile error!** Reference type Animal doesn't have wagTail() method
</details>

---

### **Problem 4: Virtual Method Invocation**
```java
class Base {
    void show() { System.out.println("Base"); }
}
class Derived extends Base {
    void show() { System.out.println("Derived"); }
}

public class Test {
    public static void main(String[] args) {
        Base b = new Derived();
        b.show(); // ❓ Output?
    }
}
```
<details>
<summary>Answer</summary>
**Output:** "Derived" (Virtual method invocation - runtime polymorphism)
</details>

---

### **Problem 5: Runtime Type Determination**
```java
class X { void print() { System.out.println("X"); } }
class Y extends X { void print() { System.out.println("Y"); } }

public class Test {
    public static void main(String[] args) {
        X obj = new Y();
        System.out.println(obj instanceof Y); // ❓
        System.out.println(obj.getClass().getName()); // ❓
    }
}
```
<details>
<summary>Answer</summary>
**Output:** 
true (actual object is Y)
Y (runtime class)
</details>

---

### **Problem 6: Method Resolution Process**
```java
class A {
    void process(int num) { System.out.println("A int: " + num); }
}
class B extends A {
    void process(Integer num) { System.out.println("B Integer: " + num); }
}

public class Test {
    public static void main(String[] args) {
        B b = new B();
        b.process(10); // ❓ Which method?
    }
}
```
<details>
<summary>Answer</summary>
**Output:** "A int: 10" (Exact match in parent preferred over auto-boxing in child)
</details>

---

### **Problem 7: Reference Type vs Object Type**
```java
class Vehicle {
    String type = "Vehicle";
    String getType() { return type; }
}
class Car extends Vehicle {
    String type = "Car";
    String getType() { return type; }
}

public class Test {
    public static void main(String[] args) {
        Vehicle v = new Car();
        System.out.println(v.type);      // ❓
        System.out.println(v.getType()); // ❓
    }
}
```
<details>
<summary>Answer</summary>
**Output:**
Vehicle (variables use reference type)
Car (methods use object type)
</details>

---

### **Problem 8: Type Casting Scenarios**
```java
class Animal { }
class Dog extends Animal {
    void bark() { System.out.println("Woof"); }
}

public class Test {
    public static void main(String[] args) {
        Animal a = new Animal();
        Dog d = (Dog)a; // ❓ Runtime error?
    }
}
```
<details>
<summary>Answer</summary>
**✅ ClassCastException!** Cannot cast parent to child
</details>

---

### **Problem 9: Static Binding Example**
```java
class Calculator {
    static int add(int a, int b) { return a + b; }
    static double add(double a, double b) { return a + b; }
}

public class Test {
    public static void main(String[] args) {
        System.out.println(Calculator.add(5, 10));    // ❓
        System.out.println(Calculator.add(5.0, 10.0));// ❓
    }
}
```
<details>
<summary>Answer</summary>
**Output:**
15 (static binding - compile time)
15.0 (static binding - compile time)
</details>

---

### **Problem 10: Dynamic Binding Example**
```java
class Shape {
    void draw() { System.out.println("Drawing shape"); }
}
class Circle extends Shape {
    void draw() { System.out.println("Drawing circle"); }
}

public class Test {
    public static void main(String[] args) {
        Shape s = new Circle();
        s.draw(); // ❓ Output?
    }
}
```
<details>
<summary>Answer</summary>
**Output:** "Drawing circle" (dynamic binding - runtime)
</details>

---

### **Problem 11: Mixed Binding**
```java
class Parent {
    static void method() { System.out.println("Parent static"); }
    void method2() { System.out.println("Parent instance"); }
}
class Child extends Parent {
    static void method() { System.out.println("Child static"); }
    void method2() { System.out.println("Child instance"); }
}

public class Test {
    public static void main(String[] args) {
        Parent p = new Child();
        p.method();   // ❓
        p.method2();  // ❓
    }
}
```
<details>
<summary>Answer</summary>
**Output:**
Parent static (static binding)
Child instance (dynamic binding)
</details>

---

### **Problem 12: Overriding with Final**
```java
class Parent {
    final void method() { System.out.println("Parent final"); }
}
class Child extends Parent {
    void method() { System.out.println("Child attempt"); } // ❓ Valid?
}
```
<details>
<summary>Answer</summary>
**❌ Compile error!** Cannot override final methods
</details>

---

### **Problem 13: Private Method "Overriding"**
```java
class A {
    private void secret() { System.out.println("A secret"); }
    public void callSecret() { secret(); }
}
class B extends A {
    private void secret() { System.out.println("B secret"); }
}

public class Test {
    public static void main(String[] args) {
        B b = new B();
        b.callSecret(); // ❓ Output?
    }
}
```
<details>
<summary>Answer</summary>
**Output:** "A secret" (Private methods aren't overridden)
</details>

---

### **Problem 14: Constructor and Polymorphism**
```java
class Parent {
    Parent() { print(); }
    void print() { System.out.println("Parent"); }
}
class Child extends Parent {
    Child() { print(); }
    void print() { System.out.println("Child"); }
}

public class Test {
    public static void main(String[] args) {
        new Child(); // ❓ Output?
    }
}
```
<details>
<summary>Answer</summary>
**Output:**
Child (from Parent constructor - dynamic binding!)
Child (from Child constructor)
</details>

---

### **Problem 15: Interface Implementation**
```java
interface I { void method(); }
class A implements I {
    public void method() { System.out.println("A"); }
}
class B implements I {
    public void method() { System.out.println("B"); }
}

public class Test {
    public static void main(String[] args) {
        I i = new A();
        i.method(); // ❓ Output?
        i = new B();
        i.method(); // ❓ Output?
    }
}
```
<details>
<summary>Answer</summary>
**Output:**
A (dynamic binding)
B (dynamic binding)
</details>

---

## **🎯 Ultimate Cheat Sheet**

### **Exception Handling in Overriding**
- Can throw same or narrower exceptions
- Cannot throw broader checked exceptions
- Runtime exceptions are free

### **Access Modifier Rules**
- Can widen access (protected → public)
- Cannot narrow access (public → protected)

### **Binding Types**
| Type | Decides | Based On | Example |
|------|---------|----------|---------|
| **Static** | Compile-time | Reference type | Method overloading |
| **Dynamic** | Runtime | Object type | Method overriding |

### **Reference vs Object Type**
- **Reference type**: Determines accessible methods (compile-time)
- **Object type**: Determines method implementation (runtime)

### **Type Casting Rules**
- Upcasting: Always safe (implicit)
- Downcasting: Needs explicit cast + instanceof check

After these 15 problems, you've **mastered Java polymorphism**! 🚀 