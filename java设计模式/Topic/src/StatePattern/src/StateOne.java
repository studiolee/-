public class StateOne implements State{
	Gun gun;
	public StateOne(Gun gun){
		this.gun = gun;
	}
	public void fire(){
		System.out.println("打出一颗子弹");
		gun.setState(gun.getStateNull());
		
	}
	public void load(){}
	public void showState(){
		System.out.println("一颗子弹状态！");
	}
    
}

