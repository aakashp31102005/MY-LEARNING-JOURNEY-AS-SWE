package com.packagetwo;
import com.packageone.*;
import com.staticpracitce.staticp;
import java.util.concurrent.LinkedTransferQueue;
import static com.staticpracitce.staticp.url;

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
        staticp.staticcall();
        System.out.println(url);
    }
    public void help(inheritancepractice obj){
//        System.out.println(obj.nonstaticprotecte); it will give error

    }
}
