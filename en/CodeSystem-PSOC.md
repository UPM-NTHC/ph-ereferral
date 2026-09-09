# PSOC - PH eReferral Implementation Guide v0.1.0

## CodeSystem: PSOC 

 
Philippine Standard Occupational Classification (fragment — healthcare-relevant codes) 

This Code system is referenced in the definition of the following value sets:

* [Practitioner Role VS](ValueSet-vs-practitioner-role.md)

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "PSOC",
  "url" : "https://fhir.doh.gov.ph/phcore/CodeSystem/PSOC",
  "version" : "0.1.0",
  "name" : "PHCorePSOC",
  "title" : "PSOC",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-09-09T03:53:23+00:00",
  "publisher" : "SILab CoP IG Accelerator (eReferral)",
  "contact" : [{
    "name" : "SILab CoP IG Accelerator (eReferral)",
    "telecom" : [{
      "system" : "url",
      "value" : "https://github.com/UP-Manila-SILab"
    }]
  }],
  "description" : "Philippine Standard Occupational Classification (fragment — healthcare-relevant codes)",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "PH",
      "display" : "Philippines"
    }]
  }],
  "caseSensitive" : true,
  "content" : "fragment",
  "concept" : [{
    "code" : "2211",
    "display" : "Generalist medical practitioners",
    "definition" : "Generalist medical practitioners"
  },
  {
    "code" : "2212",
    "display" : "Specialist medical practitioners",
    "definition" : "Specialist medical practitioners"
  },
  {
    "code" : "2221",
    "display" : "Nursing professionals",
    "definition" : "Nursing professionals"
  },
  {
    "code" : "2222",
    "display" : "Midwifery professionals",
    "definition" : "Midwifery professionals"
  },
  {
    "code" : "2261",
    "display" : "Dentists",
    "definition" : "Dentists"
  },
  {
    "code" : "2262",
    "display" : "Pharmacists",
    "definition" : "Pharmacists"
  },
  {
    "code" : "2267",
    "display" : "Optometrists and ophthalmic opticians",
    "definition" : "Optometrists and ophthalmic opticians"
  },
  {
    "code" : "1342",
    "display" : "Health services managers",
    "definition" : "Health services managers"
  },
  {
    "code" : "3253",
    "display" : "Community health workers",
    "definition" : "Community health workers"
  },
  {
    "code" : "5321",
    "display" : "Healthcare assistants",
    "definition" : "Healthcare assistants"
  }]
}

```
