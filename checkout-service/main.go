package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Health check
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "OK"})
	})

	// Checkout endpoint
	r.POST("/checkout", CheckoutHandler)

	// Start server
	if err := r.Run(":8080"); err != nil {
		panic(err)
	}
}
