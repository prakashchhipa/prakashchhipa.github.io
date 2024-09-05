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

This study choses three prominant and recent open-vocabulary object detectiomn models to do comparative analysis.
<a href="" style="margin-right: 20px;">**OWL-ViT ECCV 2022**</a> - Builds on the Vision Transformer (ViT) by integrating text embeddings for open-vocabulary detection. It removes the final token pooling layer, adds lightweight classification and box prediction heads, and fine-tunes on image-text data. This enables zero-shot detection across diverse categories with high accuracy.
<a href="" style="margin-right: 20px;">**YOLO-World CVPR 2024**</a> - Enhances the YOLO model with real-time open-vocabulary detection using the RepVL-PAN and region-text contrastive loss. It achieves strong visual-semantic alignment and maintains efficiency, making it effective for detecting a wide range of objects in a zero-shot manner.
<a href="" style="margin-right: 20px;">**Grounding DINO ECCV 2024**</a> - Combines the DINO transformer with grounded pre-training to fuse language and vision for arbitrary object detection. It excels at language-guided detection and understanding objects from category names or referring expressions, making it versatile for both open-vocabulary detection and referring expression comprehension.


OVOD models were exposed to three public out-of-ditribution benchmarks which are dedicatly built for introducing distribution shifts from varius factors. 
<a href="https://openaccess.thecvf.com/content/ICCV2023/papers/Mao_COCO-O_A_Benchmark_for_Object_Detectors_under_Natural_Distribution_Shifts_ICCV_2023_paper.pdf" style="margin-right: 20px;">**COCO-O**</a> - A dataset testing object detection under natural distribution shifts like occlusion, blurring, pose variation, and illumination differences. It contains 6,782 images across six subsets: weather, painting, handmade, cartoon, tattoo, and sketch.
<a href="https://arxiv.org/pdf/2403.04701" style="margin-right: 20px;">**COCO-DC**</a> -  Focuses on object detection robustness with 1,127 images separated from their backgrounds. It features four subsets: Adversarial, BLIP-2 Caption, Color, and Texture to test models under diverse background conditions.
<a href="https://arxiv.org/pdf/1907.07484" style="margin-right: 20px;">**COCO-C**</a> - Introduces 15 image corruption types (e.g., noise, blur, weather) with five severity levels, assessing model performance under unseen distortions across various challenges.

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


