import zipfile
import os
import json

ZIP_PATH = r"d:\Portfolio Website\ezgif-399180418e49662a-jpg.zip"
OUTPUT_DIR = r"d:\Portfolio Website\public\frames"
DESKTOP_DIR = os.path.join(OUTPUT_DIR, "desktop")
MOBILE_DIR = os.path.join(OUTPUT_DIR, "mobile")
MANIFEST_PATH = os.path.join(OUTPUT_DIR, "manifest.json")

# Clear existing frames directory if any
os.makedirs(DESKTOP_DIR, exist_ok=True)
os.makedirs(MOBILE_DIR, exist_ok=True)

with zipfile.ZipFile(ZIP_PATH, 'r') as z:
    all_files = sorted([f for f in z.namelist() if f.endswith('.jpg')])
    total_raw = len(all_files)
    print(f"Extracting all {total_raw} frames directly from zip...")

    desktop_frames = []
    for idx, raw_filename in enumerate(all_files):
        file_data = z.read(raw_filename)
        dest_filename = f"frame_{idx + 1:04d}.jpg"
        dest_path = os.path.join(DESKTOP_DIR, dest_filename)
        with open(dest_path, "wb") as f:
            f.write(file_data)
        desktop_frames.append(f"/frames/desktop/{dest_filename}")

    # Mobile frames (every 2nd frame = 150 frames)
    mobile_frames = []
    for idx in range(0, total_raw, 2):
        raw_filename = all_files[idx]
        file_data = z.read(raw_filename)
        dest_filename = f"frame_{len(mobile_frames) + 1:04d}.jpg"
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

print(f"Extraction complete! Desktop total frames: {len(desktop_frames)}, Mobile total frames: {len(mobile_frames)}")
