
public class Application {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
   Gun gun = new Gun();
   gun.fire();
   gun.state.showState();
   gun.fire();
   gun.state.showState();
   gun.fire();
   gun.state.showState();
   gun.load();
   gun.state.showState();
   
   
   
   
  
   
   
	}

}
