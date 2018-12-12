
public class TrainMoveState extends State {
    public void startUp(Train train){
    	System.out.println(train.getName()+"已经在运动状态了");
    }
    public void stop(Train train){
    	System.out.println(train.getName()+"停止运动");
    	train.setState(train.getRestState());
    }
}
