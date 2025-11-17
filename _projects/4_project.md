---
layout: page
title: Evaluating ChatGPT for E2R text adaptation
description: Evaluating how conversational AI supports Easy-to-Read Spanish texts for users with cognitive disabilities
img: assets/img/chatgptphoto.jpg
importance: 1
category: work
---

## Overview
**Context**  
In this project, I explored how large language models (LLMs) like ChatGPT can support the adaptation of standard Spanish texts into their Easy-to-Read variant, *Lectura Fácil* (LF). LF is a simplified text format of Spanish designed for people with cognitive disabilities, low literacy, or language barriers.  
Manual creation of these texts is time-consuming and expensive. This project investigated whether ChatGPT could make this process automatic and scalable.

**My Role**  
Lead researcher: designed the methodology, ran adaptation experiments, conducted both quantitative and qualitative evaluations, and synthesized actionable design implications for inclusive UX in language technology.

**Timeline**  
3-4 months (data selection, prompt design, automatic and manual evaluation, and user study)

**Team & Collaboration**  
Worked with collaborators at Hochschule Darmstadt (Germany) and HiTZ Center (Basque Country).  
Included stakeholders representing users with cognitive disabilities.

---

## 🎯 Research Question
> How well can ChatGPT adapt Spanish news-domain texts into the LF variant for users with cognitive disabilities, and what are the usability and accessibility implications?

---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/flowchart.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Workflow
</div>


## Methods

**Approach**
1. Selected 10 Spanish news texts and performed multiple ChatGPT adaptation experiments.  
   - 🧠 *Prompt Engineering:* Different prompt styles tested for adherence to LF guidelines (UNE 153101:2018 EX).
2. Applied a **multi-method evaluation** combining:
   - 📊 *Automated Readability Analysis:* Measured lexical and syntactic complexity using MultiAzterTest.  
   - 📝 *Manual Checklist Evaluation:* Two annotators reviewed results using a 10-item accessibility checklist (fluency, simplicity, meaning, layout).  
   - 👥 *User Testing:* Ten participants with cognitive disabilities compared ChatGPT vs human-adapted versions through reading comprehension tasks and preference feedback.

**Why These Methods**
- Balanced qualitative and quantitative insights.  
- Explored how the way prompts are written for AI models affects their responses. 
- Prioritized **inclusive validation** by engaging the intended users directly. In this case, contextual inquiry, A/B testing and comprehension testing were conducted. 

---

## Key Findings & Insights

- ChatGPT performed **well in lexical simplification** (fewer rare words) but **poorly in structural adaptation**, often generating longer, more complex sentences.  
- Users consistently **preferred the human-adapted versions**, citing better readability and comprehension.  
- Output consistency varied significantly with prompt design, highlighting reproducibility issues.
- Automated metrics missed key accessibility aspects like layout, line spacing, and explicit examples, underscoring the need for **human-centered evaluation**.  


---

## Design Recommendations & Impact

**Recommendations**
- Combine AI with **human-in-the-loop** review for accessible content creation.   
- Create **prompt templates and user-tested checklists** to guide consistent, ethical adaptation.  
- Prioritize **inclusive user testing** from early prototyping; accessibility cannot be retrofitted.

**Impact**
- Raised awareness about the **distinction between “simplified” and “accessible”** text.  
- Demonstrated the importance of **qualitative evaluation** for LLM-generated outputs.  
- Strengthened methodologies for combining computational linguistics and UX research.

---

## Reflections 

- Confirmed that **mixed-methods evaluation** (quantitative + qualitative) yields richer insight than any single metric.  
- Gained confidence applying accessibility ethics and recruitment practices transferable to UX research teams.
- Learned the importance of **empathetic facilitation** when conducting studies with participants with cognitive disabilities, as pacing, clarity, and environment matter deeply. 

---

## Outcome Statement
> By evaluating ChatGPT’s ability to adapt Spanish texts for users with cognitive disabilities, I found that while lexical simplification is achievable, **true accessibility demands human-in-the-loop workflows**, attention to **format and layout**, and **direct user validation**. 



[📄 Read the full paper here: Madina, M., Gonzalez-Dios, I., & Siegel, M. (2024, May). A preliminary study of ChatGPT for Spanish E2R text adaptation. In Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024) (pp. 1422-1434).](https://aclanthology.org/2024.lrec-main.126.pdf)

