---
layout: page
title: Open Vocabulary Object Detectors- Robustness Challenges under Distribution Shifts
description: European Conference on Computer Vision Workshops 2024
img: assets/ovod_robustness/ovod_robustness.jpg
importance: 4
category: work
related_publications: true
---
<p align="center">
    <a href="https://arxiv.org/abs/2405.14874" style="margin-right: 20px;">Read Paper</a>
    <a href="https://github.com/prakashchhipa/OVOD_Robustness" style="margin-right: 20px;">Source Code @ Github</a>
</p>

**VLM-based open-vocabulary object detectors** extends the capabilities of traditional object detection frameworks, enabling the recognition and classification of objects beyond predefined categories. Investigating OOD robustness in recent open-vocabulary object detection is essential to increase the trustworthiness of these models. This study evaluates the zero-shot robustness of three cutting-edge open-vocabulary object detection models—OWL-ViT, YOLO World, and Grounding DINO. We tested their performance across distribution shifts using the COCO-O, COCO-DC, and COCO-C benchmarks. Our experiments reveal challenges related to information loss, corruption, adversarial attacks, and geometrical deformations, driving the ongoing pursuit of improved model robustness in real-world scenarios.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/ovod_robustness/ovod_robustness.jpg" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Zeroshot evaluation approach of Open-vocabulary Object Detectors 
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpd/PDexample1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpd/PDexample2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpd/PDexample3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example images showing the effect of distortion 
</div>


**MPD offers robustness**- The proposed method MPD outperforms on existing perspective distortion affected benchmarks, ImageNet-E and ImageNet-X. MPD significantly improves performance on ImageNet-PD (check it down) while consistently performing on standard data distribution. MPD improves performance on **three PD-affected real-world applications**: crowd counting, fisheye image recognition, and person re-identification and one PD-affected challenging CV task: object detection.
<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/mpd/ImageNet-E-plot.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/mpd/ImageNet-X-plot.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/mpd/linear_eval_MPD_SSL_DINO.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/mpd/CC_plot.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<p align="center">
    <a href="https://arxiv.org/abs/2405.14874" style="margin-right: 20px;">Read Paper</a>
    <a href="https://github.com/prakashchhipa/OVOD_Robustness" style="margin-right: 20px;">Source Code @ Github</a>
</p>


