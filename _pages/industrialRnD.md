---
layout: page
title: industry
permalink: /industrialRnD/
eyebrow: Industry · 2010 — now
headline: From individual contributor to <em>leading research teams</em> — on systems in millions of homes.
lede: More than a decade of turning research into products — a recognition engine on millions of smart TVs, an on-device medical AI taken to market, and today an agentic platform for game studios. The model is rarely the hard part; the system around it is.
description: Industrial AI R&D by Prakash Chandra Chhipa at RISE, ARKRAY, Samsung Research and HCL Technologies.
full_width: true
nav: true
nav_order: 4
---

<section class="pf-numbers n4" aria-label="Industry in numbers">
  <div><div class="pf-num">2</div><div class="label">AI products shipped</div><div class="detail">Samsung ACR · AUTION EYE AI-4510</div></div>
  <div><div class="pf-num">1.2<span>K</span></div><div class="label">nodes in production</div><div class="detail">Samsung ACR &amp; Ads, 15+ countries</div></div>
  <div><div class="pf-num">13</div><div class="label">engineers &amp; researchers led</div><div class="detail">plus a 6-person team built at ARKRAY</div></div>
  <div><div class="pf-num">5</div><div class="label">granted patents</div><div class="detail">Cited by Apple, Google, Meta, NVIDIA</div></div>
</section>

<section class="pf-chapter">
  <div class="side">
    <div class="eyebrow">Chapter 01 · Now</div>
    <img class="logo" src="{{ '/assets/img/RISE_logo.png' | relative_url }}" alt="RISE Research Institutes of Sweden">
    <div class="meta"><strong>RISE · Sweden AI Factory</strong>Research Scientist / AI Expert<br>Scalable Systems · 2026 —</div>
  </div>
  <div>
    <h2>Agentic and foundation-model systems on <em>Sweden's AI Factory</em>.</h2>
    <p>At RISE I drive the AI transformation journey for startups and SMEs — from first use case to deployed system — and build agentic AI platforms on HPC infrastructure in the Sweden AI Factory, part of the EU network of supercomputing hubs.</p>
    <p>I am the architect and builder of <strong>PlayPrismAI</strong>, an on-premises platform where ten specialist agents turn game pitches and real Steam reviews into evidence-grounded player personas, predicted reactions and ranked product risks, with an authenticity gate validated against historical launch data.</p>
    <ul>
      <li>Own the multi-agent workflow, model stack, grounding architecture, evaluation gates and deployment.</li>
      <li>Resumable LangGraph pipeline on Qwen2.5-32B and BGE-M3, running on-premises and GDPR-ready.</li>
      <li>Multi-user studio platform with drill-down chat, validation reports and a one-page studio memo.</li>
    </ul>
    <div class="pf-statrow">
      <div><b>10</b><span>specialist agents</span></div>
      <div><b>8</b><span>closest Steam peers per pitch</span></div>
      <div><b>1,000</b><span>real reviews per peer</span></div>
    </div>
    <figure class="pf-figure" style="background: transparent; padding: 0">
      <img src="{{ '/assets/img/pf/playprism-landing_hero.jpg' | relative_url }}" alt="PlayPrismAI: Meet your players before you ship" loading="lazy">
    </figure>
    <p class="links-row"><a class="link" href="https://playprismai.se" target="_blank" rel="noopener">playprismai.se — launching soon →</a><a class="link quiet" href="{{ '/#playprism' | relative_url }}">More on the homepage →</a></p>
  </div>
</section>

<section class="pf-chapter">
  <div class="side">
    <div class="eyebrow">Chapter 02</div>
    <img class="logo" src="{{ '/assets/img/arkray.png' | relative_url }}" alt="ARKRAY">
    <div class="meta"><strong>ARKRAY R&amp;D, India</strong>Lead Data Scientist<br>2018 — 2020</div>
  </div>
  <div>
    <h2>A world-first on-device AI, taken from <em>82% to 94%</em>.</h2>
    <p>After platform-scale machine learning, I wanted to put a model inside a physical device. The AUTION EYE AI-4510 automates urinalysis: a camera images a sediment sample and the model classifies what it sees, on the device itself.</p>
    <p>I built and led a six-person research team to deliver the computer-vision methods inside it. The constraints were the opposite of Samsung: an embedded inference budget instead of a cluster, and a clinical workflow where every error matters.</p>
    <ul>
      <li>Custom ResNet classifiers and GAN-based super-resolution to recognize cells and microorganisms in low-quality microscopy.</li>
      <li>AI workflow on Microsoft Azure for edge deployment.</li>
      <li>Explored blood-glucose estimation and RNA-based early cancer detection.</li>
      <li>Two patent applications on AI-based biomarker discovery and medical image interpretation.</li>
    </ul>
    <div class="pf-delta" style="max-width: 520px; margin-top: 24px">
      <span class="pf-cap">Classification accuracy</span>
      <div class="bar"><i style="width: 94%; background: var(--pf-accent)"></i><i style="width: 82%; background: var(--pf-mute)"></i></div>
      <div class="row"><span>82% before</span><span style="color: var(--pf-accent)">94% shipped</span></div>
    </div>
    <p style="margin-top: 22px">It is also where the question behind my PhD came from: <em>why do models that pass validation fail on real samples?</em></p>
    <p class="links-row"><a class="link" href="http://www.arkray.co.jp/english/news/2019/release20190708_jp_en.html" target="_blank" rel="noopener">Product press release →</a></p>
  </div>
