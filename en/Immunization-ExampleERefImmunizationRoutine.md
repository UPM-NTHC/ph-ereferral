# ERefImmunization Example - Routine Immunization (MMR) - PH eReferral Implementation Guide v0.1.0

## Example Immunization: ERefImmunization Example - Routine Immunization (MMR)

Profile: [ERefImmunization](StructureDefinition-ereferral-immunization.md)

**identifier**: `http://example.ph/immunization-records`/IMM-2025-00123

**status**: Completed

**vaccineCode**: MMR (measles and mumps and rubella) vaccine

**patient**: [Ana Luisa Reyes (official) Female, DoB: 1988-03-12 ( http://philhealth.gov.ph/fhir/Identifier/philhealth-id#PhilHealthID#78-658064775-3)](Patient-ExampleERefPatient.md)

**occurrence**: 2025-03-15

**recorded**: 2025-03-15 09:30:00+0800

**primarySource**: true

**location**: Quezon City Health Center No. 1

**manufacturer**: Serum Institute of India

**lotNumber**: LOT-2025-MMR-0045

**expirationDate**: 2026-12-31

**site**: Structure of left thigh

**route**: Subcutaneous route

**doseQuantity**: 0.5 mL (Details: UCUM codemL = 'mL')

### Performers

| | | |
| :--- | :--- | :--- |
| - | **Function** | **Actor** |
| * | Administering Provider | Nurse Maria Santos, RN |

**reasonCode**: Administration of vaccine to produce active immunity (procedure)

**isSubpotent**: false

**programEligibility**: Eligible - DOH Expanded Program on Immunization (EPI)

**fundingSource**: Public

> **protocolApplied****series**: MMR 2-Dose Series**targetDisease**: Measles (disorder), Mumps (disorder), Rubella (disorder)**doseNumber**: 1**seriesDoses**: 2



## Resource Content

```json
{
  "resourceType" : "Immunization",
  "id" : "ExampleERefImmunizationRoutine",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-immunization"]
  },
  "identifier" : [{
    "system" : "http://example.ph/immunization-records",
    "value" : "IMM-2025-00123"
  }],
  "status" : "completed",
  "vaccineCode" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "871831003",
      "display" : "MMR (measles and mumps and rubella) vaccine"
    }]
  },
  "patient" : {
    "reference" : "Patient/ExampleERefPatient"
  },
  "occurrenceDateTime" : "2025-03-15",
  "recorded" : "2025-03-15T09:30:00+08:00",
  "primarySource" : true,
  "location" : {
    "display" : "Quezon City Health Center No. 1"
  },
  "manufacturer" : {
    "display" : "Serum Institute of India"
  },
  "lotNumber" : "LOT-2025-MMR-0045",
  "expirationDate" : "2026-12-31",
  "site" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "61396006",
      "display" : "Structure of left thigh"
    }]
  },
  "route" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "34206005",
      "display" : "Subcutaneous route"
    }]
  },
  "doseQuantity" : {
    "value" : 0.5,
    "unit" : "mL",
    "system" : "http://unitsofmeasure.org",
    "code" : "mL"
  },
  "performer" : [{
    "function" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v2-0443",
        "code" : "AP",
        "display" : "Administering Provider"
      }]
    },
    "actor" : {
      "display" : "Nurse Maria Santos, RN"
    }
  }],
  "reasonCode" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "33879002",
      "display" : "Administration of vaccine to produce active immunity (procedure)"
    }]
  }],
  "isSubpotent" : false,
  "programEligibility" : [{
    "text" : "Eligible - DOH Expanded Program on Immunization (EPI)"
  }],
  "fundingSource" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
      "code" : "public",
      "display" : "Public"
    }]
  },
  "protocolApplied" : [{
    "series" : "MMR 2-Dose Series",
    "targetDisease" : [{
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "14189004",
        "display" : "Measles (disorder)"
      }]
    },
    {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "36989005",
        "display" : "Mumps (disorder)"
      }]
    },
    {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "36653000",
        "display" : "Rubella (disorder)"
      }]
    }],
    "doseNumberPositiveInt" : 1,
    "seriesDosesPositiveInt" : 2
  }]
}

```
