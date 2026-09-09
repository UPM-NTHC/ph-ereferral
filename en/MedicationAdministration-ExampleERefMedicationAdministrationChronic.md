# Example Chronic Medication Administration - PH eReferral Implementation Guide v0.1.0

## Example MedicationAdministration: Example Chronic Medication Administration

Profile: [EReferral MedicationAdministration](StructureDefinition-ereferral-medication-administration.md)

**status**: Completed

**medication**: [Medication Substance](Medication-ExampleERefMedicationTwinact.md)

**subject**: [Ana Luisa Reyes (official) Female, DoB: 1988-03-12 ( http://philhealth.gov.ph/fhir/Identifier/philhealth-id#PhilHealthID#78-658064775-3)](Patient-ExampleERefPatient.md)

**effective**: 2026-06-18 07:00:00+0800

### Performers

| | | |
| :--- | :--- | :--- |
| - | **Function** | **Actor** |
| * | Medical practitioner | [Practitioner Maria Villanueva (official)](Practitioner-ExampleERefPractitionerSubmission.md) |

**note**: 

> 

Patient's regular morning antihypertensive medication given before referral.


### Dosages

| | | |
| :--- | :--- | :--- |
| - | **Route** | **Dose** |
| * | Oral route | 1 tablet (Details: UCUM code{tablet} = '{tablet}') |



## Resource Content

```json
{
  "resourceType" : "MedicationAdministration",
  "id" : "ExampleERefMedicationAdministrationChronic",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-medication-administration"]
  },
  "status" : "completed",
  "medicationReference" : {
    "reference" : "Medication/ExampleERefMedicationTwinact"
  },
  "subject" : {
    "reference" : "Patient/ExampleERefPatient"
  },
  "effectiveDateTime" : "2026-06-18T07:00:00+08:00",
  "performer" : [{
    "function" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "158965000",
        "display" : "Medical practitioner"
      }]
    },
    "actor" : {
      "reference" : "Practitioner/ExampleERefPractitionerSubmission"
    }
  }],
  "note" : [{
    "text" : "Patient's regular morning antihypertensive medication given before referral."
  }],
  "dosage" : {
    "route" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "26643006",
        "display" : "Oral route"
      }]
    },
    "dose" : {
      "value" : 1,
      "unit" : "tablet",
      "system" : "http://unitsofmeasure.org",
      "code" : "{tablet}"
    }
  }
}

```
