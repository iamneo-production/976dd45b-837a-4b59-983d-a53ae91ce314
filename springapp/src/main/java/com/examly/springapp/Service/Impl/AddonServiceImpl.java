package com.examly.springapp.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.AddOnModel;
import com.examly.springapp.Repository.AddonRepository;
import com.examly.springapp.Service.AddonService;
@Service
public class AddonServiceImpl implements AddonService{
    @Autowired
    private AddonRepository AddonRepo;

    // save addon
    @Override
    public AddOnModel storeAddon(AddOnModel add){
        return AddonRepo.save(add);
    }

    @Override
    public List<AddOnModel> getAllAddons() {
        return AddonRepo.findAll();
    }

    @Override
    public AddOnModel findbyId(Long addOnid){
        return AddonRepo.findById(addOnid).get();
    }
    

    @Override
    public void deleteById(Long addOnid){
        AddonRepo.deleteById(addOnid);
    }

    @Override
    public AddOnModel updateAddon(AddOnModel addOn) {
        return AddonRepo.save(addOn);
    }

   
    

    

}