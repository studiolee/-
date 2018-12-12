import java.util.*;

public class Client {
	public static void main(String[] args) {
		Product p = new Product();
		Observer nameob = new NameObserver();//���ֹ۲���
		Observer priceob = new PriceObserver();//�۸�۲��� 

		p.addObserver(nameob);
		p.addObserver(priceob);

		p.setName("ƻ��");
		p.setPrice(2.9f);
		
		//p.setName("����");
		//p.setPrice(5.99f);
	}
}
