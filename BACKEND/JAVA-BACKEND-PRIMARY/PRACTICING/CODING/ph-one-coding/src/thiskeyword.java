public class thiskeyword {
    String variable="default";
    public thiskeyword(){
        this("hello");
    }
    public thiskeyword(String value){
//        this() infinite recursion
        this.variable=value;
    }
    public thiskeyword methodone(){
        this.variable="metohdone";
        System.out.println("method one"+this.variable);
//        return new thiskeyword();
        return this;
    }
    public thiskeyword methodtwo(){
        System.out.println(this.variable);
        System.out.println("method two");
//        return  new thiskeyword();
        return  this; // it is know as method chaning where each method return currect object so we can call more than one method of same object sequantionally

    }


        public static void main(String [] args){
                thiskeyword tk=new thiskeyword();
                 System.out.println(tk.variable);
                tk.methodone().methodtwo();
        }
}
