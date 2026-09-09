# Example Cefuroxime Medication - PH eReferral Implementation Guide v0.1.0

## Example Medication: Example Cefuroxime Medication

Profile: [PH Core Medication](https://build.fhir.org/ig/UPM-NTHC/ph-core/StructureDefinition-ph-core-medication.html)

**code**: Cefuroxime 750mg IV (antibiotic)

**status**: Active



## Resource Content

```json
{
  "resourceType" : "Medication",
  "id" : "ExampleERefMedicationAntibiotic",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-medication"]
  },
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "105590001",
      "display" : "Substance"
    }],
    "text" : "Cefuroxime 750mg IV (antibiotic)"
  },
  "status" : "active"
}

```
