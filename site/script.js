function countdown_Days(days){

  while (days >=0)
  {
    if(days>30)
     {
       console.log(days + " days until my birthday. Such a long time to wait.");
     }
     else if( days <=30 && days>=5)
     {
       console.log(days + " days until my birthday. I can hardly wait!");
     }
     else if(days< 5 && days>0)
     {
       console.log(days + " Days Until My Birthday!!!");
     }
     else if (days == 0)
     {
       console.log("Hooray, It's My Birthday!!!");
        }
   days = days - 1;
}
}

countdown_Days(60)
