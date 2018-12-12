public abstract class Colleague{
	
     private Mediator mediator;
     
     private String name;
     public Colleague(String name){
          this.name = name;}
     public void setMediator(Mediator mediator){
          this.mediator = mediator;}
     public Mediator getMediator(){
          return mediator;}
     public String getName(){
          return name;}
     public abstract void beNotified(Object o);
     
}