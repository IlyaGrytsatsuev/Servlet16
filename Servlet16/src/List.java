import java.util.*;
import java.io.*;

public class List {
    private HashMap<String, ArrayList<String>> doubleList;

    public List(){
        doubleList = new HashMap<>();
    }

    synchronized void readFile() throws Exception{
        doubleList = new HashMap<>();
        String path = "/home/ilya/Desktop/DoubleList.txt";
        File list = new File(path);
        Scanner sc = new Scanner(list);

        while(sc.hasNextLine()){
            String [] tmp = sc.nextLine().split(" ");
            String head = tmp[0].replaceAll(":", "");
            ArrayList<String> arr = new ArrayList<>();
            if(tmp.length != 1){
            	for(int i = 1; i < tmp.length; i++){
                	arr.add(tmp[i]);
            	}
            }
            
            doubleList.put(head, arr);
            
            
           
        }
        sc.close();
    }
    
    
    
    synchronized void writeFile() throws Exception{
        String path = "/home/ilya/Desktop/DoubleList.txt";
        FileWriter fstream = new FileWriter(path);
        BufferedWriter out = new BufferedWriter(fstream);

    	for(String key : doubleList.keySet()){
    		out.write(key + ": " + "\n");
    	}
    	out.close();
    }

    public HashMap <String, ArrayList<String>> getDoubleList(){
        return doubleList;
    }
}
