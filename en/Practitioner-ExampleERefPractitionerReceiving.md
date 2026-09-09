# Example Receiving Practitioner — Dr. Carlos Lim - PH eReferral Implementation Guide v0.1.0

## Example Practitioner: Example Receiving Practitioner — Dr. Carlos Lim

Profile: [PH Core Practitioner](https://build.fhir.org/ig/UPM-NTHC/ph-core/StructureDefinition-ph-core-practitioner.html)

**identifier**: `https://prc.gov.ph/`/7890123

**name**: Carlos Lim (Official)



## Resource Content

```json
{
  "resourceType" : "Practitioner",
  "id" : "ExampleERefPractitionerReceiving",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-practitioner"]
  },
  "identifier" : [{
    "system" : "https://prc.gov.ph/",
    "value" : "7890123"
  }],
  "name" : [{
    "use" : "official",
    "family" : "Lim",
    "given" : ["Carlos"],
    "prefix" : ["Dr."]
  }]
}

```
