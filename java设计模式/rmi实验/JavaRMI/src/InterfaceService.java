import java.rmi.Remote;
import java.rmi.RemoteException;
/**
* RMI���ö���ӿڶ���
* @author ������
*/
public interface InterfaceService extends Remote {
/**Զ�̷������������ʵ�ֵķ���
* ���е�Զ�̵��õķ���,��������throws RemoteException
* */
Object service(Object obj) throws RemoteException;
}
