import java.awt.BorderLayout;

import javax.swing.*;
public class SwingSubject {

	JFrame frame;
	public static void main(String[] args) {
		// TODO Auto-generated method stub
    SwingSubject so = new SwingSubject();
    so.go();
    }
	
	public void go(){
		frame = new JFrame();
		
		JButton button = new JButton("should i do it?");
		
		button.addActionListener(new AngelListener());//���������۲��ߣ������ߣ�
		button.addActionListener(new DevilListener());
		
		frame.getContentPane().add(BorderLayout.CENTER, button);//����frame����
		frame.setVisible(true);
	
	}

}
