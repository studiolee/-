public class StateTwo implements State{
	Gun gun;
	public StateTwo(Gun gun){
		this.gun = gun;
	}
	public void fire(){
		System.out.println("打出一颗子弹");
		gun.setState(gun.getStateOne());
		
	}
	public void load(){}
	public void showState(){
		System.out.println("二颗子弹状态！");
	}
    
}
