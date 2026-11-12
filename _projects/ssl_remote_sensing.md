---
layout: page
title: Domain Adaptable Self-supervised Representation Learning on Remote Sensing Satellite Imagery
description: International Joint Conference on Neural Networks 2023
img: assets/ssl_remote_sensing/ssl_rs.JPG
importance: 8
category: work
program: efficient
related_publications: true
---
<p align="center">
    <a href="https://arxiv.org/pdf/2304.09874">Read paper</a>
    <a href="https://ieeexplore.ieee.org/abstract/document/10191249">IEEE Xplore</a>
    <a href="https://github.com/muskaan712/Domain-Adaptable-Self-Supervised-Representation-Learning-on-Remote-Sensing-Satellite-Imagery">Code &amp; models on GitHub</a>
    <a href="https://www.youtube.com/watch?v=NOjXK1_cdhA">Watch the talk</a>
    <a href="{{ '/assets/pdf/Self-supervised_learning_on_Remote_Sensing_Imgery_Prakash.pdf' | relative_url }}">Slides</a>
</p>

> Labels for satellite imagery are scarce and expensive. Can a self-supervised representation learned on one remote-sensing dataset transfer to another — and beat full supervision with a fraction of the labels?

## The problem

Most remote-sensing vision work relies on fully supervised learning. But annotating satellite imagery takes domain expertise and is costly, so labelled data is always limited. That makes knowledge transfer — pretraining once and adapting to new data — a practical necessity.

## Approach

We study contrastive self-supervised pretraining (SimCLR, ResNet-50) and how its representations transfer across **distinct source and target distributions** within remote sensing. Pretraining runs on a source dataset; downstream classification runs on each target dataset in a round-robin, across different label budgets.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    <figure><img src="{{ '/assets/ssl_remote_sensing/contrastive_ssl_on_remote_sensing.png' | relative_url }}" alt="Contrastive self-supervised learning on remote sensing imagery" class="img-fluid" loading="lazy"></figure>
  </div>
</div>
<div class="caption">Contrastive self-supervised pretraining on satellite imagery.</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-7 mt-3 mt-md-0">
    <figure><img src="{{ '/assets/ssl_remote_sensing/ssl_domain_adpation_framework.png' | relative_url }}" alt="Domain adaptation framework" class="img-fluid" loading="lazy"></figure>
  </div>
</div>
<div class="caption">Round-robin domain-adaptation framework across source and target datasets.</div>

## Datasets

| Dataset | Classes | Images | Notes |
|---|---|---|---|
| UC Merced Land Use (UCMD) | 21 | 2,100 | USGS urban imagery, 1-ft resolution |
| SIRI-WHU | 12 | 2,400 | Google Earth, metropolitan China |
| MLRSNet | 46 | 109,161 | 10 m to 0.1 m resolution |

## Results

Self-supervised knowledge transfer reaches **state-of-the-art performance with high label efficiency** and outperforms the fully supervised setting. Qualitative analysis shows consistent evidence of explainable representations.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    <figure><img src="{{ '/assets/ssl_remote_sensing/ucmd_results.png' | relative_url }}" alt="Results on UC Merced" class="img-fluid" loading="lazy"></figure>
  </div>
</div>
<div class="caption">Downstream results on UC Merced across label budgets.</div>
