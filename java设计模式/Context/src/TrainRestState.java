
public class TrainRestState extends State {
    public void startUp(Train train){
    	System.out.println(train.getName()+"��ʼ�˶�");
    	train.setState(train.getMoveState());
    }
    public void stop(Train train){
    	System.out.println(train.getName()+"�Ѿ��Ǿ�ֹ״̬��");
    }
}