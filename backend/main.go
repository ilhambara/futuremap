package main

import (
	"futuremap/routes"
)

func main() {
	r := routes.SetupRoutes()
	r.Run(":3000")
}