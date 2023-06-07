package com.examly.springapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;
import com.examly.springapp.Model.ThemeModel;
// @Repository
public interface ThemeRepository extends JpaRepository <ThemeModel,Long> {
    
}