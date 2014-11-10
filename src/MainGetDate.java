import java.sql.SQLException;
import java.util.List;


public class MainGetDate {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		ITweetDAO td = new TweetDAO();
		td.showAll();
	}

}
