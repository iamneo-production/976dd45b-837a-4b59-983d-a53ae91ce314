package com.examly.springapp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.Model.ThemeModel;
import com.examly.springapp.Service.ThemeService;



@RestController
@CrossOrigin(origins = "https://8081-beddbfbbfbabaccccfeafbbadefeafafebddcc.project.examly.io")
@RequestMapping
public class ThemeController {
    

    @Autowired
	private ThemeService themeService;

  @PostMapping("admin/addTheme")
  public ThemeModel addTheme(@RequestBody ThemeModel newTheme){
    themeService.addTheme(newTheme);
		return newTheme;
  }


  @GetMapping("admin/theme")
  public List<ThemeModel> getTheme()
  {
    List<ThemeModel> themes = themeService.getTheme();
    return themes;
  }


  @GetMapping("admin/theme/{themeId}")
  public ThemeModel getThemebyId(@PathVariable Long themeId){
         ThemeModel theme = themeService.getThemebyId(themeId);
    		return theme;
  }


  @PutMapping("/admin/editTheme/{themeId}")
  public ResponseEntity<ThemeModel> EditTheme(@PathVariable Long themeId,@RequestBody ThemeModel t){
      ThemeModel theme = themeService.getThemebyId(themeId);
      
      theme.setThemeName(t.getThemeName());
      theme.setThemeImageURL(t.getThemeImageURL());
      theme.setThemeDescription(t.getThemeDescription());
      theme.setThemePhotographer(t.getThemePhotographer());
      theme.setThemeVideographer(t.getThemeVideographer());
      theme.setThemeReturnGift(t.getThemeReturnGift());
      theme.setThemeCost(t.getThemeCost());
      theme.setRatings(t.getRatings());
      themeService.EditTheme(theme);
      return ResponseEntity.ok(theme);
  
  }


  @DeleteMapping("admin/deleteTheme/{themeid}")
  public ResponseEntity<Map<String, Boolean>> deleteTheme(@PathVariable Long themeid){

    themeService.deleteTheme(themeid);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Theme deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);


  }

}
