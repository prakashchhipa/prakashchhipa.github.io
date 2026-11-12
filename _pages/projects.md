---
layout: page
title: research
permalink: /projects/
eyebrow: Research
headline: Three questions, <em>one agenda</em>.
lede: How do we make learned representations reliable under real-world shift? How do we adapt foundation models to video and structure efficiently? And how do we turn both into systems people can trust? Each project below is a deep dive into one paper — method, results and code.
description: Research projects by Prakash Chandra Chhipa on robust, label-efficient and multimodal representation learning.
full_width: true
nav: true
nav_order: 3
---

<section>
  <div class="eyebrow">01 — Now · Multimodal &amp; video foundation models</div>
  <h2>Adapting frozen models to <em>time and place</em>.</h2>
  <p class="lede">Most capability already sits inside frozen vision-language models. The research problem is the small, well-placed adapter that unlocks it for video, at a fraction of the cost of retraining.</p>
  <div class="pf-grid g3">
    <a class="pf-card" href="https://arxiv.org/html/2611.00029v1" target="_blank" rel="noopener">
      <div class="pf-thumb"><img src="{{ '/assets/img/publication_preview/dia.jpg' | relative_url }}" alt="DiA: Directional Adapter" loading="lazy"></div>
      <div class="pf-cap">NeurIPS 2026</div>
      <h3 style="font-size: 20px">DiA: Directional Adapter</h3>
      <p>Separates causal and anti-causal temporal evidence inside a frozen CLIP model. RGB-only state of the art on seven video benchmarks.</p>
      <div class="pf-kr"><div><b>92.8%</b><span>Top-1 on Diving48 with ~3.6M tunable params</span></div></div>
    </a>
    <a class="pf-card" href="https://parthpk.github.io/vidtag_webpage/" target="_blank" rel="noopener">
      <div class="pf-thumb"><img src="{{ '/assets/img/publication_preview/vidtag.jpg' | relative_url }}" alt="VidTAG" loading="lazy"></div>
      <div class="pf-cap">CVPR 2026 · with UCF CRCV</div>
      <h3 style="font-size: 20px">VidTAG</h3>
      <p>Temporally aligned video-to-GPS geolocalization at global scale, geolocating every frame with denoising sequence prediction.</p>
      <div class="pf-kr"><div><b>+20%</b><span>Accuracy at 1 km vs. GeoCLIP</span></div></div>
    </a>
    <a class="pf-card" href="https://arxiv.org/html/2611.10004v1" target="_blank" rel="noopener">
      <div class="pf-thumb"><img src="{{ '/assets/img/publication_preview/mata.jpg' | relative_url }}" alt="MATA: Motion-aligned Temporal Adapter" loading="lazy"></div>
      <div class="pf-cap">WACV 2027</div>
      <h3 style="font-size: 20px">MATA: Motion-aligned Temporal Adapter</h3>
      <p>A parameter-efficient, practical adapter on a frozen CLIP ViT-B/16 for few-shot fine-grained action recognition.</p>
      <span class="more">Read the paper →</span>
    </a>
  </div>
</section>

<section>
  <div class="eyebrow">02 — Robust representations</div>
  <h2>Robustness learned in pretraining, <em>not patched afterwards</em>.</h2>
  <p class="lede">Adaptive adversaries, camera-free models of perspective distortion, and systematic audits of how self-supervised and open-vocabulary models break under shift.</p>
  {% assign robust = site.projects | where: "program", "robust" | sort: "importance" %}
  <div class="pf-grid g4">
    {% for project in robust %}{% include pf_project_card.liquid project=project %}{% endfor %}
  </div>
</section>

<section>
  <div class="eyebrow">03 — Label-efficient &amp; domain-aware learning</div>
  <h2>Learning where labels are <em>scarce and expensive</em>.</h2>
  <p class="lede">Self-supervised methods built for the structure of a domain — magnification in histopathology, depth in mining imagery, sensors in remote sensing — so models need a fraction of the labels.</p>
  {% assign efficient = site.projects | where: "program", "efficient" | sort: "importance" %}
  <div class="pf-grid g4">
    {% for project in efficient %}{% include pf_project_card.liquid project=project %}{% endfor %}
  </div>
  <p class="links-row" style="margin-top: 36px">
    <a class="link" href="{{ '/publications/' | relative_url }}">All publications →</a>
    <a class="link quiet" href="{{ '/repositories/' | relative_url }}">Code &amp; models →</a>
  </p>
</section>
