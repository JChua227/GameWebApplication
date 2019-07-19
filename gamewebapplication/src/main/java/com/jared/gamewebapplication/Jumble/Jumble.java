package com.jared.gamewebapplication.Jumble;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/level")
public class Jumble {


    @GetMapping("/{levelnum}")
    public level getWordSet(@PathVariable(value="levelnum")int levelNumber){
        return new level(levelNumber);
    }


}

