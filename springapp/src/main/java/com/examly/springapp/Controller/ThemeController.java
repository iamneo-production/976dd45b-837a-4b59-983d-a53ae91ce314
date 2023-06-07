package com.examly.springapp.Controller;

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
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping
public class ThemeController {
    

    @Autowired
	private ThemeService themeService;

  @PostMapping("admin/addTheme")
  public ThemeModel storeTheme(@RequestBody ThemeModel newTheme){
    themeService.storeTheme(newTheme);
		return newTheme;
  }


  @GetMapping("admin/getTheme")
  public List<ThemeModel> getAllTheme()
  {
    List<ThemeModel> themes = themeService.getAllTheme();
    return themes;
  }


  @GetMapping("admin/getTheme/{themeId}")
  public ThemeModel getThemebyId(@PathVariable Long themeId){
         ThemeModel theme = themeService.getThemebyId(themeId);
    		return theme;
  }


  @PutMapping("admin/editTheme/{themeId}")
  public ResponseEntity<ThemeModel> updateTheme(@PathVariable Long themeId,@RequestBody ThemeModel themeDetails){

    themeDetails.setThemeName(themeDetails.getThemeName());
    themeDetails.setThemeImageURL(themeDetails.getThemeImageURL());
    themeDetails.setThemeDescription(themeDetails.getThemeDescription());
    themeDetails.setThemePhotographer(themeDetails.getThemePhotographer());
    themeDetails.setThemeVideographer(themeDetails.getThemeVideographer());
    themeDetails.setThemeReturnGift(themeDetails.getThemeReturnGift());
    themeDetails.setThemeCost(themeDetails.getThemeCost());
    themeDetails.setRatings(themeDetails.getRatings());

		ThemeModel updatedTheme =  themeService.updateTheme(themeDetails);

    return ResponseEntity.ok(updatedTheme);

  }


  @DeleteMapping("admin/deleteTheme/{themeid}")
  public ResponseEntity<Map<String, Boolean>> deleteTheme(@PathVariable Long themeid){

    themeService.deleteTheme(themeid);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Theme deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);


  }

  @GetMapping("user/getAllThemes")
  public List<ThemeModel> getAllThemes()
  {
    List<ThemeModel> themes = themeService.getAllTheme();
    return themes;
  }
}