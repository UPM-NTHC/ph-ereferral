# PWD Disability Registration - PH eReferral Implementation Guide v0.1.0

## Extension: PWD Disability Registration (Experimental) 

Extension for Person With Disability (PWD) registration information in the Philippine eReferral system. Captures PWD ID number, disability type, and ID expiration date.

**Context of Use**

**Usage info**

**Usages:**

* This Extension is not used by any profiles in this Specification

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.ph.ereferral|current/StructureDefinition/StructureDefinition-ereferral-pwd-disability.json)

### Formal Views of Extension Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-ereferral-pwd-disability.csv), [Excel](../StructureDefinition-ereferral-pwd-disability.xlsx), [Schematron](../StructureDefinition-ereferral-pwd-disability.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ereferral-pwd-disability",
  "url" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-pwd-disability",
  "version" : "0.1.0",
  "name" : "PWDDisabilityExtension",
  "title" : "PWD Disability Registration",
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
  "description" : "Extension for Person With Disability (PWD) registration information in the Philippine eReferral system. Captures PWD ID number, disability type, and ID expiration date.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "PH",
      "display" : "Philippines"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  }],
  "kind" : "complex-type",
  "abstract" : false,
  "context" : [{
    "type" : "element",
    "expression" : "Patient"
  }],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension",
      "short" : "PWD Disability Registration",
      "definition" : "Extension for Person With Disability (PWD) registration information in the Philippine eReferral system. Captures PWD ID number, disability type, and ID expiration date."
    },
    {
      "id" : "Extension.extension:pwdId",
      "path" : "Extension.extension",
      "sliceName" : "pwdId",
      "short" : "PWD ID Number",
      "definition" : "The unique identification number from the PWD ID card issued by the PDAO (Persons with Disability Affairs Office).",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Extension.extension:pwdId.extension",
      "path" : "Extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.extension:pwdId.url",
      "path" : "Extension.extension.url",
      "fixedUri" : "pwdId"
    },
    {
      "id" : "Extension.extension:pwdId.value[x]",
      "path" : "Extension.extension.value[x]",
      "type" : [{
        "code" : "string"
      }]
    },
    {
      "id" : "Extension.extension:disabilityType",
      "path" : "Extension.extension",
      "sliceName" : "disabilityType",
      "short" : "Type of Disability",
      "definition" : "The type/category of disability as classified by the Philippine government. Multiple types may be specified.",
      "min" : 0,
      "max" : "*"
    },
    {
      "id" : "Extension.extension:disabilityType.extension",
      "path" : "Extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.extension:disabilityType.url",
      "path" : "Extension.extension.url",
      "fixedUri" : "disabilityType"
    },
    {
      "id" : "Extension.extension:disabilityType.value[x]",
      "path" : "Extension.extension.value[x]",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://fhir.doh.gov.ph/pheref/ValueSet/pwd-disability-type-vs"
      }
    },
    {
      "id" : "Extension.extension:idExpirationDate",
      "path" : "Extension.extension",
      "sliceName" : "idExpirationDate",
      "short" : "PWD ID Expiration Date",
      "definition" : "The expiration date of the PWD ID card. PWD IDs are typically valid for 3 years or 5 years for senior citizens with disability.",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Extension.extension:idExpirationDate.extension",
      "path" : "Extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.extension:idExpirationDate.url",
      "path" : "Extension.extension.url",
      "fixedUri" : "idExpirationDate"
    },
    {
      "id" : "Extension.extension:idExpirationDate.value[x]",
      "path" : "Extension.extension.value[x]",
      "type" : [{
        "code" : "date"
      }]
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-pwd-disability"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "max" : "0"
    }]
  }
}

```
