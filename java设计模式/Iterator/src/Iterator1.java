import java.util.*;
public class Iterator1 {

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
list.add(s1);
list.add(s2);

Iterator iter =list.iterator();
for(;iter.hasNext();)
  {//while(iter.hasNext())
	Student s =(Student)iter.next();
	System.out.println("ѧ�ţ� "+s.getStudentID());
	System.out.println("������ "+s.getName());
}

	}

}
