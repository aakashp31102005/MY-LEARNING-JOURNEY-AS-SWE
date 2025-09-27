package com.generic;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

public class Generic {
    public void mergelist(List<? extends Number> l1,List<? extends  Number> l2,List<? super Number> combinedlist ) {
        combinedlist.addAll(l1);
        combinedlist.addAll(l2);
    }
    public Optional<Integer> maxElement(Collection<Integer> cl) {
        return cl.stream().max(Integer::compareTo);
    }


}

class Map<K extends Object,V extends  Object>{
    private HashMap<K,V> hm;
    Map(){
        hm=new HashMap<>();
    }
    public void addc(K key,V value){
        hm.put(key,value);
    }
}

