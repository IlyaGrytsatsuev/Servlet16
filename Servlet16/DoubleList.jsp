<%@ page import="java.util.HashMap" %>
<%@ page import="java.util.ArrayList" %><%--
  Created by IntelliJ IDEA.
  User: gratchuvalsky
  Date: 28.08.2022
  Time: 2:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>DoubleList</title>
  </head>
  <body>
  
  <%HashMap<String, ArrayList<String>> tmp = (HashMap<String, ArrayList<String>>)request.getAttribute("data");
  int  UpCount = 0;
  int size = tmp.keySet().size()+1;
    %>
    
    <body onload="hideAll(<%=size%>);">
    <ol>
    <%for(String key : tmp.keySet()){
    UpCount++;
    %>
   
    <li> <%=key%> <input type="button" id="<%=UpCount%>Button" value="+" onclick="openList(<%=UpCount%>)"/>
 
   <div id="<%=UpCount%>">
        <ul>
            <% ArrayList<String> subList = tmp.get(key);
            for(int i = 0; i < subList.size(); i++){
                String s = (String)subList.get(i);
            %>
                <li><%=s%></li>
            <%}%>
               
        </ul>
        </div>
        </li>
    <%}%>
    </ol>
    
    <script src="ListOpener.js"></script>

  </body>
</html>
