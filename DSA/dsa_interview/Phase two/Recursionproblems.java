import java.util.*;

//# 🚀 Universal Rule (Memory Shortcut)
//When you write recursive code with references, **ask this one question:**
//        > "Do I want later recursive calls to see the changes I just made?"
//        * **Yes → Backtrack.** (share reference, undo later)
//        * **No → Copy.** (make a new object, don’t touch the original)
//        * **Not modifying → Just pass reference as-is.**
//        ---
//# 🔥 Super Simple Mnemonic
//* **SHARE + UNDO** → exploring paths (backtracking).
//        * **COPY + KEEP** → saving results.
//        * **JUST PASS** → read-only.
public class Recursionproblems {
    public static void main(String [] args){
       maxmin(0,Integer.MIN_VALUE,Integer.MAX_VALUE,new int[]{3,45,2,45,1});
       char k='a';
       char z='z';
       char one='0';
       char hun= '9';
        System.out.println((int)k);
        System.out.println((int)z);
        System.out.println((int)one);
        System.out.println(hun < one);
        validpalindrome("A man, a plan, a canal: Panama");
        System.out.println(occurance(new int[]{1,2,2,2,4,4},2,0,0));
        generateSubseq();
        System.out.println(subsets(new int[]{1,0}));

        Set<List<Integer>> s=new HashSet<>();
        List<Integer> l1=new ArrayList<>();
        List<Integer> l2=new ArrayList<>();
        l1.add(1);l2.add(2);
        s.add(l1);
        s.add(l2);
        System.out.println(s);
        s.remove(l2);
        System.out.println(s);
        System.out.println(subsetsWithDup(new int[]{1,2,2}));
        subset("abc");
        System.out.println(permuteUnique(new int[]{1,1,2}));
        nextPermutation(new int[]{2,3,1});
    }
    public static List<List<Integer>> permuteUnique(int[] nums) {
            List<List<Integer>> ll=new ArrayList<>();
            StringBuilder input=new StringBuilder();
            for(int e:nums){input.append(e);};
             permutationhelper(ll,new StringBuilder(),new StringBuilder(input));
             return ll;
    }
    public static void permutationhelper(List<List<Integer>> ll,StringBuilder proc,StringBuilder unproc){
        if(unproc.isEmpty()){
            List<Integer> l=new ArrayList<>();
            for(char c:proc.toString().toCharArray()){
                l.add(c-'0');
            }
                if(!ll.contains(l)){ll.add(l);};
                return;
        }
        for(int i=0;i<unproc.length();i++){
            char ch=unproc.charAt(i);
            proc.append(unproc.charAt(i));
            unproc.deleteCharAt(i);

            permutationhelper(ll,proc,unproc);

            unproc.insert(i,ch);
            proc.deleteCharAt(proc.length()-1);
        }
    }
    public static  void nextPermutation(int[] nums) {
    nextpermutationhelper(Integer.MIN_VALUE,nums,new int[nums.length],new boolean[nums.length],0);
    }
    public static void nextpermutationhelper(int max, int[] nums, int[] holder, boolean[] stts, int startindex) {
        if (startindex == nums.length) {
            String temp = "";
            for (int e : holder) {
                temp += e;
            }
            int m = Integer.parseInt(temp);
            if (m > max) {
                System.out.println(m);
            }
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            if (!stts[i]) {
                holder[startindex] = nums[i];
                stts[i] = true; // mark element i as used
                nextpermutationhelper(max, nums, holder, stts, startindex + 1);
                stts[i] = false; // backtrack
            }
        }
    }


    public static void maxmin(int i,int max,int min,int[] arr){
        if(i >= arr.length){
            System.out.println(max+" "+min);return;}
        else{
            if(arr[i]>max){
                max=arr[i];
            }
            if(arr[i]<min){
                min=arr[i];
            }
            maxmin(i+1,max,min,arr);
        }
    }
    public static boolean validpalindrome(String s){
            s=s.toLowerCase();
        return hvalidpalidrome(s,0,s.length()-1);
    }
    public static Boolean hvalidpalidrome(String s,int i,int j){
        if(i>=j){
            return  true;
        }
        char left=s.charAt(i);
        char right=s.charAt(j);
        if(isAlphanumeric(left) && isAlphanumeric(right)) {
            if (left== right)
            {return hvalidpalidrome(s,++i,--j);
            }
        }

        if(!isAlphanumeric(left)){
           return hvalidpalidrome(s,++i,j);
        }
        if(!isAlphanumeric(right)){
           return hvalidpalidrome(s,i,--j);
        }
        return false;
    }
    public static Boolean isAlphanumeric(char c){
        return c>='a' && c<='z' || c>='0' && c<='9';
    }
    public static int climbingstairs(int n){
        if(n == 1){
            return 1;
        }if(n ==0){
            return 0;
        }
        return climbingstairs(n-1)+climbingstairs(n-2);
    }

