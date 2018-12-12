
public class Train {
	static State moveState, restState;
	static State state;
	String name;

	Train(String name) {
		this.name = name;
		moveState = new TrainMoveState();
		restState = new TrainRestState();
		state = restState;
	}

	public void startUp() {
		state.startUp(this);
	}

	public void stop() {
		state.stop(this);
	}

	public void setState(State state) {
		this.state = state;
	}

	public State getMoveState() {
		return moveState;
	}

	public State getRestState() {
		return restState;
	}

	public String getName() {
		return name;
	}
}
