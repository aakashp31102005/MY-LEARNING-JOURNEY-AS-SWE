import  com.jdbc.Main;

import java.lang.reflect.Constructor;

public class sample {
    public static void main(String args[]) throws NoSuchMethodException,Exception {
        //another way of creating objects using reflection api
        Constructor<s> constructor = s.class.getConstructor();
        s obj = constructor.newInstance();
    }
}

class s{
    public s(){
        System.out.println("in s class");
    }
}