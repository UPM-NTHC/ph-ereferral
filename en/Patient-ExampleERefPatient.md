# Example eReferral Patient — Ana Reyes - PH eReferral Implementation Guide v0.1.0

## Example Patient: Example eReferral Patient — Ana Reyes

Profile: [ERefPatient](StructureDefinition-ereferral-patient.md)

Ana Luisa Reyes (official) Female, DoB: 1988-03-12 ( http://philhealth.gov.ph/fhir/Identifier/philhealth-id#PhilHealthID#78-658064775-3)

-------

| | |
| :--- | :--- |
| Active: | true |
| Other Id: | [PhilSysID](https://build.fhir.org/ig/UPM-NTHC/ph-core/NamingSystem-PhilSysIDNS.html)/7731-0812-4491-0326 |
| Contact Detail | * [+63-919-876-5432](tel:+63-919-876-5432)
* Area 4, Barangay Mabuhay 5600 PH (home)
 |
| Husband: | * Roberto Reyes (Official)
 |



## Resource Content

```json
{
  "resourceType" : "Patient",
  "id" : "ExampleERefPatient",
  "meta" : {
    "profile" : ["https://fhir.doh.gov.ph/pheref/StructureDefinition/ereferral-patient"]
  },
  "identifier" : [{
    "system" : "http://philhealth.gov.ph/fhir/Identifier/philhealth-id",
    "value" : "78-658064775-3"
  },
  {
    "system" : "http://philsys.gov.ph/fhir/Identifier/philsys-id",
    "value" : "7731-0812-4491-0326"
  }],
  "active" : true,
  "name" : [{
    "use" : "official",
    "family" : "Reyes",
    "given" : ["Ana", "Luisa"]
  }],
  "telecom" : [{
    "system" : "phone",
    "value" : "+63-919-876-5432",
    "use" : "mobile"
  }],
  "gender" : "female",
  "birthDate" : "1988-03-12",
  "address" : [{
    "extension" : [{
      "url" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/region",
      "valueCoding" : {
        "system" : "https://psa.gov.ph/classification/psgc",
        "code" : "0600000000",
        "display" : "Region VI (Western Visayas)"
      }
    },
    {
      "url" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/province",
      "valueCoding" : {
        "system" : "https://psa.gov.ph/classification/psgc",
        "code" : "0600400000",
        "display" : "Aklan"
      }
    },
    {
      "url" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/city-municipality",
      "valueCoding" : {
        "system" : "https://psa.gov.ph/classification/psgc",
        "code" : "0600407000",
        "display" : "Kalibo"
      }
    },
    {
      "url" : "https://fhir.doh.gov.ph/phcore/StructureDefinition/barangay",
      "valueCoding" : {
        "system" : "https://psa.gov.ph/classification/psgc",
        "code" : "0600407013",
        "display" : "Poblacion"
      }
    }],
    "use" : "home",
    "line" : ["Area 4, Barangay Mabuhay"],
    "postalCode" : "5600",
    "country" : "PH"
  }],
  "contact" : [{
    "relationship" : [{
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
        "code" : "HUSB",
        "display" : "Husband"
      }]
    }],
    "name" : {
      "use" : "official",
      "family" : "Reyes",
      "given" : ["Roberto"]
    }
  }]
}

```
