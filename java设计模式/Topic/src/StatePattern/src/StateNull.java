public class StateNull implements State{
	Gun gun;
	public StateNull(Gun gun){
		this.gun = gun;
	}
	public void fire(){
		System.out.println("没有子弹");
		gun.setState(gun.getStateNull());
	}
	public void load(){
		System.out.println("装满子弹");
		gun.setState(gun.getStateThree());
		
		}
	public void showState(){
		System.out.println( "没有子弹状态！");
	}
    
}
