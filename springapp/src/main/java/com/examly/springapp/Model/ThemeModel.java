package com.examly.springapp.Model;
import javax.persistence.*;

@Entity
@Table(name = "theme_info")
public class ThemeModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private long themeId;

    @Column(name = "themeName")
    private String themeName;

    @Column(name = "themeImageURL")
    private String themeImageURL;

    @Column(name = "themeDescription")
    private String themeDescription;

    @Column(name = "themePhotographer")
    private String themePhotographer;

    @Column(name = "themeVideographer")
    private String themeVideographer;

    @Column(name = "ThemeReturnGift")
    private String themeReturnGift;

    @Column(name = "ThemeCost")
    private Long themeCost;

    @Column( name = "ratings")
    private Long ratings;


    public ThemeModel(long themeId, String themeName, String themeImageURL, String themeDescription, String themePhotographer, String themeVideographer, String themeReturnGift, Long themeCost, Long ratings) {
        this.themeId = themeId;
        this.themeName = themeName;
        this.themeImageURL = themeImageURL;
        this.themeDescription = themeDescription;
        this.themePhotographer = themePhotographer;
        this.themeVideographer = themeVideographer;
        this.themeReturnGift = themeReturnGift;
        this.themeCost = themeCost;
        this.ratings = ratings;
    }
    
    public ThemeModel(){
        
    }


    
    

    public long getThemeId() {
        return this.themeId;
    }

    public void setThemeId(long themeId) {
        this.themeId = themeId;
    }

    public String getThemeName() {
        return this.themeName;
    }

    public void setThemeName(String themeName) {
        this.themeName = themeName;
    }

    public String getThemeImageURL() {
        return this.themeImageURL;
    }

    public void setThemeImageURL(String themeImageURL) {
        this.themeImageURL = themeImageURL;
    }

    public String getThemeDescription() {
        return this.themeDescription;
    }

    public void setThemeDescription(String themeDescription) {
        this.themeDescription = themeDescription;
    }

    public String getThemePhotographer() {
        return this.themePhotographer;
    }

    public void setThemePhotographer(String themePhotographer) {
        this.themePhotographer = themePhotographer;
    }

    public String getThemeVideographer() {
        return this.themeVideographer;
    }

    public void setThemeVideographer(String themeVideographer) {
        this.themeVideographer = themeVideographer;
    }

    public String getThemeReturnGift() {
        return this.themeReturnGift;
    }

    public void setThemeReturnGift(String themeReturnGift) {
        this.themeReturnGift = themeReturnGift;
    }

    public Long getThemeCost() {
        return this.themeCost;
    }

    public void setThemeCost(Long themeCost) {
        this.themeCost = themeCost;
    }


    

    public Long getRatings() {
        return this.ratings;
    }

    public void setRatings(Long ratings) {
        this.ratings = ratings;
    }
    
}