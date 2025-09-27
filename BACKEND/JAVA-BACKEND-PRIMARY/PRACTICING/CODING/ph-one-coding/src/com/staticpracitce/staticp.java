package com.staticpracitce;

public class staticp {
    public final  static String  url;
    static String password;
    static{
         url="jdbc:mysql://localhost:3306";
         password="password";
    }
    public static void main(String[] args) {
        Employee e=new Employee("emp1");
        Employee e2=new Employee("emp2");
        System.out.println(Employee.empid);
        System.out.println(Mathutil.add(1,3));
        System.out.println(url);
        System.out.println(password);

        singletonclass s1=singletonclass.getInstance("s1");
        singletonclass s2=singletonclass.getInstance("s2");
        System.out.println((s1 == s2) + " "+s2.value);
    }
    public static void staticcall(){
        System.out.println("you called me");
    }
}
class singletonclass{
    static Mathutil mu=new Mathutil();
    private static volatile  singletonclass singleinstance;
     String value;
    private singletonclass(String value){this.value=value;}
    public static singletonclass getInstance(String value){
        if(singleinstance == null){
            synchronized (singletonclass.class){
                if(singleinstance == null){
                    singleinstance=new singletonclass(value);
                }
            }
        }
        return  singleinstance;
    }
}
class Mathutil{
    public static int add(int a,int b){
        return a+b;
    }
}
 class Employee{
     static int empid;
    private String name;
   public Employee(String name){
        this.name=name;
        empid+=1;
    }

}
