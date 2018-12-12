package FactoryMethodPattern;

public class Client {

	public static void main(String[] args)throws Exception {
		// TODO Auto-generated method stub
		/*LoggerFactory factory =new FileLoggerFactory();//可使用配置文件和反射机制
		
		Logger logger=factory.createLogger();
		
		logger.writeLog();*/
		
		LoggerFactory factory = (LoggerFactory)XMLUtil.getBean();
		
		Logger logger = factory.createLogger();
		logger.writeLog();
		

	}

}
