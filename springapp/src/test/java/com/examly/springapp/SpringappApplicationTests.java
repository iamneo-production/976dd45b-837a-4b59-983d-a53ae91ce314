package com.examly.springapp;


import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

//import org.junit.Test;
import org.junit.jupiter.api.Test; 
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
@RunWith(SpringRunner.class)
class SpringappApplicationTests {

	@Autowired
    private MockMvc mockMvc;
	
	@Test
	@Transactional
    public void BE_Add_User() throws Exception {
        String newUser = "{\"email\":\"test@gmail.com\",\"password\":\"Test@123\",\"username\":\"test123\",\"mobileNumber\":\"9876543210\",\"userRole\":\"user\"}";
        mockMvc.perform(MockMvcRequestBuilders.post("/user/signup")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newUser)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }

	@Test
	@Transactional
    public void BE_Add_Theme() throws Exception {
        String newTheme = "{\"themeId\":\"01\",\"themeName\":\"ABC\",\"themeImageURL\":\"ABC.png\",\"themeDescription\":\"attractive\",\"themePhotographer\":\"XYZ\",\"themeVideographer\":\"PQR\",\"ThemeReturnGift\":\"yes\",\"ThemeCost\":\"100000\"}";
        mockMvc.perform(MockMvcRequestBuilders.post("/admin/addTheme")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newTheme)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }
	
	@Test
	@Transactional
    public void BE_Get_Theme() throws Exception {
	 	mockMvc.perform(MockMvcRequestBuilders.get("/admin/getTheme")
		.contentType(MediaType.APPLICATION_JSON)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(MockMvcResultMatchers.jsonPath("$").isNotEmpty())
		.andReturn();
    }

	@Test
	@Transactional
    public void BE_Update_Theme() throws Exception {
        String newTheme = "{\"themeId\":\"01\",\"themeName\":\"ABC\",\"themeImageURL\":\"ABC.png\",\"themeDescription\":\"attractive\",\"themePhotographer\":\"XYZ\",\"themeVideographer\":\"PQR\",\"ThemeReturnGift\":\"yes\",\"ThemeCost\":\"100000\"}";
        mockMvc.perform(MockMvcRequestBuilders.put("/admin/editTheme")
		.param("themeId","01")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newTheme)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }

	@Test
	@Transactional
    public void BE_Add_FoodMenu() throws Exception {
        String newFoodMenu = "{\"foodMenuID\":\"01\",\"foodMenuType\":\"ABC\",\"foodMenuItems\":\"abcd\",\"foodMenuCost\":\"25000\"}";
        mockMvc.perform(MockMvcRequestBuilders.post("/admin/addMenu")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newFoodMenu)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }

	@Test
	@Transactional
    public void BE_Update_FoodMenu() throws Exception {
        String newFoodMenu = "{\"foodMenuID\":\"01\",\"foodMenuType\":\"ABC\",\"foodMenuItems\":\"abcd\",\"foodMenuCost\":\"25000\"}";
        mockMvc.perform(MockMvcRequestBuilders.put("/admin/editMenu")
		.param("foodMenuID","01")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newFoodMenu)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }
	
}
