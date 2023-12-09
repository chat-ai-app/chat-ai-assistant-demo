if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var haley_ai_question_0_1_0_schema = {
  "domainURI" : "http://vital.ai/ontology/haley-ai-question",
  "name" : "haley-ai-question-0.1.0",
  "version" : "0.1.0",
  "domainOWLHash" : "ab703589bbef746bcc82bd597dd659ab",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/haley", "http://vital.ai/ontology/haley-taxonomy" ],
  "schemas" : [ {
    "extends" : "http://vital.ai/ontology/haley#Edge_hasProofJustificationReason",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasProofTreeMembershipURI" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/haley#Edge_hasProofTreeNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasProofTreeMembershipURI" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/haley#HaleyDomainMethod",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasDomainMethodGroupURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDomainMethodGroupURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/haley#HyperEdge_hasAccessGrant",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAccessGrantGroupInstanceMemberURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/haley#ProofJustificationReason",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasProofTreeMembershipURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasReasonConstraintAnswerInstanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasReasonConstraintValueSetURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasReasonConstraintValueTaxonomyURI" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/haley#ProofTree",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasProofTreeMembershipURI" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/haley#ProofTreeNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasProofTreeMembershipURI" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBase" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBaseVersion" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_Edge",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupGraphURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstanceGraphURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyGraphURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isDynamicObject" : {
        "type" : "boolean"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupGraphURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstanceGraphURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyGraphURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isDynamicObject" : {
        "type" : "boolean"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_HyperNode",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupGraphURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstanceGraphURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyGraphURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isDynamicObject" : {
        "type" : "boolean"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAnswerSubsetMembershipURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupGraphURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstanceGraphURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyGraphURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isDynamicObject" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasAlternateText",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption", "http://vital.ai/ontology/haley-ai-question#HaleyForm", "http://vital.ai/ontology/haley-ai-question#HaleyGroup", "http://vital.ai/ontology/haley-ai-question#HaleyQuestion", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArray", "http://vital.ai/ontology/haley-ai-question#HaleyRow", "http://vital.ai/ontology/haley-ai-question#HaleySection" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAlternateText" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasAnswer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArray", "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerConstraint",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerGroupDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerGroupDependency" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValidationResult", "http://vital.ai/ontology/haley-ai-question#HaleyFormInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance", "http://vital.ai/ontology/haley-ai-question#HaleyInteraction", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArrayInstance", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerInstanceDerivation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstanceDerivation" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerInstanceDerivationRuleInvocation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstanceDerivation" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindRuleInvocation" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerOption",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerOptionDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionDependency" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerOptionLongDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionLongDependency" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerOptionValueDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionDependency" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerPath",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#ProofTreeAskNode", "http://vital.ai/ontology/haley#ProofTreeDependencyNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasProofTreeMembershipURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerPathInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#ProofTreeAskNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerSet",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerSet" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasBelief",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasBeliefInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasDefaultAnswer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyDefaultAnswer" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasDynamicAnswerOptions",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyDynamicAnswerOptions" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasEnhancementRuleAnswerDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyEnhancementRuleDependency" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasEnhancementRuleDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow", "http://vital.ai/ontology/haley-ai-question#HaleySection" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyEnhancementRuleDependency" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasEnhancementRuleGroupDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyEnhancementRule" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroup" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasEquivalentAnswerType",
    "parent" : "http://vital.ai/ontology/vital-core#Edge_SameAs",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasForm",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteraction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyForm" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasFormFileNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyForm" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital#FileNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasFormFileResource",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyForm" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyFileResource" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasFormInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteraction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyFormInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasGenerativeMappedRowInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowGenerativeMapping" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasGenerativeMappingRowTypeDestination",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowGenerativeMapping" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasGenerativeMappingRowTypeSource",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowGenerativeMapping" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasGroup",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteraction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroup" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasGroupDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerGroupDependency" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroup" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasGroupInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#HaleyMindPlanActionInstance", "http://vital.ai/ontology/haley#HaleyReportInstance", "http://vital.ai/ontology/haley-ai-question#HaleyInteraction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasGroupMapping",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroup" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroup" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasGroupSuccessor",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroup" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroup" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasHaleyAggregation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuery" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAggregation" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasHaleyAnswerPath",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAggregation", "http://vital.ai/ontology/haley-ai-question#HaleyQuerySort" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasHaleyAnswerPathCriterion",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQueryCriteriaGroup", "http://vital.ai/ontology/haley-ai-question#HaleyQueryGroup" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasHaleyGroupInstanceSummary",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceSummary" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasHaleyInteractionFlowStepInstanceRequest",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstanceRequest" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasHaleyInteractionState",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteraction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionState" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#isCurrentHaleyInteractionState" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasHaleyQueryCriteriaGroup",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuery", "http://vital.ai/ontology/haley-ai-question#HaleyQueryGroup" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQueryCriteriaGroup" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasHaleyQueryGroup",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuery", "http://vital.ai/ontology/haley-ai-question#HaleyQueryGroup" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQueryGroup" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasHaleyQuerySort",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuery" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuerySort" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasHypernymAnswerType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasIncludeSectionDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyIncludeSectionDependency" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasInstanceProof",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance", "http://vital.ai/ontology/haley-ai-question#HaleySectionInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#ProofTree", "http://vital.ai/ontology/haley#ProofTreeNode" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasProofTreeMembershipURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasInteractionFlowInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteraction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasInteractionFlowStep",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlow", "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepAction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStep" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepRoleTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasInteractionFlowStepAction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStep" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepAction" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasInteractionFlowStepActionInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepActionInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasInteractionFlowStepInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowInstance", "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepActionInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasInteractionOutcome",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteraction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasLongAnswerDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerLongDependency" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasLongAnswerOptionValueDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionLongDependency" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasLongQuestionDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerLongDependency" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasMappedRowInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasQuestion",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyForm", "http://vital.ai/ontology/haley-ai-question#HaleyGroup", "http://vital.ai/ontology/haley-ai-question#HaleyInteraction", "http://vital.ai/ontology/haley-ai-question#HaleyRow", "http://vital.ai/ontology/haley-ai-question#HaleySection" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion", "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintScopeType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerValidationScopeType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPageNumber" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#isDynamicRequiredQuestion" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isHighlighted" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isRequiredQuestion" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isSuppressedQuestion" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasQuestionArray",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyForm", "http://vital.ai/ontology/haley-ai-question#HaleyGroup", "http://vital.ai/ontology/haley-ai-question#HaleyInteraction", "http://vital.ai/ontology/haley-ai-question#HaleyRow", "http://vital.ai/ontology/haley-ai-question#HaleySection" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArray" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasQuestionIndex" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasQuestionArrayInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyFormInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance", "http://vital.ai/ontology/haley-ai-question#HaleyInteraction", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance", "http://vital.ai/ontology/haley-ai-question#HaleySectionInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArrayInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasQuestionDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArray", "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasQuestionInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyFormInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance", "http://vital.ai/ontology/haley-ai-question#HaleyInteraction", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance", "http://vital.ai/ontology/haley-ai-question#HaleySectionInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasQuestionSuccessor",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasRow",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow", "http://vital.ai/ontology/haley-ai-question#HaleySection" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasMaximumRowCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasMinimumRowCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#isHighlighted" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isRequiredRow" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isSuppressedRow" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasRowInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValidationResult", "http://vital.ai/ontology/haley-ai-question#HaleyFormInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance", "http://vital.ai/ontology/haley-ai-question#HaleyInteraction", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance", "http://vital.ai/ontology/haley-ai-question#HaleySectionInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasRowEdge" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasRowInstanceDerivation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowInstanceDerivation" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasRowInstanceDerivationRuleInvocation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowInstanceDerivation" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley#HaleyMindRuleInvocation" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasRowRelationship",
    "parent" : "http://vital.ai/ontology/haley-ai-question#Edge_hasRow",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasRowRelationshipArity" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasRowRelationshipType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasRowSelectionOption",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasSection",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyForm", "http://vital.ai/ontology/haley-ai-question#HaleyGroup" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleySection" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasSectionIncludeDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyIncludeSectionDependency" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleySection" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasSectionInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyFormInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleySectionInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasTaxonomy",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyMultiTaxonomyAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyAnswer" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomy" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBase" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBaseVersion" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasTaxonomyNodeRoot",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomy" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasUpdateDependencyOnGroup",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroup" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroup" ],
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasUpdatePrecedence" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasValidationAnswerInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValidationResult" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasValidationGroupInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValidationResult" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasValidationPathInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley#ProofTreeAskNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasValidationRowInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValidationResult" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#Edge_hasValidationSectionInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValidationResult" ],
    "destinationDomains" : [ "http://vital.ai/ontology/haley-ai-question#HaleySectionInstance" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAggregation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAggregationName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAggregationType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAggregationResult",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAggregationDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAggregationIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAggregationName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAggregationType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAggregationType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAlternateText",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAlternateDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAlternateLongDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAlternateText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAlternateTextType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyLanguageType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isRichText" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAlternateTextType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAggregationRowURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAggregationType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAggregrationQuestionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerDataType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerUnitType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyMappedAnswerType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPreferredSelectorType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isAggregationAnswer" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isCalculatedAnswerValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isDynamicRequiredAnswer" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isReadOnlyAnswerValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isSubjectToConstraints" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isSubjectToValidation" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstant",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasBooleanAnswerValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#hasChoiceAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDateRangeDecrease" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDateRangeIncrease" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDateTimeAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDoubleAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDoubleRangeDecrease" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDoubleRangeIncrease" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasFileAnswerValueURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerComparison" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstantURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintComparatorURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintRelationshipURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerDataType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerTypeComparison" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerUnitType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyCurrencyType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasIntegerAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasIntegerRangeDecrease" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasIntegerRangeIncrease" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasLongTextAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasLowerBoundCurrencyValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasLowerBoundDateValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasLowerBoundDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasLowerBoundIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasMultiChoiceAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasMultiTaxonomyAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasObjectAnswerValueURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSignatureAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasTaxonomyAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasUpperBoundCurrencyValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasUpperBoundDateValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasUpperBoundDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasUpperBoundIntegerValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraintComparator",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraintRelationship",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraintResult",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAnswerConstraintResultMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSuggestedHaleyAnswerInstance" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraintScopeType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraintStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraintType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDataType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasBooleanAnswerValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#hasChoiceAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDateTimeAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDoubleAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasFileAnswerValueURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintComparatorURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasIntegerAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasLongTextAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasMultiChoiceAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasMultiTaxonomyAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasObjectAnswerValueURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasTaxonomyAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasTextAnswerValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerFollowupType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerGroupDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasBooleanAnswerValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#hasChoiceAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDateTimeAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDoubleAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasFileAnswerValueURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasLongTextAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasMultiChoiceAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasMultiTaxonomyAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasObjectAnswerValueURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasTaxonomyAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasTextAnswerValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceInteractionTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasEnhancementRuleSourceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasFallbackAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasFallbackAnswerValueEncoding" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswer" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstantURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerFollowupType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstanceDependencyStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstanceDerivationTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyBeliefModeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyMappedAnswerInstance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginAccount" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasProvenanceInstanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isActiveInstance" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isReadOnlyAnswerValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isSecondarySource" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isSuppressEmptyAnswerValues" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstanceDependencyStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstanceDerivation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstanceDerivationType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstanceInteractionType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerLongDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasBooleanAnswerValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#hasChoiceAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDateTimeAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDoubleAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasFileAnswerValueURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasIntegerAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasLongTextAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasMultiChoiceAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasMultiTaxonomyAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasObjectAnswerValueURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasTaxonomyAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasTextAnswerValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAnswerSetMemberURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasOptionImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasOptionLargeImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasOptionMediumImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasOptionName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasOptionOrder" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasOptionSmallImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasOptionURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasOptionValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isSuppressedAnswerOption" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasBooleanAnswerValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#hasChoiceAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDateTimeAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDoubleAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasFileAnswerValueURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasIntegerAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasLongTextAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasMultiChoiceAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasMultiTaxonomyAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasObjectAnswerValueURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasTaxonomyAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasTextAnswerValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionLongDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasBooleanAnswerValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#hasChoiceAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDateTimeAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDoubleAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasFileAnswerValueURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasIntegerAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasLongTextAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasMultiChoiceAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasMultiTaxonomyAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasObjectAnswerValueURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasTaxonomyAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasTextAnswerValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAnswerPathKeyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswer" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerPathModeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerPathRootURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerPathTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroup" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyPropertyURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyQuestion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyQuestionInstance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRootClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRow" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowInstance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowInstanceCounter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowRow" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowInstance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowInstanceCounter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleySection" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleySectionInstance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasProofTreeMembershipURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceProvenanceURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintComparatorURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroup" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyPropertyURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRootClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowInstanceCounter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowInstanceCounter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceBooleanValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceChoiceValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceDateTimeValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceLongTextValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceMultiChoiceValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceMultiTaxonomyValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceRootURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceTaxonomyValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceTextValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceUnknownValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceUriValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceProvenanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isHaleyQuerySubclassExpansion" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAnswerPathInstanceModifiedTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAnswerPathKeyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAnswerPathProofIteration" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroup" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyPropertyURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRootClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowInstanceCounter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowInstanceCounter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceBooleanValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceChoiceValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceDateTimeValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceLongTextValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceMultiChoiceValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceMultiTaxonomyValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceRootURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceTaxonomyValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceTextValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceUnknownValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceUriValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasProofTreeMembershipURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceProvenanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isAnswerPathInstanceModified" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isPathInstanceEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isPathInstanceEphemeralValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isPathInstanceNewEnabled" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathMode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerSelectorType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerSet",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAnswerSubset" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley#hasStatusMessage" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerSubset",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAnswerTypeExernalVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAnswerTypeExternalIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAnswerTypeExternalName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAnswerTypeIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAnswerTypeUseEndDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAnswerTypeUseStartDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAnswerTypeVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerDataType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerTypeCategory" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerUnitType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyCurrencyType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isActiveAnswerType" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isRootAnswerType" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeCategory",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeClassMapping",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAnswerTypePropertyValueConstraintString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAnswerTypePropertyValueConstraintURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyMappingFunctionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyMappingTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasMappedAnswerTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasMappedConstantStringValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasMappedConstantURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeCounterType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalBooleanValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalDateValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalLongValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalStringValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalURIValueURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDestinationMappedAnswerTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyMappingFunctionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyMappingTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasMappingComparableType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalBooleanValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalDateValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalLongValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalStringValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalURIValueURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperDateValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperLongValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperStringValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceMappedAnswerTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerUnitType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyUnitSystemURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValidationResult",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerValidationMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerValidationStatus" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValidationScopeType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValidationStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValueMapping",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasDestinationMappedAnswerTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyMappedObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyMappedRowTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyMappedRowURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceMappedAnswerTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyBeliefMode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyBooleanAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswer",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyBooleanAnswerInstance",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasBooleanAnswerValue" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyChannelDestination",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasChannelDestinationBotName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasChannelDestinationChannelName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasChannelTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyChannelType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyChoiceAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAnswerSetSourceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isAnswerSetOptions" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyChoiceAnswerInstance",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasChoiceAnswerValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyContainer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasContainerRootURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasContainerUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyContainerTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyQueryName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSerializedContainer" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSerializedContainerJSON" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isCompressed" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyContainerType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyCurrencyType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDateTimeAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#isAnchorAnswer" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDateTimeAnswerInstance",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasDateTimeAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#isAnchorAnswerInstance" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDayOfWeekType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasDayOfWeekOrder" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#isWeekendDay" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultAnswer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultBooleanAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasBooleanAnswerValue" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultChoiceAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasChoiceAnswerValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultDateTimeAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasDateTimeAnswerValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultFileUploadAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasFileAnswerValueURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultFrameAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultAnswer",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultLongTextAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasLongTextAnswerValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultMultiChoiceAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasChoiceAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasMultiChoiceAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultMultiTaxonomyAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasMultiTaxonomyAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultNumberAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasDoubleAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasIntegerAnswerValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultObjectAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasObjectAnswerValueURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultTaxonomyAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasTaxonomyAnswerValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultTextAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyDefaultAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasTextAnswerValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyDynamicAnswerOptions",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasDynamicAnswerOptionsAnswer" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDynamicAnswerOptionsGroup" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDynamicAnswerOptionsRow" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDynamicAnswerOptionsRowRow" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyEnhancementRule",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasEnhancementDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyEnhancementRuleDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasEnhancementRuleEnablement" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyFileUploadAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswer",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyFileUploadAnswerInstance",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceImageHeight" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceImageWidth" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasFileAnswerValueURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyForm",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyFormInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyForm" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyFrameAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyFrameAnswerTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyFrameAnswerInstance",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasFrameAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasFrameAnswerValueEncoding" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyFrameAnswerType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyGroup",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasDefaultPrecedence" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasGroupIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBase" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBaseVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupNatureTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyGroupContainer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasContainerGroupURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasContainerRootURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasContainerUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBase" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBaseVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBase" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBaseVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSerializedContainer" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSerializedContainerJSON" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isCompressed" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyGroupDisplayType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyGroupGenerativeMappingAction",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyGroupMappingAction",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroup" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBase" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBaseVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginAccount" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasProvenanceInstanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isAbleToRemoveGroup" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isActiveInstance" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isInconsistentGroupInstance" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isSelectedGroupInstance" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isSuppressEmptyAnswerValues" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceContainer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasContainerGroupInstanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasContainerRootURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasContainerUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBase" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBaseVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSerializedContainer" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSerializedContainerJSON" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isCompressed" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceSummary",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstanceStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasNumberOfAnsweredInvalidQuestions" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasNumberOfAnsweredPendingQuestions" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasNumberOfAnsweredQuestions" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasNumberOfAnsweredRequiredQuestions" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasNumberOfPendingQuestions" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasNumberOfQuestions" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasNumberOfRequiredQuestions" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyGroupInteractionType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyGroupMappingAction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupMappingActionType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyGroupMappingActionEvent",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyGroupMappingActionType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyGroupModel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasCurrentHaleyGroupModelVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasCurrentHaleyGroupModelVersionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBase" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelActivateDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelDeactivateDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#isActiveGroupModel" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyGroupModelVersion",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBase" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBaseVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelVersionActivateDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelVersionDeactivateDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#isActiveGroupModelVersion" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyGroupNatureType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyGroupType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyIncludeSectionDependency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasBooleanAnswerValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#hasChoiceAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasDoubleAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasFileAnswerValueURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasIntegerAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasLongTextAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasMultiChoiceAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasMultiTaxonomyAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasObjectAnswerValueURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasTaxonomyAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasTextAnswerValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyInteraction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isComplete" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlow",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStep",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepStateOptionURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepAction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#isActionWithCommitment" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepActionInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepActionURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepStateURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceGroupInstanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceRowInstanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceRowRowInstanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceSecondaryIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceTertiaryIndex" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstanceRequest",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepCommandRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepObjectRequestURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepRoleType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepState",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyInteractionState",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepInstanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyState" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyInteractionType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyLanguageType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyLongTextAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswer",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyLongTextAnswerInstance",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyLanguageType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasLongTextAnalyzedAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasLongTextAnswerValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyMappingComparableType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyMappingFunction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasInputHaleyAnswerType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInputHaleyAnswerUnitType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasMappingFunctionArityType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasOutputHaleyAnswerType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasOutputHaleyAnswerUnitType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyMappingFunctionArityType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyMappingType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyMonthOfYearType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasMonthOfYearOrder" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyMultiChoiceAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAnswerSetSourceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isAnswerSetOptions" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyMultiChoiceAnswerInstance",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasMultiChoiceAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyMultiTaxonomyAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswer",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyMultiTaxonomyAnswerInstance",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasMultiTaxonomyAnswerValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyNumberAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerSignificantDigits" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyCurrencyType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyNumberAnswerInstance",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasDoubleAnswerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerSignificantDigits" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyCurrencyType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasIntegerAnswerValue" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyObjectAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswer",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyObjectAnswerInstance",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasObjectAnswerValueURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQuery",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyQueryJSON" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyQueryName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isHaleyQueryAggregationOnlyRequest" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isHaleyQueryContainerRequest" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQueryANDGroup",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyQueryGroup",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQueryCriteriaANDGroup",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyQueryCriteriaGroup",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQueryCriteriaGroup",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQueryCriteriaORGroup",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyQueryCriteriaGroup",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQueryGroup",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyQueryCaptureGroupName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isHaleyQueryCaptureGroup" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isHaleyQueryGroupOptional" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQueryORGroup",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyQueryGroup",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQuerySort",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasQuerySortDirectionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuerySortOrder" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuerySortTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQuerySortDirection",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQuerySortType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQuestion",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupDisplayTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyLanguageType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyQuestionStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHorizontalColumnAssignment" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasLongDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionAbbreviatedText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionFriendlyText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionGroupIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionProfessionalText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isDependencyEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isHiddenInGroupDisplay" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isHiddenInPopform" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isHiddenQuestion" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isIncludeInSectionPopform" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isNotificationContent" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isRowNameQuestion" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArray",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyLanguageType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasLongDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionAbbreviatedText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionFriendlyText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionGroupIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionProfessionalText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionText" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArrayInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyQuestionArray" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQuestionCardinalityConstant",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQuestionFrame",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyQuestion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginAccount" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasProvenanceInstanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isActiveInstance" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isHiddenInGroupDisplay" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQuestionMessage",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyQuestionStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyRow",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupDisplayTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyLanguageType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasMappingObjectName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionAbbreviatedText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionFriendlyText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionGroupIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionProfessionalText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasQuestionText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasRowCounter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasRowHorizontalColumnNameList" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasRowHorizontalMaxColumns" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasRowID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasRowIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#isAssociatedWithMapping" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isCalculatedRowValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isHiddenInGroupDisplay" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isReadOnlyRowValue" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyRowGenerativeMapping",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyBeliefModeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRow" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowInstanceDerivationTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginAccount" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasProvenanceInstanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasReferenceObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasRowInstanceCounter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isAbleToBeDeleted" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isActiveInstance" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isHiddenInGroupDisplay" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isReadOnlyRowValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isSecondarySource" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isSelectedRowInstance" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isSuppressEmptyAnswerValues" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyRowInstanceDerivation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyRowInstanceDerivationType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyRowRelationshipType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasDescription" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyRowType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasRowTypeMappingName" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyRowTypeMapping",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleySection",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasSectionIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#isHiddenInGroupDisplay" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isIncludedWhenEmpty" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isSkipEmptyQuestions" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isSkipEmptyRows" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleySectionInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleySection" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginAccount" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasInstanceTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasProvenanceInstanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isActiveInstance" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#isHiddenInGroupDisplay" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleySet",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleySetMemberURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswer",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleySignatureAnswerStyleURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isAnchorAnswer" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswerInstance",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceImageHeight" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceImageWidth" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleySignatureAnswerStyleURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSignatureAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isAnchorAnswerInstance" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswerStyle",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomy",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBase" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBaseVersion" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswer",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyAnswerInstance",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasTaxonomyAnswerValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasCurrentHaleyTaxonomyModelVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasCurrentHaleyTaxonomyModelVersionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBase" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBaseVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelActivateDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelDeactivateDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#isActiveTaxonomyModel" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModelVersion",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBase" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBaseVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelVersionActivateDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelVersionDeactivateDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#isActiveTaxonomyModelVersion" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyQuestion",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyTextAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswer",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyTextAnswerInstance",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasHaleyLanguageType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasTextAnalyzedAnswerValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasTextAnswerValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyTextAnswerValueMapping",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValueMapping",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasTextAnswerValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyTimezoneType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasDaylightSavingsTimeUTCType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasStandardTimeUTCType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#isDaylightSavingsZone" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyTimezoneUTCType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasTimezoneUTCDelta" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyTruthConstant",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyURIAnswer",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswer",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyURIAnswerInstance",
    "parent" : "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasUriAnswerValue" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyUnitSystem",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathConstraintType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceChoiceValues" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceLowerDateTimeValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceLowerDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceLowerIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceMultiChoiceValues" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceTaxonomyURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceUpperDateTimeValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceUpperDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceUpperIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstances" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroup" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyPropertyURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRootClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowInstanceCounter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowInstanceCounter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasHaleyRowTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceBooleanValue" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceChoiceValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceDateTimeValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceIntegerValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceLongTextValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceMultiChoiceValue" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceRootURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceTaxonomyValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceTextValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceUnknownValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasPathInstanceUriValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasProofTreeMembershipURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasSourceProvenanceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasValidationPathConstraintType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasValidationPathInstanceMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasValidationPathScopeType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-question#hasValidationPathType" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathScopeType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#HaleyValidationService",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/haley-ai-question#KGPropertyMap",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject",
    "properties" : {
    }
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAccessGrantGroupInstanceMemberURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HyperEdge_hasAccessGrant" ],
    "shortName" : "accessGrantGroupInstanceMemberURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAggregationDoubleValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAggregationResult" ],
    "shortName" : "aggregationDoubleValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAggregationIntegerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAggregationResult" ],
    "shortName" : "aggregationIntegerValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAggregationName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAggregation", "http://vital.ai/ontology/haley-ai-question#HaleyAggregationResult" ],
    "shortName" : "aggregationName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAggregationRowURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "shortName" : "aggregationRowURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAggregationType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAggregation", "http://vital.ai/ontology/haley-ai-question#HaleyAggregationResult", "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "shortName" : "aggregationType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAggregrationQuestionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "shortName" : "aggregrationQuestionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAlternateDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAlternateText" ],
    "shortName" : "alternateDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAlternateLongDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAlternateText" ],
    "shortName" : "alternateLongDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAlternateText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAlternateText" ],
    "shortName" : "alternateText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerConstraintResultMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraintResult" ],
    "shortName" : "answerConstraintResultMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceImageHeight",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyFileUploadAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswerInstance" ],
    "shortName" : "answerInstanceImageHeight",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyFileUploadAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswerInstance" ],
    "shortName" : "answerInstanceImageURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceImageWidth",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyFileUploadAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswerInstance" ],
    "shortName" : "answerInstanceImageWidth",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceInteractionTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance" ],
    "shortName" : "answerInstanceInteractionTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerPathInstanceModifiedTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance" ],
    "shortName" : "answerPathInstanceModifiedTimestamp",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerPathKeyName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance" ],
    "shortName" : "answerPathKeyName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerPathProofIteration",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance" ],
    "shortName" : "answerPathProofIteration",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerSetMemberURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption" ],
    "shortName" : "answerSetMemberURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerSetSourceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyChoiceAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyMultiChoiceAnswer" ],
    "shortName" : "answerSetSourceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerSubset",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerSet" ],
    "shortName" : "answerSubset",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerSubsetMembershipURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "answerSubsetMembershipURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerTypeExernalVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "shortName" : "answerTypeExernalVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerTypeExternalIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "shortName" : "answerTypeExternalIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerTypeExternalName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "shortName" : "answerTypeExternalName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerTypeIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "shortName" : "answerTypeIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerTypePropertyValueConstraintString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeClassMapping" ],
    "shortName" : "answerTypePropertyValueConstraintString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerTypePropertyValueConstraintURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeClassMapping" ],
    "shortName" : "answerTypePropertyValueConstraintURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerTypeUseEndDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "shortName" : "answerTypeUseEndDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerTypeUseStartDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "shortName" : "answerTypeUseStartDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerTypeVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "shortName" : "answerTypeVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance" ],
    "shortName" : "answerValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceChoiceValues",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "availablePathInstanceChoiceValues",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceLowerDateTimeValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "availablePathInstanceLowerDateTimeValue",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceLowerDoubleValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "availablePathInstanceLowerDoubleValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceLowerIntegerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "availablePathInstanceLowerIntegerValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceMultiChoiceValues",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "availablePathInstanceMultiChoiceValues",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceTaxonomyURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "availablePathInstanceTaxonomyURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceUpperDateTimeValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "availablePathInstanceUpperDateTimeValue",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceUpperDoubleValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "availablePathInstanceUpperDoubleValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceUpperIntegerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "availablePathInstanceUpperIntegerValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasBooleanAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerGroupDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyBooleanAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyDefaultBooleanAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyIncludeSectionDependency" ],
    "shortName" : "booleanAnswerValue",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasChannelDestinationBotName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyChannelDestination" ],
    "shortName" : "channelDestinationBotName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasChannelDestinationChannelName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyChannelDestination" ],
    "shortName" : "channelDestinationChannelName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasChannelTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyChannelDestination" ],
    "shortName" : "channelTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasChoiceAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerGroupDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyChoiceAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyDefaultChoiceAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyDefaultMultiChoiceAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyIncludeSectionDependency" ],
    "shortName" : "choiceAnswerValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasContainerGroupInstanceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceContainer" ],
    "shortName" : "containerGroupInstanceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasContainerGroupURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupContainer" ],
    "shortName" : "containerGroupURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasContainerRootURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyContainer", "http://vital.ai/ontology/haley-ai-question#HaleyGroupContainer", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceContainer" ],
    "shortName" : "containerRootURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasContainerUpdateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyContainer", "http://vital.ai/ontology/haley-ai-question#HaleyGroupContainer", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceContainer" ],
    "shortName" : "containerUpdateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasCurrentHaleyGroupModelVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupModel" ],
    "shortName" : "currentHaleyGroupModelVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasCurrentHaleyGroupModelVersionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupModel" ],
    "shortName" : "currentHaleyGroupModelVersionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasCurrentHaleyTaxonomyModelVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModel" ],
    "shortName" : "currentHaleyTaxonomyModelVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasCurrentHaleyTaxonomyModelVersionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModel" ],
    "shortName" : "currentHaleyTaxonomyModelVersionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDateRangeDecrease",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "dateRangeDecrease",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDateRangeIncrease",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "dateRangeIncrease",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDateTimeAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerGroupDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyDateTimeAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyDefaultDateTimeAnswer" ],
    "shortName" : "dateTimeAnswerValue",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDayOfWeekOrder",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyDayOfWeekType" ],
    "shortName" : "dayOfWeekOrder",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDaylightSavingsTimeUTCType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyTimezoneType" ],
    "shortName" : "daylightSavingsTimeUTCType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDefaultPrecedence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroup" ],
    "shortName" : "defaultPrecedence",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType", "http://vital.ai/ontology/haley-ai-question#HaleyQuestion", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArray", "http://vital.ai/ontology/haley-ai-question#HaleyRowRelationshipType", "http://vital.ai/ontology/haley-ai-question#HaleyRowType" ],
    "shortName" : "description",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalBooleanValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "destinationConditionalBooleanValue",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalDateValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "destinationConditionalDateValue",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalDoubleValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "destinationConditionalDoubleValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalIntegerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "destinationConditionalIntegerValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalLongValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "destinationConditionalLongValue",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalStringValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "destinationConditionalStringValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalURIValueURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "destinationConditionalURIValueURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDestinationMappedAnswerTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValueMapping" ],
    "shortName" : "destinationMappedAnswerTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDomainMethodGroupURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyDomainMethod" ],
    "shortName" : "domainMethodGroupURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDomainMethodGroupURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#HaleyDomainMethod" ],
    "shortName" : "domainMethodGroupURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDoubleAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerGroupDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyDefaultNumberAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyIncludeSectionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyNumberAnswerInstance" ],
    "shortName" : "doubleAnswerValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDoubleRangeDecrease",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "doubleRangeDecrease",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDoubleRangeIncrease",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "doubleRangeIncrease",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDynamicAnswerOptionsAnswer",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyDynamicAnswerOptions" ],
    "shortName" : "dynamicAnswerOptionsAnswer",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDynamicAnswerOptionsGroup",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyDynamicAnswerOptions" ],
    "shortName" : "dynamicAnswerOptionsGroup",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDynamicAnswerOptionsRow",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyDynamicAnswerOptions" ],
    "shortName" : "dynamicAnswerOptionsRow",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasDynamicAnswerOptionsRowRow",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyDynamicAnswerOptions" ],
    "shortName" : "dynamicAnswerOptionsRowRow",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasEnhancementDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyEnhancementRule" ],
    "shortName" : "enhancementDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasEnhancementRuleEnablement",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyEnhancementRuleDependency" ],
    "shortName" : "enhancementRuleEnablement",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasEnhancementRuleSourceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance" ],
    "shortName" : "enhancementRuleSourceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasFallbackAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance" ],
    "shortName" : "fallbackAnswerValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasFallbackAnswerValueEncoding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance" ],
    "shortName" : "fallbackAnswerValueEncoding",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasFileAnswerValueURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerGroupDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyDefaultFileUploadAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyFileUploadAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyIncludeSectionDependency" ],
    "shortName" : "fileAnswerValueURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasFrameAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyFrameAnswerInstance" ],
    "shortName" : "frameAnswerValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasFrameAnswerValueEncoding",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyFrameAnswerInstance" ],
    "shortName" : "frameAnswerValueEncoding",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasGroupIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroup" ],
    "shortName" : "groupIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAlternateTextType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAlternateText" ],
    "shortName" : "haleyAlternateTextType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswer",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath" ],
    "shortName" : "haleyAnswer",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerComparison",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "haleyAnswerComparison",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstantURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance" ],
    "shortName" : "haleyAnswerConstantURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintComparatorURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion" ],
    "shortName" : "haleyAnswerConstraintComparatorURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintRelationshipURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "haleyAnswerConstraintRelationshipURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintScopeType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasQuestion" ],
    "shortName" : "haleyAnswerConstraintScopeType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraintResult" ],
    "shortName" : "haleyAnswerConstraintStatus",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "haleyAnswerConstraintType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerDataType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "shortName" : "haleyAnswerDataType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerFollowupType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance" ],
    "shortName" : "haleyAnswerFollowupType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraintResult", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "haleyAnswerInstance",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstanceDependencyStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance" ],
    "shortName" : "haleyAnswerInstanceDependencyStatus",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstanceDerivationTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance" ],
    "shortName" : "haleyAnswerInstanceDerivationTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstances",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "haleyAnswerInstances",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerPathModeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath" ],
    "shortName" : "haleyAnswerPathModeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerPathRootURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath" ],
    "shortName" : "haleyAnswerPathRootURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerPathTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath" ],
    "shortName" : "haleyAnswerPathTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerSignificantDigits",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyNumberAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyNumberAnswerInstance" ],
    "shortName" : "haleyAnswerSignificantDigits",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "haleyAnswerType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerTypeCategory",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "shortName" : "haleyAnswerTypeCategory",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerTypeComparison",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "haleyAnswerTypeComparison",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerUnitType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "shortName" : "haleyAnswerUnitType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerValidationMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValidationResult" ],
    "shortName" : "haleyAnswerValidationMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerValidationScopeType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasQuestion" ],
    "shortName" : "haleyAnswerValidationScopeType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerValidationStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValidationResult" ],
    "shortName" : "haleyAnswerValidationStatus",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyBeliefModeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "shortName" : "haleyBeliefModeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "haleyClassURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyContainerTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyContainer" ],
    "shortName" : "haleyContainerTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyCurrencyType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType", "http://vital.ai/ontology/haley-ai-question#HaleyNumberAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyNumberAnswerInstance" ],
    "shortName" : "haleyCurrencyType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyForm",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyFormInstance" ],
    "shortName" : "haleyForm",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyFrameAnswerTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyFrameAnswer" ],
    "shortName" : "haleyFrameAnswerTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyGroup",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "haleyGroup",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBase",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroup", "http://vital.ai/ontology/haley-ai-question#HaleyGroupContainer", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceContainer", "http://vital.ai/ontology/haley-ai-question#HaleyGroupModel", "http://vital.ai/ontology/haley-ai-question#HaleyGroupModelVersion" ],
    "shortName" : "haleyGroupBase",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBaseVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroup", "http://vital.ai/ontology/haley-ai-question#HaleyGroupContainer", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceContainer", "http://vital.ai/ontology/haley-ai-question#HaleyGroupModelVersion" ],
    "shortName" : "haleyGroupBaseVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupDisplayTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion", "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "shortName" : "haleyGroupDisplayTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupGraphURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "haleyGroupGraphURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "haleyGroupInstance",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstanceGraphURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "haleyGroupInstanceGraphURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstanceStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceSummary" ],
    "shortName" : "haleyGroupInstanceStatus",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupMappingActionType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupMappingAction" ],
    "shortName" : "haleyGroupMappingActionType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelActivateDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupModel" ],
    "shortName" : "haleyGroupModelActivateDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelDeactivateDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupModel" ],
    "shortName" : "haleyGroupModelDeactivateDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupModelVersion" ],
    "shortName" : "haleyGroupModelURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelVersionActivateDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupModelVersion" ],
    "shortName" : "haleyGroupModelVersionActivateDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelVersionDeactivateDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupModelVersion" ],
    "shortName" : "haleyGroupModelVersionDeactivateDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupNatureTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroup" ],
    "shortName" : "haleyGroupNatureTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyGroupTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroup" ],
    "shortName" : "haleyGroupTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepActionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepActionInstance" ],
    "shortName" : "haleyInteractionFlowStepActionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepInstanceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionState" ],
    "shortName" : "haleyInteractionFlowStepInstanceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepRoleTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasInteractionFlowStep" ],
    "shortName" : "haleyInteractionFlowStepRoleTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepStateOptionURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStep" ],
    "shortName" : "haleyInteractionFlowStepStateOptionURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepStateURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstance" ],
    "shortName" : "haleyInteractionFlowStepStateURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstance" ],
    "shortName" : "haleyInteractionFlowStepURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowInstance", "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStep" ],
    "shortName" : "haleyInteractionFlowURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteraction" ],
    "shortName" : "haleyInteractionTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyLanguageType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAlternateText", "http://vital.ai/ontology/haley-ai-question#HaleyLongTextAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyQuestion", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArray", "http://vital.ai/ontology/haley-ai-question#HaleyRow", "http://vital.ai/ontology/haley-ai-question#HaleyTextAnswerInstance" ],
    "shortName" : "haleyLanguageType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyMappedAnswerInstance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance" ],
    "shortName" : "haleyMappedAnswerInstance",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyMappedAnswerType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "shortName" : "haleyMappedAnswerType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyMappedObjectURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValueMapping" ],
    "shortName" : "haleyMappedObjectURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyMappedRowTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValueMapping" ],
    "shortName" : "haleyMappedRowTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyMappedRowURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValueMapping" ],
    "shortName" : "haleyMappedRowURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyMappingFunctionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeClassMapping", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "haleyMappingFunctionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyMappingTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeClassMapping", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "haleyMappingTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyObjectURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "haleyObjectURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyPropertyURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "haleyPropertyURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyQueryCaptureGroupName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQueryGroup" ],
    "shortName" : "haleyQueryCaptureGroupName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyQueryJSON",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuery" ],
    "shortName" : "haleyQueryJSON",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyQueryName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyContainer", "http://vital.ai/ontology/haley-ai-question#HaleyQuery" ],
    "shortName" : "haleyQueryName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyQuestion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance" ],
    "shortName" : "haleyQuestion",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyQuestionArray",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArrayInstance" ],
    "shortName" : "haleyQuestionArray",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyQuestionInstance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath" ],
    "shortName" : "haleyQuestionInstance",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyQuestionStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion" ],
    "shortName" : "haleyQuestionStatus",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyRootClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "haleyRootClassURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyRow",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "shortName" : "haleyRow",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyRowGenerativeMapping",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasGenerativeMappedRowInstance" ],
    "shortName" : "haleyRowGenerativeMapping",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyRowInstance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath" ],
    "shortName" : "haleyRowInstance",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyRowInstanceCounter",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "haleyRowInstanceCounter",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyRowInstanceDerivationTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "shortName" : "haleyRowInstanceDerivationTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyRowRow",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath" ],
    "shortName" : "haleyRowRow",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowInstance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath" ],
    "shortName" : "haleyRowRowInstance",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowInstanceCounter",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "haleyRowRowInstanceCounter",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "haleyRowRowTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyRowTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyRow", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "haleyRowTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleySection",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleySectionInstance" ],
    "shortName" : "haleySection",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleySectionInstance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath" ],
    "shortName" : "haleySectionInstance",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleySetMemberURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleySet" ],
    "shortName" : "haleySetMemberURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleySignatureAnswerStyleURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswer", "http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswerInstance" ],
    "shortName" : "haleySignatureAnswerStyleURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyState",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionState" ],
    "shortName" : "haleyState",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBase",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasTaxonomy", "http://vital.ai/ontology/haley-ai-question#HaleyGroupContainer", "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomy", "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModel", "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModelVersion", "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "shortName" : "haleyTaxonomyBase",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBaseVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasTaxonomy", "http://vital.ai/ontology/haley-ai-question#HaleyGroupContainer", "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomy", "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModel", "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModelVersion", "http://vital.ai/ontology/haley-taxonomy#TaxonomyNode" ],
    "shortName" : "haleyTaxonomyBaseVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyGraphURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "haleyTaxonomyGraphURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelActivateDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModel" ],
    "shortName" : "haleyTaxonomyModelActivateDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelDeactivateDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModel" ],
    "shortName" : "haleyTaxonomyModelDeactivateDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModelVersion" ],
    "shortName" : "haleyTaxonomyModelURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelVersionActivateDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModelVersion" ],
    "shortName" : "haleyTaxonomyModelVersionActivateDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelVersionDeactivateDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModelVersion" ],
    "shortName" : "haleyTaxonomyModelVersionDeactivateDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHaleyUnitSystemURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerUnitType" ],
    "shortName" : "haleyUnitSystemURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasHorizontalColumnAssignment",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion" ],
    "shortName" : "horizontalColumnAssignment",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasInputHaleyAnswerType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyMappingFunction" ],
    "shortName" : "inputHaleyAnswerType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasInputHaleyAnswerUnitType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyMappingFunction" ],
    "shortName" : "inputHaleyAnswerUnitType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginAccount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance", "http://vital.ai/ontology/haley-ai-question#HaleySectionInstance" ],
    "shortName" : "instanceOriginAccount",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginLoginURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance", "http://vital.ai/ontology/haley-ai-question#HaleySectionInstance" ],
    "shortName" : "instanceOriginLoginURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginSessionID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance", "http://vital.ai/ontology/haley-ai-question#HaleySectionInstance" ],
    "shortName" : "instanceOriginSessionID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasInstanceOriginTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance", "http://vital.ai/ontology/haley-ai-question#HaleySectionInstance" ],
    "shortName" : "instanceOriginTimestamp",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasInstanceTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance", "http://vital.ai/ontology/haley-ai-question#HaleySectionInstance" ],
    "shortName" : "instanceTimestamp",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasIntegerAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyDefaultNumberAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyIncludeSectionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyNumberAnswerInstance" ],
    "shortName" : "integerAnswerValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasIntegerRangeDecrease",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "integerRangeDecrease",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasIntegerRangeIncrease",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "integerRangeIncrease",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepCommandRequestURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstanceRequest" ],
    "shortName" : "interactionFlowStepCommandRequestURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceGroupInstanceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstance" ],
    "shortName" : "interactionFlowStepInstanceGroupInstanceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstance" ],
    "shortName" : "interactionFlowStepInstanceIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceRowInstanceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstance" ],
    "shortName" : "interactionFlowStepInstanceRowInstanceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceRowRowInstanceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstance" ],
    "shortName" : "interactionFlowStepInstanceRowRowInstanceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceSecondaryIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstance" ],
    "shortName" : "interactionFlowStepInstanceSecondaryIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceTertiaryIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstance" ],
    "shortName" : "interactionFlowStepInstanceTertiaryIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepObjectRequestURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstanceRequest" ],
    "shortName" : "interactionFlowStepObjectRequestURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasLongDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArray" ],
    "shortName" : "longDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasLongTextAnalyzedAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyLongTextAnswerInstance" ],
    "shortName" : "longTextAnalyzedAnswerValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasLongTextAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerGroupDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyDefaultLongTextAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyIncludeSectionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyLongTextAnswerInstance" ],
    "shortName" : "longTextAnswerValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasLowerBoundCurrencyValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "lowerBoundCurrencyValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasLowerBoundDateValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "lowerBoundDateValue",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasLowerBoundDoubleValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "lowerBoundDoubleValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasLowerBoundIntegerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "lowerBoundIntegerValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasMappedAnswerTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeClassMapping" ],
    "shortName" : "mappedAnswerTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasMappedConstantStringValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeClassMapping" ],
    "shortName" : "mappedConstantStringValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasMappedConstantURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeClassMapping" ],
    "shortName" : "mappedConstantURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasMappingComparableType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "mappingComparableType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasMappingFunctionArityType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyMappingFunction" ],
    "shortName" : "mappingFunctionArityType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasMappingObjectName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "shortName" : "mappingObjectName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasMaximumRowCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasRow" ],
    "shortName" : "maximumRowCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasMinimumRowCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasRow" ],
    "shortName" : "minimumRowCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasMonthOfYearOrder",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyMonthOfYearType" ],
    "shortName" : "monthOfYearOrder",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasMultiChoiceAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerGroupDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyDefaultMultiChoiceAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyIncludeSectionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyMultiChoiceAnswerInstance" ],
    "shortName" : "multiChoiceAnswerValue",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasMultiTaxonomyAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerGroupDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyDefaultMultiTaxonomyAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyIncludeSectionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyMultiTaxonomyAnswerInstance" ],
    "shortName" : "multiTaxonomyAnswerValue",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasNumberOfAnsweredInvalidQuestions",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceSummary" ],
    "shortName" : "numberOfAnsweredInvalidQuestions",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasNumberOfAnsweredPendingQuestions",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceSummary" ],
    "shortName" : "numberOfAnsweredPendingQuestions",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasNumberOfAnsweredQuestions",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceSummary" ],
    "shortName" : "numberOfAnsweredQuestions",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasNumberOfAnsweredRequiredQuestions",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceSummary" ],
    "shortName" : "numberOfAnsweredRequiredQuestions",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasNumberOfPendingQuestions",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceSummary" ],
    "shortName" : "numberOfPendingQuestions",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasNumberOfQuestions",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceSummary" ],
    "shortName" : "numberOfQuestions",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasNumberOfRequiredQuestions",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceSummary" ],
    "shortName" : "numberOfRequiredQuestions",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasObjectAnswerValueURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerGroupDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyDefaultObjectAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyIncludeSectionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyObjectAnswerInstance" ],
    "shortName" : "objectAnswerValueURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasOptionImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption" ],
    "shortName" : "optionImageURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasOptionLargeImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption" ],
    "shortName" : "optionLargeImageURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasOptionMediumImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption" ],
    "shortName" : "optionMediumImageURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasOptionName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption" ],
    "shortName" : "optionName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasOptionOrder",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption" ],
    "shortName" : "optionOrder",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasOptionSmallImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption" ],
    "shortName" : "optionSmallImageURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasOptionURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption" ],
    "shortName" : "optionURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasOptionValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption" ],
    "shortName" : "optionValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasOutputHaleyAnswerType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyMappingFunction" ],
    "shortName" : "outputHaleyAnswerType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasOutputHaleyAnswerUnitType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyMappingFunction" ],
    "shortName" : "outputHaleyAnswerUnitType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasPageNumber",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasQuestion" ],
    "shortName" : "pageNumber",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasPathInstanceBooleanValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "pathInstanceBooleanValue",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasPathInstanceChoiceValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "pathInstanceChoiceValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasPathInstanceDateTimeValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "pathInstanceDateTimeValue",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasPathInstanceDoubleValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "pathInstanceDoubleValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasPathInstanceIntegerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "pathInstanceIntegerValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasPathInstanceLongTextValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "pathInstanceLongTextValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasPathInstanceMultiChoiceValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "pathInstanceMultiChoiceValue",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasPathInstanceMultiTaxonomyValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance" ],
    "shortName" : "pathInstanceMultiTaxonomyValue",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasPathInstanceRootURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "pathInstanceRootURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasPathInstanceTaxonomyValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "pathInstanceTaxonomyValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasPathInstanceTextValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "pathInstanceTextValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasPathInstanceUnknownValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "pathInstanceUnknownValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasPathInstanceUriValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "pathInstanceUriValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasPreferredSelectorType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "shortName" : "preferredSelectorType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasProofTreeMembershipURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#Edge_hasProofJustificationReason", "http://vital.ai/ontology/haley#Edge_hasProofTreeNode", "http://vital.ai/ontology/haley#ProofJustificationReason", "http://vital.ai/ontology/haley#ProofTree", "http://vital.ai/ontology/haley#ProofTreeNode", "http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerPath", "http://vital.ai/ontology/haley-ai-question#Edge_hasInstanceProof", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "proofTreeMembershipURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasProvenanceInstanceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance", "http://vital.ai/ontology/haley-ai-question#HaleySectionInstance" ],
    "shortName" : "provenanceInstanceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasQuerySortDirectionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuerySort" ],
    "shortName" : "querySortDirectionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasQuerySortOrder",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuerySort" ],
    "shortName" : "querySortOrder",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasQuerySortTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuerySort" ],
    "shortName" : "querySortTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasQuestionAbbreviatedText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArray", "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "shortName" : "questionAbbreviatedText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasQuestionFriendlyText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArray", "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "shortName" : "questionFriendlyText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasQuestionGroupIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArray", "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "shortName" : "questionGroupIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasQuestionIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArray" ],
    "shortName" : "questionIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasQuestionIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasQuestion", "http://vital.ai/ontology/haley-ai-question#Edge_hasQuestionArray", "http://vital.ai/ontology/haley-ai-question#Edge_hasRow" ],
    "shortName" : "questionIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasQuestionProfessionalText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArray", "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "shortName" : "questionProfessionalText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasQuestionText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionArray", "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "shortName" : "questionText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasRank",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasQuestion" ],
    "shortName" : "rank",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasReasonConstraintAnswerInstanceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonConstraintAnswerInstanceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasReasonConstraintValueSetURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonConstraintValueSetURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasReasonConstraintValueTaxonomyURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley#ProofJustificationReason" ],
    "shortName" : "reasonConstraintValueTaxonomyURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasReferenceObjectURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "shortName" : "referenceObjectURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasRowCounter",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "shortName" : "rowCounter",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasRowEdge",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasRowInstance" ],
    "shortName" : "rowEdge",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasRowHorizontalColumnNameList",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "shortName" : "rowHorizontalColumnNameList",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasRowHorizontalMaxColumns",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "shortName" : "rowHorizontalMaxColumns",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasRowID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "shortName" : "rowID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasRowIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "shortName" : "rowIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasRowInstanceCounter",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "shortName" : "rowInstanceCounter",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasRowRelationshipArity",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasRowRelationship" ],
    "shortName" : "rowRelationshipArity",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasRowRelationshipType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasRowRelationship" ],
    "shortName" : "rowRelationshipType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasRowTypeMappingName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowType" ],
    "shortName" : "rowTypeMappingName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSectionIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleySection" ],
    "shortName" : "sectionIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSerializedContainer",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyContainer", "http://vital.ai/ontology/haley-ai-question#HaleyGroupContainer", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceContainer" ],
    "shortName" : "serializedContainer",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSerializedContainerJSON",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyContainer", "http://vital.ai/ontology/haley-ai-question#HaleyGroupContainer", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceContainer" ],
    "shortName" : "serializedContainerJSON",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSignatureAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswerInstance" ],
    "shortName" : "signatureAnswerValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalBooleanValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "sourceConditionalBooleanValue",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalDateValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "sourceConditionalDateValue",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalDoubleValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "sourceConditionalDoubleValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalIntegerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "sourceConditionalIntegerValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalLongValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "sourceConditionalLongValue",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalStringValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "sourceConditionalStringValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalURIValueURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "sourceConditionalURIValueURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperDateValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "sourceConditionalUpperDateValue",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperDoubleValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "sourceConditionalUpperDoubleValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperIntegerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "sourceConditionalUpperIntegerValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperLongValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "sourceConditionalUpperLongValue",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperStringValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping" ],
    "shortName" : "sourceConditionalUpperStringValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSourceMappedAnswerTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerValueMapping" ],
    "shortName" : "sourceMappedAnswerTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSourceProvenanceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPath", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance", "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "sourceProvenanceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasStandardTimeUTCType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyTimezoneType" ],
    "shortName" : "standardTimeUTCType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasSuggestedHaleyAnswerInstance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraintResult" ],
    "shortName" : "suggestedHaleyAnswerInstance",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasTaxonomyAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerGroupDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyDefaultTaxonomyAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyIncludeSectionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyAnswerInstance" ],
    "shortName" : "taxonomyAnswerValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasTextAnalyzedAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyTextAnswerInstance" ],
    "shortName" : "textAnalyzedAnswerValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasTextAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerGroupDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOptionLongDependency", "http://vital.ai/ontology/haley-ai-question#HaleyDefaultTextAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyIncludeSectionDependency", "http://vital.ai/ontology/haley-ai-question#HaleyTextAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyTextAnswerValueMapping" ],
    "shortName" : "textAnswerValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasTimezoneUTCDelta",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyTimezoneUTCType" ],
    "shortName" : "timezoneUTCDelta",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasUpdatePrecedence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasUpdateDependencyOnGroup" ],
    "shortName" : "updatePrecedence",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasUpperBoundCurrencyValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "upperBoundCurrencyValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasUpperBoundDateValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "upperBoundDateValue",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasUpperBoundDoubleValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "upperBoundDoubleValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasUpperBoundIntegerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint" ],
    "shortName" : "upperBoundIntegerValue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasUriAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyURIAnswerInstance" ],
    "shortName" : "uriAnswerValue",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasValidationPathConstraintType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "validationPathConstraintType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasValidationPathInstanceMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "validationPathInstanceMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasValidationPathScopeType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "validationPathScopeType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#hasValidationPathType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance" ],
    "shortName" : "validationPathType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isAbleToBeDeleted",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "shortName" : "ableToBeDeleted",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isAbleToRemoveGroup",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance" ],
    "shortName" : "ableToRemoveGroup",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isActionWithCommitment",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepAction" ],
    "shortName" : "actionWithCommitment",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isActiveAnswerType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "shortName" : "activeAnswerType",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isActiveGroupModel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupModel" ],
    "shortName" : "activeGroupModel",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isActiveGroupModelVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupModelVersion" ],
    "shortName" : "activeGroupModelVersion",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isActiveInstance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance", "http://vital.ai/ontology/haley-ai-question#HaleySectionInstance" ],
    "shortName" : "activeInstance",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isActiveTaxonomyModel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModel" ],
    "shortName" : "activeTaxonomyModel",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isActiveTaxonomyModelVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModelVersion" ],
    "shortName" : "activeTaxonomyModelVersion",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isAggregationAnswer",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "shortName" : "aggregationAnswer",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isAnchorAnswer",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyDateTimeAnswer", "http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswer" ],
    "shortName" : "anchorAnswer",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isAnchorAnswerInstance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyDateTimeAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswerInstance" ],
    "shortName" : "anchorAnswerInstance",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isAnswerPathInstanceModified",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance" ],
    "shortName" : "answerPathInstanceModified",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isAnswerSetOptions",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyChoiceAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyMultiChoiceAnswer" ],
    "shortName" : "answerSetOptions",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isAssociatedWithMapping",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "shortName" : "associatedWithMapping",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isCalculatedAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "shortName" : "calculatedAnswerValue",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isCalculatedRowValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow" ],
    "shortName" : "calculatedRowValue",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isComplete",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyInteraction" ],
    "shortName" : "complete",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isCurrentHaleyInteractionState",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasHaleyInteractionState" ],
    "shortName" : "currentHaleyInteractionState",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isDaylightSavingsZone",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyTimezoneType" ],
    "shortName" : "daylightSavingsZone",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isDependencyEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion" ],
    "shortName" : "dependencyEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isDynamicObject",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "dynamicObject",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isDynamicRequiredAnswer",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "shortName" : "dynamicRequiredAnswer",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isDynamicRequiredQuestion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasQuestion" ],
    "shortName" : "dynamicRequiredQuestion",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isHaleyQueryAggregationOnlyRequest",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuery" ],
    "shortName" : "haleyQueryAggregationOnlyRequest",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isHaleyQueryCaptureGroup",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQueryGroup" ],
    "shortName" : "haleyQueryCaptureGroup",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isHaleyQueryContainerRequest",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuery" ],
    "shortName" : "haleyQueryContainerRequest",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isHaleyQueryGroupOptional",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQueryGroup" ],
    "shortName" : "haleyQueryGroupOptional",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isHaleyQuerySubclassExpansion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion" ],
    "shortName" : "haleyQuerySubclassExpansion",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isHiddenInGroupDisplay",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion", "http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance", "http://vital.ai/ontology/haley-ai-question#HaleyRow", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance", "http://vital.ai/ontology/haley-ai-question#HaleySection", "http://vital.ai/ontology/haley-ai-question#HaleySectionInstance" ],
    "shortName" : "hiddenInGroupDisplay",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isHiddenInPopform",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion" ],
    "shortName" : "hiddenInPopform",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isHiddenQuestion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion" ],
    "shortName" : "hiddenQuestion",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isHighlighted",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasQuestion", "http://vital.ai/ontology/haley-ai-question#Edge_hasRow" ],
    "shortName" : "highlighted",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isIncludeInSectionPopform",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion" ],
    "shortName" : "includeInSectionPopform",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isIncludedWhenEmpty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleySection" ],
    "shortName" : "includedWhenEmpty",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isInconsistentGroupInstance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance" ],
    "shortName" : "inconsistentGroupInstance",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isNotificationContent",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion" ],
    "shortName" : "notificationContent",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isPathInstanceEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance" ],
    "shortName" : "pathInstanceEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isPathInstanceEphemeralValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance" ],
    "shortName" : "pathInstanceEphemeralValue",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isPathInstanceNewEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance" ],
    "shortName" : "pathInstanceNewEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isReadOnlyAnswerValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer", "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance" ],
    "shortName" : "readOnlyAnswerValue",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isReadOnlyRowValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRow", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "shortName" : "readOnlyRowValue",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isRequiredQuestion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasQuestion" ],
    "shortName" : "requiredQuestion",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isRequiredRow",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasRow" ],
    "shortName" : "requiredRow",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isRichText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAlternateText" ],
    "shortName" : "richText",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isRootAnswerType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerType" ],
    "shortName" : "rootAnswerType",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isRowNameQuestion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyQuestion" ],
    "shortName" : "rowNameQuestion",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isSecondarySource",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "shortName" : "secondarySource",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isSelectedGroupInstance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance" ],
    "shortName" : "selectedGroupInstance",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isSelectedRowInstance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "shortName" : "selectedRowInstance",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isSkipEmptyQuestions",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleySection" ],
    "shortName" : "skipEmptyQuestions",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isSkipEmptyRows",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleySection" ],
    "shortName" : "skipEmptyRows",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isSubjectToConstraints",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "shortName" : "subjectToConstraints",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isSubjectToValidation",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswer" ],
    "shortName" : "subjectToValidation",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isSuppressEmptyAnswerValues",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance", "http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance", "http://vital.ai/ontology/haley-ai-question#HaleyRowInstance" ],
    "shortName" : "suppressEmptyAnswerValues",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isSuppressedAnswerOption",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption" ],
    "shortName" : "suppressedAnswerOption",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isSuppressedQuestion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasQuestion" ],
    "shortName" : "suppressedQuestion",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isSuppressedRow",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#Edge_hasRow" ],
    "shortName" : "suppressedRow",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/haley-ai-question#isWeekendDay",
    "domainClassesURIs" : [ "http://vital.ai/ontology/haley-ai-question#HaleyDayOfWeekType" ],
    "shortName" : "weekendDay",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

VITAL_JSON_SCHEMAS.push(haley_ai_question_0_1_0_schema);

if(typeof(module) !== 'undefined') {

  module.exports = haley_ai_question_0_1_0_schema;

}