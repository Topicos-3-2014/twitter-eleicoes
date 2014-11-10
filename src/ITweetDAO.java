
import java.sql.SQLException;

public interface ITweetDAO {
	
	public void create(Tweet tweet) throws SQLException;
	//public void remove(Tweet tweet) throws SQLException;
	//public void update(Tweet tweet) throws SQLException;
	//public List<Tweet> show(int id) throws SQLException;
	public void showAll() throws SQLException;
}
