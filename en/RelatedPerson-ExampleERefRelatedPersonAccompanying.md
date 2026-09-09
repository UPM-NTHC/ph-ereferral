# Example ERefRelatedPerson - Accompanying Person - PH eReferral Implementation Guide v0.1.0

## Example RelatedPerson: Example ERefRelatedPerson - Accompanying Person

Profile: [EReferral RelatedPerson](StructureDefinition-ereferral-related-person.md)

**active**: true

**patient**: [Ana Luisa Reyes (official) Female, DoB: 1988-03-12 ( http://philhealth.gov.ph/fhir/Identifier/philhealth-id#PhilHealthID#78-658064775-3)](Patient-ExampleERefPatient.md)

**relationship**: emergency contact, mother

**name**: Maria Reyes (Official)

**telecom**: [+639171112222](tel:+639171112222)



## Resource Content

```json
{
  "resourceType" : "RelatedPerson",
  "id" : "ExampleERefRelatedPersonAccompanying",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-related-person"]
  },
  "active" : true,
  "patient" : {
    "reference" : "Patient/ExampleERefPatient"
  },
  "relationship" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
      "code" : "ECON",
      "display" : "emergency contact"
    }]
  },
  {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
      "code" : "MTH",
      "display" : "mother"
    }]
  }],
  "name" : [{
    "use" : "official",
    "family" : "Reyes",
    "given" : ["Maria"]
  }],
  "telecom" : [{
    "system" : "phone",
    "value" : "+639171112222",
    "use" : "mobile"
  }]
}

```
