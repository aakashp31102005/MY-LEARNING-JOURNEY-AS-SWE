package com.packagetwo;
import com.packageone.*;

import java.util.concurrent.LinkedTransferQueue;

public class packagetwo extends  inheritancepractice{
    packagetwo(){
        super(1);

    }
    public static void main(String args[]){
        System.out.println(value);
        System.out.println(inheritancepractice.value);
        packagetwo p=new packagetwo();
        System.out.println((p instanceof  Object));
        System.out.println("in package two");
        inheritancepractice.main(new String[]{"hai hello"});
    }
    public void help(inheritancepractice obj){
//        System.out.println(obj.nonstaticprotecte); it will give error

    }
}
