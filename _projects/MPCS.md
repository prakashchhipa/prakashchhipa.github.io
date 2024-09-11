---
layout: page
title: Magnification Prior- A Self-Supervised Method for Learning Representations on Breast Cancer Histopathological Images
description: CVF Winter Conference on Applications of Computer Vision 2023
img: assets/mpcs/mpcs.png
importance: 2
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

**How perspective distortion alters the appearance?** When same object captured from different viewpoints due to different location of camera, it captures the shape of image differently and distortion takes places naturally. Look at the visual here. Changes in shape of the object, changes the underlying distrutions. There are many such parameters like camera location has role in it.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpcs/magnifications.JPG" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Histopathology images of different magnifications from BreakHis dataset. 
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpcs/augs2magnifications.jpg" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpcs/mpcs_method.JPG" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpcs/breakhis_results.JPG" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpcs/bach_results.JPG" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpcs/bisque.JPG" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    MPCS outperforms acorss datasets 
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpcs/opropfp_ablations.JPG" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpcs/tsne.JPG" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Ablations for variants of MPCS method 
</div>


<p align="center">
    <a href="https://openaccess.thecvf.com/content/WACV2023/papers/Chhipa_Magnification_Prior_A_Self-Supervised_Method_for_Learning_Representations_on_Breast_WACV_2023_paper.pdf" style="margin-right: 20px;">Read Paper @ CVF</a>
    <a href="https://arxiv.org/pdf/2203.07707" style="margin-right: 20px;">Read Paper + Supplimentary Material</a>
    <a href="https://github.com/prakashchhipa/Magnification-Prior-Self-Supervised-Method" style="margin-right: 20px;">Source Code @ Github</a>
    <a href="https://www.youtube.com/watch?v=z9_mjW2JStQ" style="margin-right: 20px;">Watch Video @ Youtube</a>
    <a href="https://github.com/prakashchhipa/Magnification-Prior-Self-Supervised-Method/blob/main/figures/poster.PNG">Check Poster</a>
</p>
