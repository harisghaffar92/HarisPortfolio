import zipfile
import os
import json

ZIP_PATH = r"d:\Portfolio Website\ezgif-399180418e49662a-jpg.zip"
OUTPUT_DIR = r"d:\Portfolio Website\public\frames"
DESKTOP_DIR = os.path.join(OUTPUT_DIR, "desktop")
MOBILE_DIR = os.path.join(OUTPUT_DIR, "mobile")
MANIFEST_PATH = os.path.join(OUTPUT_DIR, "manifest.json")

os.makedirs(DESKTOP_DIR, exist_ok=True)
os.makedirs(MOBILE_DIR, exist_ok=True)

with zipfile.ZipFile(ZIP_PATH, 'r') as z:
    all_files = sorted([f for f in z.namelist() if f.endswith('.jpg')])
    total_raw = len(all_files)
    print(f"Sampling optimized sequence from {total_raw} raw frames...")

    # Target 75 frames for desktop (ultra-smooth scroll, fast load, 0 lag)
    target_desktop_count = 75
    step_d = (total_raw - 1) / (target_desktop_count - 1)
    desktop_indices = [int(round(i * step_d)) for i in range(target_desktop_count)]
    desktop_indices = sorted(list(dict.fromkeys(desktop_indices)))

    # Target 35 frames for mobile
    target_mobile_count = 35
    step_m = (total_raw - 1) / (target_mobile_count - 1)
    mobile_indices = [int(round(i * step_m)) for i in range(target_mobile_count)]
    mobile_indices = sorted(list(dict.fromkeys(mobile_indices)))

    desktop_frames = []
    for idx, frame_idx in enumerate(desktop_indices):
        raw_filename = all_files[frame_idx]
        file_data = z.read(raw_filename)
        dest_filename = f"frame_{idx + 1:04d}.jpg"
        dest_path = os.path.join(DESKTOP_DIR, dest_filename)
        with open(dest_path, "wb") as f:
            f.write(file_data)
        desktop_frames.append(f"/frames/desktop/{dest_filename}")

    mobile_frames = []
    for idx, frame_idx in enumerate(mobile_indices):
        raw_filename = all_files[frame_idx]
        file_data = z.read(raw_filename)
        dest_filename = f"frame_{idx + 1:04d}.jpg"
        dest_path = os.path.join(MOBILE_DIR, dest_filename)
        with open(dest_path, "wb") as f:
            f.write(file_data)
        mobile_frames.append(f"/frames/mobile/{dest_filename}")

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

print(f"Optimized frame processing complete! Desktop: {len(desktop_frames)} frames, Mobile: {len(mobile_frames)} frames.")
