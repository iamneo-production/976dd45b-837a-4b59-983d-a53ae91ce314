#!/bin/bash

if [ -d "/home/coder/project/workspace/angularapp" ]
then
    echo "project folder present"
    cp /home/coder/project/workspace/karma/karma.conf.js /home/coder/project/workspace/angularapp/karma.conf.js;
    

    # checking for login component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/auth/login" ]
    then
        cp /home/coder/project/workspace/karma/login.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/auth/login/login.component.spec.ts;
    else
        echo "FE_loginTest FAILED";
    fi 

    # checking for signup component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/auth/signup" ]
    then
        cp /home/coder/project/workspace/karma/signup.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/auth/signup/signup.component.spec.ts;
    else
        echo "FE_signupTest FAILED";
    fi 

    # checking for addons component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/addons" ]
    then
        cp /home/coder/project/workspace/karma/addons.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/addons/addons.component.spec.ts;
    else
        echo "FE_addonsTest FAILED";
    fi 

     # checking for booking component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/booking" ]
    then
        cp /home/coder/project/workspace/karma/booking.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/booking/booking.component.spec.ts;
    else
        echo "FE_bookingTest FAILED";
    fi

        # checking for foodmenu component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/foodmenu" ]
    then
        cp /home/coder/project/workspace/karma/foodmenu.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/foodmenu/foodmenu.component.spec.ts;
    else
        echo "FE_foodMenuTest FAILED";
    fi


          # checking for themes component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/themes" ]
    then
        cp /home/coder/project/workspace/karma/themes.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/themes/themes.component.spec.ts;
    else
        echo "FE_themesTest FAILED";
    fi


    # checking for adminreview component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/adminreview" ]
    then
        cp /home/coder/project/workspace/karma/adminreview.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/adminreview/adminreview.component.spec.ts;
    else
        echo "FE_adminReviewTest FAILED";
    fi

    
    # checking for addevent component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/customerside/addevent" ]
    then
        cp /home/coder/project/workspace/karma/addevent.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/customerside/addevent/addevent.component.spec.ts;
    else
        echo "FE_addEventTest FAILED";
    fi 

    # checking for mybooking component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/customerside/mybooking" ]
    then
        cp /home/coder/project/workspace/karma/mybooking.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/customerside/mybooking/mybooking.component.spec.ts;
    else
        echo "FE_myBookingTest FAILED";
    fi 


   # checking for userreview component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/customerside/userreview" ]
    then
        cp /home/coder/project/workspace/karma/userreview.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/customerside/userreview/userreview.component.spec.ts;
    else
        echo "FE_userReviewTest FAILED";
    fi 

    cd /home/coder/project/workspace/angularapp/;
    npm test;
else   
    echo "FE_loginTest FAILED";
    echo "FE_signupTest FAILED";
    echo "FE_addonsTest FAILED";
    echo "FE_bookingTest FAILED";
    echo "FE_foodMenuTest FAILED";
    echo "FE_themesTest FAILED";
    echo "FE_adminReviewTest FAILED";
    echo "FE_addEventTest FAILED";
    echo "FE_myBookingTest FAILED";
    echo "FE_userReviewTest FAILED";
fi

