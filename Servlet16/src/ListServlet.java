
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;

public class ListServlet extends HttpServlet {
    private List list;

    public void init(ServletConfig config) {
        try {

            list = new List();
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
    
    
    public void doPost(HttpServletRequest request, HttpServletResponse response) {
        try{
	   
	    	list.readFile();
            	list.writeFile();
	    
        }
        catch(Exception e){

        }
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        try{

	    list.readFile();
            HashMap<String, ArrayList<String>> tmp = list.getDoubleList();
            request.setAttribute("data", tmp);
            RequestDispatcher rd = request.getRequestDispatcher("DoubleList.jsp");
            rd.forward(request, response);

        }
        catch(Exception e){

        }
    }
}
