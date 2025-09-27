package com.packagetwo;

import java.util.HashMap;
import java.util.Map;

public class finalpractice {
public static void main(String [] args){
    point p=new point(1,2);
    point p2=new point(2,43);
    p.printorigin();
    p2.printorigin();
    Cache c=new Cache();
    c.addentry("one","cache one");
    Shape ccle=new Circle();
    ccle.getAreaFormula();
    SecureConfig sc=new SecureConfig("pone");
    System.out.println(sc.getPassword());
}
}
final class SecureConfig{
    private final String password;
    public SecureConfig(String password){
        this.password=password;
    }
    public String getPassword(){
        return this.password;
    }

}
//class authconfig extends  SecureConfig{} error
class Shape{
    public static void getAreaFormula(){
        System.out.println("depends on shape");
    }
    public void calculateArea(int radius){
        System.out.println("depends on sizes");
    }
    public void calculateArea(int length,int height){
        System.out.println("depends on shape or size");
    }
}
class Circle extends Shape{
    public static void getAreaFormula(){
        System.out.println("pi*r^2");
    }
    public void calculateArea(int radius){
        System.out.println(Math.PI*(radius*radius));
    }
}

class point{
    final int x;
    final int y;
    static final String origin="(0,0)";
    public point(int x,int y){
        this.x=x;
        this.y=y;
    }
    public void printorigin(){
        System.out.println(origin);
//      final int value; will throw error of use final variable after initialization
    }
    public static void printtwo(){
        System.out.println("love is common to all organism");
    }
}
class Cache{
    final  Map<String,String> cmap;
    public Cache(){
        cmap=new HashMap<>();
    }
    public  void addentry(String chno,String cvalue){
        cmap.put(chno,cvalue);
        System.out.println(cmap);
//        cmap=new HashMap<>();
    }
}