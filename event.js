class TicketType {
    constructor(name, price) {
      this.name = name;//global variable within its class
      this.price = price;
    }
  }
  
  class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }
  
    addAvailableTickets(tName, tPrice) {
      const tType = new TicketType(tName, tPrice);//creating newObj will list all ticket types
      this.availableTickets.push(tType);//will push available tickets in array
    }
  
    allTickets() {
      let result = "";
      for (let i = 0; i < this.availableTickets.length; i++) {
        result += `${i + 1}. ${this.availableTickets[i].name} ($${this.availableTickets[i].price}) `
      }
      return `All tickets:  ${result}`
    }
  
    searchTickets(lower, upper) {
      let priceRange = "NOT AVAILABLE"
      for (let j = 0; j < this.availableTickets.length; j++) {
        if (this.availableTickets[j].price >= lower && this.availableTickets[j].price <= upper){ 
          priceRange = ""
          priceRange += `Eligible tickets ${j + 1} ${this.availableTickets[j].name} $${this.availableTickets[j].price}`
        }//have to use price & name from Class to callback, not from local variable in AddAvailableTickets
      }
      return priceRange;
    }
  }
  
  //available tickets are relevant and linked
  const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
  );
  //console.log(eventObj1.name);
  const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
  
  const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');
  
  const eventEmpty = new Array();
  eventEmpty.push(eventObj1, eventObj2, eventObj3);
  
  console.log(eventEmpty);
  
  document.addEventListener('DOMContentLoaded', () => {
    let html = '';
    eventEmpty.forEach((item) => {
      html += `<li>${item.name} - ${item.description} - ${item.allTickets()}- ${item.searchTickets(0, 200)}`;//value for lower & upper
    });
    document.querySelector('#event').innerHTML = html;
  });
  
  
  
  
  //Ticket Prices- ticket examples from curriculum
  eventObj1.addAvailableTickets("human", 299);
  eventObj1.addAvailableTickets("vampire", 99);
  eventObj2.addAvailableTickets("General Admission", 25)
  eventObj2.addAvailableTickets("Floor Seating", 80)
  eventObj3.addAvailableTickets("Orchestra", 300)
  eventObj3.addAvailableTickets("Mezzanine", 200)
  eventObj3.addAvailableTickets("Balcony", 100)
  // console.log(eventObj1.allTickets());
  // console.log(eventObj2.allTickets());
  // console.log(eventObj3.allTickets());
  // eventObj1.searchTickets(0, 200);
  
  //create eventArray
  let eventArray = new Array();
  //push arrays
  eventArray.push(eventObj1, eventObj2, eventObj3)
  
  console.log(eventArray)
  //NOOTES
   //print all tickets
    //display tickets on html
  
    //the for loop will account for the lower & upper
    //print blurb
  //this.availabletickets and push in price
  
  //hello