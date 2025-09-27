package com.generic;

public class main {
    public static void main(String[] args) {
        crudimg<User,Integer> cm=new crudimg<>();
        cm.save(new User(1,"aakash"));
        crudimg<User,String> cmtwo=new crudimg<>();
        cmtwo.save(new User("idone","ganesh"));
    }
}
