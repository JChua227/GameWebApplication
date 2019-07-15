package com.jared.gamewebapplication;


import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class level {

    private int level;
    private String parentWord;
    private List<String> setOfWords;

    public level(int level){
        this.level = level;
        this.setList(level);
        this.setParentWord();
    }

    public int getLevel() {
        return this.level;
    }

    public String getParentWord() {
        return this.parentWord;
    }

    public void setParentWord(){
        this.parentWord = this.setOfWords.get(0);
    }

    public List<String> getList(){
        return this.setOfWords;
    }

    public void setList(int level){
        try {
            FileReader filereader = new FileReader("levels/" + level + ".txt");
            BufferedReader br = new BufferedReader(filereader);

            String line;
            List<String> list = new ArrayList<>();
            while ((line = br.readLine()) != null) {
                list.add(line);
            }

            Random random = new Random();
            int val = random.nextInt(list.size());
            List<String> setOfWords = new ArrayList<>();

            for (int x = 0; x < list.get(val).length(); x++) {
                StringBuilder sb = new StringBuilder();
                int counter = x;
                while (list.get(val).charAt(counter) != ' ') {
                    sb.append(list.get(val).charAt(counter));
                    counter++;

                    if (counter == list.get(val).length()) {
                        break;
                    }
                }
                x = counter;
                setOfWords.add(sb.toString());
            }

            this.setOfWords = setOfWords;
        }
        catch(Exception e){
            List<String> setOfWords = new ArrayList<>();
            setOfWords.add("Error: IMPROPER FILE");
            this.setOfWords = setOfWords;
        }
    }

}