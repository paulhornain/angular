# 6.1 Vulnerable Components Overview

- The rank of this vulnerability moved from rank 9 to rank 6 in Owasp Top 10 2021

- Components (libraries, framework, software modules,...) run with the **same privileges** as the application.

- If a vulnerable component is exploited, the attack can result to serious **data loss** or **server takeover**.

- Scope:

    - Server-side frameworks & applications (J2EE/Spring applications, SOA, batchs,...)
    - Client-side frameworks & applications (webapp, SPA, JS frameworks,...)
    - Proprietary & Open-source products/frameworks/projects.
    
Examples:

- Log4Shell CVE-2021-44228, a zero-day vulnerability in Log4j component, allowing arbitrary requests to LDAP and JNDI servers.
- Equifax (a US credit bureau organization)- breach due to unpatched CVE-2017-5638 Apache Struts web framework

