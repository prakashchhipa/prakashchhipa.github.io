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
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    third one
</div>

**What are the challenges?** 
1. Data on which vison models are trained do not have exposure to intented perspectively distorted examples so no robustness against unprecedent perspective disrotion.
2. Estimating camera's intrinsic and extrinsic parameters are challenging and doing it precisely is next to impossible so it prevents synthesizing perspective distortion
3. Distortion correction methods makes computer vision tasks a multi-step approach, first correction then vision task learning so its not efficient for real-world applications
   
In this work, we propose mitigating perspective distortion (MPD) by employing a fine-grained parameter control on a specific family of Möbius transform to model real-world distortion without estimating camera intrinsic and extrinsic parameters and without the need for actual distorted data. Also, we present a dedicated perspectively distorted benchmark dataset, ImageNet-PD, to benchmark the robustness of deep
learning models against this new dataset. The proposed method outperforms on existing benchmarks, ImageNet-E and ImageNet-X. Additionally, it significantly
improves performance on ImageNet-PD while consistently performing on standard data distribution. Further, our method shows improved performance on three PD-affected real-world applications: crowd counting, fisheye image recognition, and person re-identification.


You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
