

public class Client {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		/*
		 * SkinFactory factory = new SummerSkinFactory();//可以使用配置文件和反射机制
		 * 
		 * factory.createButton().display();
		 * factory.createTextField().display();
		 * factory.createComboBox().display();
		 */
		SkinFactory factory = (SkinFactory) XMLUtil.getBean();
		factory.createButton().display();
		factory.createTextField().display();
		factory.createComboBox().display();

	}

}
