---
layout: page
title: Unlocking Speech Recognition for Spanish Dysarthric Speech 
description: A pilot study evaluating automatic Speech-To-Text (STT) for Spanish speakers with dysarthria
img: assets/img/sound.jpg
#redirect: https://unsplash.com
importance: 3
category: work
---



---

## Overview  
**Context**  
Automatic Speech Recognition (ASR) systems have shown promise for users with speech impairments, offering potential accessibility benefits. However, dysarthric speech (resulting from neurological or physical conditions) poses significant recognition challenges. This pilot experiment examines how well the Microsoft Azure ASR system performs on Spanish dysarthric speech. 

**My Role**  
Lead researcher: designing the pilot study, recruiting participants with dysarthric speech, running ASR evaluations, analyzing error types and performance metrics, and deriving design implications for assistive voice systems.  

**Timeline**  
Approximately 10 months

**Team & Collaboration**  
Worked with speech-technology researchers at ahoLAB (Basque Country), and 3 people with dysarthric speech. 

---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dysarthria.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    What is dysarthria?
</div>





## 🎯 Research Question  
> How accurately do standard Spanish AST systems recognise speech from users with dysarthria, and what error patterns or usability barriers emerge in this context?

---

## Methods  
**Approach**  
- **Recruited participants** with dysarthria and recorded scripted speech tasks under controlled conditions.   
- **Selected commercial STT solutions** for Spanish and **processed the speech recordings** to obtain transcriptions.  
- **Measured recognition performance** using metrics such as Word Error Rate (WER) and compared to baseline non-dysarthric data.  
- Conducted **qualitative error analysis**: categorised mis-recognitions by phonetic difficulties, articulation, etc.  
- Documented usability implications. 






### 1. **Speech Data Collection**
- Recruited participants and recorded them: **3 native Spanish speakers** with varying levels of dysarthria producing **210 short voice commands** each (21 different commands, 10 times each).  
- Commands were chosen from text creation and edition programs.  
- Participants recorded in their home environment, at different days and times to increase the variability of speech and mimic real-life scenarios.

### 2. **Automatic STT Evaluation**
- Tested recordings with multiple STT systems: **Google Speech API**, **Whisper**, and a Spanish acoustic model baseline.  
- Measured **WER** and error types (substitution, deletion, insertion).  
- Conducted qualitative analysis of recurring error patterns linked to articulation and prosody differences.

### 3. **Live Speech Web Application**
- Developed a **web interface** enabling real-time speech input from dysarthric users.  
- Allowed testing of *live recognition* scenarios instead of only pre-recorded audio.  
- Observed recognition accuracy, and user experience of speaking directly to the system.  
- Logged text outputs for later analysis and comparison with recorded benchmarks.

### 4. **Human Intelligibility Test**
- Conducted a **perceptual test** with **85 human listeners**, each transcribing 30 randomly selected voice commands (10 per dysarthric participant).  
- Goal: compare *human* comprehension to STT accuracy to see whether technology or human listeners perform better—and where intelligibility breaks down.  
- Measured human transcription accuracy as a percentage of correct words and perceived difficulty.

### 5. **Participant Questionnaire**
- After all sessions, the three participants with dysarthria completed a short **questionnaire** about:  
  - Ease/difficulty of recording and live-speech interaction
  - Fatigue, frustration, and effort levels  
  - Their opinions about speech technologies and accessibility
- Collected qualitative reflections on trust, usefulness, and emotional response to speech interfaces.


**Why these methods?**  
They combine quantitative performance metrics with qualitative error taxonomy. This aligns with accessible-technology evaluation and real-user context.

---

## Key Findings & Insights  
- **STT performance for dysarthric speech degraded significantly** compared to typical speech.  
- **Human listeners** still made comprehension errors, especially for moderate-to-severe dysarthric speech.  
- **Error patterns overlapped** between human and machine transcription, suggesting shared difficulties with certain phonetic distortions.
- **Cutomized models by the use of finite grammars** improved the results significantly.   
- The study highlights that **commercial STT systems are not yet sufficient for dysarthric users**, and specialised adaptation/training or user-specific models are needed.
- Participants’ feedback highlighted both **hope and frustration**: they valued assistive potential but felt current systems fall short in recognizing their speeches. 

 
---

## Design Recommendations & Impact 

**Recommendations**  
- Integrate **user-specific adaptation** or fine-tuning of STT models for dysarthric speakers to improve recognition.  
- Build voice input systems with strong error-correction support: suggestions, confirmation, visual feedback, fallback input.  
- Conduct **co-design sessions with dysarthric users** to understand their articulation patterns and how voice recognition errors affect communication workflows.  
- Extend research with **multi-speaker datasets** and real-world interaction tasks (e.g., using speech in daily apps).  

**Impact** 
- Created a dedicated **speech database** of Spanish dysarthric speech, containing 630 recorded voice commands, their transcriptions 
- Provides **empirical evidence of STT system limitations** for Spanish dysarthric speech, supporting inclusive development.  
- Helps product teams or researchers working on voice-input aids **understand the performance gap** and necessary features for improvement.  
- Demonstrates capability to conduct applied **accessibility research involving speech impairments, metrics, user contexts, and design implications**. 


---

## Reflections   
- Working with participants with dysarthria underscored the importance of empathy, flexible test setups, and real-world context (not just lab speech).  
- A mixed-methods approach (quantitative + qualitative) offered richer insight: numbers tell “how much worse”, taxonomy tells “why worse”. 
- The **perceptual test** validated that speech accessibility is not a binary “works/doesn’t work” issue, but a spectrum where even small clarity gains can drastically change usability.  
- If repeating: I would include live assistive-scenario testing (e.g., voice-dictation tasks, communication device usage) rather than just scripted speech, to capture real-use usability.  
- I gained stronger understanding of how speech impairments intersect with technology design and how to translate that into actionable system requirements.


---

## Outcome Statement  
> This pilot study exposes the gap between standard Spanish STT systems and the needs of users with dysarthria, offering a foundation for designing accessible voice-input workflows. I applied speech-technology metrics, error analysis, and user-context thinking to derive design recommendations — demonstrating how technical evaluation and inclusive design meet in assistive tools.

---

[📄 Read the full paper here: Madina, M., Hernáez, I., & Navas, E. (2022). Evaluation of STT Technology Performance for Spanish Dysarthric Speech: Description of a Pilot Experiment. ICCHP-AAATE 2022 Open Access Compendium" Assistive Technology, Accessibility and (e) Inclusion" Part I.](https://epub.jku.at/obvulioa/content/titleinfo/7945389/full.pdf)