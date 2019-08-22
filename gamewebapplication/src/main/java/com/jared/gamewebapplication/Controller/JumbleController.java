package com.jared.gamewebapplication.Controller;

import com.jared.gamewebapplication.Jumble.level;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/level")
public class JumbleController {

    @GetMapping("/{levelnum}")
    public level getWordSet(@PathVariable(value="levelnum")int levelNumber){
        return new level(levelNumber);
    }


}

