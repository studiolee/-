package FactoryMethodPattern;

public class FileLoggerFactory implements LoggerFactory{
	public Logger createLogger(){
		//�����ļ���־��¼������
		Logger logger = new FileLogger();
		//��ʼ���ļ���־��¼�����������
		return logger;
	}

}
