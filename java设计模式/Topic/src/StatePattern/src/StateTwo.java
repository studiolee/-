public class StateTwo implements State{
	Gun gun;
	public StateTwo(Gun gun){
		this.gun = gun;
	}
	public void fire(){
		System.out.println("���һ���ӵ�");
		gun.setState(gun.getStateOne());
		
	}
	public void load(){}
	public void showState(){
		System.out.println("�����ӵ�״̬��");
	}
    
}
