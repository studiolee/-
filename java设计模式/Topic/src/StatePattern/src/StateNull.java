public class StateNull implements State{
	Gun gun;
	public StateNull(Gun gun){
		this.gun = gun;
	}
	public void fire(){
		System.out.println("û���ӵ�");
		gun.setState(gun.getStateNull());
	}
	public void load(){
		System.out.println("װ���ӵ�");
		gun.setState(gun.getStateThree());
		
		}
	public void showState(){
		System.out.println( "û���ӵ�״̬��");
	}
    
}
