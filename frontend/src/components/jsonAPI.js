export const jsonAPI = {
  "meta": {
    "request": {
      "components": {
        "search": {
          "subjectVariant": "1.0.0",
          "eav": "1.0.0",
          "phenotype": "1.0.0",
          "queryIdentification": "1.0.0"
        }
      }
    },
    "apiVersion": "1.0.0",
    "components": {
      "queryIdentification": {
        "queryID": "",
        "queryLabel": "Search from client X for user on [date]"
      }
    }
  },
  "requires": {
    "response": {
      "components": {
        "collection": {
          "exists": "1.0.0",
          "count": "1.0.0"
        },
        "record":{}
      }
    }
  },
  "query": {
    "components": {
      "subjectVariant": [],
      "phenotype": [],
      "eav": []
    }
  },
  "logic": {}
}