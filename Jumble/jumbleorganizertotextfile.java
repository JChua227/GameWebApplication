package helloworld;

import java.util.*;
import java.io.*;

public class jumbleorganizertotextfile{
	
	static List<List<String>> listofchildword = new ArrayList<>();
	static List<String> parentword = new ArrayList<>();
	static List<List<String>> childandparentwords= new ArrayList<>();
	static List<List<String>> nonduplicates = new ArrayList<>();

	public static void main(String []args)throws IOException {
		
		List<String> list = new ArrayList<>();
		try {
			FileReader f = new FileReader("temptest.txt");
			BufferedReader br = new BufferedReader(f);
			String line;
			
			while((line=br.readLine())!=null) {
				if(!list.contains(line)) {
					list.add(line);
				}
			}
			br.close();
			
			
			words(list);
			
		}
		catch(Exception e) {
			System.out.println(e);
		}
	}
	
	
	public static void words(List<String> wordlist) {
		
		for(int y=0; y<wordlist.size(); y++) {
			//builds first word
			List<Character> list1 = new ArrayList<>();
			for(int x=0; x<wordlist.get(y).length(); x++) {
				list1.add(wordlist.get(y).charAt(x));
			}
			
			//builds all other words
			List<String> childword = new ArrayList<String>();
			for(int z=0; z<wordlist.size(); z++) {
				
				List<Character> list2 = new ArrayList<>();
				
				//so it doesnt catch itself
				if(wordlist.get(z).equals(wordlist.get(y))) {
					continue;
				}
				//list of characters for second word
				for(int x=0; x<wordlist.get(z).length(); x++) {
					list2.add(wordlist.get(z).charAt(x));
				}
				
				//compare parentlist and childlist
				for(int x=0; x<list1.size(); x++) {
					if(list2.contains(list1.get(x))) {
						list2.remove(list2.indexOf(list1.get(x)));
					}
				}
				
				//when everything is used, put into lists
				if(list2.isEmpty()) {
					if(!childword.contains(wordlist.get(z))){
						childword.add(wordlist.get(z));
					}
					if(!parentword.contains(wordlist.get(y))) {
						parentword.add(wordlist.get(y));
					}
				}
			
			}
			if(!childword.isEmpty()) {
				listofchildword.add(childword);
			}
			System.out.println("Creating parent/child words: " + (y+1) + "/" + wordlist.size());
		}
		System.out.println(listofchildword);
		System.out.println(parentword);
//		System.out.println("---------------------------------------------------------------------------------------------------------------");
		
		attach();
	
	}
	
	
	public static void attach() {
		
		for(int y=0; y<parentword.size(); y++) {
			List<String> list = new ArrayList<>();
			list.add(parentword.get(y));
			for(int x=0; x<listofchildword.get(y).size(); x++) {
				list.add(listofchildword.get(y).get(x));
			}
			childandparentwords.add(list);
			System.out.println("Pushing both words: " + (y+1) + "/" + parentword.size());
		}
		
		//System.out.println(childandparentwords);
		for(int y=0; y<childandparentwords.size(); y++) {
			for(int z=y+1; z<childandparentwords.size(); z++) {
				
				//creating temp lists that stores each list to compare
				List<String> list1 = new ArrayList<>();
				List<String> list2 = new ArrayList<>();
				list1.addAll(childandparentwords.get(y));
				list2.addAll(childandparentwords.get(z));
				for(int x=0; x<list2.size(); x++) {
					if(list1.contains(list2.get(x))) {
						list1.remove(list1.indexOf(list2.get(x)));
						list2.remove(x);
						x--;
					}
				}
				//System.out.println(list1 + " " + list2);
				if(list2.isEmpty() && list1.isEmpty()) {
					childandparentwords.remove(z);
					z--;
				}
			}
			System.out.println("Getting rid of duplicates: " + (y+1) + "/" + childandparentwords.size());
		}
		
//		System.out.println(childandparentwords);
//		System.out.println("---------------------------------------------------------------------------------------------------------------");
		
		writetofile();
	}
	
	
	public static void writetofile() {
		try {
			//writing easy mode into easy.txt
			File filter1 = new File("easy.txt");
			filter1.createNewFile();
			FileWriter fw1 = new FileWriter(filter1);
			
			//7-16
			for(int x=0; x<childandparentwords.size(); x++) {
				if(childandparentwords.get(x).size()>7 && childandparentwords.get(x).size()<16) {
					for(int z=0; z<childandparentwords.get(x).size(); z++) {
						fw1.write(childandparentwords.get(x).get(z) + " ");
					}
					fw1.write("\n");
					System.out.println("Writing easy mode: " + (x+1) + "/" + childandparentwords.size());
				}
			}
			fw1.flush();
			
			
			//writing medium mode into medium.txt
			File filter2 = new File("medium.txt");
			filter2.createNewFile();
			FileWriter fw2 = new FileWriter(filter2);
			
			//15-21
			for(int x=0; x<childandparentwords.size(); x++) {
				if(childandparentwords.get(x).size()>15 && childandparentwords.get(x).size()<21) {
					for(int z=0; z<childandparentwords.get(x).size(); z++) {
						fw2.write(childandparentwords.get(x).get(z) + " ");
					}
					fw2.write("\n");
					System.out.println("Writing medium mode: " + (x+1) + "/" + childandparentwords.size());
				}
			}
			fw2.flush();
			
			
			//writing hard mode into hard.txt
			File filter3 = new File("hard.txt");
			filter3.createNewFile();
			FileWriter fw3 = new FileWriter(filter3);
			
			//20-26
			for(int x=0; x<childandparentwords.size(); x++) {
				if(childandparentwords.get(x).size()>20 && childandparentwords.get(x).size()<26) {
					for(int z=0; z<childandparentwords.get(x).size(); z++) {
						fw3.write(childandparentwords.get(x).get(z) + " ");
					}
					fw3.write("\n");
					System.out.println("Writing hard mode: " + (x+1) + "/" + childandparentwords.size());
				}
			}
			fw3.flush();
			
			
			//writing insane mode into insane.txt
			File filter4 = new File("insane.txt");
			filter4.createNewFile();
			FileWriter fw4 = new FileWriter(filter4);
			
			//25+
			for(int x=0; x<childandparentwords.size(); x++) {
				if(childandparentwords.get(x).size()>25) {
					for(int z=0; z<childandparentwords.get(x).size(); z++) {
						fw4.write(childandparentwords.get(x).get(z) + " ");
					}
					fw4.write("\n");
					System.out.println("Writing insane mode: " + (x+1) + "/" + childandparentwords.size());
				}
			}
			fw4.flush();
		}
		catch(Exception e) {
			System.out.println(e);
		}
		
		System.out.println("Finished! :)");
	}
	
}
