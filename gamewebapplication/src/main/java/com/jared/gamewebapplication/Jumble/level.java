package com.jared.gamewebapplication.Jumble;


import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class level {

    private int level;
    private List<Character> parentWord;
    private List<String> setOfWords;

    public level(int level){
        this.level = level;
        this.setSetOfWords(level);
        this.setParentWord();
    }

    public int getLevel() {
        return this.level;
    }

    public List<Character> getParentWord() {
        return this.parentWord;
    }

    public void setParentWord(){
        String word = this.setOfWords.get(0);
        List<Integer> list = new ArrayList<>();
        for(int x=0; x<word.length(); x++){
            list.add(x);
        }

        StringBuilder sb = new StringBuilder();
        Random random = new Random();
        while(!list.isEmpty()){
            int x = random.nextInt(list.size());
            sb.append(word.charAt(list.get(x)));
            list.remove(x);
        }

        List<Character> letters = new ArrayList<>();
        for(int x=0; x<sb.toString().length(); x++){
            letters.add(sb.toString().charAt(x));
            if(x!=sb.toString().length()-1){
                letters.add(' ');
            }
        }
        this.parentWord = letters;
    }

    public List<String> getSetOfWords(){
        return this.setOfWords;
    }

    public void setSetOfWords(int level){
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
