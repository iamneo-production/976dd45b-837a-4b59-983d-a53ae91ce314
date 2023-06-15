package com.examly.springapp.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.FoodMenu;
import com.examly.springapp.Repository.FoodMenuRepository;
import com.examly.springapp.Service.FoodMenuService;

@Service
public class FoodMenuServiceImpl implements FoodMenuService{
    @Autowired
    private FoodMenuRepository foodMenuRepository;

    // adding menu
    // post request from front end
    
    @Override
    public FoodMenu addMenu(FoodMenu add){
        return foodMenuRepository.save(add);
    }

    // getting all the food menus for displaying
    // get request from front end

    @Override
    public List<FoodMenu> getAllFoodMenus(){
        return foodMenuRepository.findAll();
    }

    // getting particular food menu by Id
    // get request from front end

    @Override
    public FoodMenu getFoodMenuById(Long foodMenuID){
        return foodMenuRepository.findById(foodMenuID).get();
    }

    // deleting particular food menu by Id
    // delete request from front end

    @Override
    public void deleteFoodMenu(Long foodMenuID){
        foodMenuRepository.deleteById(foodMenuID);
    }

    // updating particular food menu by Id
    // put request from front end

    @Override
    public FoodMenu updateFoodMenu(FoodMenu foodMenuDetails) {
        return foodMenuRepository.save(foodMenuDetails);
    }

}