http://localhost:5000/api/transactions
Endpoints
1. Get All Transactions
URL: /
Method: GET
Description: Fetch all transactions.
Response:
200 OK: Returns a list of all transactions.
500 Internal Server Error: Server error.
Example Request:
curl -X GET http://localhost:5000/api/transactions/
Get Transactions by School ID
URL: /:school_id
Method: GET
Description: Fetch transactions by school ID.
URL Parameters:
school_id (string): The ID of the school.
Response:
200 OK: Returns a list of transactions for the specified school ID.
500 Internal Server Error: Server error.
curl -X GET http://localhost:5000/api/transactions/{school_id}
Check Transaction Status
URL: /check-status/:custom_order_id
Method: GET
Description: Check the status of a transaction by custom order ID.
URL Parameters:
custom_order_id (string): The custom order ID of the transaction.
Response:
200 OK: Returns the status of the transaction.
500 Internal Server Error: Server error.
Example Request:
curl -X GET http://localhost:5000/api/transactions/check-status/{custom_order_id}
Update Transaction Status
URL: /update-status
Method: POST
Description: Manually update the status of a transaction.
Request Body:
custom_order_id (string): The custom order ID of the transaction.
status (string): The new status of the transaction.
Response:
200 OK: Returns a message indicating the transaction status was updated.
404 Not Found: Transaction not found.
500 Internal Server Error: Server error.
Example Request:
curl -X POST http://localhost:5000/api/transactions/update-status \
  -H "Content-Type: application/json" \
  -d '{"custom_order_id": "test1", "status": "SUCCESS"}'

  Create Payment Request
URL: /create-payment
Method: POST
Description: Create a new payment request.
Request Body:
data (object): The payment request data.
Response:
200 OK: Returns the response from the payment creation.
500 Internal Server Error: Payment creation failed.
Example Request:
curl -X POST http://localhost:5000/api/transactions/create-payment \
  -H "Content-Type: application/json" \
  -d '{"collect_id": "6730d9b926c65c39b0ee0149", "status": "SUCCESS", "payment_method": "upi", "gateway": "CASHFREE", "bank_reference": "10100", "custom_order_id": "test1"}'
  CSV Import
Description: Import transactions from a CSV file.
File: importCSV.js
Usage: Modify the file path in index.js to point to your CSV file and run the server to import data.
Example:
importCSV("./data/test.csv");