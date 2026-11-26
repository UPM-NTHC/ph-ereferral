# Example Body Temperature — Ana Reyes - PH eReferral Implementation Guide v0.1.0

## Example Observation: Example Body Temperature — Ana Reyes

Profile: [EReferral Observation](StructureDefinition-ereferral-observation.md)

**status**: Final

**category**: Vital Signs

**code**: Body temperature

**subject**: [Ana Luisa Reyes (official) Female, DoB: 1988-03-12 ( http://philhealth.gov.ph/fhir/Identifier/philhealth-id#PhilHealthID#78-658064775-3)](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-d7e33c3b-e90b-464e-a5eb-a92f60c71542)

**encounter**: [Encounter: status = finished; class = ambulatory (ActCode#AMB)](Bundle-ExampleERefSubmissionBundle.md#urn-uuid-a86d5b74-f8b5-42c2-b27a-5faff8d84cce)

**effective**: 2026-06-18 08:15:00+0800

**value**: 36.8 Celsius (Details: UCUM codeCel = 'Cel')



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "ExampleERefObservationTemp",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-observation"]
  },
  "status" : "final",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/observation-category",
      "code" : "vital-signs",
      "display" : "Vital Signs"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "8310-5",
      "display" : "Body temperature"
    },
    {
      "system" : "http://snomed.info/sct",
      "code" : "386725007",
      "display" : "Body temperature"
    }]
  },
  "subject" : {
    "reference" : "urn:uuid:d7e33c3b-e90b-464e-a5eb-a92f60c71542"
  },
  "encounter" : {
    "reference" : "urn:uuid:a86d5b74-f8b5-42c2-b27a-5faff8d84cce"
  },
  "effectiveDateTime" : "2026-06-18T08:15:00+08:00",
  "valueQuantity" : {
    "value" : 36.8,
    "unit" : "Celsius",
    "system" : "http://unitsofmeasure.org",
    "code" : "Cel"
  }
}

```
