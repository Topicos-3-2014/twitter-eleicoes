import java.sql.SQLException;

public class MainGetDate {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		ITweetDAO td = new TweetDAO();
		td.showAll();
	}

}
