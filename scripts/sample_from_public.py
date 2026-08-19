import os
import json
import shutil

DESKTOP_DIR = r"d:\Portfolio Website\public\frames\desktop"
MOBILE_DIR = r"d:\Portfolio Website\public\frames\mobile"
MANIFEST_PATH = r"d:\Portfolio Website\public\frames\manifest.json"

all_desktop_files = sorted([f for f in os.listdir(DESKTOP_DIR) if f.endswith('.jpg')])
total_raw = len(all_desktop_files)
print(f"Found {total_raw} raw extracted frame images in public/frames/desktop...")

# Target 75 frames for desktop (ultra-smooth scroll, fast load, 0 lag)
target_desktop_count = min(75, total_raw)
step_d = (total_raw - 1) / (target_desktop_count - 1)
desktop_indices = [int(round(i * step_d)) for i in range(target_desktop_count)]
desktop_indices = sorted(list(dict.fromkeys(desktop_indices)))

# Target 35 frames for mobile
target_mobile_count = min(35, total_raw)
step_m = (total_raw - 1) / (target_mobile_count - 1)
mobile_indices = [int(round(i * step_m)) for i in range(target_mobile_count)]
mobile_indices = sorted(list(dict.fromkeys(mobile_indices)))

desktop_frames = [f"/frames/desktop/{all_desktop_files[i]}" for i in desktop_indices]
mobile_frames = [f"/frames/desktop/{all_desktop_files[i]}" for i in mobile_indices]

manifest = {
    "desktop": {
        "count": len(desktop_frames),
        "frames": desktop_frames
    },
    "mobile": {
        "count": len(mobile_frames),
        "frames": mobile_frames
    },
    "aspectRatio": 16 / 9,
    "width": 1280,
    "height": 720
}

with open(MANIFEST_PATH, "w") as f:
    json.dump(manifest, f, indent=2)

print(f"Sampled manifest updated successfully! Desktop frames: {len(desktop_frames)}, Mobile frames: {len(mobile_frames)}.")
