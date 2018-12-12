import java.util.*;

public class NameObserver implements Observer {
	private String name = null;
	Observable ob =new Observable();
	

	public void update(Observable obj, Object arg) {
		if (arg instanceof String) {
			name = (String) arg;
			System.out.println("NameObserver: name changet to" + name);
		}
	}
}
