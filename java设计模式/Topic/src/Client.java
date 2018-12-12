import java.util.*;

public class Client {
	public static void main(String[] args) {
		Product p = new Product();
		Observer nameob = new NameObserver();//名字观察者
		Observer priceob = new PriceObserver();//价格观察者 

		p.addObserver(nameob);
		p.addObserver(priceob);

		p.setName("苹果");
		p.setPrice(2.9f);
		
		//p.setName("梨子");
		//p.setPrice(5.99f);
	}
}
