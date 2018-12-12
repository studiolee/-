
public class Client {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
Train train1 = new Train("ÎÔÆÌ³µÏá");
Train train2 = new Train("Ó²×ù³µÏá");
train1.startUp();
train2.startUp();
train1.stop();
train2.stop();
	}

}
