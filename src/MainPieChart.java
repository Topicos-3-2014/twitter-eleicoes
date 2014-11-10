import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MainPieChart {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {

		ITweetDAO td = new TweetDAO();
		List<Result> res = new ArrayList<Result>();
		res = td.getAll();
		

		for (int i = 0 ; i < res.size() ; i++) {
		}

		PieChart demo = new PieChart("Comparação entre tags", "Teste", td.getSsList(), td.getCountList(), td.getSsList().size() );
		demo.pack();
		demo.setVisible(true);
	}
} 