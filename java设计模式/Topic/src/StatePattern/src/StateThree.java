
public class StateThree implements State{
	Gun gun;
	public StateThree(Gun gun){
		this.gun = gun;
	}
	public void fire(){
		System.out.println("打出一颗子弹");
		gun.setState(gun.getStateTwo());
		
	}
	public void load(){}
	public void showState(){
		System.out.println("三颗子弹状态！");
	}
    
}
