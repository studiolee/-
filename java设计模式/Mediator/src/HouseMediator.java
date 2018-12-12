import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;

public class  HouseMediator implements Mediator{
	

      private List<Colleague> lessorList = new ArrayList<Colleague>();
      private List<Colleague> lesseeList = new ArrayList<Colleague>();
     
      public void addLessor(Colleague lessor){
      lessorList.add(lessor);
      lessor.setMediator(this);}

      public void removeLessor(Colleague lessor){
      lessorList.remove(lessor);
      lessor.setMediator(this);
      }
      public void addLessee(Colleague lessee){
    	     lesseeList.add(lessee);
    	     lessee.setMediator(this);}

    	public void removeLessee(Colleague lessee){
    	     lesseeList.remove(lessee);
    	     lessee.setMediator(this);}

    	public void update(Colleague colleague, Object o){
    	    if(colleague instanceof Lessor){
    	    for(Iterator<Colleague> iter=lessorList.iterator(); iter.hasNext(); ){
    	    Colleague c = (Colleague)iter.next();
    	    c.beNotified(o);} }

    	     else if(colleague instanceof Lessee){
    	    for(Iterator iter=lesseeList.iterator(); iter.hasNext(); ){
    	    Colleague c = (Colleague)iter.next();
    	    c.beNotified(o);} }
    	    }
    	}
