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
public AddOnModel storeAddon(@RequestBody AddOnModel add){
  addonservice.storeAddon(add);
    // return AddonRepo.save(add);
  return add;
}


@GetMapping("/admin/getAddon")
public List<AddOnModel> getAllAddons()
{
  List<AddOnModel> addons = addonservice.getAllAddons();
  // return AddonRepo.findAll();
  return addons;
}


@GetMapping("/admin/getAddon/{addOnid}")
public AddOnModel  findbyId(@PathVariable Long addOnid){
  AddOnModel add = addonservice.findbyId(addOnid);
    // AddOnModel add = AddonRepo.findById(addOnid).orElseThrow(() -> new ResourceNotFoundException("Addon with  " + addOnid + "does not exist"));

  return add;
}


@PutMapping("/admin/editAddon/{addOnid}")
public ResponseEntity<AddOnModel> updateAddon(@PathVariable Long addOnid,@RequestBody AddOnModel addOn){

  // AddOnModel add = AddonRepo.findById(addOnid).orElseThrow(() -> new ResourceNotFoundException("Addon with  " + addOnid + "does not exist"));
  
  addOn.setAddOnName(addOn.getAddOnName());
  addOn.setaddAddonPrice(addOn.getaddAddonPrice());
  addOn.setaddonDescription(addOn.getaddonDescription());

  AddOnModel updatedAdd = addonservice.updateAddon(addOn);

  return ResponseEntity.ok(updatedAdd);

}


@DeleteMapping("/admin/deleteAddon/{addOnid}")
public ResponseEntity<Map<String, Boolean>> deleteById(@PathVariable Long addOnid){

 
  addonservice.deleteById(addOnid);
  Map<String, Boolean> response = new HashMap<>();
  response.put("deleted",Boolean.TRUE);
  return ResponseEntity.ok(response);


}
}