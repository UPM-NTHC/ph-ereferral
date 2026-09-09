# PHCW - PH eReferral Implementation Guide v0.1.0

## CodeSystem: PHCW 

 
Philippines Healthcare Workers Code System 

This Code system is referenced in the definition of the following value sets:

* [Practitioner Role VS](ValueSet-vs-practitioner-role.md)

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "PHCW",
  "url" : "https://fhir.doh.gov.ph/phcore/CodeSystem/PHCW",
  "version" : "0.1.0",
  "name" : "PHCorePHCW",
  "title" : "PHCW",
  "status" : "active",
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
  "description" : "Philippines Healthcare Workers Code System",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "PH",
      "display" : "Philippines"
    }]
  }],
  "caseSensitive" : true,
  "content" : "fragment",
  "concept" : [{
    "code" : "PCW",
    "display" : "Primary Care Worker",
    "definition" : "Primary Care Worker"
  }]
}

```
