

public class Client {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		/*
		 * SkinFactory factory = new SummerSkinFactory();//����ʹ�������ļ��ͷ������
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
