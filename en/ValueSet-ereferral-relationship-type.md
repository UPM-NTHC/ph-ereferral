# eReferral Relationship Type - PH eReferral Implementation Guide v0.1.0

## ValueSet: eReferral Relationship Type (Experimental) 

 
Relationship roles used for patient contacts, next of kin, emergency contacts, guardians, and accompanying persons in Philippine eReferral. 

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
  "id" : "ereferral-relationship-type",
  "url" : "https://fhir.doh.gov.ph/pheref/ValueSet/ereferral-relationship-type",
  "version" : "0.1.0",
  "name" : "EReferralRelationshipType",
  "title" : "eReferral Relationship Type",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-09-09T03:53:23+00:00",
  "publisher" : "SILab CoP IG Accelerator (eReferral)",
  "contact" : [{
    "name" : "SILab CoP IG Accelerator (eReferral)",
    "telecom" : [{
      "system" : "url",
      "value" : "https://github.com/UP-Manila-SILab"
    }]
  }],
  "description" : "Relationship roles used for patient contacts, next of kin, emergency contacts, guardians, and accompanying persons in Philippine eReferral.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "PH",
      "display" : "Philippines"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
      "concept" : [{
        "code" : "NOK",
        "display" : "next of kin"
      },
      {
        "code" : "ECON",
        "display" : "emergency contact"
      },
      {
        "code" : "GUARD",
        "display" : "guardian"
      },
      {
        "code" : "FAMMEMB",
        "display" : "family member"
      },
      {
        "code" : "PRN",
        "display" : "parent"
      },
      {
        "code" : "FTH",
        "display" : "father"
      },
      {
        "code" : "MTH",
        "display" : "mother"
      },
      {
        "code" : "SPS",
        "display" : "spouse"
      },
      {
        "code" : "CHILD",
        "display" : "child"
      },
      {
        "code" : "FRND",
        "display" : "unrelated friend"
      }]
    }]
  }
}

```
