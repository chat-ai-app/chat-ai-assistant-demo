if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var haley_ai_kg_0_1_0_schema = {
  "domainURI" : "http://vital.ai/ontology/haley-ai-kg",
  "name" : "haley-ai-kg-0.1.0",
  "version" : "0.1.0",
  "domainOWLHash" : "70092f630ba1fef3fb4e4671847bf81e",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/haley-ai-question", "http://vital.ai/ontology/haley" ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasEntityKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntity" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasEntityKGStatement",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntity" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGStatement" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasEntityTypeKGFrameType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntityType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrameType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasEventKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEvent" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasIncomingKGRelationType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntityType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGRelationType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGAnnotation",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGCalendarEventType", "http://vital.ai/ontology/haley-ai-kg#KGDocumentType", "http://vital.ai/ontology/haley-ai-kg#KGEntityType", "http://vital.ai/ontology/haley-ai-kg#KGEventType", "http://vital.ai/ontology/haley-ai-kg#KGFileType", "http://vital.ai/ontology/haley-ai-kg#KGFrameType", "http://vital.ai/ontology/haley-ai-kg#KGRelationType", "http://vital.ai/ontology/haley-ai-kg#KGSlotType", "http://vital.ai/ontology/haley-ai-kg#KGTaskType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGAnnotation" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGDocumentFileNode",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#FileNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGNode", "http://vital.ai/ontology/haley-ai-kg#KGType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGNode", "http://vital.ai/ontology/haley-ai-kg#KGType" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGraphDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEntity",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account", "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntity" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGExtraction",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGCalendarEvent", "http://vital.ai/ontology/haley-ai-kg#KGEntity", "http://vital.ai/ontology/haley-ai-kg#KGEvent", "http://vital.ai/ontology/haley-ai-kg#KGFrame", "http://vital.ai/ontology/haley-ai-kg#KGStatement", "http://vital.ai/ontology/haley-ai-kg#KGTask" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasFrameGraphURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGFrameType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrameType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrameType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGInteractionElement",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGInteraction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGRequest", "http://vital.ai/ontology/haley-ai-kg#KGResponse" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGRelation",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntity" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntity" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGRelationType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGSlot" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasFrameGraphURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGSlotType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrameType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGSlotType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGStatement",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGStatement" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGSubType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasOutgoingKGRelationType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntityType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGRelationType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasRequestKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGRequest" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasResponseKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGResponse" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasTaskKGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGTask" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGAnnotation",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasAnnotationText" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGBeliefModeType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGMetaType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGBooleanSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasBooleanSlotValue" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGCalendarEvent",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGCalendarEventType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGCalendarEventType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGChoiceSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasChoiceSlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGCurrencySlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasCurrencySlotValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGDateTimeSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasDateTimeSlotValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGDocument",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGDocumentType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGDoubleSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasDoubleSlotValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGElement",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGEntity",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGEntityType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGEntityType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGEvent",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGEventType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGEventType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGExpressionType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGMetaType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGFileType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGFileType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGFileUploadSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasFileUploadSlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGFrame",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasFrameGraphURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasFrameSequence" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGBeliefModeType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGExpressionType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGFrameType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasParentFrameURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGFrameType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGIntegerSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasIntegerSlotValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGInteraction",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasInteractionSequence" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGInteractionType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGInteractionType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGJSONSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasJsonSlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGLongTextSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasLongTextSlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGMetaType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGMultiChoiceSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasMultiChoiceSlotValues" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGMultiTaxonomySlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasMultiTaxonomySlotValues" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGraphDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRelationType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRequest",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGElement",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGRequestType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGRequestType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGResponse",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGElement",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGResponseType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGResponseType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasFrameGraphURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGBeliefModeType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGExpressionType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasKGSlotType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-kg#hasSlotSequence" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGSlotType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGStatement",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasStatementText" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGTask",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGTaskType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGTaskType",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGTaxonomySlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasTaxonomySlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGTextSlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasTextSlotValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasKGraphDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-kg#KGURISlot",
    "parent" : "http://vital.ai/ontology/haley-ai-kg#KGSlot",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-kg#hasUriSlotValue" : {
        "type" : "string"
      }
    }
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasAnnotationText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGAnnotation" ],
    "shortName" : "annotationText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasBooleanSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGBooleanSlot" ],
    "shortName" : "booleanSlotValue",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasChoiceSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGChoiceSlot" ],
    "shortName" : "choiceSlotValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasCurrencySlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCurrencySlot" ],
    "shortName" : "currencySlotValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDateTimeSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDateTimeSlot" ],
    "shortName" : "dateTimeSlotValue",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasDoubleSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDoubleSlot" ],
    "shortName" : "doubleSlotValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasFileUploadSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFileUploadSlot" ],
    "shortName" : "fileUploadSlotValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasFrameGraphURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGFrame", "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGSlot", "http://vital.ai/ontology/haley-ai-kg#KGFrame", "http://vital.ai/ontology/haley-ai-kg#KGSlot" ],
    "shortName" : "frameGraphURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasFrameSequence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "shortName" : "frameSequence",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasIntegerSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGIntegerSlot" ],
    "shortName" : "integerSlotValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasInteractionSequence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGInteraction" ],
    "shortName" : "interactionSequence",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasJsonSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGJSONSlot" ],
    "shortName" : "jsonSlotValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGBeliefModeType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame", "http://vital.ai/ontology/haley-ai-kg#KGSlot" ],
    "shortName" : "kGBeliefModeType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGCalendarEventType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGCalendarEvent" ],
    "shortName" : "kGCalendarEventType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGDocumentType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGDocument" ],
    "shortName" : "kGDocumentType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGEntityType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGEntity" ],
    "shortName" : "kGEntityType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGEventType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGEvent" ],
    "shortName" : "kGEventType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGExpressionType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame", "http://vital.ai/ontology/haley-ai-kg#KGSlot" ],
    "shortName" : "kGExpressionType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGFileType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFileType" ],
    "shortName" : "kGFileType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGFrameType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "shortName" : "kGFrameType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGInteractionType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGInteraction" ],
    "shortName" : "kGInteractionType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRelationType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGRelation" ],
    "shortName" : "kGRelationType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRequestType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGRequest" ],
    "shortName" : "kGRequestType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGRequestURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGResponse" ],
    "shortName" : "kGRequestURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGResponseType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGResponse" ],
    "shortName" : "kGResponseType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGSlotType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGSlot" ],
    "shortName" : "kGSlotType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGTaskType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGTask" ],
    "shortName" : "kGTaskType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasKGraphDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge", "http://vital.ai/ontology/haley-ai-kg#KGNode", "http://vital.ai/ontology/haley-ai-kg#KGType" ],
    "shortName" : "kGraphDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasLongTextSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGLongTextSlot" ],
    "shortName" : "longTextSlotValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasMultiChoiceSlotValues",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGMultiChoiceSlot" ],
    "shortName" : "multiChoiceSlotValues",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasMultiTaxonomySlotValues",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGMultiTaxonomySlot" ],
    "shortName" : "multiTaxonomySlotValues",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasParentFrameURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGFrame" ],
    "shortName" : "parentFrameURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasSlotSequence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGSlot" ],
    "shortName" : "slotSequence",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasStatementText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGStatement" ],
    "shortName" : "statementText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasTaxonomySlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGTaxonomySlot" ],
    "shortName" : "taxonomySlotValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasTextSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGTextSlot" ],
    "shortName" : "textSlotValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-kg#hasUriSlotValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-kg#KGURISlot" ],
    "shortName" : "uriSlotValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  } ]
};

VITAL_JSON_SCHEMAS.push(haley_ai_kg_0_1_0_schema);

if(typeof(module) !== 'undefined') {

  module.exports = haley_ai_kg_0_1_0_schema;

}