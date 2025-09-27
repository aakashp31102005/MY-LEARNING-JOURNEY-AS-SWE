public abstract class abstractpractice {
    public static void main(String[] args) {
        shape circleobj=new circle();
        circleobj.area(21);
        shape rectangeobj=new Rectangle();
        rectangeobj.area(2,4);
    }
}
abstract class shape{
    String classname;
    public shape(){
        this.classname="shape";
    }
    public abstract  void area(double radius);
    public abstract  void area(int length,int breath);
    public void printarea(){
        System.out.println("printing area");
    }
//    private abstract void getclassname(); error
//    public  abstract static  void getclassname(); illega compination with abstract static,abstact final
    
}

class circle extends  shape{
    double area;
    @Override
    public void  area(double radius){
        this.area=Math.PI*radius;
        System.out.println(this.area);
    }

    @Override
    public void area(int length, int breath) {

    }

    public void printarea(){
        System.out.println(this.area);
    }
}
  class Rectangle extends  shape{
    double area;

      @Override
      public void area(double radius) {

      }

      @Override
    public void  area(int length,int breath){
        this.area=length*breath;
        System.out.println(area);
    }
    public void printarea(){
        System.out.println(this.area);
    }
}
