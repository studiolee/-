public class StateOne implements State{
	Gun gun;
	public StateOne(Gun gun){
		this.gun = gun;
	}
	public void fire(){
		System.out.println("���һ���ӵ�");
		gun.setState(gun.getStateNull());
		
	}
	public void load(){}
	public void showState(){
		System.out.println("һ���ӵ�״̬��");
	}
    
}

