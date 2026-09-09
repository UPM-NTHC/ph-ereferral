# PWD Disability Type Value Set - PH eReferral Implementation Guide v0.1.0

## ValueSet: PWD Disability Type Value Set (Experimental) 

 
Value set for types of disability as defined by the Philippine government for PWD registration. 

 **References** 

* [PWD Disability Registration](StructureDefinition-ereferral-pwd-disability.md)

### Logical Definition (CLD)

 

### Expansion

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "pwd-disability-type-vs",
  "url" : "https://fhir.doh.gov.ph/pheref/ValueSet/pwd-disability-type-vs",
  "version" : "0.1.0",
  "name" : "PWDDisabilityTypeVS",
  "title" : "PWD Disability Type Value Set",
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
  "description" : "Value set for types of disability as defined by the Philippine government for PWD registration.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "PH",
      "display" : "Philippines"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://fhir.doh.gov.ph/pheref/CodeSystem/pwd-disability-type-cs"
    }]
  }
}

```
