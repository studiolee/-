
public class TrainMoveState extends State {
    public void startUp(Train train){
    	System.out.println(train.getName()+"�Ѿ����˶�״̬��");
    }
    public void stop(Train train){
    	System.out.println(train.getName()+"ֹͣ�˶�");
    	train.setState(train.getRestState());
    }
}
