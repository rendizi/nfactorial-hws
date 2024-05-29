# 1. Star-wars 

Not sure if I will deploy it, but in case no:

```
docker-compose build
docker-compose up
```

Also add mongo db uri to /api/.env

Whole project will run after this. 

API is simple, jus post new data and get. Endpoints:
- POST /characters

It takes json in body in following format:
```json 
{
    "properties": {
        "height": "96",
        "mass": "32",
        "hair_color": "n/a",
        "skin_color": "white, blue",
        "eye_color": "red",
        "birth_year": "33BBY",
        "gender": "n/a",
        "name": "R2-D3",
        "homeworld": "n/a",
    }
}
```
- GET /characters

It takes in query 3 optional params: name, pageSize and page
- POST /planets
 ```json
{
  "properties":
  {
  	"diameter":"10465",
  	"rotation_period":"23",
  	"orbital_period":"304",
  	"gravity":"1 standard",
  	"population":"200000",
  	"climate":"arid",
  	"terrain":"desert",
  	"surface_water":"1",
  	"name":"Tatooine"
  }
}
```

- GET /planets

The same as prev
- POST /starships
```json
  {"properties":
  {
  	"model": "Imperial I-class Star Destroyer",
		"starship_class": "Star Destroyer",
		"manufacturer": "Kuat Drive Yards",
		"cost_in_credits": "150000000",
		"length": "1,600",
		"crew": "47,060",
		"passengers": "n/a",
		"max_atmosphering_speed": "975",
		"hyperdrive_rating": "2.0",
		"MGLT": "60",
		"cargo_capacity": "36000000",
		"consumables": "2 years",
		"name": "Star Destroyer",
  }
}
```
- GET /starships

It is running on port 4000. If I will deploy it, then on api.sw.baglanov.site

