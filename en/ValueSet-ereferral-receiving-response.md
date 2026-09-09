# eReferral Receiving Facility Response - PH eReferral Implementation Guide v0.1.0

## ValueSet: eReferral Receiving Facility Response 

 
Response states used by a receiving facility after referral receipt in the PH eReferral workflow. 

 **References** 

This value set is not used here; it may be used elsewhere (e.g. specifications and/or implementations that use this content)

### Logical Definition (CLD)

 

### Expansion

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "ereferral-receiving-response",
  "url" : "https://fhir.doh.gov.ph/pheref/ValueSet/ereferral-receiving-response",
  "version" : "0.1.0",
  "name" : "EReferralReceivingResponse",
  "title" : "eReferral Receiving Facility Response",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-09-09T03:53:23+00:00",
  "publisher" : "SILab CoP IG Accelerator (eReferral)",
  "contact" : [{
    "name" : "SILab CoP IG Accelerator (eReferral)",
    "telecom" : [{
      "system" : "url",
      "value" : "https://github.com/UP-Manila-SILab"
    }]
  }],
  "description" : "Response states used by a receiving facility after referral receipt in the PH eReferral workflow.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "PH",
      "display" : "Philippines"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://fhir.doh.gov.ph/pheref/CodeSystem/ereferral-workflow",
      "concept" : [{
        "code" : "received",
        "display" : "Received"
      },
      {
        "code" : "accepted",
        "display" : "Accepted"
      },
      {
        "code" : "rejected",
        "display" : "Rejected"
      },
      {
        "code" : "referred-onward",
        "display" : "Referred onward"
      }]
    }]
  }
}

```
