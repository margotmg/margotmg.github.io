---
layout: page
title: Unlocking Speech Recognition for Spanish Dysarthric Users 
description: A pilot study evaluating automatic Speech-To-Text (STT) for Spanish speakers with dysarthria
img: assets/img/7.jpg
redirect: https://unsplash.com
importance: 3
category: work
---



---

## Overview  
**Context.**  
Automatic Speech Recognition (ASR) / Speech-to-Text (STT) systems have shown promise for users with physical and speech impairments, offering potential accessibility benefits. However, dysarthric speech – resulting from neurological or physical conditions – poses significant recognition challenges. This pilot experiment examines how well STT systems perform on Spanish dysarthric speech. :contentReference[oaicite:1]{index=1}  
**My Role.**  
Lead researcher (or: researcher) designing the pilot, recruiting participants with dysarthric speech, running STT evaluations, analyzing error types and performance metrics, and deriving design implications for assistive voice systems.  
**Timeline.**  
~3–4 months pilot experiment (recruitment, data collection, STT testing, analysis).  
**Collaboration.**  
Worked with speech-therapy units, dysarthria specialists, and speech-technology researchers at participating institutions. :contentReference[oaicite:2]{index=2}

---

## 🎯 Research Question  
> How accurately do standard Spanish STT systems recognise speech from users with dysarthria, and what error patterns or usability barriers emerge in this context?

---

## Methods  
**Approach.**  
- Recruited participants with dysarthria and recorded scripted speech tasks under controlled conditions. :contentReference[oaicite:3]{index=3}  
- Selected commercial or research STT solutions for Spanish and processed the speech recordings to obtain transcriptions.  
- Measured recognition performance using metrics (Word Error Rate, substitution/deletion rates) and compared to baseline non-dysarthric data.  
- Conducted qualitative error analysis: categorised mis-recognitions by phonetic difficulties, prosody, articulation, background noise.  
- Documented usability implications: how recognition errors may impact assistive applications (voice input, dictation, communication aids).

**Why these methods?**  
They combine quantitative performance metrics (hard evidence) with qualitative error taxonomy (insight into speech impairment impact) — aligning with accessible-technology evaluation and real-user context.

---

## Key Findings & Insights  
- STT performance for dysarthric Spanish speech degraded significantly compared to typical speech; WER (Word Error Rate) and deletion/substitution rates were much higher. :contentReference[oaicite:4]{index=4}  
- Error patterns included: mis-recognition of vowel reductions, consonant blends, prosody disruptions, and non-standard articulation; these point to specific speech-impairment features.  
- Many recognition errors would significantly reduce usability for assistive scenarios (e.g., voice typing, communication aids) because reliability is low and error correction burden is high.  
- The study highlights that commercial STT systems are not yet sufficient for dysarthric users, and specialised adaptation/training or user-specific models are needed.

**Accessibility & Design Implication.**  
For assistive voice applications targeting dysarthria, recognition accuracy is critical; designers need to anticipate high error rates, provide error-tolerant input methods (e.g., multimodal fallback, correction UI), and consider inclusive workflows rather than relying solely on “voice works out of the box”.

---

## Design Recommendations & Impact  
**Recommendations.**  
- Integrate *user-specific adaptation* or fine-tuning of STT models for dysarthric speakers to improve recognition.  
- Build voice input systems with strong error-correction support: suggestions, confirmation UI, visual feedback, fallback input.  
- Conduct co-design sessions with dysarthric users to understand their articulation patterns and how voice recognition errors affect communication workflows.  
- Monitor error types in production and provide transparent feedback to users (e.g., “I heard X — did you mean Y?”) to increase trust in assistive voice tools.

**Impact.**  
- Provides empirical evidence of STT system limitations for Spanish dysarthric speech, supporting inclusive tech development.  
- Helps product teams or researchers working on voice-input aids understand the performance gap and necessary features for reliability.  
- Demonstrates capability to conduct applied accessibility research involving speech impairments, metrics, user contexts, and design implications — valuable for roles bridging speech technology and UX accessibility.

---

## Reflections   
- Working with participants with dysarthria underscored the importance of empathy, flexible test setups, and real-world context (not just lab speech).  
- A mixed-methods approach (quant + qual) offered richer insight: numbers tell “how much worse”, taxonomy tells “why worse”.  
- If repeating: I would include live assistive-scenario testing (e.g., voice-dictation tasks, communication device usage) rather than just scripted speech, to capture real-use usability.  
- I gained stronger understanding of how speech impairments intersect with technology design and how to translate that into actionable system requirements.

---

## 🖼️ Artifacts Gallery  
*(Replace placeholders with actual visuals from the study)*  
- ![Speech Recording Setup Placeholder](images/recording-setup.png)  
  *Recording station used with participants and dysarthric speech sample capture.*  
- ![Error Rate Chart Placeholder](images/wer-chart.png)  
  *Word Error Rate comparison: typical vs. dysarthric speech.*  
- ![Error Taxonomy Table Placeholder](images/error-taxonomy-table.png)  
  *Breakdown of error types (substitutions, deletions, insertion, articulation issues).*  
- ![Assistive UI Mock-up Placeholder](images/voice-input-ui-mock.png)  
  *Conceptual assistive voice input UI that accounts for high error rates (correction workflow).*  



---

## Outcome Statement  
> This pilot study exposes the gap between standard Spanish STT systems and the needs of users with dysarthria, offering a foundation for designing accessible voice-input workflows. I applied speech-technology metrics, error analysis, and user-context thinking to derive design recommendations — demonstrating how technical evaluation and inclusive design meet in assistive tools.

---

[📄 Read the full paper here: Madina, M., Hernáez, I., & Navas, E. (2022). Evaluation of STT Technology Performance for Spanish Dysarthric Speech: Description of a Pilot Experiment. ICCHP-AAATE 2022 Open Access Compendium" Assistive Technology, Accessibility and (e) Inclusion" Part I.](https://epub.jku.at/obvulioa/content/titleinfo/7945389/full.pdf)