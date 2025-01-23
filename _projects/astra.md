---
layout: page
title: ASTrA: Adversarial Self-supervised Learning with Learnable Attack Strategy
description: International Conference on Learning Representations 2025
img: assets/astra/main_project.jpg
importance: 1
category: work
related_publications: true
---
Prakash Chandra Chhipa, Gautam Vashishtha, and Jithamanyu Settur  - equal contribution.
 
<p align="center">
    <a href="https://arxiv.org/pdf/2501.02296" style="margin-right: 20px;">Read Paper</a>
    <a href="https://github.com/prakashchhipa/ASTrA" style="margin-right: 20px;">Source Code @ Github</a>
    <a href="https://github.com/prakashchhipa/ASTrA/blob/main/astra_poster.JPG" style="margin-right: 20px;">Check Poster</a>
    <a href="https://www.youtube.com/watch?v=MKh9NE_XEMY" style="margin-right: 20px;">Watch Video @ Youtube</a>
    <a href="https://huggingface.co/prakashchhipa/ASTrA_SSL" style="margin-right: 20px;">Download Pretrained Models</a>
</p>

**Adversarial training** plays a critical role in robust self-supervised learning (SSL). Conventional self-supervised adversarial training (Self-AT) methods rely on heuristic attacks, which are static and fail to adapt to varying distributions and models.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/astra/conventional_self_at_method.jpg" title="Conventional Self-AT Method" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Challenges in Conventional Self-AT:**
1. Heuristic attacks are static and fail to adapt to the evolving dynamics of SSL models.
2. Adversarial robustness relies on manually tuned attack parameters, making it impractical for real-world scenarios.
3. Lack of optimization for attack strategies leads to suboptimal representations.

**Proposed ASTrA Method**
ASTrA introduces a learnable adversarial attack strategy, enabling the generation of adaptive perturbations that optimize SSL representations. ASTrA employs a reinforcement learning-based framework to adaptively refine attack strategies.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/astra/AstrA_method.jpg" title="ASTrA Method" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Mixed Contrastive Loss:** ASTrA incorporates a mixed contrastive loss to combine clean and adversarial views for robust representation learning.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/astra/mixed_contrastive_loss.jpg" title="Mixed Contrastive Loss" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Interaction Between Strategy and Target Network:** ASTrA leverages a dual-network framework where the strategy network generates perturbations, and the target network learns SSL representations.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/astra/interaction_between_networks.jpg" title="Interaction Between Networks" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Exploration-Exploitation Phenomena:** ASTrA dynamically balances exploration and exploitation during pretraining, converging to optimal attack parameters regardless of the dataset.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/astra/exploration_exploitation_phenomena.jpg" title="Exploration-Exploitation Phenomena" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Results

**Standard Linear Finetuning Results**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/astra/results_SLF_results_astra_vs_other_self_at.jpg" title="Standard Linear Finetuning" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Semi-supervised Settings:** ASTrA demonstrates superior performance in semi-supervised learning compared to conventional Self-AT methods.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/astra/results_astra_vs_acl_semi_supervised_setting.jpg" title="Semi-supervised Results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Robust Overfitting:** ASTrA sustains longer pretraining epochs without overfitting, outperforming conventional methods.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/astra/results_robust_overfitting_astra_vs_acl.jpg" title="Robust Overfitting" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Ablation Study:** Comprehensive ablation study highlights the effectiveness of ASTrA components across multiple datasets.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/astra/results_ablations.jpg" title="Ablation Study" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<p align="center">
    <a href="https://arxiv.org/pdf/2501.02296" style="margin-right: 20px;">Read Paper</a>
    <a href="https://github.com/prakashchhipa/ASTrA" style="margin-right: 20px;">Source Code @ Github</a>
    <a href="https://github.com/prakashchhipa/ASTrA/blob/main/astra_poster.JPG" style="margin-right: 20px;">Check Poster</a>
    <a href="https://www.youtube.com/watch?v=MKh9NE_XEMY" style="margin-right: 20px;">Watch Video @ Youtube</a>
    <a href="https://huggingface.co/prakashchhipa/ASTrA_SSL" style="margin-right: 20px;">Download Pretrained Models</a>
</p>
