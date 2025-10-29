---
layout: page
title: Evaluating ChatGPT for E2R text adaptation
description: with background image
img: assets/img/chatgpt.png
importance: 1
category: work
related_publications: true
---

## 🧭 Overview
**Context**  
As part of my PhD in Computational Linguistics, I explored how large language models (LLMs) like ChatGPT can support the adaptation of standard Spanish texts into the *Lectura Fácil* (“Easy-to-Read”) variant; a simplified text format designed for people with cognitive disabilities, low literacy, or language barriers.  
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
> How well can ChatGPT adapt Spanish news-domain texts into the *Lectura Fácil* variant for users with cognitive disabilities, and what are the usability and accessibility implications?

---

## 🔍 Methods

**Approach**
1. Selected 10 Spanish news texts and performed multiple ChatGPT adaptation experiments.  
2. Applied a **multi-method evaluation** combining:
   - 🧠 *Prompt Engineering:* Different prompt styles tested for adherence to *Lectura Fácil* guidelines (UNE 153101:2018 EX).  
   - 📊 *Automated Readability Analysis:* Measured lexical and syntactic complexity using MultiAzterTest.  
   - 📝 *Manual Checklist Evaluation:* Two annotators reviewed results using a 10-item accessibility checklist (fluency, simplicity, meaning, layout).  
   - 👥 *User Testing:* Ten participants with cognitive disabilities compared ChatGPT vs human-adapted versions through reading comprehension tasks and preference feedback.

**Why These Methods**
- Balanced qualitative and quantitative insights.  
- Explored how the way prompts are written for AI models affects their responses. 
- Prioritized *inclusive validation* by engaging the intended users directly.

---

## Key Findings & Insights

- ChatGPT performed **well in lexical simplification** (fewer rare words) but **poorly in structural adaptation**, often generating longer, more complex sentences.  
- Users consistently **preferred the human-adapted versions**, citing better readability and comprehension.  
- Output consistency varied significantly with prompt design, highlighting reproducibility issues.
- Automated metrics missed key accessibility aspects like layout, line spacing, and explicit examples, underscoring the need for *human-centered evaluation*.  


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

- Learned the importance of **empathetic facilitation** when conducting studies with participants with cognitive disabilities — pacing, clarity, and environment matter deeply.  
- Confirmed that **mixed-methods evaluation** (quantitative + qualitative) yields richer insight than any single metric.  
- Next iteration: prototype an **interactive adaptation interface** (text + speech) to evaluate real-world task usability, not just static comprehension.  
- Gained confidence applying accessibility ethics and recruitment practices transferable to UX research teams.

---

## Outcome Statement
> By evaluating ChatGPT’s ability to adapt Spanish texts for users with cognitive disabilities, I found that while lexical simplification is achievable, **true accessibility demands human-in-the-loop workflows**, attention to **format and layout**, and **direct user validation**. 



[📄 Read the full paper (LREC 2024)](https://aclanthology.org/2024.lrec-main.126.pdf)








Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
