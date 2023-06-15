//foodmenu service
package com.examly.springapp.Service;

import java.util.List;

import com.examly.springapp.Model.FoodMenu;

public interface FoodMenuService {
    FoodMenu addMenu(FoodMenu add);

    //getting all food menus

    List<FoodMenu> getAllFoodMenus();      

    //getting food menu by Id

    FoodMenu getFoodMenuById(Long foodMenuID);   

    // delete food menu by Id

    void deleteFoodMenu(Long foodMenuID);       

    // update food menu by Id
    
    FoodMenu updateFoodMenu(FoodMenu foodMenuDetails);      
}
