import java.util.*; 
import java.io.*;

class Main {  
  public static int FirstFactorial(int num) { 
  
    // code goes here   
    /* Note: In Java the return type of a function and the 
       parameter types being passed are defined, so this return 
       call must match the return type of the function.
       You are free to modify the return type. */
       
       if(num == 1 || num == 0){
           return 1;
       }
       else{
       
    return num*FirstFactorial(num-1);
    
  } 
  }
  
  public static void main (String[] args) {  
    // keep this function call here     
    Scanner s = new Scanner(System.in);
    System.out.print(FirstFactorial(s.nextLine())); 
  }   
  
}