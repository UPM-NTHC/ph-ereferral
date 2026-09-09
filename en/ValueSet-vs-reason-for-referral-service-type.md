# Reason for Referral (Service Type) VS - PH eReferral Implementation Guide v0.1.0

## ValueSet: Reason for Referral (Service Type) VS 

 
Reason for referral (Service type) 

 **References** 

* [EReferral ServiceRequest](StructureDefinition-ereferral-service-request.md)

### Logical Definition (CLD)

 

### Expansion

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "vs-reason-for-referral-service-type",
  "url" : "https://www.fhir.doh.gov.ph/pheref/ValueSet/reason-for-referral-service-type",
  "version" : "0.1.0",
  "name" : "EReferralReason",
  "title" : "Reason for Referral (Service Type) VS",
  "status" : "active",
  "date" : "2026-09-09T03:53:23+00:00",
  "publisher" : "SILab CoP IG Accelerator (eReferral)",
  "contact" : [{
    "name" : "SILab CoP IG Accelerator (eReferral)",
    "telecom" : [{
      "system" : "url",
      "value" : "https://github.com/UP-Manila-SILab"
    }]
  }],
  "description" : "Reason for referral (Service type)",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "PH",
      "display" : "Philippines"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "http://snomed.info/sct",
      "concept" : [{
        "code" : "11429006",
        "display" : "Consultation"
      },
      {
        "code" : "165197003",
        "display" : "Diagnostics"
      },
      {
        "code" : "71388002",
        "display" : "Procedure"
      },
      {
        "code" : "3457005",
        "display" : "Others"
      }]
    }]
  }
}

```
