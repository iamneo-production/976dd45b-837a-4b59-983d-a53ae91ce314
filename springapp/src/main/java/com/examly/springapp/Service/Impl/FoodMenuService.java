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

    @Override
    public FoodMenu addMenu(FoodMenu add){
        return foodMenuRepository.save(add);
    }

    @Override
    public List<FoodMenu> getAllFoodMenus(){
        return foodMenuRepository.findAll();
    }

    @Override
    public FoodMenu getFoodMenuById(Long foodMenuID){
        return foodMenuRepository.findById(foodMenuID).get();
    }

    @Override
    public void deleteFoodMenu(Long foodMenuID){
        foodMenuRepository.deleteById(foodMenuID);
    }

    @Override
    public FoodMenu updateFoodMenu(FoodMenu foodMenuDetails) {
        return foodMenuRepository.save(foodMenuDetails);
    }
    
}
