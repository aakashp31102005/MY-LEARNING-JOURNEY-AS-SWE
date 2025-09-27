package com;

import com.sun.tools.jconsole.JConsoleContext;
import com.sun.tools.jconsole.JConsolePlugin;

public class nestedclasspractice {
    public static void main(String[] args) {
    nestedclasspractice ns=new nestedclasspractice();
    ns.helper2();

    }
    public void helper2(){
        library.Book lb=new library.Book("toobk","jhon");
        library l=new library();
        l.print();
    }
    class  library{
        String name="library";
        public static class Book{
            String title;
            String author;
            public Book(String title,String author){
                this.title=title;
                this.author=author;
//                System.out.println(name); static nested class cant access outer class member
            }
        }
        Book b=new Book("book1","alice");
        public void print(){
            System.out.println(b.title+" "+b.author);
        }
    }

    
    public  void helper(){
        inner i=new inner();
        i.man();

    }
    public static void sttest(){
        System.out.println("in static method");
    }
    String name="jhon";
    public   class inner{
        public static void main(String[] args) {
            System.out.println("in inner main method");
        }
//        String name="aakash";
        public void man(){
            System.out.println(name);
            sttest();
        }
    }
}
class sibling{
    public void siblingmethod(){
        nestedclasspractice i=new nestedclasspractice();
        nestedclasspractice.inner in=i.new inner();
        in.man();
    }
}