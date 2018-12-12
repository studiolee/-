import java.util.*;
public class Iterator2 {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<Student> list = new ArrayList<Student>();

		Student s1 = new Student();
		s1.setStudentID(20150901);
		s1.setName("����");
		Student s2 = new Student();
		s2.setStudentID(20150902);
		s2.setName("����");
		Student s3 = new Student();
		s3.setStudentID(20150903);
		s3.setName("����");
		list.add(s1);
		list.add(s2);
		list.add(s3);
		
		ListIterator<Student> iter = list.listIterator(1);//listIterator(int index)����indexΪ��������ʼλ��
		
		for(;iter.hasNext();){
			Student s = (Student)iter.next();
			
			iter.set(s3);
			System.out.println("ѧ�ţ� "+s.getStudentID());
			System.out.println("������ "+s.getName());
		}
		
		System.out.println("-----------");
		for(Student s: list){//���õ�д��
			System.out.println("ѧ�ţ� "+s.getStudentID());
			System.out.println("������ "+s.getName());
		}
		
		System.out.println("-----------");
		
		for(;iter.hasPrevious();){
			Student s = (Student)iter.previous();
			System.out.println("ѧ�ţ� "+s.getStudentID());
			System.out.println("������ "+s.getName());
		}
		
		

		
	}

}
