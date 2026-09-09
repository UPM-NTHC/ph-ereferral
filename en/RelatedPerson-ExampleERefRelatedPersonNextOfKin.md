# Example ERefRelatedPerson - Next of Kin - PH eReferral Implementation Guide v0.1.0

## Example RelatedPerson: Example ERefRelatedPerson - Next of Kin

Profile: [EReferral RelatedPerson](StructureDefinition-ereferral-related-person.md)

**active**: true

**patient**: [Ana Luisa Reyes (official) Female, DoB: 1988-03-12 ( http://philhealth.gov.ph/fhir/Identifier/philhealth-id#PhilHealthID#78-658064775-3)](Patient-ExampleERefPatient.md)

**relationship**: next of kin, husband

**name**: Roberto Reyes (Official)

**telecom**: [+639189876543](tel:+639189876543)



## Resource Content

```json
{
  "resourceType" : "RelatedPerson",
  "id" : "ExampleERefRelatedPersonNextOfKin",
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
      "code" : "NOK",
      "display" : "next of kin"
    }]
  },
  {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
      "code" : "HUSB",
      "display" : "husband"
    }]
  }],
  "name" : [{
    "use" : "official",
    "family" : "Reyes",
    "given" : ["Roberto"]
  }],
  "telecom" : [{
    "system" : "phone",
    "value" : "+639189876543",
    "use" : "mobile"
  }]
}

```
