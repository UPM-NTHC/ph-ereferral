# Example Twinact Medication - PH eReferral Implementation Guide v0.1.0

## Example Medication: Example Twinact Medication

Profile: [PH Core Medication](https://build.fhir.org/ig/UPM-NTHC/ph-core/StructureDefinition-ph-core-medication.html)

**code**: Twinact (Telmisartan 80mg + Amlodipine 5mg) - antihypertensive

**status**: Active



## Resource Content

```json
{
  "resourceType" : "Medication",
  "id" : "ExampleERefMedicationTwinact",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/phcore/StructureDefinition/ph-core-medication"]
  },
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "105590001",
      "display" : "Substance"
    }],
    "text" : "Twinact (Telmisartan 80mg + Amlodipine 5mg) - antihypertensive"
  },
  "status" : "active"
}

```
