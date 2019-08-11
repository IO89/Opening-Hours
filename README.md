## Opening hours
Shows opening hours of hypothetical restaurant from data.json file which has format:
  `"weekday" : [
    {
      "type" : "open",
      "value" : 36000
    },
    {
      "type" : "close",
      "value" : 64800
    }
  ],`
Time is given in seconds which then converted to hours in AM/PM format.

 If array of time is empty then a restaurant is closed.
 Restaurant might be open in one day and closed in next day, for example restaurant is open on Friday at 10AM and closes on Saturday 1AM
 ,in this case opening hours are displayed as Friday 10AM-1AM.
 ### Demo
 Demo available here: `https://opening-hours-m7uhz5x1c.now.sh/`
 ### Run locally
 Clone repo and run: `npm i` and then `npm start` to run development server locally.
 
 ### Further improvement
 One might fetch hours from endpoint instead of using static data.