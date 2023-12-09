if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var chat_ai_0_1_0_schema = {
  "domainURI" : "http://vital.ai/ontology/chat-ai",
  "name" : "chat-ai-0.1.0",
  "version" : "0.1.0",
  "domainOWLHash" : "90650d1ed6fa61c6ced1ee1d0120adc4",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/haley-ai-kg", "http://vital.ai/ontology/haley", "http://vital.ai/ontology/haley-ai-ml" ],
  "schemas" : [ {
    "extends" : "http://vital.ai/ontology/haley#HaleyMindResponse",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaStatusURI" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital#Account",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#isTestData" : {
        "type" : "boolean"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital#Login",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasLoginCreatedDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#isTestData" : {
        "type" : "boolean"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-aimp#AccountOpportunity",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionURI" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-aimp#UserProfile",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountUseCaseURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatOnboardingInteractionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatOnboardingStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPrimaryCountryURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPrimaryCurrencyURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPrimaryLanguageURI" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_Edge",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasVersionNonce" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasVersionNonce" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_HyperNode",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasVersionNonce" : {
        "type" : "string"
      }
    }
  }, {
    "extends" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasVersionNonce" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AcceptAccountInviteAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasAccountModificationTrackingIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasRequestedAccountName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasRequestedLoginName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasRequestedPassword" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasRequestedRepeatedPassword" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AcceptLoginChangeAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasAccountModificationTrackingIdentifier" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AcceptMemberInviteAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasAccountModificationTrackingIdentifier" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AcceptOwnerChangeAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasAccountModificationTrackingIdentifier" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AcceptOwnerChangeRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AccountQuotaSyncChatNotification",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatNotification",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AddAccountAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AddAccountLoginAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AddAccountOpportunityAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AddChatInteractionRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AddChatKGRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AddCreditChatRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AddMemberRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AddPaymentMethodRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AddSenderRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AddServiceAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AddServiceRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AskAccountInviteAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasRequestedEmailAddress" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AskConfirmEmailAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasRequestedEmailAddress" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AskConfirmEmailRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasRequestedEmailAddress" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AskConfirmLoginEmailAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasRequestedEmailAddress" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AskCreateAccountAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AskLoginChangeRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AskResetPasswordAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasRequestedEmailAddress" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#AuthenticateLoginRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasAuthPassword" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#CancelCreditPaymentChatRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#CancelInviteAccountOpportunityAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#CancelSubscriptionChatRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#CancelSubscriptionPaymentChatRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ChatCreditNotificationMessage",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatNotificationMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ChatQuotaNotificationMessage",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatNotificationMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ChatRealtimeMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyRealtimeMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ChatSubscriptionNotificationMessage",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatNotificationMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ConfirmEmailAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ConfirmEmailRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ConfirmLoginEmailAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasAccountModificationTrackingIdentifier" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ConfirmPaymentAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatStripeClientSecret" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ConfirmSenderAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#DeleteAccountAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#DeleteAccountLoginAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#DeleteAccountOpportunityAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#DeleteChatInteractionAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#DeleteChatInteractionRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatRequestObjectURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#DeleteChatKGAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#DeleteChatKGRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatRequestObjectURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#DeleteMemberRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#DeletePaymentMethodRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#DeleteSenderRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#DeleteServiceAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#DeleteServiceRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasChatEmailMessage",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatEmailSender" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-aimp#EmailMessage" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasChatMessageContent",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatAccountInfo",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account", "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatAccountModification",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account", "http://vital.ai/ontology/vital#Login", "http://vital.ai/ontology/vital-aimp#AccountOpportunityInvitation" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountModification" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatAppliedPromotion",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAppliedPromotion" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatBillingAddress",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo", "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatCredit",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCredit" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatCreditInvoice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCredit" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCreditInvoice" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatCreditPayment",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCreditInvoice" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCreditPayment" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatDirectPayment",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatDirectPayment" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatDiscourseAccount",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-aimp#AccountOpportunityMember" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatDiscourseAccount" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatInteraction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPublicInteraction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteraction" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatInteractionSummary",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteraction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteractionSummary" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatLoginOptionSettings",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatLoginOptionSettings" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatPaymentMethod",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatPublicInteraction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteraction" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPublicInteraction" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatPublicProfile",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPublicProfile" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatQuota",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account", "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatQuota" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatSubscription",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account", "http://vital.ai/ontology/vital#Login" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscription" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatSubscriptionInvoice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscription" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionInvoice" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatSubscriptionPayment",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionInvoice" ],
    "destinationDomains" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionPayment" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#EmailDeliverySchedule",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#EmailSendMethod",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetAccountAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetAccountLoginAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetAccountOpportunityAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetAccountQuotaChatRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetAccountStatementAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetAlertRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetAnswerSetRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetAppDescriptionRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCurrentAppVersion" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetChatInteractionAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetChatInteractionRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatRequestObjectURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetChatKGAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetChatKGRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatRequestObjectURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetCreditPackOptionsChatRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetHelpContentRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetHomeContentRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetInteractionCostRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetInvoiceRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetMemberAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetMemberRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetPaymentMethodRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetPendingPaymentRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetRoleRightsAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetRoleRightsRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetSenderRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetServiceAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetServiceRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetSettingsRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSettingsCommandTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetSubscriptionChatRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#GetSubscriptionOptionsChatRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatAccountCategory",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountCategoryURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountEntityName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountOwnerLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountUseCaseURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCustomerIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatOnboardingInteractionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatOnboardingStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentProcessorURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPrimaryCountryURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPrimaryCurrencyURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPrimaryLanguageURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatAccountModification",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasAccountModificationCreationDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasAccountModificationStatusMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasAccountModificationTrackingIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationAccountSourceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationDestinationString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationDestinationURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationLoginSourceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationNewSubscriptionStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationPriorSubscriptionStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationSourceString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationSourceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatLoginRoleURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatAccountModificationStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatAccountModificationType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatAccountOwnershipChangeAlert",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAlert",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationDestinationURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationSourceURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatAccountUseCase",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatAddressNormalizationStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "parent" : "http://vital.ai/ontology/haley#HaleyCommandMessage",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCollectionTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCommandModeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCommandObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCommandTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasTestCaseString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#isTestCaseMessage" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminNotification",
    "parent" : "http://vital.ai/ontology/haley#HaleyNotification",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasTestCaseString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#isTestCaseMessage" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatAlert",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAlertStatusURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatAlertStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatApp",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAppVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatReportedAppVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#isHaleyChatForceAppReload" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatAppliedPromotion",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAppliedPromotionStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionUseDateTime" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatAppliedPromotionStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatAuthenticationEvent",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasAuthenticationDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasAuthenticationEventStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatAuthenticationEventStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatAddressNormalizationStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingCity" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingCountryURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingCustomerEmail" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingCustomerName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingPostalCode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingProvinceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingRegion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingStateURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingStreetAddress1" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingStreetAddress2" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingTelephoneContact" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatGooglePlaceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatTelephoneTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#isHaleyChatBillingAddressInitialized" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/chat-ai#isPrimaryBillingAddress" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley#hasHaleyCountryISOCode" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatBotMessage",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatMessage",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatGeneratedMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatIncrementalGeneratedMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatPartialGeneratedMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatPriorUserMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatVoiceMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatReplyToIntentURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#isChatContinueListening" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatBotWritingAssistMessage",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatBotMessage",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatEditingInstructionsMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatEditingResultContentType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatEditingResultMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatEditingSourceContentType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatEditingSourceMessage" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCacheCollection",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCodeIntent",
    "parent" : "http://vital.ai/ontology/haley#HaleyIntentCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCommandModeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCodeInterpreter",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeBody" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeInterpreterPredecessorURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeLanguageURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeOutputTarget" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCodeLanguage",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCodeResult",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeErrorFeedback" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeErrorJSON" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeErrorMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeExitStatus" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeInterpreterSourceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeOutputJSON" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCollectionType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "parent" : "http://vital.ai/ontology/haley#HaleyCommandMessage",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCollectionTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCommandModeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCommandObjectURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCommandTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasTestCaseString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#isTestCaseMessage" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCommandMode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCommandType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatContentObject",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatContentJSON" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatContentObjectIcon" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatContentObjectOrder" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatContentObjectTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatContentTitle" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatContentObjectType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCredit",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasCreditPaidDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasCreditedDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCreditStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaCreditAmount" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCreditEvent",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCreditEventStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCreditEventTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCreditEventUpdateDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCreditURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCustomerIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaCreditAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatStripeInvoiceId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCreditEventStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCreditEventType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCreditInvoice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCreditPack",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasCreditPackCost" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasCreditPackCreditCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasCreditPackDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasCreditPackPriceIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasCreditPackProductIdentifier" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCreditPayment",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatPayment",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCreditSource",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatCreditStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatDirectPayment",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatPayment",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatDirectPaymentAppliedCreditURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatDirectPaymentAppliedDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatDirectPaymentAppliedStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatDirectPaymentAppliedSubscriptionURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatDirectPaymentAppliedStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatDiscourseAccount",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatDiscourseAccountEmail" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#isHaleyChatDiscourseAccountInvited" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatEmailSender",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatEmailSenderStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasPermittedSenderURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasEmail" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatEmailSenderStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatGooglePlace",
    "parent" : "http://vital.ai/ontology/haley#HaleyPlace",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasGooglePlaceId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasGooglePlaceJSON" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatIntent",
    "parent" : "http://vital.ai/ontology/haley#HaleyIntentCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCommandModeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/haley-ai-ml#isStreamModelResults" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatInteraction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatUpdateTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionCategoryURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelProviderURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeChannelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaCreditUsed" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatWritingAssistTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#isTitleManuallySet" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatInteractionCategory",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatInteractionCost",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentCurrencyURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatWritingAssistTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasInteractionCostCreditAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasInteractionCostPer1kInputTokenAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasInteractionCostPer1kOutputTokenAmount" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatInteractionModelProvider",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatInteractionModelType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatInteractionScope",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatInteractionStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatInteractionSummary",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatEndMessageURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionSummary" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatStartMessageURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatInteractionType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatLoginChangeAlert",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAlert",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatLoginOptionSettings",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeChannelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatLoginRoleURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatWritingAssistTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatLoginRole",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatMemberInviteAlert",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAlert",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatMessage",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasBridgeHaleyMessageURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatEncodedVoiceContentType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatEncodedVoiceData" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatEndTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatIncrementalEncodedVoiceData" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatIncrementalTextMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatMessageActorSequence" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatMessageIPAddress" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatMessageSequence" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatPartialEncodedVoiceData" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatPartialTextMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatStartTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatTextMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatVoicePath" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCreditSourceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelProviderURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatMessageCreditUsed" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatMessageType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasMessageRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#isChatIncrementalMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/chat-ai#isChatPartialMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital#hasLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasGeoAPIJSON" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatMessageRating",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatMessageRatingTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatMessageURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatMessageRatingType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatMessageSender",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatMessageType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatNotification",
    "parent" : "http://vital.ai/ontology/haley#HaleyNotification",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasTestCaseString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#isTestCaseMessage" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatNotificationMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyNotificationMessage",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatNotificationMessageTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatNotificationMessageType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatOnboardingStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPayment",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentCurrencyURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentDueDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentStatusCode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentStatusMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentToken" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasReverseHaleyChatPaymentURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#isHaleyChatPaymentCurrent" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/chat-ai#isHaleyChatPaymentReverse" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPaymentCurrency",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPaymentHistoryItem",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentCurrencyURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentDueDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentStatusCode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentStatusMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#isHaleyChatPaymentReverse" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodAddedDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodCountryURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodExpirationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodExpirationMonth" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodExpirationYear" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodHash" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodIssuingBankName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodLastDigits" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentNetworkURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#isHaleyChatPaymentMethodDefault" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/haley#hasHaleyCountryISOCode" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethodStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethodType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPaymentNetwork",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPaymentProcessor",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPaymentStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPendingPayment",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentCurrencyURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentDueDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPendingPaymentMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPendingPaymentTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatStripeInvoiceId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionInvoiceURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPendingPaymentType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPromotion",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionCode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPromotionStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPromotionType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPublicInteraction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPublicInteractionIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPublicInteractionPath" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPublicInteractionShortURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPublicInteractionSummary" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPublicInteractionTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPublicProfileURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPublicShareStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPublicShareTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPublicProfile",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPublicShareStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatPublicShareType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatQuerySortDirection",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatQuota",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaCreditAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaSubscriptionAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaSubscriptionBalance" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatQuotaReservation",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasEstimatedInputTokenCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasEstimatedModelCost" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasEstimatedOutputTokenCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasEstimatedQuotaDebit" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelProviderURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatMessageURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaReservationStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatStatusMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatQuotaReservationStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatQuotaStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransaction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasEstimatedModelCost" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelProviderURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatMessageURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaTransactionStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatStatusMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasInputTokenCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasOutputTokenCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasQuotaDebit" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasQuotaTransactionNonce" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransactionStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatRequest",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatResponse",
    "parent" : "http://vital.ai/ontology/haley#HaleyCommandMessage",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatSettingsCommandType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntent",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasCurrentSubscriptionLevelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasDesiredSubscriptionLevelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCustomerIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatStripeClientSecret" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatStripeInvoiceId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatStripeMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatStripePaymentAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatStripePaymentIntentId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatStripePaymentIntentStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatStripeStatusTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatStripeToken" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasStripePaymentMethodIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntentStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatStripeStatusType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatSubscription",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionEndDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionLevelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionStartDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionStatusMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionTermStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionTrialEndDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionTrialStartDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#isHaleyChatPaymentMethodActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/chat-ai#isHaleyChatSubscriptionInitialized" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionEvent",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCustomerIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatStripeInvoiceId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionCreditAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionEventStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionEventTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionEventUpdateDateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionPeriodEnd" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionPeriodStart" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionEventStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionEventType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionInvoice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatStripeInvoiceId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionPeriodEnd" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionPeriodStart" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionLevel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionOption",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatContentJSON" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatContentObjectIcon" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatContentObjectOrder" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatContentObjectTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatContentTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatRequiredPromotionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionLevelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasSubscriptionPriceIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasSubscriptionProductIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#isHaleyChatSubscriptionOptionAvailable" : {
        "type" : "boolean"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionPayment",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatPayment",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionTermStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatTelephoneType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatTransaction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatTransactionStatusMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatTransactionStatusURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatTransactionRequest",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatTransactionRequestTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatTransactionRequestType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatTransactionStatus",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatUserMessage",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatMessage",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatIntentURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatUserWritingAssistMessage",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatUserMessage",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatEditingInstructionsMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatEditingResultContentType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatEditingResultMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatEditingSourceContentType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatEditingSourceMessage" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#HaleyChatWritingAssistType",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ImportPublicInteractionRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#InviteAccountOpportunityAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#LockAccountLoginAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasLoginUsername" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ModifiedAccountLoginNotificationMessage",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatNotificationMessage",
    "properties" : {
      "http://vital.ai/ontology/vital#hasLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasAccountURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ModifiedChatInteractionNotificationMessage",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatNotificationMessage",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatTargetObjectURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ModifiedChatKGNotificationMessage",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatNotificationMessage",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatTargetObjectURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ModifySubscriptionChatRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#PayCreditChatRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#PaySubscriptionChatRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ProcessSubscriptionEventAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ProvisionServiceRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatRequest",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ProvisionServiceResponse",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatResponse",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#PurgeDataNotificationMessage",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatNotificationMessage",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCacheCollectionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCollectionTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatCommandObjectURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryAccountAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryAccountLoginAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryAccountOpportunityAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatQueryFilter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryLimit" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryOffset" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQuerySortDirectionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQuerySortProperty" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryStatusURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryAccountStatementAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryAlertRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatQueryFilter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryLimit" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryOffset" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQuerySortDirectionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQuerySortProperty" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryStatusURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryChatInteractionAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryChatInteractionRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatQueryFilter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryLimit" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryOffset" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQuerySortDirectionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQuerySortProperty" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryStatusURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeChannelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionTypeURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatWritingAssistTypeURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryChatKGAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryChatKGRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatQueryFilter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryLimit" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryOffset" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQuerySortDirectionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQuerySortProperty" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryStatusURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryInvoiceRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryMemberAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryMemberRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatQueryFilter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryLimit" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryOffset" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQuerySortDirectionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQuerySortProperty" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryStatusURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryPaymentHistoryRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatQueryFilter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryLimit" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryOffset" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQuerySortDirectionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQuerySortProperty" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryStatusURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryPaymentMethodRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasChatQueryFilter" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryLimit" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryOffset" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQuerySortDirectionURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQuerySortProperty" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasChatQueryStatusURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryPublicInteractionRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QuerySenderRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryServiceAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#QueryServiceRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#RateChatInteractionRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ReconcileAccountStatementAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#RemoveAccountRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ResetPasswordAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasAccountModificationTrackingIdentifier" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasRequestedEmailAddress" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasRequestedPassword" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasRequestedRepeatedPassword" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ResetSubscriptionRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaCreditAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaSubscriptionAmount" : {
        "type" : "number"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ResynchronizeAccountAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#ReviseQuotaChatRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#RevokePublicInteractionAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#RevokePublicInteractionRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#SendDataModificationChatAdminNotification",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminNotification",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasDataModificationEventType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasDataModificationGraphObjectClassURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasDataModificationObjectURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#SendEmailAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasEmailDeliveryScheduleURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasEmailSendMethodURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#SendEmailRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasEmailDeliveryScheduleURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/chat-ai#hasEmailSendMethodURI" : {
        "type" : "string"
      }
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#SendInviteAccountOpportunityAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#SendInviteMemberRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#SendMessageAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#SendMessageRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#SharePublicInteractionRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#SubscribeChatRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#TestChatRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#TransferAccountOwnershipRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#UpdateAccountAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#UpdateAccountLoginAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#UpdateAccountOpportunityAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#UpdateAccountStatementAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#UpdateChatInteractionAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#UpdateChatInteractionRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#UpdateChatKGRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#UpdateMemberRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#UpdatePaymentMethodRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#UpdateSenderRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#UpdateServiceAdminRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#UpdateServiceRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/chat-ai#UpdateSettingsRequest",
    "parent" : "http://vital.ai/ontology/chat-ai#HaleyChatCommand",
    "properties" : {
      "http://vital.ai/ontology/chat-ai#hasHaleyChatSettingsCommandTypeURI" : {
        "type" : "string"
      }
    }
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/chat-ai#hasAccountModificationCreationDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountModification" ],
    "shortName" : "accountModificationCreationDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasAccountModificationStatusMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountModification" ],
    "shortName" : "accountModificationStatusMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasAccountModificationTrackingIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#AcceptAccountInviteAdminRequest", "http://vital.ai/ontology/chat-ai#AcceptLoginChangeAdminRequest", "http://vital.ai/ontology/chat-ai#AcceptMemberInviteAdminRequest", "http://vital.ai/ontology/chat-ai#AcceptOwnerChangeAdminRequest", "http://vital.ai/ontology/chat-ai#ConfirmLoginEmailAdminRequest", "http://vital.ai/ontology/chat-ai#HaleyChatAccountModification", "http://vital.ai/ontology/chat-ai#ResetPasswordAdminRequest" ],
    "shortName" : "accountModificationTrackingIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasAuthPassword",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#AuthenticateLoginRequest" ],
    "shortName" : "authPassword",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasAuthenticationDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAuthenticationEvent" ],
    "shortName" : "authenticationDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasAuthenticationEventStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAuthenticationEvent" ],
    "shortName" : "authenticationEventStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasBridgeHaleyMessageURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "bridgeHaleyMessageURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatEditingInstructionsMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBotWritingAssistMessage", "http://vital.ai/ontology/chat-ai#HaleyChatUserWritingAssistMessage" ],
    "shortName" : "chatEditingInstructionsMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatEditingResultContentType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBotWritingAssistMessage", "http://vital.ai/ontology/chat-ai#HaleyChatUserWritingAssistMessage" ],
    "shortName" : "chatEditingResultContentType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatEditingResultMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBotWritingAssistMessage", "http://vital.ai/ontology/chat-ai#HaleyChatUserWritingAssistMessage" ],
    "shortName" : "chatEditingResultMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatEditingSourceContentType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBotWritingAssistMessage", "http://vital.ai/ontology/chat-ai#HaleyChatUserWritingAssistMessage" ],
    "shortName" : "chatEditingSourceContentType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatEditingSourceMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBotWritingAssistMessage", "http://vital.ai/ontology/chat-ai#HaleyChatUserWritingAssistMessage" ],
    "shortName" : "chatEditingSourceMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatEncodedVoiceContentType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "chatEncodedVoiceContentType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatEncodedVoiceData",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "chatEncodedVoiceData",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatEndTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "chatEndTimestamp",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatGeneratedMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBotMessage" ],
    "shortName" : "chatGeneratedMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatIncrementalEncodedVoiceData",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "chatIncrementalEncodedVoiceData",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatIncrementalGeneratedMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBotMessage" ],
    "shortName" : "chatIncrementalGeneratedMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatIncrementalTextMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "chatIncrementalTextMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatMessageActorSequence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "chatMessageActorSequence",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatMessageIPAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "chatMessageIPAddress",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatMessageRatingTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessageRating" ],
    "shortName" : "chatMessageRatingTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatMessageSequence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "chatMessageSequence",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatPartialEncodedVoiceData",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "chatPartialEncodedVoiceData",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatPartialGeneratedMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBotMessage" ],
    "shortName" : "chatPartialGeneratedMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatPartialTextMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "chatPartialTextMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatPriorUserMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBotMessage" ],
    "shortName" : "chatPriorUserMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatQueryFilter",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#QueryAccountOpportunityAdminRequest", "http://vital.ai/ontology/chat-ai#QueryAlertRequest", "http://vital.ai/ontology/chat-ai#QueryChatInteractionRequest", "http://vital.ai/ontology/chat-ai#QueryChatKGRequest", "http://vital.ai/ontology/chat-ai#QueryMemberRequest", "http://vital.ai/ontology/chat-ai#QueryPaymentHistoryRequest", "http://vital.ai/ontology/chat-ai#QueryPaymentMethodRequest" ],
    "shortName" : "chatQueryFilter",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatQueryLimit",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#QueryAccountOpportunityAdminRequest", "http://vital.ai/ontology/chat-ai#QueryAlertRequest", "http://vital.ai/ontology/chat-ai#QueryChatInteractionRequest", "http://vital.ai/ontology/chat-ai#QueryChatKGRequest", "http://vital.ai/ontology/chat-ai#QueryMemberRequest", "http://vital.ai/ontology/chat-ai#QueryPaymentHistoryRequest", "http://vital.ai/ontology/chat-ai#QueryPaymentMethodRequest" ],
    "shortName" : "chatQueryLimit",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatQueryOffset",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#QueryAccountOpportunityAdminRequest", "http://vital.ai/ontology/chat-ai#QueryAlertRequest", "http://vital.ai/ontology/chat-ai#QueryChatInteractionRequest", "http://vital.ai/ontology/chat-ai#QueryChatKGRequest", "http://vital.ai/ontology/chat-ai#QueryMemberRequest", "http://vital.ai/ontology/chat-ai#QueryPaymentHistoryRequest", "http://vital.ai/ontology/chat-ai#QueryPaymentMethodRequest" ],
    "shortName" : "chatQueryOffset",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatQuerySortDirectionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#QueryAccountOpportunityAdminRequest", "http://vital.ai/ontology/chat-ai#QueryAlertRequest", "http://vital.ai/ontology/chat-ai#QueryChatInteractionRequest", "http://vital.ai/ontology/chat-ai#QueryChatKGRequest", "http://vital.ai/ontology/chat-ai#QueryMemberRequest", "http://vital.ai/ontology/chat-ai#QueryPaymentHistoryRequest", "http://vital.ai/ontology/chat-ai#QueryPaymentMethodRequest" ],
    "shortName" : "chatQuerySortDirectionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatQuerySortProperty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#QueryAccountOpportunityAdminRequest", "http://vital.ai/ontology/chat-ai#QueryAlertRequest", "http://vital.ai/ontology/chat-ai#QueryChatInteractionRequest", "http://vital.ai/ontology/chat-ai#QueryChatKGRequest", "http://vital.ai/ontology/chat-ai#QueryMemberRequest", "http://vital.ai/ontology/chat-ai#QueryPaymentHistoryRequest", "http://vital.ai/ontology/chat-ai#QueryPaymentMethodRequest" ],
    "shortName" : "chatQuerySortProperty",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatQueryStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#QueryAccountOpportunityAdminRequest", "http://vital.ai/ontology/chat-ai#QueryAlertRequest", "http://vital.ai/ontology/chat-ai#QueryChatInteractionRequest", "http://vital.ai/ontology/chat-ai#QueryChatKGRequest", "http://vital.ai/ontology/chat-ai#QueryMemberRequest", "http://vital.ai/ontology/chat-ai#QueryPaymentHistoryRequest", "http://vital.ai/ontology/chat-ai#QueryPaymentMethodRequest" ],
    "shortName" : "chatQueryStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatRequestObjectURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#DeleteChatInteractionRequest", "http://vital.ai/ontology/chat-ai#DeleteChatKGRequest", "http://vital.ai/ontology/chat-ai#GetChatInteractionRequest", "http://vital.ai/ontology/chat-ai#GetChatKGRequest" ],
    "shortName" : "chatRequestObjectURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatStartTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "chatStartTimestamp",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatTargetObjectURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#ModifiedChatInteractionNotificationMessage", "http://vital.ai/ontology/chat-ai#ModifiedChatKGNotificationMessage" ],
    "shortName" : "chatTargetObjectURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatTextMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "chatTextMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage", "http://vital.ai/ontology/chat-ai#HaleyChatQuotaReservation", "http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransaction" ],
    "shortName" : "chatTimestamp",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatUpdateTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteraction" ],
    "shortName" : "chatUpdateTimestamp",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatVoiceMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBotMessage" ],
    "shortName" : "chatVoiceMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasChatVoicePath",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "chatVoicePath",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasCreditPackCost",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCreditPack" ],
    "shortName" : "creditPackCost",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasCreditPackCreditCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCreditPack" ],
    "shortName" : "creditPackCreditCount",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasCreditPackDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCreditPack" ],
    "shortName" : "creditPackDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasCreditPackPriceIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCreditPack" ],
    "shortName" : "creditPackPriceIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasCreditPackProductIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCreditPack" ],
    "shortName" : "creditPackProductIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasCreditPaidDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCredit" ],
    "shortName" : "creditPaidDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasCreditedDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCredit" ],
    "shortName" : "creditedDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasCurrentSubscriptionLevelURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntent" ],
    "shortName" : "currentSubscriptionLevelURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasDataModificationEventType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#SendDataModificationChatAdminNotification" ],
    "shortName" : "dataModificationEventType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasDataModificationGraphObjectClassURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#SendDataModificationChatAdminNotification" ],
    "shortName" : "dataModificationGraphObjectClassURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasDataModificationObjectURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#SendDataModificationChatAdminNotification" ],
    "shortName" : "dataModificationObjectURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasDesiredSubscriptionLevelURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntent" ],
    "shortName" : "desiredSubscriptionLevelURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasEmailDeliveryScheduleURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#SendEmailAdminRequest", "http://vital.ai/ontology/chat-ai#SendEmailRequest" ],
    "shortName" : "emailDeliveryScheduleURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasEmailSendMethodURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#SendEmailAdminRequest", "http://vital.ai/ontology/chat-ai#SendEmailRequest" ],
    "shortName" : "emailSendMethodURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasEstimatedInputTokenCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatQuotaReservation" ],
    "shortName" : "estimatedInputTokenCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasEstimatedModelCost",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatQuotaReservation", "http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransaction" ],
    "shortName" : "estimatedModelCost",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasEstimatedOutputTokenCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatQuotaReservation" ],
    "shortName" : "estimatedOutputTokenCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasEstimatedQuotaDebit",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatQuotaReservation" ],
    "shortName" : "estimatedQuotaDebit",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasGooglePlaceId",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatGooglePlace" ],
    "shortName" : "googlePlaceId",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasGooglePlaceJSON",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatGooglePlace" ],
    "shortName" : "googlePlaceJSON",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountCategoryURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo" ],
    "shortName" : "haleyChatAccountCategoryURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountEntityName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo" ],
    "shortName" : "haleyChatAccountEntityName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationAccountSourceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountModification" ],
    "shortName" : "haleyChatAccountModificationAccountSourceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationDestinationString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountModification" ],
    "shortName" : "haleyChatAccountModificationDestinationString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationDestinationURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountModification", "http://vital.ai/ontology/chat-ai#HaleyChatAccountOwnershipChangeAlert" ],
    "shortName" : "haleyChatAccountModificationDestinationURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationLoginSourceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountModification" ],
    "shortName" : "haleyChatAccountModificationLoginSourceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationNewSubscriptionStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountModification" ],
    "shortName" : "haleyChatAccountModificationNewSubscriptionStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationPriorSubscriptionStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountModification" ],
    "shortName" : "haleyChatAccountModificationPriorSubscriptionStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationSourceString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountModification" ],
    "shortName" : "haleyChatAccountModificationSourceString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationSourceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountModification", "http://vital.ai/ontology/chat-ai#HaleyChatAccountOwnershipChangeAlert" ],
    "shortName" : "haleyChatAccountModificationSourceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountModification" ],
    "shortName" : "haleyChatAccountModificationStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountModification" ],
    "shortName" : "haleyChatAccountModificationTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountOwnerLoginURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo" ],
    "shortName" : "haleyChatAccountOwnerLoginURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAccountUseCaseURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo", "http://vital.ai/ontology/vital-aimp#UserProfile" ],
    "shortName" : "haleyChatAccountUseCaseURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAddressNormalizationStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "haleyChatAddressNormalizationStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAlertStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAlert" ],
    "shortName" : "haleyChatAlertStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAppVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatApp" ],
    "shortName" : "haleyChatAppVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatAppliedPromotionStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAppliedPromotion" ],
    "shortName" : "haleyChatAppliedPromotionStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingCity",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "haleyChatBillingCity",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingCountryURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "haleyChatBillingCountryURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingCustomerEmail",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "haleyChatBillingCustomerEmail",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingCustomerName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "haleyChatBillingCustomerName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "haleyChatBillingName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingPostalCode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "haleyChatBillingPostalCode",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingProvinceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "haleyChatBillingProvinceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingRegion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "haleyChatBillingRegion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingStateURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "haleyChatBillingStateURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingStreetAddress1",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "haleyChatBillingStreetAddress1",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingStreetAddress2",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "haleyChatBillingStreetAddress2",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatBillingTelephoneContact",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "haleyChatBillingTelephoneContact",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCacheCollectionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#PurgeDataNotificationMessage" ],
    "shortName" : "haleyChatCacheCollectionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeBody",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCodeInterpreter" ],
    "shortName" : "haleyChatCodeBody",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeErrorFeedback",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCodeResult" ],
    "shortName" : "haleyChatCodeErrorFeedback",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeErrorJSON",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCodeResult" ],
    "shortName" : "haleyChatCodeErrorJSON",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeErrorMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCodeResult" ],
    "shortName" : "haleyChatCodeErrorMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeExitStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCodeResult" ],
    "shortName" : "haleyChatCodeExitStatus",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeInterpreterPredecessorURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCodeInterpreter" ],
    "shortName" : "haleyChatCodeInterpreterPredecessorURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeInterpreterSourceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCodeResult" ],
    "shortName" : "haleyChatCodeInterpreterSourceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeLanguageURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCodeInterpreter" ],
    "shortName" : "haleyChatCodeLanguageURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeOutputJSON",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCodeResult" ],
    "shortName" : "haleyChatCodeOutputJSON",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCodeOutputTarget",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCodeInterpreter" ],
    "shortName" : "haleyChatCodeOutputTarget",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCollectionTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand", "http://vital.ai/ontology/chat-ai#HaleyChatCommand", "http://vital.ai/ontology/chat-ai#PurgeDataNotificationMessage" ],
    "shortName" : "haleyChatCollectionTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCommandModeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand", "http://vital.ai/ontology/chat-ai#HaleyChatCodeIntent", "http://vital.ai/ontology/chat-ai#HaleyChatCommand", "http://vital.ai/ontology/chat-ai#HaleyChatIntent" ],
    "shortName" : "haleyChatCommandModeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCommandObjectURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand", "http://vital.ai/ontology/chat-ai#HaleyChatCommand", "http://vital.ai/ontology/chat-ai#PurgeDataNotificationMessage" ],
    "shortName" : "haleyChatCommandObjectURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCommandTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand", "http://vital.ai/ontology/chat-ai#HaleyChatCommand" ],
    "shortName" : "haleyChatCommandTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatContentJSON",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatContentObject", "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionOption" ],
    "shortName" : "haleyChatContentJSON",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatContentObjectIcon",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatContentObject", "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionOption" ],
    "shortName" : "haleyChatContentObjectIcon",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatContentObjectOrder",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatContentObject", "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionOption" ],
    "shortName" : "haleyChatContentObjectOrder",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatContentObjectTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatContentObject", "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionOption" ],
    "shortName" : "haleyChatContentObjectTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatContentTitle",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatContentObject", "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionOption" ],
    "shortName" : "haleyChatContentTitle",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCreditEventStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCreditEvent" ],
    "shortName" : "haleyChatCreditEventStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCreditEventTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCreditEvent" ],
    "shortName" : "haleyChatCreditEventTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCreditEventUpdateDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCreditEvent" ],
    "shortName" : "haleyChatCreditEventUpdateDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCreditSourceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "haleyChatCreditSourceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCreditStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCredit" ],
    "shortName" : "haleyChatCreditStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCreditURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCreditEvent" ],
    "shortName" : "haleyChatCreditURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCurrentAppVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#GetAppDescriptionRequest" ],
    "shortName" : "haleyChatCurrentAppVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatCustomerIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo", "http://vital.ai/ontology/chat-ai#HaleyChatCreditEvent", "http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntent", "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionEvent" ],
    "shortName" : "haleyChatCustomerIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatDirectPaymentAppliedCreditURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatDirectPayment" ],
    "shortName" : "haleyChatDirectPaymentAppliedCreditURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatDirectPaymentAppliedDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatDirectPayment" ],
    "shortName" : "haleyChatDirectPaymentAppliedDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatDirectPaymentAppliedStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatDirectPayment" ],
    "shortName" : "haleyChatDirectPaymentAppliedStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatDirectPaymentAppliedSubscriptionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatDirectPayment" ],
    "shortName" : "haleyChatDirectPaymentAppliedSubscriptionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatDiscourseAccountEmail",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatDiscourseAccount" ],
    "shortName" : "haleyChatDiscourseAccountEmail",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatEmailSenderStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatEmailSender" ],
    "shortName" : "haleyChatEmailSenderStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatEndMessageURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteractionSummary" ],
    "shortName" : "haleyChatEndMessageURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatGooglePlaceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "haleyChatGooglePlaceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatIntentURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatUserMessage" ],
    "shortName" : "haleyChatIntentURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionCategoryURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteraction" ],
    "shortName" : "haleyChatInteractionCategoryURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelProviderURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteraction", "http://vital.ai/ontology/chat-ai#HaleyChatMessage", "http://vital.ai/ontology/chat-ai#HaleyChatQuotaReservation", "http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransaction" ],
    "shortName" : "haleyChatInteractionModelProviderURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteraction", "http://vital.ai/ontology/chat-ai#HaleyChatInteractionCost", "http://vital.ai/ontology/chat-ai#HaleyChatLoginOptionSettings", "http://vital.ai/ontology/chat-ai#HaleyChatQuotaReservation", "http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransaction", "http://vital.ai/ontology/chat-ai#QueryChatInteractionRequest" ],
    "shortName" : "haleyChatInteractionModelTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeChannelURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteraction", "http://vital.ai/ontology/chat-ai#HaleyChatLoginOptionSettings", "http://vital.ai/ontology/chat-ai#QueryChatInteractionRequest" ],
    "shortName" : "haleyChatInteractionScopeChannelURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeLoginURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteraction", "http://vital.ai/ontology/chat-ai#QueryChatInteractionRequest" ],
    "shortName" : "haleyChatInteractionScopeLoginURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteraction", "http://vital.ai/ontology/chat-ai#HaleyChatLoginOptionSettings", "http://vital.ai/ontology/chat-ai#QueryChatInteractionRequest" ],
    "shortName" : "haleyChatInteractionScopeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteraction" ],
    "shortName" : "haleyChatInteractionStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionSummary",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteractionSummary" ],
    "shortName" : "haleyChatInteractionSummary",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteraction", "http://vital.ai/ontology/chat-ai#HaleyChatInteractionCost", "http://vital.ai/ontology/chat-ai#HaleyChatLoginOptionSettings", "http://vital.ai/ontology/chat-ai#QueryChatInteractionRequest" ],
    "shortName" : "haleyChatInteractionTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage", "http://vital.ai/ontology/chat-ai#HaleyChatMessageRating", "http://vital.ai/ontology/chat-ai#HaleyChatQuotaReservation", "http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransaction" ],
    "shortName" : "haleyChatInteractionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatLoginRoleURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountModification", "http://vital.ai/ontology/chat-ai#HaleyChatLoginOptionSettings" ],
    "shortName" : "haleyChatLoginRoleURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatMessageCreditUsed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "haleyChatMessageCreditUsed",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatMessageType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "haleyChatMessageType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatMessageURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessageRating", "http://vital.ai/ontology/chat-ai#HaleyChatQuotaReservation", "http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransaction" ],
    "shortName" : "haleyChatMessageURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatNotificationMessageTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatNotificationMessage" ],
    "shortName" : "haleyChatNotificationMessageTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatOnboardingInteractionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo", "http://vital.ai/ontology/vital-aimp#UserProfile" ],
    "shortName" : "haleyChatOnboardingInteractionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatOnboardingStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo", "http://vital.ai/ontology/vital-aimp#UserProfile" ],
    "shortName" : "haleyChatOnboardingStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentAmount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPayment", "http://vital.ai/ontology/chat-ai#HaleyChatPaymentHistoryItem", "http://vital.ai/ontology/chat-ai#HaleyChatPendingPayment" ],
    "shortName" : "haleyChatPaymentAmount",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentCurrencyURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteractionCost", "http://vital.ai/ontology/chat-ai#HaleyChatPayment", "http://vital.ai/ontology/chat-ai#HaleyChatPaymentHistoryItem", "http://vital.ai/ontology/chat-ai#HaleyChatPendingPayment" ],
    "shortName" : "haleyChatPaymentCurrencyURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPayment", "http://vital.ai/ontology/chat-ai#HaleyChatPaymentHistoryItem", "http://vital.ai/ontology/chat-ai#HaleyChatPendingPayment" ],
    "shortName" : "haleyChatPaymentDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentDueDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPayment", "http://vital.ai/ontology/chat-ai#HaleyChatPaymentHistoryItem", "http://vital.ai/ontology/chat-ai#HaleyChatPendingPayment" ],
    "shortName" : "haleyChatPaymentDueDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodAddedDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod" ],
    "shortName" : "haleyChatPaymentMethodAddedDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodCountryURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod" ],
    "shortName" : "haleyChatPaymentMethodCountryURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodExpirationDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod" ],
    "shortName" : "haleyChatPaymentMethodExpirationDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodExpirationMonth",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod" ],
    "shortName" : "haleyChatPaymentMethodExpirationMonth",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodExpirationYear",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod" ],
    "shortName" : "haleyChatPaymentMethodExpirationYear",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodHash",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod" ],
    "shortName" : "haleyChatPaymentMethodHash",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod", "http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntent" ],
    "shortName" : "haleyChatPaymentMethodIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodIssuingBankName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod" ],
    "shortName" : "haleyChatPaymentMethodIssuingBankName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodLastDigits",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod" ],
    "shortName" : "haleyChatPaymentMethodLastDigits",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod" ],
    "shortName" : "haleyChatPaymentMethodName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod" ],
    "shortName" : "haleyChatPaymentMethodStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod" ],
    "shortName" : "haleyChatPaymentMethodTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentNetworkURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod" ],
    "shortName" : "haleyChatPaymentNetworkURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentProcessorURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo" ],
    "shortName" : "haleyChatPaymentProcessorURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentStatusCode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPayment", "http://vital.ai/ontology/chat-ai#HaleyChatPaymentHistoryItem" ],
    "shortName" : "haleyChatPaymentStatusCode",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentStatusMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPayment", "http://vital.ai/ontology/chat-ai#HaleyChatPaymentHistoryItem" ],
    "shortName" : "haleyChatPaymentStatusMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPayment", "http://vital.ai/ontology/chat-ai#HaleyChatPaymentHistoryItem" ],
    "shortName" : "haleyChatPaymentStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPayment", "http://vital.ai/ontology/chat-ai#HaleyChatPaymentHistoryItem" ],
    "shortName" : "haleyChatPaymentTimestamp",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentToken",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPayment" ],
    "shortName" : "haleyChatPaymentToken",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPendingPaymentMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPendingPayment" ],
    "shortName" : "haleyChatPendingPaymentMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPendingPaymentTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPendingPayment" ],
    "shortName" : "haleyChatPendingPaymentTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPrimaryCountryURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo", "http://vital.ai/ontology/vital-aimp#UserProfile" ],
    "shortName" : "haleyChatPrimaryCountryURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPrimaryCurrencyURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo", "http://vital.ai/ontology/vital-aimp#UserProfile" ],
    "shortName" : "haleyChatPrimaryCurrencyURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPrimaryLanguageURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo", "http://vital.ai/ontology/vital-aimp#UserProfile" ],
    "shortName" : "haleyChatPrimaryLanguageURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionCode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPromotion" ],
    "shortName" : "haleyChatPromotionCode",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPromotion" ],
    "shortName" : "haleyChatPromotionStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPromotion" ],
    "shortName" : "haleyChatPromotionTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAppliedPromotion", "http://vital.ai/ontology/vital-aimp#AccountOpportunity" ],
    "shortName" : "haleyChatPromotionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionUseDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAppliedPromotion" ],
    "shortName" : "haleyChatPromotionUseDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPublicInteractionIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPublicInteraction" ],
    "shortName" : "haleyChatPublicInteractionIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPublicInteractionPath",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPublicInteraction" ],
    "shortName" : "haleyChatPublicInteractionPath",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPublicInteractionShortURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPublicInteraction" ],
    "shortName" : "haleyChatPublicInteractionShortURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPublicInteractionSummary",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPublicInteraction" ],
    "shortName" : "haleyChatPublicInteractionSummary",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPublicInteractionTitle",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPublicInteraction" ],
    "shortName" : "haleyChatPublicInteractionTitle",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPublicProfileURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPublicInteraction" ],
    "shortName" : "haleyChatPublicProfileURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPublicShareStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPublicInteraction" ],
    "shortName" : "haleyChatPublicShareStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatPublicShareTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPublicInteraction" ],
    "shortName" : "haleyChatPublicShareTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaAmount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatQuota" ],
    "shortName" : "haleyChatQuotaAmount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaCreditAmount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCredit", "http://vital.ai/ontology/chat-ai#HaleyChatCreditEvent", "http://vital.ai/ontology/chat-ai#HaleyChatQuota", "http://vital.ai/ontology/chat-ai#ResetSubscriptionRequest" ],
    "shortName" : "haleyChatQuotaCreditAmount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaCreditUsed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteraction" ],
    "shortName" : "haleyChatQuotaCreditUsed",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatQuota" ],
    "shortName" : "haleyChatQuotaDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaReservationStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatQuotaReservation" ],
    "shortName" : "haleyChatQuotaReservationStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBotMessage", "http://vital.ai/ontology/chat-ai#HaleyChatInteraction", "http://vital.ai/ontology/haley#HaleyMindResponse" ],
    "shortName" : "haleyChatQuotaStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaSubscriptionAmount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatQuota", "http://vital.ai/ontology/chat-ai#ResetSubscriptionRequest" ],
    "shortName" : "haleyChatQuotaSubscriptionAmount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaSubscriptionBalance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatQuota" ],
    "shortName" : "haleyChatQuotaSubscriptionBalance",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaTransactionStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransaction" ],
    "shortName" : "haleyChatQuotaTransactionStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatReplyToIntentURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBotMessage" ],
    "shortName" : "haleyChatReplyToIntentURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatReportedAppVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatApp" ],
    "shortName" : "haleyChatReportedAppVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatRequiredPromotionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionOption" ],
    "shortName" : "haleyChatRequiredPromotionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSettingsCommandTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#GetSettingsRequest", "http://vital.ai/ontology/chat-ai#UpdateSettingsRequest" ],
    "shortName" : "haleyChatSettingsCommandTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatStartMessageURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteractionSummary" ],
    "shortName" : "haleyChatStartMessageURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatStatusMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatQuotaReservation", "http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransaction" ],
    "shortName" : "haleyChatStatusMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatStripeClientSecret",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#ConfirmPaymentAdminRequest", "http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntent" ],
    "shortName" : "haleyChatStripeClientSecret",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatStripeInvoiceId",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatCreditEvent", "http://vital.ai/ontology/chat-ai#HaleyChatPendingPayment", "http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntent", "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionEvent", "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionInvoice" ],
    "shortName" : "haleyChatStripeInvoiceId",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatStripeMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntent" ],
    "shortName" : "haleyChatStripeMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatStripePaymentAmount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntent" ],
    "shortName" : "haleyChatStripePaymentAmount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatStripePaymentIntentId",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntent" ],
    "shortName" : "haleyChatStripePaymentIntentId",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatStripePaymentIntentStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntent" ],
    "shortName" : "haleyChatStripePaymentIntentStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatStripeStatusTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntent" ],
    "shortName" : "haleyChatStripeStatusTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatStripeToken",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntent" ],
    "shortName" : "haleyChatStripeToken",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionCreditAmount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionEvent" ],
    "shortName" : "haleyChatSubscriptionCreditAmount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionEndDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscription" ],
    "shortName" : "haleyChatSubscriptionEndDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionEventStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionEvent" ],
    "shortName" : "haleyChatSubscriptionEventStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionEventTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionEvent" ],
    "shortName" : "haleyChatSubscriptionEventTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionEventUpdateDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionEvent" ],
    "shortName" : "haleyChatSubscriptionEventUpdateDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscription", "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionEvent" ],
    "shortName" : "haleyChatSubscriptionIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionInvoiceURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPendingPayment" ],
    "shortName" : "haleyChatSubscriptionInvoiceURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionLevelURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscription", "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionOption" ],
    "shortName" : "haleyChatSubscriptionLevelURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionPeriodEnd",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionEvent", "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionInvoice" ],
    "shortName" : "haleyChatSubscriptionPeriodEnd",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionPeriodStart",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionEvent", "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionInvoice" ],
    "shortName" : "haleyChatSubscriptionPeriodStart",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionStartDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscription" ],
    "shortName" : "haleyChatSubscriptionStartDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionStatusMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscription" ],
    "shortName" : "haleyChatSubscriptionStatusMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscription" ],
    "shortName" : "haleyChatSubscriptionStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionTermStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscription" ],
    "shortName" : "haleyChatSubscriptionTermStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionTrialEndDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscription" ],
    "shortName" : "haleyChatSubscriptionTrialEndDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionTrialStartDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscription" ],
    "shortName" : "haleyChatSubscriptionTrialStartDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPendingPayment" ],
    "shortName" : "haleyChatSubscriptionURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatTelephoneTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "haleyChatTelephoneTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatTransactionRequestTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatTransactionRequest" ],
    "shortName" : "haleyChatTransactionRequestTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatTransactionStatusMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatTransaction" ],
    "shortName" : "haleyChatTransactionStatusMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatTransactionStatusURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatTransaction" ],
    "shortName" : "haleyChatTransactionStatusURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasHaleyChatWritingAssistTypeURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteraction", "http://vital.ai/ontology/chat-ai#HaleyChatInteractionCost", "http://vital.ai/ontology/chat-ai#HaleyChatLoginOptionSettings", "http://vital.ai/ontology/chat-ai#QueryChatInteractionRequest" ],
    "shortName" : "haleyChatWritingAssistTypeURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasInputTokenCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransaction" ],
    "shortName" : "inputTokenCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasInteractionCostCreditAmount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteractionCost" ],
    "shortName" : "interactionCostCreditAmount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasInteractionCostPer1kInputTokenAmount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteractionCost" ],
    "shortName" : "interactionCostPer1kInputTokenAmount",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasInteractionCostPer1kOutputTokenAmount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteractionCost" ],
    "shortName" : "interactionCostPer1kOutputTokenAmount",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasLoginCreatedDateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Login" ],
    "shortName" : "loginCreatedDateTime",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasLoginUsername",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#LockAccountLoginAdminRequest" ],
    "shortName" : "loginUsername",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasMessageRequestURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "messageRequestURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasOutputTokenCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransaction" ],
    "shortName" : "outputTokenCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasPermittedSenderURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatEmailSender" ],
    "shortName" : "permittedSenderURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasQuotaDebit",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransaction" ],
    "shortName" : "quotaDebit",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasQuotaTransactionNonce",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransaction" ],
    "shortName" : "quotaTransactionNonce",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasRequestedAccountName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#AcceptAccountInviteAdminRequest" ],
    "shortName" : "requestedAccountName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasRequestedEmailAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#AskAccountInviteAdminRequest", "http://vital.ai/ontology/chat-ai#AskConfirmEmailAdminRequest", "http://vital.ai/ontology/chat-ai#AskConfirmEmailRequest", "http://vital.ai/ontology/chat-ai#AskConfirmLoginEmailAdminRequest", "http://vital.ai/ontology/chat-ai#AskResetPasswordAdminRequest", "http://vital.ai/ontology/chat-ai#ResetPasswordAdminRequest" ],
    "shortName" : "requestedEmailAddress",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasRequestedLoginName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#AcceptAccountInviteAdminRequest" ],
    "shortName" : "requestedLoginName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasRequestedPassword",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#AcceptAccountInviteAdminRequest", "http://vital.ai/ontology/chat-ai#ResetPasswordAdminRequest" ],
    "shortName" : "requestedPassword",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasRequestedRepeatedPassword",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#AcceptAccountInviteAdminRequest", "http://vital.ai/ontology/chat-ai#ResetPasswordAdminRequest" ],
    "shortName" : "requestedRepeatedPassword",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasReverseHaleyChatPaymentURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPayment" ],
    "shortName" : "reverseHaleyChatPaymentURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasStripePaymentMethodIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntent" ],
    "shortName" : "stripePaymentMethodIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasSubscriptionPriceIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionOption" ],
    "shortName" : "subscriptionPriceIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasSubscriptionProductIdentifier",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionOption" ],
    "shortName" : "subscriptionProductIdentifier",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasTestCaseString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand", "http://vital.ai/ontology/chat-ai#HaleyChatAdminNotification", "http://vital.ai/ontology/chat-ai#HaleyChatCommand", "http://vital.ai/ontology/chat-ai#HaleyChatNotification" ],
    "shortName" : "testCaseString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#hasVersionNonce",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "versionNonce",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#isChatContinueListening",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBotMessage" ],
    "shortName" : "chatContinueListening",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#isChatIncrementalMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "chatIncrementalMessage",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#isChatPartialMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatMessage" ],
    "shortName" : "chatPartialMessage",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#isHaleyChatBillingAddressInitialized",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "haleyChatBillingAddressInitialized",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#isHaleyChatDiscourseAccountInvited",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatDiscourseAccount" ],
    "shortName" : "haleyChatDiscourseAccountInvited",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#isHaleyChatForceAppReload",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatApp" ],
    "shortName" : "haleyChatForceAppReload",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#isHaleyChatPaymentCurrent",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPayment" ],
    "shortName" : "haleyChatPaymentCurrent",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#isHaleyChatPaymentMethodActive",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscription" ],
    "shortName" : "haleyChatPaymentMethodActive",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#isHaleyChatPaymentMethodDefault",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod" ],
    "shortName" : "haleyChatPaymentMethodDefault",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#isHaleyChatPaymentReverse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatPayment", "http://vital.ai/ontology/chat-ai#HaleyChatPaymentHistoryItem" ],
    "shortName" : "haleyChatPaymentReverse",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#isHaleyChatSubscriptionInitialized",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscription" ],
    "shortName" : "haleyChatSubscriptionInitialized",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#isHaleyChatSubscriptionOptionAvailable",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionOption" ],
    "shortName" : "haleyChatSubscriptionOptionAvailable",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#isPrimaryBillingAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress" ],
    "shortName" : "primaryBillingAddress",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#isTestCaseMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand", "http://vital.ai/ontology/chat-ai#HaleyChatAdminNotification", "http://vital.ai/ontology/chat-ai#HaleyChatCommand", "http://vital.ai/ontology/chat-ai#HaleyChatNotification" ],
    "shortName" : "testCaseMessage",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#isTestData",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital#Account", "http://vital.ai/ontology/vital#Login" ],
    "shortName" : "testData",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/chat-ai#isTitleManuallySet",
    "domainClassesURIs" : [ "http://vital.ai/ontology/chat-ai#HaleyChatInteraction" ],
    "shortName" : "titleManuallySet",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

VITAL_JSON_SCHEMAS.push(chat_ai_0_1_0_schema);

if(typeof(module) !== 'undefined') {

  module.exports = chat_ai_0_1_0_schema;

}