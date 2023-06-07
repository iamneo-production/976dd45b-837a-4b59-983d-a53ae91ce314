package com.examly.springapp.Service;

import java.util.List;

import com.examly.springapp.Model.ThemeModel;

public interface ThemeService {
    ThemeModel storeTheme(ThemeModel newTheme);

    List<ThemeModel> getAllTheme();

    ThemeModel getThemebyId(Long themeId);

    void deleteTheme(Long themeId);

    ThemeModel updateTheme(ThemeModel themeDetails);

    
}