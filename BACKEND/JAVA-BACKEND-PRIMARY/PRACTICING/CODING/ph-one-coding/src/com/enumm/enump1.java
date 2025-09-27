package com.enumm;

import java.util.Arrays;

public class enump1 {
    public static void main(String [] args){
        System.out.println(Arrays.toString(Day.values()));
        System.out.println(Day.sunday.task);
    }
}
 enum Day{
    sunday(1),monday(3),tuesday(4),wednesday(3),thursday(23),friday(3),saturday(4);
//     Date{
//        public void showdate(){
//            System.out.println("date");
//        }
//     };
//    public abstract  void showdate(); all the constants must implement all the abstract methods in enum
    int task;
    Day(int task){
        this.task=task;
    }

 }
enum Operation{
    Plus{
        public int apply(int a,int b){
            return a+b;
        }
    },
    Minus{
        public int apply(int a,int b){
            return a-b;
        }
    };
public abstract  int apply(int a,int b);
}