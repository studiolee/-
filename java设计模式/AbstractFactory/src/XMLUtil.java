
import javax.xml.parsers.*;
import org.w3c.dom.*;
import java.io.*;
public class XMLUtil {
public static Object getBean(){
	try{
		DocumentBuilderFactory dFactroy = DocumentBuilderFactory.newInstance();
		DocumentBuilder builder = dFactroy.newDocumentBuilder();
		Document doc = builder.parse(new File("src//config.xml"));
		
		NodeList n1= doc.getElementsByTagName("className");
		Node classNode = n1.item(0).getFirstChild();
		String cName = classNode.getNodeValue().trim();
		Class<?> c = Class.forName(cName);
		Object obj = c.newInstance();
		return obj ;	
		
	}
	catch(Exception e){
		e.printStackTrace();
		return null;
	}
	
}
}