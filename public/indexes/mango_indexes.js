pimpim.mangoIndexes = {
  "_id": "_design/pimpim_mango_indexes",
  "version": 20200128,
  "language": "query",
  "views": {
    "created-json-index": {
      "map": {
        "fields": {
          "created": "asc"
        },
        "partial_filter_selector": {}
      },
      "reduce": "_count",
      "options": {
        "def": {
          "fields": [
            "created"
          ]
        }
      }
    },
    "start-json-index": {
      "map": {
        "fields": {
          "start": "asc"
        },
        "partial_filter_selector": {}
      },
      "reduce": "_count",
      "options": {
        "def": {
          "fields": [
            "start"
          ]
        }
      }
    },
    "realmTags-json-index": {
      "map": {
        "fields": {
          "realm": "asc",
          "tags": "asc"
        },
        "partial_filter_selector": {}
      },
      "reduce": "_count",
      "options": {
        "def": {
          "fields": [
            "realm",
            "tags"
          ]
        }
      }
    },
    "messages-json-index": {
      "map": {
        "fields": {
          "realm": "asc"
        },
        "partial_filter_selector": {
          "realm": "messages"
        }
      },
      "reduce": "_count",
      "options": {
        "def": {
          "fields": [
            "realm"
          ]
        }
      }
    },
    "productivityPriority-json-index": {
      "map": {
        "fields": {
          "productivity": "asc",
          "priority": "asc"
        },
        "partial_filter_selector": {
          "$nor": [
            {
              "status": "cancelled"
            },
            {
              "status": "done"
            }
          ]
        }
      },
      "reduce": "_count",
      "options": {
        "def": {
          "fields": [
            "productivity",
            "priority"
          ]
        }
      }
    }
  }
}