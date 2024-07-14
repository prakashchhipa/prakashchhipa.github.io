---
layout: page
title: Möbius Transform for Mitigating Perspective Distortions in Representation Learning
description: European Conference on Computer Vision 2024
img: assets/mpd/CAT.png
importance: 1
category: work
related_publications: true
---
**Perspective distortion** significantly alters the appearance of objects in images. It can change their shape, size, orientation, angles, and the spatial relationships between them in ways that might not be expected.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpd/PDexample1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpd/PDexample2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/mpd/PDexmaple3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    left - decribe. right - decribe
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
<div class="caption">
    third one
</div>

**MPD offers robustness**- The proposed method integrated with supervised and two self-supervised methods (SimCLR and DINO) outperforms on existing perspective distortion affected benchmarks, ImageNet-E and ImageNet-X. MPD significantly improves performance on ImageNet-PD (check it down) while consistently performing on standard data distribution. MPD improves performance on **three PD-affected real-world applications**: crowd counting, fisheye image recognition, and person re-identification and one PD-affected challenging CV task: object detection.
<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/mpd/ImageNet-E-plot.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/mpd/ImageNet-X-plot.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**A dedicated perspectively distorted benchmark dataset** This work shares a new benchmark **ImageNet-PD**  to evaluate the robustness of computer vision models against perspective distortion and address the non-availability of a suitable benchmark. ImageNet-PD derived from the original ImageNet\cite validation set, has eight subsets, four corresponding to four orientations (left, right, top, bottom) with black background and other four subsets with the same orientations but with integrated padding background.   

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
