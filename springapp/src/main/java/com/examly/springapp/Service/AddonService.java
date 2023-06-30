package com.examly.springapp.Service;

import java.util.List;

import com.examly.springapp.Model.AddOnModel;

public interface AddonService {

    AddOnModel addAddon(AddOnModel add);

    List<AddOnModel> getAddon();

    AddOnModel getAddonId(Long addOnid);

    void deleteAddon(Long addOnid);

    void editAddon(AddOnModel addOn);

}