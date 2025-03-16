#!/bin/bash

# This script creates project folders and placeholder images for your portfolio

# Base directory for project images
BASE_DIR="public/images/projects"

# Create base directory if it doesn't exist
mkdir -p "$BASE_DIR"

# Create placeholder image if it doesn't exist
PLACEHOLDER="public/images/placeholder.jpg"
if [ ! -f "$PLACEHOLDER" ]; then
  echo "Creating placeholder image at $PLACEHOLDER"
  # This just creates a simple text file indicating it's a placeholder
  # You would replace this with an actual image
  echo "This is a placeholder. Replace with a real image." > "$PLACEHOLDER"
fi

# Create project folders and placeholder images
for i in {1..10}; do
  PROJECT_DIR="$BASE_DIR/project$i"
  mkdir -p "$PROJECT_DIR"
  
  # Create cover image placeholder
  if [ ! -f "$PROJECT_DIR/cover.jpg" ]; then
    echo "Creating placeholder cover for project $i"
    echo "This is a cover placeholder for project $i. Replace with a real image." > "$PROJECT_DIR/cover.jpg"
  fi
  
  # Create additional image placeholders
  for j in {1..3}; do
    if [ ! -f "$PROJECT_DIR/image$j.jpg" ]; then
      echo "Creating placeholder image $j for project $i"
      echo "This is image placeholder $j for project $i. Replace with a real image." > "$PROJECT_DIR/image$j.jpg"
    fi
  done
done

echo "Project folders and placeholders created successfully!"
echo "Remember to replace placeholders with actual images before deploying." 