# 6.2 Vulnerable Components Detection

## How do I know if my application has vulnerable components ?

**Software composition Analysis** (SCA) tools enable you to **perform automated scan** of all client-side and server-side components, and their dependencies used in your web application.
These SCA tools continuously **monitor** vulnerabilities databases like NVD or OSS Index and alert you of potential threats in your project.
Here is a list of SCA tools we recommend to use: Dependency-Track, Dependency-Check

::: warning
SCA reports requires further analysis from your end in order to identify the real impact based on your context and **filter out false positives**.
:::

## Detecting known vulnerable JavaScript libraries with npm audit

npm provides an embedded dependency scanning during each compilation and provides an overview of vulnerable components present in your application.
You can decide to upgrade the component as suggested by npm during the compilation.

## Detecting known vulnerable maven dependencies with Dependency-Check

- Dependency-Check: Open source, maven plugin
- Features:
    - Scan all maven dependencies
    - Access to the NVD and check CVE
    - Generate a complete report (HTML format): vulnerabilities, criticality level, CVE code, patched versions ...
    
- Execute the maven command mvn org.owasp:dependency-check-maven:check

- See usage & configuration

## Tracking project vulnerabilities with Dependency-Track

Dependency-Track is an **Open source** tool provided by OWASP which allows continuous component analysis.

Features:
- CycloneDX and SPDX bill-of-material formats
- Dependency-Check XML
- Jenkins and gitlab-ci integration
