package FactoryMethodPattern;

public class DatabaseLoggerFactory implements LoggerFactory{
	public Logger createLogger(){
		//�������ݿ⣬����ʡ��
		//�������ݿ���־��¼������
		Logger logger = new DatabaseLogger();
		//��ʼ�����ݿ���־��¼�����������
		return logger;
	}

}
