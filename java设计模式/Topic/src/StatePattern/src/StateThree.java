
public class StateThree implements State{
	Gun gun;
	public StateThree(Gun gun){
		this.gun = gun;
	}
	public void fire(){
		System.out.println("���һ���ӵ�");
		gun.setState(gun.getStateTwo());
		
	}
	public void load(){}
	public void showState(){
		System.out.println("�����ӵ�״̬��");
	}
    
}
