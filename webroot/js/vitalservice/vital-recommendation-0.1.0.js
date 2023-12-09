if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_recommendation_0_1_0_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-recommendation",
  "name" : "vital-recommendation-0.1.0",
  "version" : "0.1.0",
  "domainOWLHash" : "f2463fbc50a91295a1c8ef100a41a968",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/vital" ],
  "schemas" : [ {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-recommendation#isArchetype" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-recommendation#Dimension",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-recommendation#hasDimensionWeight" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-recommendation#hasMatchType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-recommendation#hasMatchTypeFunction" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-recommendation#DimensionScore",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-recommendation#hasDimensionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-recommendation#hasDimensionScore" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-recommendation#Edge_hasDimension",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-recommendation#Dimension" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-recommendation#Edge_hasDimensionScore",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-recommendation#Recommendation" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-recommendation#DimensionScore" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-recommendation#Edge_hasRecommendation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-recommendation#Recommendation" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-recommendation#Edge_hasRecommendationPart",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-recommendation#Recommendation" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-recommendation#RecommendationPart" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-recommendation#Edge_hasRecommendedItem",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-recommendation#Recommendation" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node", "http://vital.ai/ontology/vital-recommendation#RecommendedItem" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-recommendation#PropertyDimension",
    "parent" : "http://vital.ai/ontology/vital-recommendation#Dimension",
    "properties" : {
      "http://vital.ai/ontology/vital-recommendation#hasPropertyIRI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-recommendation#Recommendation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-recommendation#hasRecommendationScore" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-recommendation#RecommendationPart",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-recommendation#RecommendedItem",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-recommendation#hasDimensionIRI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-recommendation#DimensionScore" ],
    "shortName" : "dimensionIRI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-recommendation#hasDimensionScore",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-recommendation#DimensionScore" ],
    "shortName" : "dimensionScore",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-recommendation#hasDimensionWeight",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-recommendation#Dimension" ],
    "shortName" : "dimensionWeight",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-recommendation#hasMatchType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-recommendation#Dimension" ],
    "shortName" : "matchType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-recommendation#hasMatchTypeFunction",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-recommendation#Dimension" ],
    "shortName" : "matchTypeFunction",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-recommendation#hasPropertyIRI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-recommendation#PropertyDimension" ],
    "shortName" : "propertyIRI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-recommendation#hasRecommendationScore",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-recommendation#Recommendation" ],
    "shortName" : "recommendationScore",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-recommendation#isArchetype",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "archetype",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

VITAL_JSON_SCHEMAS.push(vital_recommendation_0_1_0_schema);

if(typeof(module) !== 'undefined') {

  module.exports = vital_recommendation_0_1_0_schema;

}