package main

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"os"

	_ "github.com/lib/pq"
)

var db *sql.DB

func init() {
	conn := os.Getenv("DATABASE_URL")
	var err error
	db, err = sql.Open("postgres", conn)
	if err != nil {
		panic(err)
	}
}

type Order struct {
	UserID string        `json:"user_id"`
	Items  []interface{} `json:"items"`
}

func CheckoutHandler(w http.ResponseWriter, r *http.Request) {
	var o Order
	if err := json.NewDecoder(r.Body).Decode(&o); err != nil {
		http.Error(w, "invalid payload", 400)
		return
	}
	// Simulate order insert
	_, err := db.Exec(
		"INSERT INTO orders(user_id, payload) VALUES($1, $2)",
		o.UserID,
		r.Body,
	)
	if err != nil {
		http.Error(w, "db error", 500)
		return
	}
	// Simulate email send (log only)
	w.WriteHeader(201)
	w.Write([]byte(`{"status":"processed"}`))
}
