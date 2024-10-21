---
layout: page
title: Depth Contrast - Self-supervised Pretraining on 3DPM Images for Mining Material Classification
description: European Conference on Computer Vision Workshops 2022
img: assets/dc/dc.JPG
importance: 5
category: work
related_publications: true
---
<p align="center">
    <a href="https://arxiv.org/pdf/2210.10633" style="margin-right: 20px;">Read Paper @ arxiv</a>
    <a href="https://link.springer.com/chapter/10.1007/978-3-031-25082-8_14" style="margin-right: 20px;">Read Paper @ Springer</a>
    <a href="https://github.com/prakashchhipa/Depth-Contrast-Self-Supervised-Method" style="margin-right: 20px;">Source Code @ Github</a>
    <a href="https://github.com/prakashchhipa/Depth-Contrast-Self-Supervised-Method/blob/main/figures/poster.PNG" style="margin-right: 20px;">Check poster</a>
</p>

**Challenges in mining material classification** extend beyond the scarcity of labeled data. The nature of data itself poses a significant hurdle due to its diverse characteristics captured by specialized sensors. Traditional computer vision models often struggle to handle these differences, highlighting the need for a **domain-aware self-supervised learning** approach.

To address these challenges, we focus on using domain-specific signals inherent in the data. Specifically, the **depth information of materials** captured by the 3DPM sensor serves as a valuable signal that can be exploited for self-supervised representation learning. This insight allows us to go beyond conventional image-based methods and leverage the unique properties of mining materials to improve classification performance.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/dc/dc_full.png" title="3DPM Data Collection" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Sample data from the 3DPM sensor including reflectance and depth map images.
</div>

Our proposed method, **Depth Contrast**, utilizes these domain-specific insights to create a robust **domain-aware self-supervised learning** framework. By leveraging depth maps and reflectance images, this method transforms unlabeled data into a powerful learning signal, significantly enhancing material classification performance without the need for manual labeling.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/dc/depth_contrast.png" title="Depth Contrast Method" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Depth Contrast** employs contrastive learning techniques, where the model learns to maximize the similarity between augmented views of the same material while distinguishing it from different materials. This approach utilizes both reflectance and depth map images, creating representations that are more robust to the variations in material properties.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/dc/results.png" title="Performance Results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Depth Contrast significantly outperforms ImageNet pre-trained models in both fully and semi-supervised settings.
</div>

**Key Outcomes:**
- **Improved Performance:** Depth Contrast achieves an F1 score of 0.73 in fully supervised settings, outperforming traditional ImageNet transfer learning methods.
- **Label Efficiency:** In semi-supervised settings, Depth Contrast shows an 11% improvement over ImageNet models when only 20% of labeled data is used.
- **Generalization:** The method demonstrates robust performance even when used as a feature extractor, highlighting its generalization capabilities.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/dc/materials.png" title="Material Classification Samples" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Ablation Study**: Detailed experiments revealed that the combination of depth and reflectance images provides the best representation, with consistent performance improvements across various architectures and data conditions.

This **domain-aware, self-supervised approach** leverages the unique properties of depth and reflectance data from the 3DPM sensor to enhance material classification tasks, setting a new benchmark in the mining industry.


<p align="center">
    <a href="https://arxiv.org/pdf/2210.10633" style="margin-right: 20px;">Read Paper @ arxiv</a>
    <a href="https://link.springer.com/chapter/10.1007/978-3-031-25082-8_14" style="margin-right: 20px;">Read Paper @ Springer</a>
    <a href="https://github.com/prakashchhipa/Depth-Contrast-Self-Supervised-Method" style="margin-right: 20px;">Source Code @ Github</a>
    <a href="https://github.com/prakashchhipa/Depth-Contrast-Self-Supervised-Method/blob/main/figures/poster.PNG" style="margin-right: 20px;">Check poster</a>
</p>


Chhipa, P.C. et al. (2023). Depth Contrast: Self-supervised Pretraining on 3DPM Images for Mining Material Classification. In: Karlinsky, L., Michaeli, T., Nishino, K. (eds) Computer Vision – ECCV 2022 Workshops. ECCV 2022. Lecture Notes in Computer Science, vol 13807. Springer, Cham. https://doi.org/10.1007/978-3-031-25082-8_14
