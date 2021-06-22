# `GIVE YOUR STRENGTH`

This is my backend NSS capstone project designed to implement a full stack React to Python/Django app with maps.

## `What is GYS?`

![GYS Logo](https://res.cloudinary.com/dp6mbc90b/image/upload/v1624373214/gyslogoboth_jfkhle.jpg)

Ths idea behind GYS is based on my time as a caretaker and realizing the important need for physical strength. I thought to myself, it would be quite handy to know if someone near me was in need. Whether that's to get in and out of bed, to get up from a fall, or even to carry some groceries inside.

Users sign up as Giveing or Needing strength. Their addresses are geocoded. Then a map is rendered with the opposite help type within a certain distance.

For example, if you can GIVE strength, you can see all the users within 3 miles of your address who NEED strength.

The app is not unlike other apps. We capture user data, put it in a database, pull that data back out, and put it on a map. It's a simple app, but was a challenge nonetheless.

## `Tech Used`
- React
- React Leaflet Maps
- React Bootstrap
- Django (server side)
- Python (server side)
- sqlLite (server side)
- Distance calculation in Python
- Geocoding using Nominatim

## `Setup`
- Clone this repository and change to the directory in the terminal
- In the project directory, run npm start
- Open http://localhost:3000 to view it in the browser


## `ERD`
https://dbdiagram.io/d/60ac2191b29a09603d165542

## `Wishlist`
Lots of things I'd want to add to this down the road:

- Scheduling
- Routing
- Messaging between users
- Change the look and feel of the map
- Equipment loan
