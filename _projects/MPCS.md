---
layout: page
title: Magnification Prior- A Self-Supervised Method for Learning Representations on Breast Cancer Histopathological Images
description: CVF Winter Conference on Applications of Computer Vision 2023
img: assets/mpcs/mpcs.png
importance: 3
category: work
related_publications: true
---
<p align="center">
    <a href="https://openaccess.thecvf.com/content/WACV2023/papers/Chhipa_Magnification_Prior_A_Self-Supervised_Method_for_Learning_Representations_on_Breast_WACV_2023_paper.pdf" style="margin-right: 20px;">Read Paper @ CVF</a>
    <a href="https://arxiv.org/pdf/2203.07707" style="margin-right: 20px;">Read Paper + Supplimentary Material</a>
    <a href="https://github.com/prakashchhipa/Magnification-Prior-Self-Supervised-Method" style="margin-right: 20px;">Source Code @ Github</a>
    <a href="https://www.youtube.com/watch?v=z9_mjW2JStQ" style="margin-right: 20px;">Watch Video @ Youtube</a>
    <a href="https://github.com/prakashchhipa/Magnification-Prior-Self-Supervised-Method/blob/main/figures/poster.PNG">Check Poster</a>
</p>

**Data scarcity in medical vision** is a well-known challenge, especially in histopathology. The problem intensifies when images are captured at different magnifications, as each magnification reveals different details. With limited labeled data and inconsistent image scales, training models becomes even harder. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpcs/maginifications.JPG" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Histopathology images of different magnifications from BreakHis dataset. 
</div>

By using domain-specific insights, this work turns the weakness of varying magnifications into a strength. Instead of standard augmentations used in typical models, we replace them with magnification variations, creating a **domain-aware self-supervised learning** method.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpcs/augs2magnifications.jpg" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Introducing **Magnification Prior Contrastive Similarity** (MPCS)—a method that leverages these magnification differences. Rather than relying on conventional augmentations, MPCS uses magnifications to teach the model how to learn from these variations. This leads to robust, self-supervised representations that are perfectly suited for the complex nature of histopathology. The method comes in three variants—Fixed Pair, Ordered Pair, and Random Pair— each using a unique magnification sampling strategy to explore the flexibility and performance of method.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpcs/mpcs_method.JPG" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**MPCS sets a new benchmark**, beating state-of-the-art methods across three histopathology datasets—BACH, Breast Cancer Cell, and BreakHis. These results highlight the method’s resilience and adaptability, proving its dominance in diverse medical imaging challenges.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpcs/breakhis_results.JPG" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    MPCS outperforms previous methods on BreakHis dataset. 
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpcs/bach_results.JPG" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    MPCS demonstrate label efficiency consistently when comapred with DPCL method on BACH dataset. 
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpcs/bisque.JPG" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    MPCS imporves perofmrance significantly on smnall-scale dataset Breast Cancer Cell, demonstrating transfer learning capability. 
</div>

**The ablation study** shows how each MPCS variant—Random Pair, Ordered Pair, and Fixed Pair—handles varying magnifications and human priors, with Ordered Pair standing out for its balance of flexibility and accuracy. The t-SNE visualizations confirm its strength, showing clear and distinct clustering of malignant and benign samples across magnifications.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpcs/opropfp_ablations.JPG" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Ablations for variants of MPCS method 
</div>

This domain-aware, self-supervised approach reshapes how we tackle the challenges of histopathology, turning magnification variability into a key strength for robust representation learning. To dive deeper, check out the **full paper, watch the video on YouTube, and explore the research poster** for more insights into the method’s impact.

<p align="center">
    <a href="https://openaccess.thecvf.com/content/WACV2023/papers/Chhipa_Magnification_Prior_A_Self-Supervised_Method_for_Learning_Representations_on_Breast_WACV_2023_paper.pdf" style="margin-right: 20px;">Read Paper @ CVF</a>
    <a href="https://arxiv.org/pdf/2203.07707" style="margin-right: 20px;">Read Paper + Supplimentary Material</a>
    <a href="https://github.com/prakashchhipa/Magnification-Prior-Self-Supervised-Method" style="margin-right: 20px;">Source Code @ Github</a>
    <a href="https://www.youtube.com/watch?v=z9_mjW2JStQ" style="margin-right: 20px;">Watch Video @ Youtube</a>
    <a href="https://github.com/prakashchhipa/Magnification-Prior-Self-Supervised-Method/blob/main/figures/poster.PNG">Check Poster</a>
</p>

Prakash Chandra Chhipa, Richa Upadhyay, Gustav Grund Pihlgren, Rajkumar Saini, Seiichi Uchida, Marcus Liwicki; Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2023, pp. 2717-2727