    public static int occurance(int[] arr,int target,int index,int count){
        if(index >=arr.length){
            return  count;
        }
        if(arr[index]==target){
               return occurance(arr,target,index+1,++count);
        }
        return  occurance(arr,target,index+1,count);
    }
    public static void generateSubseq(){
        List<String> al=new ArrayList<>();
        helper(new String[]{"1","2","3"},0,al,"");
        System.out.println(al);
    }
    public static void helper(String [] arr,int index,List<String> result,String temp){
        if(index >=arr.length){
            result.add(temp);
            return;
        }
        String included=temp.concat(arr[index]);
        helper(arr,index+1,result,included);
        helper(arr,index+1,result,temp);
    }
    public  static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result =new ArrayList<>();
        subsethelper(nums,0,new ArrayList<>(),result);
        return result;
    }
    public static void subsethelper(int[] nums,int index,List<Integer> value,List<List<Integer>> result){
        if(index>=nums.length){
            result.add(value);
            return ;
        }
        subsethelper(nums,index+1,value,result);
        value.add(nums[index]);
        subsethelper(nums,index+1,value,result);
        value.removeLast();
    }
    public  static List<List<Integer>> subsetsWithDup(int[] nums) {
            Arrays.sort(nums);
            List<List<Integer>> result=new ArrayList<>();
            subsethelpertwo(nums,0,new ArrayList<>(),result);
            return result;
    }

    public static void subsethelpertwo(int[] nums,int index,List<Integer> ll,List<List<Integer>> result){
      if(index >=nums.length){
          if(! customcheck(ll,result)){
            result.add(new ArrayList<>(ll));
          }
          return;
      }
      subsethelpertwo(nums,index+1,ll,result);
      ll.add(nums[index]);
      subsethelpertwo(nums,index+1,ll,result);
      ll.remove(ll.size()-1);
    }
    public static boolean customcheck(List<Integer> valu,List<List<Integer>> result){
        for(List<Integer> ll:result){
            if(ll.equals(valu)){
                return true;
            }
        }return false;
    }
    public static void subset(String str){
//        subsethelper(str,0,"");
//            subsetsumhelperarr(new int[]{1,2,3},0,0,5);
        System.out.println(targetsum(new int[]{1,1,1,1,1},0,0,3)); ;
    }
    public static  void subsethelper(String str,int startindex,String temp){
        if(startindex>=str.length()){
            return;
        }
        for(int i=startindex;i<str.length();i++){
            String tempval=temp+ str.charAt(i);
            System.out.println(tempval);
            subsethelper(str,i+1,tempval);
        }
    }
    public static  void subsetsumhelperarr(int[] arr,int startindex,int tempsum,int target){
        if(tempsum == target){
            System.out.println(true);
            return;
        }
        if(startindex>=arr.length){
            return;
        }
        for(int i=startindex;i<arr.length;i++){
            int tempval=tempsum+arr[i];
            subsetsumhelperarr(arr,i+1,tempval,target);
        }
    }
    public static  int targetsum(int[] arr,int startindex,int tempsum,int target){
        if(startindex==arr.length){
            if(tempsum ==target) {
                return 1;
            }
            return 0;
        }
            int i=startindex;
            int postiveval=tempsum+arr[i];
            int count=0;
            count+=targetsum(arr,i+1,postiveval,target);
            int negativeval=tempsum-arr[i];
            count+=targetsum(arr,i+1,negativeval,target);
            return count;
        }
    public boolean canPartition(int[] nums) {
        int sum = Arrays.stream(nums).sum();
        if (sum % 2 != 0) return false;
        return partitionHelper(nums, 0, 0, sum / 2);
    }

    private boolean partitionHelper(int[] arr, int start, int tempSum, int target) {
        if (tempSum == target) return true;
        if (tempSum > target || start >= arr.length) return false;

        return partitionHelper(arr, start + 1, tempSum + arr[start], target)
                || partitionHelper(arr, start + 1, tempSum, target);
    }
    public boolean canPartitionbt(int[] nums) {
        int sum = Arrays.stream(nums).sum();
        if (sum % 2 != 0) return false;
        return partitionhelperbt(nums, 0, 0, sum / 2);
    }

    public boolean partitionhelperbt(int[] arr, int start, int tempSum, int target) {
        if (tempSum == target) {
            return true;   // found one subset
        }
        if (tempSum > target || start >= arr.length) {
            return false;  // invalid path
        }

        boolean result = false;
        for (int i = start; i < arr.length; i++) {
            // explore including arr[i]
            if (partitionhelperbt(arr, i + 1, tempSum + arr[i], target)) {
                return true;  // short-circuit if found
            }
        }
        return result;
    }
        public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
            return mergeLists(list1,list2);
        }
        public ListNode mergeLists(ListNode l1, ListNode l2) {
            if (l1 == null) return l2;
            if (l2 == null) return l1;
            if (l1.val <= l2.val) {
                l1.next = mergeLists(l1.next, l2);
                return l1;
            } else {
                l2.next = mergeLists(l1, l2.next);
                return l2;
            }
        }

    }

 class ListNode {
      int val;
      ListNode next;
      ListNode() {}
      ListNode(int val) { this.val = val; }
 ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 }

