package com.examly.springapp.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.Service.FoodMenuService;
// import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.Model.FoodMenu;

@RestController
@CrossOrigin(origins = "https://8081-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io")
@RequestMapping("/admin")
public class FoodMenuController {

	@Autowired
	private FoodMenuService foodMenuservice;
	
	//get all food menus
	@GetMapping("/getMenu")
	public List<FoodMenu> getMenu(){
		List<FoodMenu> foodMenus = foodMenuservice.getAllFoodMenus();
		return foodMenus;
	}
	
	
	// add food 
	@PostMapping("/addMenu")
	public FoodMenu addMenu(@RequestBody FoodMenu foodMenu) {
		foodMenuservice.addMenu(foodMenu);
		return foodMenu;
	}
	
	// get foodmenu by id
	@GetMapping("/getMenu/{foodMenuID}")
	public FoodMenu getFoodMenuById(@PathVariable Long foodMenuID) {
		FoodMenu foodmenu = foodMenuservice.getFoodMenuById(foodMenuID);
		return foodmenu; 
	}
	
	// update foodMenu
	@PutMapping("/editMenu/{foodMenuID}")
	public ResponseEntity<FoodMenu> editMenu(@PathVariable Long foodMenuID, @RequestBody FoodMenu foodMenuDetails ){
		
		foodMenuDetails.setFoodMenuType(foodMenuDetails.getFoodMenuType());
		foodMenuDetails.setFoodMenuItems(foodMenuDetails.getFoodMenuItems());
		foodMenuDetails.setFoodMenuCost(foodMenuDetails.getFoodMenuCost());
		foodMenuDetails.setFoodMenuImage(foodMenuDetails.getFoodMenuImage());
		
		FoodMenu updatedFoodMenu =  foodMenuservice.updateFoodMenu(foodMenuDetails);
		return ResponseEntity.ok(updatedFoodMenu);
	}
	
	// delete foodMenu
	@DeleteMapping("/deleteMenu/{foodMenuID}")
	public ResponseEntity<Map<String, Boolean>> deleteMenu(@PathVariable Long foodMenuID){
		
		foodMenuservice.deleteFoodMenu(foodMenuID);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
	
	
}