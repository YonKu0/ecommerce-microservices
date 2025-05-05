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
	r.POST("/checkout", func(c *gin.Context) {
		CheckoutHandler(c.Writer, c.Request)
	})

	// Start server
	if err := r.Run(":8080"); err != nil {
		panic(err)
	}
}
