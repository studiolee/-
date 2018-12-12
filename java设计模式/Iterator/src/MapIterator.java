import java.util.*;
public class MapIterator {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Student s1 = new Student();
		s1.setStudentID(20150901);
		s1.setName("张三");
		Student s2 = new Student();
		s2.setStudentID(20150902);
		s2.setName("李四");
		Student s3 = new Student();
		s3.setStudentID(20150903);
		s3.setName("王五");
		
		Map<Long, Student> map = new HashMap<Long, Student>();
		//添加元素,以学号为Key，Student实例为值  
		map.put(s1.getStudentID(), s1);
		map.put(s2.getStudentID(), s2);
		map.put(s3.getStudentID(), s3);
		//返回Map中包含的键的 Set 列表
		Set set=map.keySet(); 
		
		Iterator iter = set.iterator();// 统一的接口。写成：map.keySet().iterator();
		
		for(;iter.hasNext();){
			
			Object key = iter.next();
			if(map.containsKey(key)){
				Student s = (Student)map.get(key);
				
				System.out.println("姓名： "+s.getName());
				
			}
		}
		
		System.out.println("-------------");
		
		
		Collection<Student> coll = map.values();
		
		Iterator<Student> iter1 = coll.iterator();//map.values().iterator();
		
		for(;iter1.hasNext();){
			
			Student s = (Student)iter1.next();
			
			System.out.println("姓名： "+s.getName());
		}
		
		
		
	}

}
