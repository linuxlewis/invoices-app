export const invoices = [
    {
        "id": "1",
        "invoiceNumber": "INV-001",
        "customerRef": {
          "id": "CUST-001",
          "companyName": "ABC Company"
        },
        "salesOrderRefs": [
          {
            "id": "SO-001",
            "dataType": "salesOrders"
          }
        ],
        "issueDate": "2022-10-23T00:00:00.000Z",
        "dueDate": "2022-10-30T00:00:00.000Z",
        "paidOnDate": "2022-10-25T00:00:00.000Z",
        "currency": "USD",
        "currencyRate": 0,
        "lineItems": [
          {
            "description": "Product A",
            "unitAmount": 50,
            "quantity": 2,
            "subTotal": 100,
            "taxAmount": 20,
            "totalAmount": 120,
            "accountRef": {},
            "taxRateRef": {},
            "isDirectIncome": true
          }
        ],
        "paymentAllocations": [
          {
            "payment": {
              "accountRef": {}
            },
            "allocation": {}
          }
        ],
        "subTotal": 100,
        "totalTaxAmount": 20,
        "totalAmount": 120,
        "amountDue": 0,
        "status": "Unknown",
        "note": "Sample note 1",
        "metadata": {
          "isDeleted": true
        },
        "supplementalData": {
          "content": {
            "property1": {},
            "property2": {}
          }
        },
        "modifiedDate": "2022-10-23T00:00:00.000Z",
        "sourceModifiedDate": "2022-10-23T00:00:00.000Z"
      },
      {
        "id": "2",
        "invoiceNumber": "INV-002",
        "customerRef": {
          "id": "CUST-002",
          "companyName": "XYZ Corporation"
        },
        "salesOrderRefs": [
          {
            "id": "SO-002",
            "dataType": "salesOrders"
          }
        ],
        "issueDate": "2022-10-24T00:00:00.000Z",
        "dueDate": "2022-10-31T00:00:00.000Z",
        "currency": "GBP",
        "currencyRate": 0,
        "lineItems": [
          {
            "description": "Service B",
            "unitAmount": 80,
            "quantity": 3,
            "subTotal": 240,
            "taxAmount": 48,
            "totalAmount": 288,
            "accountRef": {},
            "taxRateRef": {},
            "isDirectIncome": true
          }
        ],
        "paymentAllocations": [
          {
            "payment": {
              "accountRef": {}
            },
            "allocation": {}
          }
        ],
        "subTotal": 240,
        "totalTaxAmount": 48,
        "totalAmount": 288,
        "amountDue": 0,
        "status": "Unknown",
        "note": "Sample note 2",
        "metadata": {
          "isDeleted": true
        },
        "supplementalData": {
          "content": {
            "property1": {},
            "property2": {}
          }
        },
        "modifiedDate": "2022-10-24T00:00:00.000Z",
        "sourceModifiedDate": "2022-10-24T00:00:00.000Z"
    },
    {
        "id": "3",
        "invoiceNumber": "INV-003",
        "customerRef": {
          "id": "CUST-001",
          "companyName": "ABC Company"
        },
        "salesOrderRefs": [
          {
            "id": "SO-001",
            "dataType": "salesOrders"
          }
        ],
        "issueDate": "2022-10-23T00:00:00.000Z",
        "dueDate": "2022-10-30T00:00:00.000Z",
        "paidOnDate": "2022-10-25T00:00:00.000Z",
        "currency": "USD",
        "currencyRate": 0,
        "lineItems": [
          {
            "description": "Product A",
            "unitAmount": 100,
            "quantity": 3,
            "subTotal": 100,
            "taxAmount": 20,
            "totalAmount": 500,
            "accountRef": {},
            "taxRateRef": {},
            "isDirectIncome": true
          }
        ],
        "paymentAllocations": [
          {
            "payment": {
              "accountRef": {}
            },
            "allocation": {}
          }
        ],
        "subTotal": 100,
        "totalTaxAmount": 20,
        "totalAmount": 200,
        "amountDue": 0,
        "status": "Unknown",
        "note": "Sample note 1",
        "metadata": {
          "isDeleted": true
        },
        "supplementalData": {
          "content": {
            "property1": {},
            "property2": {}
          }
        },
        "modifiedDate": "2022-10-23T00:00:00.000Z",
        "sourceModifiedDate": "2022-10-23T00:00:00.000Z"
      },
      {
        "id": "4",
        "invoiceNumber": "INV-004",
        "customerRef": {
          "id": "CUST-002",
          "companyName": "XYZ Corporation"
        },
        "salesOrderRefs": [
          {
            "id": "SO-002",
            "dataType": "salesOrders"
          }
        ],
        "issueDate": "2022-10-24T00:00:00.000Z",
        "dueDate": "2022-10-31T00:00:00.000Z",
        "currency": "GBP",
        "currencyRate": 0,
        "lineItems": [
          {
            "description": "Service B",
            "unitAmount": 80,
            "quantity": 3,
            "subTotal": 240,
            "taxAmount": 48,
            "totalAmount": 288,
            "accountRef": {},
            "taxRateRef": {},
            "isDirectIncome": true
          }
        ],
        "paymentAllocations": [
          {
            "payment": {
              "accountRef": {}
            },
            "allocation": {}
          }
        ],
        "subTotal": 240,
        "totalTaxAmount": 48,
        "totalAmount": 300,
        "amountDue": 0,
        "status": "Unknown",
        "note": "Sample note 2",
        "metadata": {
          "isDeleted": true
        },
        "supplementalData": {
          "content": {
            "property1": {},
            "property2": {}
          }
        },
        "modifiedDate": "2022-10-24T00:00:00.000Z",
        "sourceModifiedDate": "2022-10-24T00:00:00.000Z"
      },
      {
        "id": "5",
        "invoiceNumber": "INV-005",
        "customerRef": {
          "id": "CUST-001",
          "companyName": "ABC Company"
        },
        "salesOrderRefs": [
          {
            "id": "SO-001",
            "dataType": "salesOrders"
          }
        ],
        "issueDate": "2022-10-23T00:00:00.000Z",
        "dueDate": "2022-10-30T00:00:00.000Z",
        "paidOnDate": "2022-10-25T00:00:00.000Z",
        "currency": "USD",
        "currencyRate": 0,
        "lineItems": [
          {
            "description": "Product A",
            "unitAmount": 50,
            "quantity": 2,
            "subTotal": 100,
            "taxAmount": 20,
            "totalAmount": 120,
            "accountRef": {},
            "taxRateRef": {},
            "isDirectIncome": true
          }
        ],
        "paymentAllocations": [
          {
            "payment": {
              "accountRef": {}
            },
            "allocation": {}
          }
        ],
        "subTotal": 100,
        "totalTaxAmount": 20,
        "totalAmount": 120,
        "amountDue": 0,
        "status": "Unknown",
        "note": "Sample note 1",
        "metadata": {
          "isDeleted": true
        },
        "supplementalData": {
          "content": {
            "property1": {},
            "property2": {}
          }
        },
        "modifiedDate": "2022-10-23T00:00:00.000Z",
        "sourceModifiedDate": "2022-10-23T00:00:00.000Z"
      },
      {
        "id": "6",
        "invoiceNumber": "INV-006",
        "customerRef": {
          "id": "CUST-002",
          "companyName": "XYZ Corporation"
        },
        "salesOrderRefs": [
          {
            "id": "SO-002",
            "dataType": "salesOrders"
          }
        ],
        "issueDate": "2022-10-24T00:00:00.000Z",
        "dueDate": "2022-10-31T00:00:00.000Z",
        "currency": "GBP",
        "currencyRate": 0,
        "lineItems": [
          {
            "description": "Service B",
            "unitAmount": 80,
            "quantity": 3,
            "subTotal": 240,
            "taxAmount": 48,
            "totalAmount": 288,
            "accountRef": {},
            "taxRateRef": {},
            "isDirectIncome": true
          }
        ],
        "paymentAllocations": [
          {
            "payment": {
              "accountRef": {}
            },
            "allocation": {}
          }
        ],
        "subTotal": 240,
        "totalTaxAmount": 48,
        "totalAmount": 288,
        "amountDue": 0,
        "status": "Unknown",
        "note": "Sample note 2",
        "metadata": {
          "isDeleted": true
        },
        "supplementalData": {
          "content": {
            "property1": {},
            "property2": {}
          }
        },
        "modifiedDate": "2022-10-24T00:00:00.000Z",
        "sourceModifiedDate": "2022-10-24T00:00:00.000Z"
      },
      {
        "id": "7",
        "invoiceNumber": "INV-007",
        "customerRef": {
          "id": "CUST-001",
          "companyName": "ABC Company"
        },
        "salesOrderRefs": [
          {
            "id": "SO-001",
            "dataType": "salesOrders"
          }
        ],
        "issueDate": "2022-10-23T00:00:00.000Z",
        "dueDate": "2022-10-30T00:00:00.000Z",
        "paidOnDate": "2022-10-25T00:00:00.000Z",
        "currency": "USD",
        "currencyRate": 0,
        "lineItems": [
          {
            "description": "Product A",
            "unitAmount": 50,
            "quantity": 2,
            "subTotal": 100,
            "taxAmount": 20,
            "totalAmount": 120,
            "accountRef": {},
            "taxRateRef": {},
            "isDirectIncome": true
          }
        ],
        "paymentAllocations": [
          {
            "payment": {
              "accountRef": {}
            },
            "allocation": {}
          }
        ],
        "subTotal": 100,
        "totalTaxAmount": 20,
        "totalAmount": 120,
        "amountDue": 0,
        "status": "Unknown",
        "note": "Sample note 1",
        "metadata": {
          "isDeleted": true
        },
        "supplementalData": {
          "content": {
            "property1": {},
            "property2": {}
          }
        },
        "modifiedDate": "2022-10-23T00:00:00.000Z",
        "sourceModifiedDate": "2022-10-23T00:00:00.000Z"
      },
      {
        "id": "8",
        "invoiceNumber": "INV-008",
        "customerRef": {
          "id": "CUST-002",
          "companyName": "XYZ Corporation"
        },
        "salesOrderRefs": [
          {
            "id": "SO-002",
            "dataType": "salesOrders"
          }
        ],
        "issueDate": "2022-10-24T00:00:00.000Z",
        "dueDate": "2022-10-31T00:00:00.000Z",
        "currency": "GBP",
        "currencyRate": 0,
        "lineItems": [
          {
            "description": "Service B",
            "unitAmount": 80,
            "quantity": 3,
            "subTotal": 240,
            "taxAmount": 48,
            "totalAmount": 288,
            "accountRef": {},
            "taxRateRef": {},
            "isDirectIncome": true
          }
        ],
        "paymentAllocations": [
          {
            "payment": {
              "accountRef": {}
            },
            "allocation": {}
          }
        ],
        "subTotal": 240,
        "totalTaxAmount": 48,
        "totalAmount": 288,
        "amountDue": 0,
        "status": "Unknown",
        "note": "Sample note 2",
        "metadata": {
          "isDeleted": true
        },
        "supplementalData": {
          "content": {
            "property1": {},
            "property2": {}
          }
        },
        "modifiedDate": "2022-10-24T00:00:00.000Z",
        "sourceModifiedDate": "2022-10-24T00:00:00.000Z"
      },
      {
        "id": "9",
        "invoiceNumber": "INV-009",
        "customerRef": {
          "id": "CUST-001",
          "companyName": "ABC Company"
        },
        "salesOrderRefs": [
          {
            "id": "SO-001",
            "dataType": "salesOrders"
          }
        ],
        "issueDate": "2022-10-23T00:00:00.000Z",
        "dueDate": "2022-10-30T00:00:00.000Z",
        "paidOnDate": "2022-10-25T00:00:00.000Z",
        "currency": "USD",
        "currencyRate": 0,
        "lineItems": [
          {
            "description": "Product A",
            "unitAmount": 50,
            "quantity": 2,
            "subTotal": 100,
            "taxAmount": 20,
            "totalAmount": 120,
            "accountRef": {},
            "taxRateRef": {},
            "isDirectIncome": true
          }
        ],
        "paymentAllocations": [
          {
            "payment": {
              "accountRef": {}
            },
            "allocation": {}
          }
        ],
        "subTotal": 100,
        "totalTaxAmount": 20,
        "totalAmount": 120,
        "amountDue": 0,
        "status": "Unknown",
        "note": "Sample note 1",
        "metadata": {
          "isDeleted": true
        },
        "supplementalData": {
          "content": {
            "property1": {},
            "property2": {}
          }
        },
        "modifiedDate": "2022-10-23T00:00:00.000Z",
        "sourceModifiedDate": "2022-10-23T00:00:00.000Z"
      },
      {
        "id": "10",
        "invoiceNumber": "INV-010",
        "customerRef": {
          "id": "CUST-002",
          "companyName": "XYZ Corporation"
        },
        "salesOrderRefs": [
          {
            "id": "SO-002",
            "dataType": "salesOrders"
          }
        ],
        "issueDate": "2022-10-24T00:00:00.000Z",
        "dueDate": "2022-10-31T00:00:00.000Z",
        "currency": "GBP",
        "currencyRate": 0,
        "lineItems": [
          {
            "description": "Service B",
            "unitAmount": 80,
            "quantity": 3,
            "subTotal": 240,
            "taxAmount": 48,
            "totalAmount": 288,
            "accountRef": {},
            "taxRateRef": {},
            "isDirectIncome": true
          }
        ],
        "paymentAllocations": [
          {
            "payment": {
              "accountRef": {}
            },
            "allocation": {}
          }
        ],
        "subTotal": 240,
        "totalTaxAmount": 48,
        "totalAmount": 288,
        "amountDue": 0,
        "status": "Unknown",
        "note": "Sample note 2",
        "metadata": {
          "isDeleted": true
        },
        "supplementalData": {
          "content": {
            "property1": {},
            "property2": {}
          }
        },
        "modifiedDate": "2022-10-24T00:00:00.000Z",
        "sourceModifiedDate": "2022-10-24T00:00:00.000Z"
      },
      {
        "id": "11",
        "invoiceNumber": "INV-011",
        "customerRef": {
          "id": "CUST-001",
          "companyName": "ABC Company"
        },
        "salesOrderRefs": [
          {
            "id": "SO-001",
            "dataType": "salesOrders"
          }
        ],
        "issueDate": "2022-10-23T00:00:00.000Z",
        "dueDate": "2022-10-30T00:00:00.000Z",
        "paidOnDate": "2022-10-25T00:00:00.000Z",
        "currency": "USD",
        "currencyRate": 0,
        "lineItems": [
          {
            "description": "Product A",
            "unitAmount": 50,
            "quantity": 2,
            "subTotal": 100,
            "taxAmount": 20,
            "totalAmount": 120,
            "accountRef": {},
            "taxRateRef": {},
            "isDirectIncome": true
          }
        ],
        "paymentAllocations": [
          {
            "payment": {
              "accountRef": {}
            },
            "allocation": {}
          }
        ],
        "subTotal": 100,
        "totalTaxAmount": 20,
        "totalAmount": 120,
        "amountDue": 0,
        "status": "Unknown",
        "note": "Sample note 1",
        "metadata": {
          "isDeleted": true
        },
        "supplementalData": {
          "content": {
            "property1": {},
            "property2": {}
          }
        },
        "modifiedDate": "2022-10-23T00:00:00.000Z",
        "sourceModifiedDate": "2022-10-23T00:00:00.000Z"
      },
      {
        "id": "12",
        "invoiceNumber": "INV-012",
        "customerRef": {
          "id": "CUST-002",
          "companyName": "XYZ Corporation"
        },
        "salesOrderRefs": [
          {
            "id": "SO-002",
            "dataType": "salesOrders"
          }
        ],
        "issueDate": "2022-10-24T00:00:00.000Z",
        "dueDate": "2022-10-31T00:00:00.000Z",
        "currency": "GBP",
        "currencyRate": 0,
        "lineItems": [
          {
            "description": "Service B",
            "unitAmount": 80,
            "quantity": 3,
            "subTotal": 240,
            "taxAmount": 48,
            "totalAmount": 288,
            "accountRef": {},
            "taxRateRef": {},
            "isDirectIncome": true
          }
        ],
        "paymentAllocations": [
          {
            "payment": {
              "accountRef": {}
            },
            "allocation": {}
          }
        ],
        "subTotal": 240,
        "totalTaxAmount": 48,
        "totalAmount": 288,
        "amountDue": 0,
        "status": "Unknown",
        "note": "Sample note 2",
        "metadata": {
          "isDeleted": true
        },
        "supplementalData": {
          "content": {
            "property1": {},
            "property2": {}
          }
        },
        "modifiedDate": "2022-10-24T00:00:00.000Z",
        "sourceModifiedDate": "2022-10-24T00:00:00.000Z"
      }
]