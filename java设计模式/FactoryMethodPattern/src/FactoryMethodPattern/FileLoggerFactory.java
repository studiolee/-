package FactoryMethodPattern;

public class FileLoggerFactory implements LoggerFactory{
	public Logger createLogger(){
		//创建文件日志记录器对象
		Logger logger = new FileLogger();
		//初始化文件日志记录器，代码忽略
		return logger;
	}

}
