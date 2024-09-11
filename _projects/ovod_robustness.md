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
    <a href="https://github.com/prakashchhipa/OVOD_Robustness/blob/main/ovod_poster.JPG" style="margin-right: 20px;">Check poster</a>
</p>

**VLM-based open-vocabulary object detectors** extends the capabilities of traditional object detection frameworks, enabling the recognition and classification of objects beyond predefined categories. Investigating OOD robustness in recent open-vocabulary object detection is essential to increase the trustworthiness of these models. This study evaluates the zero-shot robustness of three cutting-edge open-vocabulary object detection models—OWL-ViT, YOLO World, and Grounding DINO. We tested their performance across distribution shifts using the COCO-O, COCO-DC, and COCO-C benchmarks. Our experiments reveal challenges related to information loss, corruption, adversarial attacks, and geometrical deformations, driving the ongoing pursuit of improved model robustness in real-world scenarios.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/ovod_robustness/ovod_robustness1.jpg" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Zeroshot evaluation approach of Open-vocabulary Object Detectors 
</div>

This study choses three prominant and recent open-vocabulary object detectiomn models to do comparative analysis.
1. <a href="https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136700714.pdf" style="margin-right: 20px;">**OWL-ViT ECCV 2022**</a> - Builds on the Vision Transformer (ViT) by integrating text embeddings for open-vocabulary detection. It removes the final token pooling layer, adds lightweight classification and box prediction heads, and fine-tunes on image-text data. This enables zero-shot detection across diverse categories with high accuracy.
2. <a href="https://openaccess.thecvf.com/content/CVPR2024/papers/Cheng_YOLO-World_Real-Time_Open-Vocabulary_Object_Detection_CVPR_2024_paper.pdf" style="margin-right: 20px;">**YOLO-World CVPR 2024**</a> - Enhances the YOLO model with real-time open-vocabulary detection using the RepVL-PAN and region-text contrastive loss. It achieves strong visual-semantic alignment and maintains efficiency, making it effective for detecting a wide range of objects in a zero-shot manner.
3. <a href="https://arxiv.org/pdf/2303.05499" style="margin-right: 20px;">**Grounding DINO ECCV 2024**</a> - Combines the DINO transformer with grounded pre-training to fuse language and vision for arbitrary object detection. It excels at language-guided detection and understanding objects from category names or referring expressions, making it versatile for both open-vocabulary detection and referring expression comprehension.

OVOD models were exposed to three public out-of-ditribution benchmarks which are dedicatly built for introducing distribution shifts from varius factors. 
1. <a href="https://openaccess.thecvf.com/content/ICCV2023/papers/Mao_COCO-O_A_Benchmark_for_Object_Detectors_under_Natural_Distribution_Shifts_ICCV_2023_paper.pdf" style="margin-right: 20px;">**COCO-O**</a> - A dataset testing object detection under natural distribution shifts like occlusion, blurring, pose variation, and illumination differences. It contains 6,782 images across six subsets: weather, painting, handmade, cartoon, tattoo, and sketch.
2. <a href="https://arxiv.org/pdf/2403.04701" style="margin-right: 20px;">**COCO-DC**</a> -  Focuses on object detection robustness with 1,127 images separated from their backgrounds. It features four subsets: Adversarial, BLIP-2 Caption, Color, and Texture to test models under diverse background conditions.
3. <a href="https://arxiv.org/pdf/1907.07484" style="margin-right: 20px;">**COCO-C**</a> - Introduces 15 image corruption types (e.g., noise, blur, weather) with five severity levels, assessing model performance under unseen distortions across various challenges.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/ovod_robustness/quality_results.jpg" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Comparing OVOD models on COCO-O subsets examples. 
</div>

The notable observation suggests that all three open-vocabulary foundation model-based object detectors, when subjected to degradation of image quality and distribution shift, exhibit significant deviations in performance. This indicates an inherent relationship between OV object detectors and the quality of data.
<div class="row">
    <div class="col-sm mt-5 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/ovod_robustness/meta_compare.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-5 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/ovod_robustness/cocodc_main.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Robustness comparison for OWL-ViT, Yolo-World, and Grpounding DINO acorss Out-of-ditribution benchmarks COCO-O, COCO-C and COCO-DC and orginal COCO dataset.  
</div>

We explore one of the first approaches to evaluate zero-shot open-vocabulary foundation models from a robustness perspective under distribution shifts. By analyzing three recent object detection models across public benchmarks, we highlight the significant challenges posed by out-of-distribution shifts, which cause performance drops. Our findings suggest the need for further research into this area. Combining vision-language models with effective prompt engineering may pave the way for more robust open-vocabulary detectors, ultimately improving their reliability and enabling broader applications across various fields. Please read the paper for detailed analysis and inisghts.

<p align="center">
    <a href="https://arxiv.org/abs/2405.14874" style="margin-right: 20px;">Read Paper</a>
    <a href="https://github.com/prakashchhipa/OVOD_Robustness" style="margin-right: 20px;">Source Code @ Github</a>
</p>


