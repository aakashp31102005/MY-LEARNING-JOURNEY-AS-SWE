package com;

import org.w3c.dom.ls.LSOutput;

import java.util.*;

public class equalhash {


    public static void main(String[] args) {
        User u1=new User(1,"aakash",22);
        List<User> lu=new ArrayList<>();
        lu.add(u1);
        User u2=new User(1,"aakash",22);
        HashSet<User> hs=HashSet.newHashSet(2);
        hs.add(u1);
        hs.add(u2);
        System.out.println(hs.toString());
        System.out.println(lu.contains(u2));
        System.out.println(u1.equals(u2));
        HashMap<User,String> hm=new HashMap<>();
        hm.put(u1,"admin");
        System.out.println(hm.get(u2));
        usertwo uo=new usertwo(1,"aakash");
        usertwo oo=new usertwo(1,"aakash");
        System.out.println(uo.equals(oo));
        System.out.println(oo.equals(uo));

    }
}

class User extends Object {
    int id;
    String name;
    int age;
    User(int id,String name,int age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    @Override
    public boolean equals(Object obj) {
        if(obj==null || this.getClass().getName() != obj.getClass().getName()){
            return false;
        }
        User u=(User)obj;
        if(u.id == this.id){
            return true;
        }return false;
    }
    @Override
    public int hashCode(){
        return Objects.hash(this.id);
    }
}

class usertwo{
int id;
String name;
usertwo(int id,String name){
    this.id=id;
    this.name=name;
}
@Override
    public boolean equals(Object obj){
    usertwo ut=(usertwo) obj;
    if(this.name.equals(ut.name)){
        return true;
    }return false;
}
    @Override
    public int hashCode() {
        return name.hashCode(); 
    }
}