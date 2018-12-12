public class Lessor extends Colleague{
    public Lessor(String name){
         super(name);}

     public void rentHause(House house){
     System.out.println(getName()+"want to rent the hause"+house);
     getMediator().update(this, house); }

     public void beNotified(Object o){
     System.out.println(getName()+"receive the following house info who are searching: "+o); }

   }
