package com.examly.springapp.Model;
import javax.persistence.*;

@Entity
@Table(name = "AddOninfo")
public class AddOnModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private long addOnid;

    @Column(name = "AddOnName")
    private String addOnName;

    @Column(name = "AddOnDescription")
    private String addonDescription;
    
    @Column(name = "addAddonPrice")
    private String addAddonPrice;

    public AddOnModel(){
        
    }

    public AddOnModel(long addOnid, String addOnName, String addonDescription, String addAddonPrice) {
        this.addOnid = addOnid;
        this.addOnName = addOnName;
        this.addonDescription = addonDescription;
        this.addAddonPrice = addAddonPrice;
    }


    public long getAddOnid() {
        return this.addOnid;
    }

    public void setAddOnid(long addOnid) {
        this.addOnid = addOnid;
    }

    public String getAddOnName() {
        return this.addOnName;
    }

    public void setAddOnName(String addOnName) {
        this.addOnName = addOnName;
    }

    public String getaddonDescription() {
        return this.addonDescription;
    }

    public void setaddonDescription(String addonDescription) {
        this.addonDescription = addonDescription;
    }

    public String getaddAddonPrice() {
        return this.addAddonPrice;
    }

    public void setaddAddonPrice(String addAddonPrice) {
        this.addAddonPrice = addAddonPrice;
    }

    
    
}