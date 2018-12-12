public class Lessee extends Colleague{
    public Lessee(String name){
         super(name);}

     public void findHause(House house){
     System.out.println(getName()+"want to find the hause"+house);
     getMediator().update(this, house); }

     public void beNotified(Object o){
     System.out.println(getName()+"receive the following house info : "+o); }

}
