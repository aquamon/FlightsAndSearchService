# Welcome to Flights Service

## This project uses the Microsevice Architecture
- There are different microservices implemented for each of the Business Tasks.
- API Gateway has been implemented here : [https://github.com/aquamon/API_Gateway](https://github.com/aquamon/API_Gateway)
- Authentication Service has been implemented here : [https://github.com/aquamon/Auth_Service](https://github.com/aquamon/Auth_Service)
- Booking Service to create a booking has been implemented here : [https://github.com/aquamon/BookingService](https://github.com/aquamon/BookingService)
- Reminder Service which reminds the user regarding the upcoming journey has been implemented here : [https://github.com/aquamon/ReminderService](https://github.com/aquamon/ReminderService)

## Project Setup
- clone the project on your local
- execute `npm install` on the same path as of your root directory.
- Create a `.env` file in the root directory and add the following environment
  variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add
  the following piece of json.
```
    {
        "development": {
            "username": <your db login name>,
            "password": <your db password>,
            "database": "Flights_Search_DB_DEV",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
    }
```
- Once you have added your db config as listed above, go to the src folder from terminal
and execute `npx sequelize db:create`    


    
