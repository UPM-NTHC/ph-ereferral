# Example Referring Practitioner — Dr. Maria Villanueva - PH eReferral Implementation Guide v0.1.0

## Example Practitioner: Example Referring Practitioner — Dr. Maria Villanueva

Profile: [PH Core Practitioner](https://build.fhir.org/ig/UPM-NTHC/ph-core/StructureDefinition-ph-core-practitioner.html)

**identifier**: `https://prc.gov.ph/`/5466863

**name**: Maria Villanueva (Official)



## Resource Content

```json
{
  "resourceType" : "Practitioner",
  "id" : "ExampleERefPractitionerSubmission",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-practitioner"]
  },
  "identifier" : [{
    "system" : "https://prc.gov.ph/",
    "value" : "5466863"
  }],
  "name" : [{
    "use" : "official",
    "family" : "Villanueva",
    "given" : ["Maria"],
    "prefix" : ["Dr."]
  }]
}

```
