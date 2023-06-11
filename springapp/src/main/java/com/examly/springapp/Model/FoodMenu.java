package com.examly.springapp.Model;

import javax.persistence.*;

@Entity
@Table(name = "food_Menu")
public class FoodMenu {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long foodMenuID;
	
	@Column(name = "foodMenu_type")
	private String foodMenuType;
	
	@Column(name = "foodMenu_Items")
	private String foodMenuItems;
	
	@Column(name = "foodMenu_Cost")
	private String foodMenuCost;
	
	@Column(name = "foodMenu_Image")
	private String foodMenuImage;
	
	public FoodMenu() {
		
	}
	
	
	public FoodMenu(String foodMenuType, String foodMenuItems, String foodMenuCost, String foodMenuImage) {
		super();
		this.foodMenuType = foodMenuType;
		this.foodMenuItems = foodMenuItems;
		this.foodMenuCost = foodMenuCost;
		this.foodMenuImage = foodMenuImage;
	}
	public long getFoodMenuID() {
		return foodMenuID;
	}
	public void setFoodMenuID(long foodMenuID) {
		this.foodMenuID = foodMenuID;
	}
	public String getFoodMenuType() {
		return foodMenuType;
	}
	public void setFoodMenuType(String foodMenuType) {
		this.foodMenuType = foodMenuType;
	}
	public String getFoodMenuItems() {
		return foodMenuItems;
	}
	public void setFoodMenuItems(String foodMenuItems) {
		this.foodMenuItems = foodMenuItems;
	}
	public String getFoodMenuCost() {
		return foodMenuCost;
	}
	public void setFoodMenuCost(String foodMenuCost) {
		this.foodMenuCost = foodMenuCost;
	}
	public String getFoodMenuImage() {
		return foodMenuImage;
	}
	public void setFoodMenuImage(String foodMenuImage) {
		this.foodMenuImage = foodMenuImage;
	}
	
	
}