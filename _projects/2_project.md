---
layout: page
title: Accessible Spanish Texts with LanguageTool
description: Enabling Lectura Fácil (Easy-to-Read Spanish) through a custom authoring assistant
img: assets/img/languagetool.jpg
importance: 2
category: work
#giscus_comments: true
---

---

## Overview  
**Context**  
Accessible text design for readers with cognitive or learning disabilities is essential. However, the production of *Easy-to-Read* (E2R) or E2R Spanish *Lectura Fácil* (LF) content remains labor-intensive. Manual adaptation of texts involves rewriting for simpler vocabulary, shorter sentences, layout, and clarity.  
This study investigated how a tool built on *LanguageTool* (an open-source writing assistant) could support adaptation of Spanish texts into LF by detecting guideline violations, offering simplifications and definitions. 

**My Role**  
Lead researcher: defined the functional requirements of the tool (named *LFWriteAssist*), aligned LF guidelines with *LanguageTool* custom rules, implemented vocabulary simplification modules, and documented limitations and user-flow design.  

**Timeline**  
Approximately 3 months (tool prototype stage, usability testing and development of more rules still pending)

**Team & Collaboration**  
Partnered with linguistic accessibility experts at Hochschule Darmstadt (Germany) and HiTZ Center (Basque Country) 

---

## 🎯 Research Question  
> How can LanguageTool be adapted into a Computer‐Assisted Translation (CAT) tool to support Spanish LF content creation, and what are the benefits and limitations of such an approach?

---

## Methods  
**Approach**  
- Analyzed the UNE 153101:2018 EX LF standard for LF to identify vocabulary, syntax, layout, and style rules.  
- Created a set of custom rules in *LanguageTool* (via XML configuration) to flag LF rule-compliance issues: long words, figurative language, acronyms, complex sentences, etc. 
- Integrated external resources: [*Diccionario Fácil*](https://www.diccionariofacil.org) (easy definitions for complex or polysemous terms) and [*EASIER*](https://github.com/LURMORENO/EASIER_CORPUS) corpus synonyms for readers with cognitive impairments.  
- Built an interface (*LFWriteAssist*) with three panels: input text, suggestions/definitions panel, and automatically corrected output. Rules applied colours (green = auto-changed, orange = flagged for review).  
- Conducted an internal evaluation: rule creation, tool deployment in prototype form; documented limitations (no user-testing yet). 

**Why this approach?**  
- Combines linguistic guideline translation into automated rule-based checks.  
- The tool is designed for professional LF translators and editors, aiming to support their workflow efficiency and consistency.  
- Provides evidence of knowledge translation into tools.

---

## Key Findings & Insights  
- The prototype shows that a writing‐assistant can substantially support the first pass of LF adaptation by flagging vocabulary, acronyms, and long phrases. 
- Some rules are straightforward to encode (e.g., avoid figurative speech, expand abbreviations), but others (e.g., avoid unnecessary words, layout/style guidance) are difficult to formalize in rule-based systems. 
- The tool covers Spanish vocabulary and syntax, but does **not** yet address visual design/layout or user-interaction aspects of LF texts. This is an important gap for full accessibility. 
- User validation remains pending. The tool is aimed at LF content creators, not direct readers with disabilities at this stage. Usability and reader comprehension outcomes are yet to be evaluated.  


---

## Design Recommendations & Impact  

**Recommendations**  
- Integrate the tool into a browser/online platform to reduce installation barriers for accessibility practitioners. 
- Conduct usability testing with LF translators to assess tool effectiveness, workflow impact, and comprehension outcomes. 
- Extend rule-based system with layout checks (e.g., line breaks, typography, font, spacing). 


**Impact**  
- Highlighted the value of collaboration between accessibility experts, linguists, and engineers to make inclusive writing scalable.
- Showed that accessibility principles from linguistic research can be operationalized into automated authoring support. 
- Offered a reproducible methodology for developing assistive writing. 


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/lfwriteassist.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Interface of the LFWriteAssist tool displaying an example text
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/lfwriteassist2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
        Interface of the LFWriteAssist tool displaying an example text and explanations of the different components
</div>
---

## Reflections   
- **Working with guidelines**: Translating textual guidelines into actionable rules is challenging — you learn to balance precision vs ambiguity.  
- **Tooling vs users**: Building for accessibility means thinking beyond vocabulary. Layout, information density... all matter, and tool alone is not enough.  
- **Iterative mindset**: The tool is a prototype, and next phases involve user feedback and real-world integration. I gained experience designing for specific users in mind and bridging technical implementation with user-centric goals.  
- If repeated: I would embed an end‐user study early (LF translators in this case) to measure comprehension gain and incorporate accessibility metrics (time to read, error rate) rather than only rule-compliance.

---

## Outcome Statement  
> By developing an authoring assistant for LF using *LanguageTool*, I showed how linguistic guidelines, automation, and inclusive design can align — while also uncovering critical gaps around layout, user testing, and human-in-the-loop workflows. This project strengthens my capability to lead UX research and tooling for accessible language technology.



[📄 Read the full paper here: Madina, M., Gonzalez-Dios, I., & Siegel, M. (2024, May). LanguageTool as a CAT tool for Easy-to-Read in Spanish. In Proceedings of the 3rd Workshop on Tools and Resources for People with REAding DIfficulties (READI)@ LREC-COLING 2024 (pp. 93-101).](https://aclanthology.org/2024.readi-1.8.pdf)



