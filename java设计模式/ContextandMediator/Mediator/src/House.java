public class House{
     private String price;
     private String address;

     public House(String address, String price){
          this.address = address;
          this.price = price;}
   
     public String getAddress(){
          return address;}

     public String getPrice(){
          return price;}

     public String toString(){
     return "Address: "+address+"Price:"+price;  } 
}
