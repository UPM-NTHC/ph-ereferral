# PWD Disability Type Code System - PH eReferral Implementation Guide v0.1.0

## CodeSystem: PWD Disability Type Code System (Experimental) 

 
Code system for types of disability as defined by the Philippine government for PWD registration. 

This Code system is referenced in the definition of the following value sets:

* [PWD Disability Type Value Set](ValueSet-pwd-disability-type-vs.md)

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "pwd-disability-type-cs",
  "url" : "https://fhir.doh.gov.ph/pheref/CodeSystem/pwd-disability-type-cs",
  "version" : "0.1.0",
  "name" : "PWDDisabilityTypeCS",
  "title" : "PWD Disability Type Code System",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-09-09T03:53:23+00:00",
  "publisher" : "SILab CoP IG Accelerator (eReferral)",
  "contact" : [{
    "name" : "SILab CoP IG Accelerator (eReferral)",
    "telecom" : [{
      "system" : "url",
      "value" : "https://github.com/UP-Manila-SILab"
    }]
  }],
  "description" : "Code system for types of disability as defined by the Philippine government for PWD registration.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "PH",
      "display" : "Philippines"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 9,
  "concept" : [{
    "code" : "visual",
    "display" : "Visual Disability",
    "definition" : "Complete or partial loss of sight/visual function."
  },
  {
    "code" : "hearing",
    "display" : "Hearing Disability",
    "definition" : "Complete or partial loss of hearing/hearing function."
  },
  {
    "code" : "speech",
    "display" : "Speech Impairment",
    "definition" : "Complete or partial loss of speech or communication function."
  },
  {
    "code" : "physical",
    "display" : "Physical/Orthopedic Disability",
    "definition" : "Impairment in physical/orthopedic function including locomotor disabilities."
  },
  {
    "code" : "intellectual",
    "display" : "Intellectual Disability",
    "definition" : "Significant limitations in intellectual functioning and adaptive behavior."
  },
  {
    "code" : "learning",
    "display" : "Learning Disability",
    "definition" : "Neurological disorders affecting acquisition and use of listening, speaking, reading, writing, reasoning, or mathematical abilities."
  },
  {
    "code" : "psychosocial",
    "display" : "Psychosocial Disability",
    "definition" : "Mental health conditions and psychosocial impairments."
  },
  {
    "code" : "visual-low-vision",
    "display" : "Low Vision",
    "definition" : "Significant visual impairment not correctable by standard glasses/contact lenses."
  },
  {
    "code" : "visual-blindness",
    "display" : "Blindness",
    "definition" : "Complete loss of vision or light perception."
  }]
}

```
