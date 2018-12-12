
public class Gun {
	State stateThree,stateTwo,stateOne,stateNull,state;
	public Gun(){
		stateThree = new StateThree(this);
		stateTwo = new StateTwo(this);
		stateOne = new StateOne(this);
		stateNull = new StateNull(this);
		state = stateThree;
	}
	public void setState(State state){
		this.state = state;
	}
    public void fire(){
    	state.fire();
    }
    public void load(){
    	state.load();
    }
    public State getStateThree(){
    		return stateThree;}
    
    public State getStateTwo(){
    	return stateTwo;
    }
    public State getStateOne(){
    	return stateOne;
    }
    public State getStateNull(){
    	return stateNull;
    }
    }
