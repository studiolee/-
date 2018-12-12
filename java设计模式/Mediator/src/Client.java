public class Client{
    public static void main(String[ ] args){
 
    HouseMediator hm = new HouseMediator();

 Lessor lessorA = new Lessor(" Tom ");
 Lessee lesseeB = new Lessee(" jack ");
 Lessee lesseeC = new Lessee(" mike ");
 Lessor lessorD = new Lessor(" Adam ");

   hm.addLessor(lessorA);
   hm.addLessee(lesseeB);
   hm.addLessee(lesseeC);
   hm.addLessor(lessorD);

   House houseA = new House(" Beiiing road 124# ", " 1200 ");
   lessorA.rentHause(houseA);

   House houseB = new House(" Nanjing road 1024#", " 1000 ");
   lesseeB.findHause(houseB);
   }   
}