</section>

<section class="pf-chapter">
  <div class="side">
    <div class="eyebrow">Chapter 03</div>
    <img class="logo" src="{{ '/assets/img/samsung.png' | relative_url }}" alt="Samsung Research">
    <div class="meta"><strong>Samsung Research, Delhi</strong>Staff Engineer, AI &amp; Data Intelligence<br>2012 — 2018</div>
  </div>
  <div>
    <h2>Content recognition on <em>millions of smart TVs</em>.</h2>
    <p>I architected the visual-media recognition engine behind <strong>Samsung ACR</strong> — CNN and LSTM models for object and action recognition on live TV content, built on Samsung's fingerprinting — and reinforcement-learning ad recommendation for <strong>Samsung Ads</strong>.</p>
    <p>The system scaled to 1,200 nodes on AWS and was deployed on millions of smart TVs in more than 15 countries. Over six years I grew from individual contributor to leading a team of 13 engineers and researchers, with three promotions along the way.</p>
    <ul>
      <li>Live TV program and channel identification, plus a family of computer-vision applications on broadcast content.</li>
      <li>MDP/POMDP-based ad targeting for commercial displays.</li>
      <li>Real-time streaming on high-availability big-data pipelines (Hadoop, Kafka, AWS).</li>
      <li>Dozens of patent applications and five granted patents, valued at USD 1.4M.</li>
      <li>Samsung Innovator of the Year 2017; Samsung Outstanding Performance awards 2015 and 2018.</li>
    </ul>
    <div class="pf-statrow">
      <div><b>1.2K</b><span>nodes in production</span></div>
      <div><b>15+</b><span>countries deployed</span></div>
      <div><b>13</b><span>engineers &amp; researchers led</span></div>
      <div><b>3</b><span>promotions</span></div>
      <div><b>2017</b><span>Innovator of the Year</span></div>
    </div>
    <p class="links-row"><a class="link" href="{{ '/patents/' | relative_url }}">Granted patents →</a><a class="link quiet" href="https://image-us.samsung.com/SamsungUS/samsungbusiness/samsung-ads/resources/total-tv-watcher/samsung-ads-resources-2019-total-tv-watcher.pdf" target="_blank" rel="noopener">ACR overview (PDF) →</a></p>
  </div>
</section>

<section class="pf-chapter">
  <div class="side">
    <div class="eyebrow">Chapter 04</div>
    <img class="logo" src="{{ '/assets/img/hcl.png' | relative_url }}" alt="HCL Technologies">
    <div class="meta"><strong>HCL Technologies</strong>Associate Consultant<br>2010 — 2012</div>
  </div>
  <div>
    <h2>Where it started: <em>enterprise systems</em> at scale.</h2>
    <p>I contributed to the SOA-based retail services platform for T-Mobile USA — a large enterprise backend in production retail workflows.</p>
    <ul>
      <li>Middleware components in Java/J2EE with RESTful services.</li>
      <li>Built the Ecosystem Health Monitoring System: automated platform status dashboards and alerting.</li>
    </ul>
  </div>
</section>

<section>
  <div class="eyebrow">Why it matters</div>
  <h2>Research that <em>leaves the lab</em>.</h2>
  <div class="pf-grid g3" style="margin-top: 28px">
    <div class="pf-card"><div class="pf-cap">01</div><h3>From prototype to product</h3><p>I have led the full transition from proof-of-concept to deployed AI — twice to market, once on millions of devices.</p></div>
    <div class="pf-card"><div class="pf-cap">02</div><h3>End-to-end ownership</h3><p>Data engineering, model training, cloud and edge deployment, evaluation, and the IP that protects it.</p></div>
    <div class="pf-card"><div class="pf-cap">03</div><h3>Many stakeholders</h3><p>Academia, industrial R&amp;D, product managers, designers and end users — in Asia and Europe.</p></div>
  </div>
</section>
