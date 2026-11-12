---
layout: page
title: research
permalink: /projects/
eyebrow: Research
headline: The research journey <em>so far</em>.
lede: It started with a PhD on one question — can self-supervised representations hold up in the real world? — and has grown into adapting multimodal and video foundation models efficiently. Each project below is a deep dive into one paper — method, results and code.
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
      <div class="pf-reclist" aria-label="Recognition during the PhD">
        <div class="pf-cap">Recognition during the PhD</div>
        <div class="rr hl"><b>2024</b><p><strong>DAAD AI-NET Fellowship</strong> — German Academic Exchange Service fellowship for AI research collaboration in Germany.</p></div>
        <div class="rr"><b>2024</b><p><strong>Visiting researcher, UCF CRCV</strong> — hosted by Prof. Mubarak Shah. <a href="https://ssba.org.se/wpssba/wp-content/uploads/Jun24.pdf" target="_blank" rel="noopener">SSBA magazine →</a></p></div>
        <div class="rr"><b>2024</b><p><strong>STARS member feature</strong> — Swedish Trans-Atlantic Researchers and Scholars network, for Möbius-MPD. <a href="https://www.starsnetwork.org/member-features/november-2024-stars-member-feature" target="_blank" rel="noopener">Read →</a></p></div>
        <div class="rr"><b>2024</b><p><strong>Wallenberg grant</strong></p></div>
        <div class="rr"><b>2023</b><p><strong>SASUF grant</strong> — South Africa – Sweden University Forum.</p></div>
        <div class="rr"><b>2022</b><p><strong>Machine Learning Summer School</strong> — University of Cambridge, UK (ELLIS).</p></div>
        <div class="rr"><b>2022</b><p><strong>INTSAM grant</strong></p></div>
        <div class="rr"><b>ELLIS</b><p><strong>Member</strong> — European Laboratory for Learning and Intelligent Systems.</p></div>
      </div>
    </div>
    <div>
      <p style="font-size: 16px">My PhD in Machine Learning at Luleå University of Technology, advised by <strong>Prof. Marcus Liwicki</strong> and defended publicly in April 2025, showed that self-supervised representations degrade sharply under real-world shift — and introduced methods that build robustness into pretraining itself instead of patching it afterwards.</p>
      <p>It followed two threads. <strong>Robustness:</strong> adaptive adversarial self-supervision (ASTrA, ICLR 2025), the first camera-parameter-free model of perspective distortion (Möbius-MPD, ECCV 2024) and its lightweight successor (LCM, ACCV 2024), and systematic robustness audits of self-supervised and open-vocabulary models. <strong>Domain awareness:</strong> label-efficient self-supervision built for the structure of a domain — histopathology, mining, remote sensing and retinal imaging.</p>
      <div class="pf-statrow">
        <div><b>2</b><span>theses · licentiate 2023, doctorate 2025</span></div>
        <div><b>6</b><span>venues · ICLR · ECCV · ACCV · WACV · ICCV-W · ECCV-W</span></div>
        <div><b>4</b><span>grants &amp; fellowships · DAAD AI-NET · Wallenberg · SASUF · INTSAM</span></div>
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
