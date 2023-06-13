package com.examly.springapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.Model.AddOnModel;

public interface AddonRepository extends JpaRepository<AddOnModel, Long>{
    
}