
var request = new XMLHttpRequest;
request.open('GET',"https://restcountries.eu/rest/v2/all", true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    // Get all the countries from Asia continent /region using Filter function
      var counReg = data.filter((ele) => ele.region === 'Asia');
      console.log(counReg);
      // For printing only the country names.
      var coun = counReg.map((ele) =>ele.name);
      console.log(coun);

    //Get all the countries with population of less than 2 lacs using Filter function
      var pop = data.filter((ele) =>ele.population < 200000);
      console.log(pop);
      // For printing only the country names.
      var popcon = pop.map((ele) =>ele.name);
      console.log(popcon);

    //Print the total population of countries using reduce function 
     
      var totalpopul= ((acc,ele) => acc+ele.population);
      console.log(data.reduce(totalpopul,0));

    //Print the country which use US Dollars as currency.

    // var curr = data.filter((ele)=>ele.currencies[0].code === "USD");
    // console.log(curr);

    var cusd = data.filter((ele) => {
      for (var curr in ele.currencies)
      {
        if (ele.currencies[curr].code === "USD")
        {
          return true;
        }
      }
    }).map((ele) => console.log(ele.name));
  
    //Print the following details name, capital, flag using forEach function
    var res = data.forEach((ele) => 
    {
      console.log(ele.name, ele.capital, ele.flag);
    });
    console.log(res);
      
       }
