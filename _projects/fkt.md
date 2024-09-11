---
layout: page
title: Functional Knowledge Transfer with Self-supervised Representation Learning
description: IEEE International Conference on Image Processing, 2023
img: assets/fkt/fkt.png
importance: 3
category: work
giscus_comments: true
---
<p align="center">
    <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10222142" style="margin-right: 20px;">Read Paper @ IEEE Xplore</a>
    <a href="https://arxiv.org/pdf/2304.01354" style="margin-right: 20px;">Read Paper @ Arxiv</a>
    <a href="https://github.com/prakashchhipa/Functional_Knowledge_Transfer_SSL" style="margin-right: 20px;">Source Code @ Github</a>
    <a href="https://www.youtube.com/watch?v=GlnDm_GrVm0" style="margin-right: 20px;">Watch Video @ Youtube</a>
    <a href="https://github.com/prakashchhipa/Functional_Knowledge_Transfer_SSL/blob/main/poster_icon.JPG">Check Poster</a>
</p>

**Self-Supervised Learning** (SSL) promises to reduce the need for labeled data, but its reliance on large-scale, unlabeled datasets limits its effectiveness in data-scarce environments. In such cases, SSL in its conventional form contributes little to improving performance. This project shifts the focus to overcoming these limitations by exploring novel approaches to make SSL work better with low data regime.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/fkt/hypothesis.JPG" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/fkt/why_fkt.JPG" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Functional knowledge transfer vs. Representational knowledge transfer 
</div>

This work pioneers the shift from conventional representational knowledge transfer to **functional knowledge transfer**. We achieve this by designing a learning approach where self-supervised learning (SSL) and downstream supervised tasks are jointly optimized. This synergy reinforces both tasks, allowing SSL to contribute meaningfully even when data is limited.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/fkt/fkt_method.JPG" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

This method **jointly optimizes the contrastive pretraining with supervised learning objectives on small-scale datasets**. By jointly optimizing these tasks, we significantly improve performance across various domains. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/fkt/fkt_formulation.JPG" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

This approach allows us to harness the power of SSL without requiring vast amounts of data, making it effective even in low-data regimes.
To evaluate the effectiveness of functional knowledge transfer, we tested it on three small-scale and diverse datasets: CIFAR10, Intel Image, and Aptos 2019. The results demonstrate consistent improvements in accuracy, precision, and recall, proving that our approach outperforms conventional methods, even in low-data scenarios.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/fkt/datasets.JPG" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/fkt/results.JPG" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/fkt/cifar10.jpg" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

While this approach to functional knowledge transfer in SSL has shown promising results, it opens up exciting avenues for further exploration.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/fkt/conclusions.JPG" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

To dive deeper into the details of this work, **read the paper and watch the video on YouTube to learn more** about how this method transforms SSL for low-data environments

<p align="center">
    <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10222142" style="margin-right: 20px;">Read Paper @ IEEE Xplore</a>
    <a href="https://arxiv.org/pdf/2304.01354" style="margin-right: 20px;">Read Paper @ Arxiv</a>
    <a href="https://github.com/prakashchhipa/Functional_Knowledge_Transfer_SSL" style="margin-right: 20px;">Source Code @ Github</a>
    <a href="https://www.youtube.com/watch?v=GlnDm_GrVm0" style="margin-right: 20px;">Watch Video @ Youtube</a>
    <a href="https://github.com/prakashchhipa/Functional_Knowledge_Transfer_SSL/blob/main/poster_icon.JPG">Check Poster</a>
</p>
