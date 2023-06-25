package com.examly.springapp.Controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.Model.AddOnModel;
import com.examly.springapp.Service.AddonService;



@RestController
@CrossOrigin(origins = "https://8081-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io")
@RequestMapping
public class AddOnController {
    

  @Autowired
  private AddonService addonservice;

@PostMapping("/admin/addAddon")
public AddOnModel addAddon(@RequestBody AddOnModel add){
  addonservice.addAddon(add);
    
  return add;
}


@GetMapping("/admin/getAddon")
public List<AddOnModel> getAddon()
{
  List<AddOnModel> addons = addonservice.getAddon();
  
  return addons;
}


@GetMapping("/admin/getAddon/{addOnid}")
public AddOnModel  getAddonId(@PathVariable Long addOnid){
  AddOnModel add = addonservice.getAddonId(addOnid);
    
  return add;
}


@PutMapping("/admin/editAddon/{addOnid}")
public ResponseEntity<AddOnModel> editAddon(@PathVariable Long addOnid,@RequestBody AddOnModel addOn){
  AddOnModel addonItems = addonservice.getAddonId(addOnid);  
  addonItems.setAddOnName(addOn.getAddOnName());
  addonItems.setaddAddonPrice(addOn.getaddAddonPrice());
  addonItems.setaddonDescription(addOn.getaddonDescription());

  return ResponseEntity.ok(addonItems);

}


@DeleteMapping("/admin/deleteAddon/{addOnid}")
public ResponseEntity<Map<String, Boolean>> deleteAddon(@PathVariable Long addOnid){

 
  addonservice.deleteAddon(addOnid);
  Map<String, Boolean> response = new HashMap<>();
  response.put("deleted",Boolean.TRUE);
  return ResponseEntity.ok(response);


}
}