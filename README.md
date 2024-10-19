# Capstone Project

# Project Name: CleanEase

An application which helps users to book their house hold cleaning services, such as Kitchen cleaning, room cleaning, garden cleaning, etc.

## App deployed in Render(deployment in progress, will update this doc shortly)

http://localhost:5173/

## Documentation

Using React, Express, MongoDB and node this app can help create a cleanining service request, track the request, etc.

# 💻 Tech Stack:

[![My Skills](https://skillicons.dev/icons?i=nodejs,express,mongodb,git,postman)](https://skillicons.dev)

## Demo

Test using Postman:

- Add Service - POST (http://localhost:4000/api/service/add)
- List Service - GET (http://localhost:4000/api/service/list)
- Remove Service - POST (http://localhost:4000/api/service/remove)
- Register User - POST (http://localhost:4000/api/user/register)
- Login User - POST (http://localhost:4000/api/user/login)
- Add to Cart - POST (http://localhost:4000/api/cart/add)
- Remove from Cart - POST (http://localhost:4000/api/cart/remove)
- Get Cart Details - POST (http://localhost:4000/api/cart/get)
- User Order Details - POST (http://localhost:4000/api/order/userorders)
- Get all order Details - GET (http://localhost:4000/api/order/list)
- Update Order status - POST (http://localhost:4000/api/order/status)

## API documentation

https://documenter.getpostman.com/view/36588127/2sAXxWbA2v

## Screenshot

## Installation

To run this app locally - follow the below steps.

- Download all three repositories(Cleanease-Backen, Cleanease-Frontend, Cleanease-Admin)
- Install dependencies using npm install
- Start the development server with "npm run dev"(for Frontend, and Admin projects), "npm run server"(for backend project)
- Using postman test the API endpoints(if you face any issues accessing the Render deployment URL then you can use "http://localhost:5173/"(for frontend), "http://localhost:5174/"(for admin portal) instead of render deployment URL)
