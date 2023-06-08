package com.examly.springapp.Service.Impl;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.examly.springapp.Model.ThemeModel;
import com.examly.springapp.Repository.ThemeRepository;
import com.examly.springapp.Service.ThemeService;

@Service
public class ThemeServiceImpl implements ThemeService{
    @Autowired
    private ThemeRepository themeRepo;

    @Override
    public ThemeModel addTheme(ThemeModel newTheme){
        return themeRepo.save(newTheme);
    }

    @Override
    public List<ThemeModel> getTheme(){
        return themeRepo.findAll();
    }

    @Override
    public ThemeModel getThemebyId(Long themeId){
        return themeRepo.findById(themeId).get();
    }

    @Override
    public ThemeModel EditTheme(ThemeModel themeDetails) {
        return themeRepo.save(themeDetails);
    }

    @Override
    public void deleteTheme(Long themeId){
        themeRepo.deleteById(themeId);
    }
}