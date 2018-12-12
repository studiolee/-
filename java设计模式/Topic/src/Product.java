import java.util.*;

public class Product extends Observable {

	private String name;
	private float price;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
		// 标记此Observable对象为以改变的对象
		setChanged();
		notifyObservers(name);
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
		setChanged();
		notifyObservers(price);
	}
}
