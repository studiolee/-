
public class TrainRestState extends State {
    public void startUp(Train train){
    	System.out.println(train.getName()+"开始运动");
    	train.setState(train.getMoveState());
    }
    public void stop(Train train){
    	System.out.println(train.getName()+"已经是静止状态了");
    }
}