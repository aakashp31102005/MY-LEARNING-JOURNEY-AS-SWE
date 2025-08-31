package com.packageone;

import java.util.Arrays;

public class inheritancepractice  {
    public final int var;
  public  inheritancepractice(int id){
        this.var=id;
    }
    protected static int value = 42;
    protected int nonstaticprotecte=90;
    public static final int common=10;
    private int amount=1000;


    public static void main(String args[]){
        two t=new two();
        t.mt();
        new inheritancepractice(12).pm();
        System.out.println("in package one "+ Arrays.toString(args));
    }
    private void pm(){
        System.out.println("in private method"+this.var);
        subclass sb=new subclass();
        sb.subm();
    }
    protected void publicmethod(){


    }
   public class subclass extends  inheritancepractice{
        public subclass(){
            super(12);
        }
        public void subm(){
           amount-=100;
            System.out.println(amount);
        }
    }
}
class two extends  inheritancepractice{
    two(){
        super(0);
    }
    public void mt(){
        inheritancepractice ip=new inheritancepractice(12);
        inheritancepractice op=new inheritancepractice(13);
        System.out.println(ip.var+" "+ op.var+" "+inheritancepractice.common);
    }
}