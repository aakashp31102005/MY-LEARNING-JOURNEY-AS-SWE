package com.generic;

public interface Repository<T,Id>{
//    default void save(T entity);
//    void save(T entity)-> public abstract void save(t entity)
    void save(T entity);
    void findById(Id id);
}
class crudimg<T,Id> implements  Repository<T,Id>{
    public void save(T entity){
        System.out.println("object saved in database:"+entity.toString());
    }
    public void findById(Id id){
        System.out.println("found object");
    }
}
class User<Id>{
    Id id;
    String name;
    public User(){}
    public User(Id id,String name){
        this.id=id;
        this.name=name;
    }
    @Override
    public String toString(){
        return this.id+" "+this.name;
    }
}


