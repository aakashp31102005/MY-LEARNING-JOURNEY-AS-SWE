import java.io.FileNotFoundException;

public class Exceptionpractice {
    static {
        int var=10/0;
    }
    public static void main(String[] args)throws  FileNotFoundException {
        boolean exception =false;
        try{
            ex();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }


        try{
            exception=true;
            throw new customchecked("custom checked");
        } catch (customchecked e){
            System.out.println(e.getMessage());
            try {
                throw new ArrayIndexOutOfBoundsException();
            }catch (ArrayIndexOutOfBoundsException ex){
                System.out.println("array index out of bound exception");
            }
        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println(e.getMessage());
        }
        if (exception) {
            System.out.println("control flow not stopped");
        }


        try{
         customunchecked cu=   new childofunchecked("hello");
         cu.compiletimexcep();
            throw new childofunchecked("child of unchecked");
        }catch (childofunchecked e){
            System.out.println("caught in main in runtime child uncheked class");
        }

        //what happens when exception occured in static block
    }
    public static int ex() throws FileNotFoundException {
        try {
            throw new RuntimeException("from try");
        } finally {
            throw new RuntimeException("from finally");
        }
    }
}
class customchecked extends  Exception{
    public customchecked(String message)  {
        super(message);
    }
}
class customunchecked extends RuntimeException{
    public customunchecked(String message) {
        System.out.println("parent custom unchecked");
        super(message);
    }
    public void compiletimexcep()throws  FileNotFoundException{
        throw new FileNotFoundException();
    }
}
class childofunchecked extends customunchecked{
    public childofunchecked(String message) {
        super(message);
    }
    public void compiletimexcep() {
        System.out.println("child of unchecked");
    }

}
