# Referral Category VS - PH eReferral Implementation Guide v0.1.0

## ValueSet: Referral Category VS 

 
Referral category (Emergency or Outpatient) 

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
  "id" : "vs-referral-category",
  "url" : "https://www.fhir.doh.gov.ph/pheref/ValueSet/referral-category",
  "version" : "0.1.0",
  "name" : "EReferralServiceCategory",
  "title" : "Referral Category VS",
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
  "description" : "Referral category (Emergency or Outpatient)",
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
        "code" : "73770003",
        "display" : "Emergency"
      },
      {
        "code" : "440655000",
        "display" : "Outpatient"
      }]
    }]
  }
}

```
