package com.examly.springapp.Service;

import java.util.List;

import com.examly.springapp.Model.ThemeModel;

public interface ThemeService {
    ThemeModel addTheme(ThemeModel newTheme);

    List<ThemeModel> getTheme();

    ThemeModel getThemebyId(Long themeId);

    void deleteTheme(Long themeId);

    ThemeModel EditTheme(ThemeModel themeDetails);

    
}