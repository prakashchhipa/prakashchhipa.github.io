---
layout: page
permalink: /repositories/
title: open source
eyebrow: Open source
headline: Code, models and data — <em>released openly</em>.
lede: Every paper ships with code. The methods people reuse most are packaged as a library, a model, a benchmark and pretrained checkpoints, so others can build on them without re-implementing anything.
description: Open-source code, models and datasets by Prakash Chandra Chhipa.
full_width: true
nav: true
nav_order: 6
---

<section>
  <div class="eyebrow">01 — Releases</div>
  <h2>Ready to <em>use today</em>.</h2>
  <div class="pf-grid g4" style="margin-top: 28px">
    {% for r in site.data.code.releases %}
      <div class="pf-card">
        <div class="pf-cap">{{ r.kind }}</div>
        <h3 style="font-size: 22px">{{ r.name }}</h3>
        <p>{{ r.desc }}</p>
        {% if r.cmd %}<div class="pf-stack" style="margin: 0 0 14px"><span>{{ r.cmd }}</span></div>{% endif %}
        <div class="pf-kr" style="display: flex; flex-wrap: wrap; gap: 10px 18px">
          {% for l in r.links %}<a class="link{% unless forloop.first %} quiet{% endunless %}" href="{{ l.url }}" target="_blank" rel="noopener">{{ l.label }} →</a>{% endfor %}
        </div>
      </div>
    {% endfor %}
  </div>
</section>

<section>
  <div class="eyebrow">02 — Paper code</div>
  <h2>One repository <em>per paper</em>.</h2>
  <p class="lede">Training and evaluation code for each publication, newest first.</p>
  <div class="pf-grid g3">
    {% for r in site.data.code.papers %}
      <a class="pf-card" href="https://github.com/{{ r.repo }}" target="_blank" rel="noopener">
        <div style="display: flex; justify-content: space-between; gap: 10px; align-items: baseline">
          <span class="pf-chip accent">{{ r.venue }}</span><span class="pf-cap">{{ r.tag }}</span>
        </div>
        <h3 style="font-size: 18.5px; line-height: 1.35; margin-top: 16px">{{ r.title }}</h3>
        <div class="more" style="display: flex; justify-content: space-between; gap: 10px">
          <span><i class="fa-brands fa-github"></i>&nbsp; {{ r.repo | split: '/' | first }}</span>
          <span class="pf-cap" style="color: var(--pf-mute)">{{ r.lang }}</span>
        </div>
      </a>
    {% endfor %}
  </div>
</section>

<section>
  <div class="eyebrow">03 — Earlier work</div>
  <h2>Before the PhD: <em>engineering projects</em>.</h2>
  <div class="pf-path" style="margin-top: 22px">
    {% for r in site.data.code.earlier %}
      <div style="grid-template-columns: 1fr auto">
        <div class="org" style="font-size: 18px">{{ r.title }}</div>
        <a class="link quiet" href="https://github.com/{{ r.repo }}" target="_blank" rel="noopener">GitHub →</a>
      </div>
    {% endfor %}
  </div>
  <p class="links-row" style="margin-top: 32px">
    <a class="link" href="https://github.com/prakashchhipa" target="_blank" rel="noopener">github.com/prakashchhipa →</a>
    <a class="link quiet" href="https://huggingface.co/prakashchhipa" target="_blank" rel="noopener">huggingface.co/prakashchhipa →</a>
  </p>
</section>
