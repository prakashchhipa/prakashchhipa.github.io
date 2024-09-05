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


**Perspective distortion** significantly alters the appearance of objects in images. It can change their shape, size, orientation, angles, and the spatial relationships between them in ways that might not be expected.
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

**How perspective distortion alters the appearance?** When same object captured from different viewpoints due to different location of camera, it captures the shape of image differently and distortion takes places naturally. Look at the visual here. Changes in shape of the object, changes the underlying distrutions. There are many such parameters like camera location has role in it.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpd/explain_pd.PNG" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**What are the challenges?** 
1. Data on which vison models are trained do not have exposure to intented perspectively distorted examples so no robustness against unprecedent perspective disrotion.
2. Estimating camera's intrinsic and extrinsic parameters are challenging and doing it precisely is next to impossible so it prevents synthesizing perspective distortion
3. Distortion correction methods makes computer vision tasks a multi-step approach, first correction then vision task learning so its not efficient for real-world applications
   
**Proposed methodology**- This work focus on mittigating perspective distortion by exposing vision models to perspectively distorted examples. These examples are neither created using camera parameters nor naturally collected but synthesized by mathematically modelling the perspective distortion.

**How MPD works?** This work shares mitigating perspective distortion (MPD) method by first underatanding the non-linear nature of perspective distortion then employing a fine-grained parameter control on a specific family of Möbius transform to model real-world distortion without estimating camera intrinsic and extrinsic parameters and without the need for actual distorted data. MPD leaverages Möbius's conformal and non-linear nature in complex space. MPD takes images to complex space, transform, and then get it back to pixel space.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpd/mobius_mpd.jpg" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Integrating MPD**- MPD gets easily integrated as augmentation method into learning pipline, be it supervsied training or self-supervised pretraining. In this work MPD explored with two self-supervsied methods SimCLR and DINO.
<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/mpd/DINO_MPD.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/mpd/simclr_MPD.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
When it comes to adapting MPD to other real-world applications, MPD gets adapted easily with multiple computer vision applications including crowd counting, person re-identificaiton, fisheye view, and object detection.
<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/mpd/mpd_cc.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/mpd/mpd_od.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
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


**A dedicated perspectively distorted benchmark dataset** This work shares a new benchmark **ImageNet-PD**  to evaluate the robustness of computer vision models against perspective distortion and address the non-availability of a suitable benchmark. ImageNet-PD derived from the original ImageNet\cite validation set, has eight subsets, four corresponding to four orientations (left, right, top, bottom) with black background and other four subsets with the same orientations but with integrated padding background. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpd/pd_datasets.png" title="MPD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<p align="center">
    <a href="https://arxiv.org/abs/2405.14874" style="margin-right: 20px;">Read Paper</a>
    <a href="https://github.com/prakashchhipa/OVOD_Robustness" style="margin-right: 20px;">Source Code @ Github</a>
</p>


