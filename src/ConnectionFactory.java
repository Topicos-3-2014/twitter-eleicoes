import java.sql.Connection;
import java.sql.DriverManager; 
import java.sql.SQLException; 

public class ConnectionFactory {
	
    public Connection getConnection() throws SQLException, ClassNotFoundException {
       
    	return DriverManager.getConnection("jdbc:mysql://localhost:3306/tweet?useUnicode=true&amp;characterEncoding=utf8","root","admin");
    }

}