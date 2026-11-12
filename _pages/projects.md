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

<section id="thesis">
  <div class="eyebrow">00 — Doctoral thesis · Luleå University of Technology · 2025</div>
  <h2>Five years on one question: self-supervised learning powers every foundation model — <em>does it hold up in the real world?</em></h2>
  <p class="lede" style="margin-bottom: 0">Self-supervised pretraining is the backbone of today's foundation models, from CLIP and DINO to the vision encoders inside multimodal LLMs. My doctoral work asked what happens to those representations outside the benchmark — under distortion, corruption, adversaries and unfamiliar domains — and how to pretrain them so they stay reliable.</p>
  <div class="pf-feature pf-thesis" style="margin-top: 30px">
    <div>
      <div class="pf-books" aria-label="Thesis covers">
        <a class="pf-book lic" href="https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1732072" target="_blank" rel="noopener">
          <span class="kind">Licentiate thesis · 2023</span>
          <span class="t">Self-supervised Representation Learning for Visual Domains Beyond Natural Scenes</span>
          <span class="a">Prakash Chandra Chhipa</span>
          <span class="u">Luleå University of Technology</span>
        </a>
        <a class="pf-book phd" href="https://ltu.diva-portal.org/smash/record.jsf?pid=diva2%3A1935727" target="_blank" rel="noopener">
          <span class="kind">Doctoral thesis · 2025</span>
          <span class="t">Towards Robust and Domain-aware Self-supervised Representation Learning</span>
          <span class="a">Prakash Chandra Chhipa</span>
          <span class="u">Luleå University of Technology</span>
        </a>
      </div>
    </div>
    <div>
      <p style="font-size: 16px">My PhD in Machine Learning at Luleå University of Technology, advised by <strong>Prof. Marcus Liwicki</strong> and defended publicly in April 2025, showed that self-supervised representations degrade sharply under real-world shift — and introduced methods that build robustness into pretraining itself instead of patching it afterwards.</p>
      <p>It followed two threads. <strong>Robustness:</strong> adaptive adversarial self-supervision (ASTrA, ICLR 2025), the first camera-parameter-free model of perspective distortion (Möbius-MPD, ECCV 2024) and its lightweight successor (LCM, ACCV 2024), and systematic robustness audits of self-supervised and open-vocabulary models. <strong>Domain awareness:</strong> label-efficient self-supervision built for the structure of a domain — histopathology, mining, remote sensing and retinal imaging.</p>
      <div class="pf-statrow">
        <div><b>2</b><span>theses · licentiate 2023, doctorate 2025</span></div>
        <div><b>6</b><span>venues · ICLR · ECCV · ACCV · WACV · ICCV-W · ECCV-W</span></div>
        <div><b>UCF</b><span>visiting researcher with Prof. Mubarak Shah</span></div>
      </div>
      <figure class="pf-shot" style="margin-top: 22px">
        <img src="{{ '/assets/img/pf/thesis-talk.jpg' | relative_url }}" alt="Presenting contrastive self-supervised representation learning at Luleå University of Technology" loading="lazy">
        <figcaption class="pf-cap">Thesis presentation · Luleå University of Technology</figcaption>
      </figure>
      <p class="links-row">
        <a class="link" href="https://ltu.diva-portal.org/smash/record.jsf?pid=diva2%3A1935727" target="_blank" rel="noopener">Read the doctoral thesis →</a>
        <a class="link quiet" href="https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1732072" target="_blank" rel="noopener">Licentiate thesis →</a>
      </p>
    </div>
  </div>

  <div class="eyebrow" style="margin: 56px 0 16px">→ Recognition during the PhD</div>
  <div class="pf-grid g4 pf-honors">
    <div class="pf-card feature"><div class="pf-cap venue">Fellowship · 2024</div><h3>DAAD AI-NET Fellowship</h3><p>German Academic Exchange Service fellowship to visit and collaborate with a German research institute on artificial intelligence.</p></div>
    <div class="pf-card"><div class="pf-cap venue">Summer school · 2022</div><h3>Machine Learning Summer School, University of Cambridge</h3><p>Selected for the ELLIS machine learning summer school at the University of Cambridge, UK.</p></div>
    <div class="pf-card"><div class="pf-cap venue">Feature · 2024</div><h3>STARS researcher network</h3><p>Featured by the Swedish Trans-Atlantic Researchers and Scholars Network for the Möbius-MPD work.</p><a class="more" href="https://www.starsnetwork.org/member-features/november-2024-stars-member-feature" target="_blank" rel="noopener">Read the feature →</a></div>
    <div class="pf-card"><div class="pf-cap venue">Research visit · 2024</div><h3>UCF Center for Research in Computer Vision</h3><p>Visiting researcher hosted by Prof. Mubarak Shah, featured in the SSBA magazine.</p><a class="more" href="https://ssba.org.se/wpssba/wp-content/uploads/Jun24.pdf" target="_blank" rel="noopener">SSBA magazine →</a></div>
  </div>
  <div class="pf-statrow" style="margin-top: 1px">
    <div><b>2024</b><span>Wallenberg grant</span></div>
    <div><b>2023</b><span>SASUF grant</span></div>
    <div><b>2022</b><span>INTSAM grant</span></div>
    <div><b>ELLIS</b><span>member · European Laboratory for Learning and Intelligent Systems</span></div>
  </div>
</section>

<section>
  <div class="eyebrow">01 — Now · Multimodal &amp; video foundation models</div>
  <h2>Adapting frozen models to <em>time and place</em>.</h2>
  <p class="lede">Most capability already sits inside frozen vision-language models. The research problem is the small, well-placed adapter that unlocks it for video, at a fraction of the cost of retraining.</p>
  <div class="pf-grid g3">
    <a class="pf-card" href="https://arxiv.org/html/2611.00029v1" target="_blank" rel="noopener">
      <div class="pf-thumb"><img src="{{ '/assets/img/publication_preview/dia.jpg' | relative_url }}" alt="DiA: Directional Adapter" loading="lazy"></div>
      <div class="pf-cap venue">NeurIPS 2026</div>
      <h3 style="font-size: 20px">DiA: Directional Adapter</h3>
      <p>Separates causal and anti-causal temporal evidence inside a frozen CLIP model. RGB-only state of the art on seven video benchmarks.</p>
      <div class="pf-kr"><div><b>92.8%</b><span>Top-1 on Diving48 with ~3.6M tunable params</span></div></div>
    </a>
    <a class="pf-card" href="https://parthpk.github.io/vidtag_webpage/" target="_blank" rel="noopener">
      <div class="pf-thumb"><img src="{{ '/assets/img/publication_preview/vidtag.jpg' | relative_url }}" alt="VidTAG" loading="lazy"></div>
      <div class="pf-cap venue">CVPR 2026 · with UCF CRCV</div>
      <h3 style="font-size: 20px">VidTAG</h3>
      <p>Temporally aligned video-to-GPS geolocalization at global scale, geolocating every frame with denoising sequence prediction.</p>
      <div class="pf-kr"><div><b>+20%</b><span>Accuracy at 1 km vs. GeoCLIP</span></div></div>
    </a>
    <a class="pf-card" href="https://arxiv.org/html/2611.10004v1" target="_blank" rel="noopener">
      <div class="pf-thumb"><img src="{{ '/assets/img/publication_preview/mata.jpg' | relative_url }}" alt="MATA: Motion-aligned Temporal Adapter" loading="lazy"></div>
      <div class="pf-cap venue">WACV 2027</div>
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
