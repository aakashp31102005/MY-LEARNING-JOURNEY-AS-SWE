public class abstraction {
    public static void main(String args[]){
        String parentname = new abstractchild().parentname;
        System.out.println(parentname);
    }
}

abstract  class abstractparent{
// abstract instance variable is not allowed   abstract String name;
     String parentname="";
    abstractparent(String name){
        this.parentname=name;
        System.out.println("abstract parehnt initialised");
    }
    static void methodtwo(){
        System.out.println("hello world");
    }
    abstract void methodone();
}
class abstractchild extends abstchild2{
    abstractchild(){
        System.out.println("abstract child initialised");
    }
    void methodone(){
        System.out.println("hello ");
    }

}
abstract class abstchild2 extends  abstractparent{
    abstchild2(){
        super("ponnusamy");
    }
    void print(){
        System.out.println("hello world");
    }
    void methodone(){
        System.out.println("in child two");
    }
}

 class sampleone{
    void printl(){
        System.out.println("hi");
    }
}


