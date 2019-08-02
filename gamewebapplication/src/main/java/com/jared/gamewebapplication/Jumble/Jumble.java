package com.jared.gamewebapplication.Jumble;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/level")
public class Jumble {

    @GetMapping("/{levelnum}")
    public level getWordSet(@PathVariable(value="levelnum")int levelNumber){
        return new level(levelNumber);
    }


}

