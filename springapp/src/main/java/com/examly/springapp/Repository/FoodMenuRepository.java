package com.examly.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

import com.examly.springapp.Model.FoodMenu;

// @Repository
public interface FoodMenuRepository extends JpaRepository<FoodMenu, Long>{

}