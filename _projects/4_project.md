---
layout: page
title: Towards Reliable Easy-to-Read (E2R) Texts 
description: A proposal for standardized evaluation practices for accessible Spanish texts
img:
importance: 3
category: fun
---

## Overview  
**Context.**  
Creating truly accessible Easy-to-Read (E2R) texts involves more than simplifying vocabulary; it requires consistent evaluation of readability, layout, and comprehension. This study introduces a **three-stage evaluation method** to assess E2R texts in Spanish, addressing gaps in current practice.
**My Role.**  
Lead researcher: designed the evaluation framework, conducted pilot evaluations, and derived recommendations for E2R evaluation method implementation.  
**Timeline.**  
Approximately 3 months 
**Team & Collaboration.**  
Worked with collaborators at Hochschule Darmstadt (Germany) and HiTZ Center (Basque Country).  

---

## 🎯 Research Question  
> How can we develop and validate a standardized evaluation method for E2R texts that ensures reliability, comparability, and accessibility?

---

## 🔍 Methods  
**Approach.**  
Defined a three-stage evaluation process:  
   - **Automatic evaluation** (quantitative metrics: word length, sentence length, frequency of complex terms, among others)  
   - **Checklist-based manual evaluation** (human annotators assess readability and layout)  
   - **User comprehension testing** (target users read and evaluate adaptation quality) 
Collected & compared data from all three stages to evaluate validity and reliability of the pipeline.  

**Why this approach?**  
Combining quantitative, manual, and user-based methods enables a multi-layered assessment of accessibility—capturing metrics, expert judgement, and lived user experience.

---

## 💡 Key Findings & Insights  
- Automatic metrics alone (e.g., sentence length, lexical complexity) often fail to capture layout or structural features critical for E2R readability. :contentReference[oaicite:3]{index=3}  
- Manual review adds nuance but is time-intensive and subject to annotator variability—highlighting need for clear guidelines and inter-rater calibration.  
- User comprehension testing proved indispensable: texts passing automatic and manual checks sometimes still posed comprehension issues for readers with cognitive disabilities.  
- A **hierarchical evaluation pipeline** (from automatic to user-based) supports earlier detection of accessibility issues and better workflow for practitioners.

---

## 🧩 Design Recommendations & Impact  
**Recommendations.**  
- Employ the evaluation pipeline as a **standard QA workflow** for E2R text production—starting with automated checks, then expert review, then user testing.  
- Develop tool-support (plugins or dashboards) to automate metric extraction and flag potential issues (sentence length, readability score, layout issues).  
- Train annotators in E2R criteria and pilot checklists to improve reliability and reduce manual workload.  
- Integrate user comprehension testing earlier in the process—not only at final stage—to catch accessibility issues sooner.

**Impact.**  
- The framework provides an empirical basis for organizations producing E2R content to **benchmark quality and compare across texts**.  
- Helps shift E2R production toward a more systematic, evidence-based practice rather than ad-hoc adaptation.  
- Demonstrates the value of linking automatic, expert, and user-centred methods in accessibility research.

---

## 🪞 Reflections / Learnings  
- Developing a layered evaluation reminds me that **“accessible” is multi-dimensional**: lexical, structural, layout, and user perception all matter.  
- Manual review workflows are often the bottleneck; tool-support and clear guidelines can reduce friction.  
- User involvement is non-negotiable: what looks simple in metrics might not work for real users.  
- If repeated: I’d build a **shared dataset** of E2R texts with evaluation labels (metric scores, review scores, user comprehension) to enable cross-study comparability.

---

## 🖼️ Artifacts Gallery  
*(Replace placeholders with actual visuals)*  
- ![Pipeline Diagram](images/e2r_pipeline_diagram.png)  
  *Three-stage evaluation flow: automated → manual → user testing.*  
- ![Metric Dashboard](images/e2r_metric_dashboard.png)  
  *Example metrics extracted for E2R text: average sentence length, complex term frequency.*  
- ![Checklist Screenshot](images/e2r_checklist.png)  
  *Excerpt of manual review checklist used by annotators.*  
- ![User Test Setup](images/e2r_user_test.png)  
  *User comprehension test in progress: participants reading adapted texts and answering questions.*



---

## Outcome Statement  
> By proposing and piloting a reliable evaluation pipeline for Easy-to-Read Spanish texts, this work bridges automated metrics, expert review, and user comprehension—improving how accessible content is created, evaluated, and iterated.

---
[📄 Read the full paper here: Madina, M., Gonzalez-Dios, I., & Siegel, M. (2024, July). Towards reliable E2R texts: a proposal for standardized evaluation practices. In International Conference on Computers Helping People with Special Needs (pp. 224-231). Cham: Springer Nature Switzerland.](https://link.springer.com/chapter/10.1007/978-3-031-62849-8_28)  