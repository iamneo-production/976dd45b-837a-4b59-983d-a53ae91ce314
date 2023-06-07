package com.examly.springapp.Service;

import java.util.List;

import com.examly.springapp.Model.AddOnModel;

public interface AddonService {

    AddOnModel storeAddon(AddOnModel add);

    List<AddOnModel> getAllAddons();

    AddOnModel findbyId(Long addOnid);

    void deleteById(Long addOnid);

    AddOnModel updateAddon(AddOnModel addOn);

}