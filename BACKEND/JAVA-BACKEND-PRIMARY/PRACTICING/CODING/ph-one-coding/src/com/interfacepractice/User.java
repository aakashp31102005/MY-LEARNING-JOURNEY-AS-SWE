package com.interfacepractice;

public interface User {
    int i=398;
    final int j=32;
    static int k=30;
//    private int z=20; not allowed
    public static void j(){
        System.out.println("hello");
    }
    default void method(){}
}
