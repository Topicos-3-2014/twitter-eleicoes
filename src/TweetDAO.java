import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class TweetDAO implements ITweetDAO {

	private Connection connection;

	public TweetDAO() throws SQLException, ClassNotFoundException {
		this.connection = new ConnectionFactory().getConnection();
	}
	
	// Adiciona um tweet no Banco
	public void create(Tweet tweet) throws SQLException {
		
		String sql = "INSERT INTO tweet (id, user, text, ss, location, favoriteds, retweeteds, country_code, countryFull) VALUES(?,?,?,?,?,?,?,?,?)";
		PreparedStatement stmt = connection.prepareStatement(sql);
		
		stmt.setInt(1, tweet.getId());
		stmt.setString(2, tweet.getUser());
		stmt.setString(3, tweet.getText());
		stmt.setString(4, tweet.getSS());
		stmt.setString(5, tweet.getLocation());
		stmt.setInt(6, tweet.getFav());
		stmt.setInt(7, tweet.getRet());
		stmt.setString(8, tweet.getCountry_code());
		stmt.setString(9, tweet.getCountryFull());
		
		stmt.execute();
		stmt.close();
	}

	/*// Remove um tweet no Banco
	public void remove(Tweet tweet) throws SQLException {
		
		String sql = "DELETE from tweet where id = ?";
		PreparedStatement stmt = connection.prepareStatement(sql);
		
		stmt.setInt(1, tweet.getId());
		stmt.execute();
		stmt.close();
	}

	// Altera os dados do tweet
	public void update(Tweet tweet) throws SQLException {
		
		String sql = "update tweet set id = ?, user = ?, text = ?, ss = ?, location = ?, favorited = ?, retweeted = ? where id = ?";
		PreparedStatement stmt = connection.prepareStatement(sql);
		
		stmt.setInt(1, tweet.getId());
		stmt.setString(2, tweet.getUser());
		stmt.setString(3, tweet.getText());
		stmt.setString(4, tweet.getSS());
		stmt.setString(5, tweet.getLocation());
		stmt.setInt(6, tweet.getFav());
		stmt.setInt(7, tweet.getRet());
		
		stmt.execute();
		stmt.close();	
	}
	
	// Mostra todos os tweets no Banco
	public List<Tweet> show(int id) throws SQLException {
		
		Tweet tweet = new Tweet();
		String sql = "SELECT * from tweet where id like (?) order by text";
		PreparedStatement stmt = connection.prepareStatement(sql);
		
		stmt.setInt(1, id);
		List <Tweet> minhaLista = new ArrayList<Tweet>();
		ResultSet rs = stmt.executeQuery();
		
		while (rs.next()) {
			tweet.setId(rs.getInt("id"));
			tweet.setUser(rs.getString("user"));
			tweet.setText(rs.getString("text"));
			tweet.setSS(rs.getString("ss"));
			tweet.setLocation("location");
			tweet.setFav(rs.getInt("favoriteds"));
			tweet.setRet(rs.getInt("retweeteds"));
			minhaLista.add(tweet);
			
		}	
		rs.close();
		stmt.close();
		return minhaLista;
	}
	*/
	
	//imprime todos com base na query dada
	public void showAll() throws SQLException {
		String sql = "select ss, sum(favoriteds), sum(retweeteds), count(ss) from tweet group by ss order by count(ss)";
		PreparedStatement stmt = connection.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();

		while (rs.next()) {
			
			System.out.println(rs.getString("ss") + " | Fav: " +
								rs.getInt("sum(favoriteds)") + " | Ret: " +
								rs.getInt("sum(retweeteds)") + " | Qnt: " +
								rs.getInt("count(ss)"));
		}	
		rs.close();
		stmt.close();
	}
	
	//guarda todos numa lista todos com base na query dada
	public List<Result> getAll() throws SQLException {
		Result res = new Result();
		String sql = "select ss, sum(favoriteds), sum(retweeteds), count(ss) from tweet group by ss order by count(ss)";
		PreparedStatement stmt = connection.prepareStatement(sql);

		List <Result> minhaLista = new ArrayList<Result>();
		ResultSet rs = stmt.executeQuery();
		
		int index = 0;
		
		while (rs.next()) {
			
			res.setSs(rs.getString("ss"));
			res.setSumFavoriteds(rs.getInt("sum(favoriteds)"));
			res.setSumRetweets(rs.getInt("sum(retweeteds)"));
			res.setCountSS(rs.getInt("count(ss)"));
			minhaLista.add(index, res);
			index = index + 1;
		}	
		rs.close();
		stmt.close();
		return minhaLista;
	}
	

}