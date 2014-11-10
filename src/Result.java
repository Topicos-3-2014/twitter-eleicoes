
public class Result {

	String ss;
	int sumRetweets;
	int sumFavoriteds;
	int countSS;
	
	public Result(){
	}
	
	public Result(String ss, int sumRetweets, int sumFavoriteds, int countSS) {
		this.ss = ss;
		this.sumRetweets = sumRetweets;
		this.sumFavoriteds = sumFavoriteds;
		this.countSS = countSS;
	}
	public String getSs() {
		return ss;
	}
	public void setSs(String ss) {
		this.ss = ss;
	}
	public int getSumRetweets() {
		return sumRetweets;
	}
	public void setSumRetweets(int sumRetweets) {
		this.sumRetweets = sumRetweets;
	}
	public int getSumFavoriteds() {
		return sumFavoriteds;
	}
	public void setSumFavoriteds(int sumFavoriteds) {
		this.sumFavoriteds = sumFavoriteds;
	}
	public int getCountSS() {
		return countSS;
	}
	public void setCountSS(int countSS) {
		this.countSS = countSS;
	}
	
}
