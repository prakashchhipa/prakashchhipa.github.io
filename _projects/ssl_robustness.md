---
layout: page
title: Can Self-supervised Representation Learning Methods Withstand Distribution Shifts and Corruptions?
description: International Conference on Computer Vision Workshops 2023
img: assets/ssl_robustness/ssl_robustness.JPG
importance: 7
category: work
program: robust
related_publications: true
---
<p align="center">
    <a href="https://arxiv.org/pdf/2308.02525">Read paper</a>
    <a href="https://openaccess.thecvf.com/content/ICCV2023W/OODCV/html/Chhipa_Can_Self-Supervised_Representation_Learning_MethodsWithstand_Distribution_Shifts_and_Corruptions_ICCVW_2023_paper.html">ICCV Workshops proceedings</a>
    <a href="https://github.com/prakashchhipa/Robsutness-Evaluation-of-Self-supervised-Methods-Distribution-Shifts-and-Corruptions">Code on GitHub</a>
    <a href="{{ '/assets/pdf/ICCV_OOD_Workshop_Presentation_SSL_robustness.pdf' | relative_url }}">Slides</a>
</p>

> Self-supervised methods are often assumed to learn invariant, robust representations. This work tests that assumption under real distribution shift — and finds that robustness drops sharply as shifts and corruptions grow more severe.

Presented at the **Out-of-Distribution Generalization in Computer Vision (OOD-CV) workshop at ICCV 2023**, Paris.

## The question

Self-supervised learning learns from the structure of data itself, without human labels. Its main paradigms — contrastive learning, knowledge distillation, mutual-information maximization and clustering — are widely credited with learning invariant representations. But are those representations actually robust when the input distribution shifts, or when images are corrupted the way real cameras corrupt them?

## What we did

We ran a systematic robustness study of six self-supervised methods on **ImageNet-C**, across every corruption type and every severity level, measuring mean corruption error and inspecting class activations.

- **SimCLR** — contrastive learning
- **SimSiam** and **BYOL** — siamese and bootstrap methods
- **Barlow Twins** — redundancy reduction
- **SwAV** — clustering
- **DINO** — self-distillation with vision transformers

## What we found

There is a clear relationship between how severe a shift or corruption is and how much the learned representations degrade. At higher severities, robustness falls significantly across all paradigms — no method is immune.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    <figure><img src="{{ '/assets/ssl_robustness/all_corruptions.png' | relative_url }}" alt="Robustness on ImageNet-C" class="img-fluid" loading="lazy"></figure>
  </div>
  <div class="col-sm mt-3 mt-md-0">
    <figure><img src="{{ '/assets/ssl_robustness/glass_visual_results.png' | relative_url }}" alt="Class activations under glass blur" class="img-fluid" loading="lazy"></figure>
  </div>
</div>
<div class="caption">Left: robustness across all ImageNet-C corruptions. Right: class activations on a dog image under glass-blur corruption.</div>

## Why it matters

Benchmarks on clean data overstate how self-supervised models will behave in deployment. The study argues that safety and robustness should be first-class objectives in self-supervised representation learning — the motivation for the later work on [Möbius-MPD]({{ '/projects/mpd/' | relative_url }}) and [ASTrA]({{ '/projects/ASTrA/' | relative_url }}).

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    <figure><img src="{{ '/assets/ssl_robustness/poster.jpg' | relative_url }}" alt="ICCV 2023 OOD-CV workshop poster" class="img-fluid" loading="lazy"></figure>
  </div>
</div>
<div class="caption">Workshop poster, ICCV 2023 OOD-CV.</div>
