# Example Antibiotic Administration - PH eReferral Implementation Guide v0.1.0

## Example MedicationAdministration: Example Antibiotic Administration

Profile: [EReferral MedicationAdministration](StructureDefinition-ereferral-medication-administration.md)

**status**: Completed

**medication**: [Medication Substance](Medication-ExampleERefMedicationAntibiotic.md)

**subject**: [Ana Luisa Reyes (official) Female, DoB: 1988-03-12 ( http://philhealth.gov.ph/fhir/Identifier/philhealth-id#PhilHealthID#78-658064775-3)](Patient-ExampleERefPatient.md)

**effective**: 2026-06-18 08:00:00+0800 --> 2026-06-18 08:30:00+0800

### Performers

| | | |
| :--- | :--- | :--- |
| - | **Function** | **Actor** |
| * | Medical practitioner | [Practitioner Maria Villanueva (official)](Practitioner-ExampleERefPractitionerSubmission.md) |

**note**: 

> 

Administered as part of pre-referral treatment for suspected sepsis.


### Dosages

| | | | |
| :--- | :--- | :--- | :--- |
| - | **Site** | **Route** | **Dose** |
| * | Structure of median cubital vein | Intravenous route | 750 mg (Details: UCUM codemg = 'mg') |



## Resource Content

```json
{
  "resourceType" : "MedicationAdministration",
  "id" : "ExampleERefMedicationAdministrationAntibiotic",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-medication-administration"]
  },
  "status" : "completed",
  "medicationReference" : {
    "reference" : "Medication/ExampleERefMedicationAntibiotic"
  },
  "subject" : {
    "reference" : "Patient/ExampleERefPatient"
  },
  "effectivePeriod" : {
    "start" : "2026-06-18T08:00:00+08:00",
    "end" : "2026-06-18T08:30:00+08:00"
  },
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
    "text" : "Administered as part of pre-referral treatment for suspected sepsis."
  }],
  "dosage" : {
    "site" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "49852007",
        "display" : "Structure of median cubital vein"
      }]
    },
    "route" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "47625008",
        "display" : "Intravenous route"
      }]
    },
    "dose" : {
      "value" : 750,
      "unit" : "mg",
      "system" : "http://unitsofmeasure.org",
      "code" : "mg"
    }
  }
}

```
