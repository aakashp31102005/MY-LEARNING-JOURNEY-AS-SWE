package com.generic;

import org.w3c.dom.ls.LSOutput;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLongArray;

public class genericpractice {
    public static void main(String args[]) {
        Box<String> s = new Box<>("apple");
        System.out.println(s.getName());
        Box<Character> c=new Box<>('a');
        System.out.println(c.getName());
        s.printArray(new Integer[]{1,3,4,5});
        s.printArray(new String[]{"a","ab"});
        Integer i[]=new Integer[]{1,2,3};
        s.<Integer>printArray(i);
        NumberBox<Number> n=new NumberBox<>(1);
        n.printarr();
//        NumberBox<String> ns=new NumberBox<String>("hi");//error string not withing the bound
        n.processList(new ArrayList<>(List.of(new Integer[]{1, 23, 3})));

    }
}
class Box<T>{
    private T name;
    public Box(T name){
        this.name=name;
    }
    public T getName(){
        return name;
    }
    public <R> void printArray(R[] array){
        for(R element : array){
            System.out.print(element+" ");
        }
        System.out.println();
    }
}
class NumberBox<T extends Number>{//inclusive number and its children
    private T number;
    NumberBox(T number){
        this.number=number;
    }
    public void printarr(){
        System.out.println(number.intValue());
    }
    public <T> void processList(List<? super Integer                > list){
        for(Object o:list){
            System.out.print(o.toString()+" ");
        }
        list.add(1);//anupparava list<string> nu vachika ippo ni integer aa add panna error adikku atha thavirka that intha design choice

    }
}
class objholder<T>{
//    public void printobj(){
//       T obj=new T();will throw error because generic is compile time only at run time all T -> Object so Object s=new Object() at runtime jvm not know which class this instance belongs to
//        obj.getClass().getName();
//    }
}