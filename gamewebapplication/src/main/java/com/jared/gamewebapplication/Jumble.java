package com.jared.gamewebapplication;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value="/level")
public class Jumble {


    @GetMapping("/{levelnum}")
    public level getWordSet(@PathVariable(value="levelnum")int levelNumber){
        return new level(levelNumber);
    }

}
