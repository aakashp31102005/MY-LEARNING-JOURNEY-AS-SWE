package com.interfacepractice;

public interface textransform {
    String transform(String input);
    String getname();
    boolean isEnabled();
    default void println(){
        System.out.println("in textransform interface");
    }
}
class UpperCaseTransform implements  textransform{
    public String transform(String input){
        return input.toUpperCase();
    }
    public String getname(){
        textransform.super.println();
        return UpperCaseTransform.class.getName();
    }
    public boolean isEnabled(){
        return false;
    }
}
