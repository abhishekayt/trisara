import cv2
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

def create_master_hero_background():
    # 1. Load raw high-res Post 2.png
    raw_path = r"E:\trisara\client-assets\Social media_\Post 2.png"
    raw_img = Image.open(raw_path).convert("RGBA")
    print(f"Loaded raw Post 2: {raw_img.size}")

    # 2. Advanced OpenCV Enhancement (Jewelry Luster & Filigree Detail)
    rgb = np.array(raw_img.convert("RGB"))
    
    # Bilateral filter to denoise while maintaining crisp jewel edges
    denoised = cv2.bilateralFilter(rgb, d=7, sigmaColor=35, sigmaSpace=35)
    
    # LAB space CLAHE for gold highlights & jewel depth
    lab = cv2.cvtColor(denoised, cv2.COLOR_RGB2LAB)
    l, a, b = cv2.split(lab)
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    cl = clahe.apply(l)
    enhanced_lab = cv2.merge((cl, a, b))
    enhanced_rgb = cv2.cvtColor(enhanced_lab, cv2.COLOR_LAB2RGB)

    # 3. 2x Lanczos Super-Sampling
    pil_enh = Image.fromarray(enhanced_rgb)
    w_up = int(raw_img.width * 2)
    h_up = int(raw_img.height * 2)
    upscaled = pil_enh.resize((w_up, h_up), Image.Resampling.LANCZOS)

    # 4. Unsharp Mask for razor-sharp gold reflections
    sharpened = upscaled.filter(ImageFilter.UnsharpMask(radius=1.3, percent=135, threshold=1))

    # 5. Contrast & Gold Radiance Tuning
    color_enh = ImageEnhance.Color(sharpened).enhance(1.06)
    contrast_enh = ImageEnhance.Contrast(color_enh).enhance(1.05)
    
    # 6. Canvas Setup: 2560 x 1100
    CANVAS_W = 2560
    CANVAS_H = 1100
    BG_COLOR = (30, 20, 15) # Trisara signature #1e140f
    
    canvas = np.zeros((CANVAS_H, CANVAS_W, 3), dtype=np.uint8)
    canvas[:, :] = BG_COLOR

    # Resize model to fit canvas height (1100px)
    model_h = CANVAS_H
    model_w = int(model_h * (contrast_enh.width / contrast_enh.height))
    model_resized = contrast_enh.resize((model_w, model_h), Image.Resampling.LANCZOS)
    model_arr = np.array(model_resized)
    print(f"Resized model dimensions: {model_w}x{model_h}")

    # Position model on right side:
    # Model right edge at CANVAS_W - 80px (approx x=2480)
    # Model left edge at 2480 - model_w = 2480 - 881 = 1599px
    model_x1 = CANVAS_W - model_w - 60
    model_x2 = model_x1 + model_w
    model_y1 = 0
    model_y2 = CANVAS_H

    # Create feathering masks for seamless blending into dark brown
    # Left edge blend (300px transition)
    blend_w = 320
    alpha_left = np.ones((model_h, model_w), dtype=np.float32)
    for i in range(blend_w):
        # smoothstep curve
        t = i / blend_w
        smooth_t = t * t * (3 - 2 * t)
        alpha_left[:, i] = smooth_t

    # Right edge blend (60px transition)
    blend_r = 60
    for i in range(blend_r):
        t = (blend_r - 1 - i) / blend_r
        smooth_t = t * t * (3 - 2 * t)
        alpha_left[:, model_w - blend_r + i] = smooth_t

    # Bottom edge blend (120px transition into bottom section)
    blend_b = 120
    for j in range(blend_b):
        t = (blend_b - 1 - j) / blend_b
        smooth_t = t * t * (3 - 2 * t)
        alpha_left[model_h - blend_b + j, :] *= smooth_t

    # Apply alpha blend of model onto canvas
    alpha_3d = np.repeat(alpha_left[:, :, np.newaxis], 3, axis=2)
    model_blended = (model_arr * alpha_3d + np.array(BG_COLOR) * (1.0 - alpha_3d)).astype(np.uint8)

    canvas[model_y1:model_y2, model_x1:model_x2] = model_blended

    # Subtle ambient warmth glow on the right half to unify lighting
    # Golden glow centered around x=2000, y=550
    y_coords, x_coords = np.ogrid[:CANVAS_H, :CANVAS_W]
    dist_sq = ((x_coords - 2000) / 800) ** 2 + ((y_coords - 500) / 600) ** 2
    ambient_glow = np.exp(-dist_sq * 1.5)
    glow_color = np.array([45, 28, 18], dtype=np.float32) - np.array(BG_COLOR, dtype=np.float32)
    
    # Add ambient glow only to background (where model isn't solid)
    # Left side has gentle warm radial falloff
    bg_mask = np.ones((CANVAS_H, CANVAS_W), dtype=np.float32)
    bg_mask[:, model_x1:model_x2] = 1.0 - alpha_left
    glow_applied = (ambient_glow * bg_mask)[:, :, np.newaxis] * glow_color
    canvas = np.clip(canvas.astype(np.float32) + glow_applied * 0.4, 0, 255).astype(np.uint8)

    # Save master panoramic image
    final_img = Image.fromarray(canvas)
    out_path = r"E:\trisara\public\images\hero_panoramic_hq.jpg"
    final_img.save(out_path, format="JPEG", quality=95, optimize=True)
    print(f"Master panoramic image saved to {out_path} ({final_img.size})")

create_master_hero_background()
