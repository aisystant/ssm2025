#!/usr/bin/env python3
"""
Updates data/variables.example.js with the current date.
This script runs hourly to keep the example file up to date.
"""

from datetime import datetime
import os


def main():
    # Get the current date
    current_date = datetime.now().strftime("%Y-%m-%d")

    # Define the path to the output file
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    output_file = os.path.join(project_root, "data", "variables.example.js")

    # Create the JavaScript content with current date
    content = f"""export const exampleData = {{
    currentDate: '{current_date}',
}};
"""

    # Write the content to the file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Updated {output_file} with date: {current_date}")


if __name__ == "__main__":
    main()
