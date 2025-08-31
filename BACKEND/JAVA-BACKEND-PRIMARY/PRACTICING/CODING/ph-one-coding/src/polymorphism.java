import com.sun.source.doctree.EscapeTree;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOError;
import java.io.IOException;
import java.sql.SQLException;
import java.sql.SQLOutput;
import java.util.Stack;

public class polymorphism {
public void methodone(){
    System.out.println("method without parameter");
}
public void methodone(int a,String b){
    System.out.println("method with parameter");
}
public void methodone(String b,int a){

}
public void methodtwo(int i){
    System.out.println("in int i method two");
}
public void methodtwo(Integer i){
    System.out.println("in Integer i method two");
}
public static void testmethod(){
    System.out.println("in testmethod");
}
String classs="parent";

public static void main(String []args){
    polymorphism p=new polymorphism();
    p.methodone();
    p.methodone(1,"hello");
    p.methodone("hello",1);
    p.methodtwo(2);
    p.methodtwo((Integer) 2);
    polymorphism pt=new polytwo();
    pt.methodone(1,"hello polytwo");//run time polymorphism
    pt.testmethod();
    System.out.println(pt.classs);
    parent ptw=new child();
    System.out.println(ptw instanceof  child);
    System.out.println(ptw.getClass().getName());
    try{
    ptw.methodone();
    }
    catch(StackOverflowError |FileNotFoundException e){
        System.out.println("error occured");
    }catch(Exception e){
        System.out.println("file not fourn error");
    }
    A  obj=new B();
    obj.callSecret();
//    ptw.methonotinparent(); will throw exception becaues it refer to refernce type for method existance
}
}

class polytwo extends  polymorphism{
    public void methodone(int a,String b){
        System.out.println("in polytwo");
    }
    public static void testmethod(){
        System.out.println("in child test method");
    }
    String classs="child";
    public void main(){
        polytwo pt=new polytwo();
        pt.testmethod();//even though we call the static method using object internally jvm convert to class.method()
    }
}

class parent{
    public void methodone() throws Exception{
        System.out.println("in parent method one");
    }
}
class child extends  parent{
    public void methodone() throws Exception {
        System.out.println("in chld methodone");
        super.methodone();
    }
    public void methodnotinparent(){
        System.out.println("method not in parent");
    }
}
class A {
    protected void secret() { System.out.println("A secret"); }
    public void callSecret() { secret(); }
}
class B extends A {
    protected void secret() { System.out.println("B secret"); }
}