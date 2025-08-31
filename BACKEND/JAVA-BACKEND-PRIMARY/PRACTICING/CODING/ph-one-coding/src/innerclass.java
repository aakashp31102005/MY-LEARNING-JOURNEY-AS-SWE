public class innerclass {
String name="";
public innerclass(String name){
    this.name=name;
}
public class inner{
    String name="";
    public inner(String name){
        this.name=name;
    }
    public  void main(){
        innerclass.this.name="world";
        System.out.println(innerclass.this.name+" "+this.name);
    }
    public class innerii{
        String text="";
        public void main(){
            inner.this.name="innerinner";
        }
    }
}
public static void main(String args[]){
    inner i=new innerclass("aakash") .new inner("ganesh");
    inner.innerii ii=i. new innerii();
    ii.main();
    i.main();
}
}



