package com.examly.springapp.Service;

import java.util.List;

import com.examly.springapp.Model.FoodMenu;

public interface FoodMenuService {
    FoodMenu addMenu(FoodMenu add);

    List<FoodMenu> getAllFoodMenus();

    FoodMenu getFoodMenuById(Long foodMenuID);

    void deleteFoodMenu(Long foodMenuID);

    FoodMenu updateFoodMenu(FoodMenu foodMenuDetails);
}
