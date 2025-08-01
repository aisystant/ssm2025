#!/usr/bin/env python3
"""
CSV to Nginx Redirect Configuration Converter

This script converts CSV files containing redirect information into Nginx configuration files.
Format of input CSV:
    - internal-redirects.csv: old_path,new_path (for pages with new paths on the same site)
    - external-redirects.csv: path (for pages redirecting to old.system-school)

Usage:
    ./csv-to-nginx-redirects.py internal-redirects.csv external-redirects.csv output.conf

Requirements:
    - Python 3
"""

import sys
import csv

def main():
    if len(sys.argv) != 4:
        print("Usage: ./csv-to-nginx-redirects.py internal-redirects.csv external-redirects.csv output.conf")
        sys.exit(1)

    internal_redirects_file = sys.argv[1]  # CSV for pages with new paths on the same site
    external_redirects_file = sys.argv[2]  # CSV for pages redirecting to old.system-school
    output_file = sys.argv[3]  # Output Nginx config

    with open(output_file, 'w') as output:
        # Write header
        output.write("# Generated redirects configuration\n")
        output.write("# This file contains redirects:\n")
        output.write("# 1. Pages implemented on the new site with same path - no redirects needed\n")
        output.write("# 2. Pages implemented on the new site with a different path - redirect to new path\n")
        output.write("# 3. Pages not implemented on the new site - redirect to old.system-school/path\n\n")

        # Process internal redirects (different path on new site)
        output.write("# Internal: Pages with new paths on the same site\n")
        try:
            with open(internal_redirects_file, 'r') as csvfile:
                reader = csv.reader(csvfile)
                for row in reader:
                    if len(row) != 2:
                        continue
                    old_path, new_path = row
                    output.write(f"location = {old_path} {{\n")
                    output.write(f"    return 302 {new_path};\n")
                    output.write("}\n\n")
        except FileNotFoundError:
            output.write("# No internal redirects specified\n\n")

        # Process external redirects (not implemented on new site)
        output.write("# External: Pages redirecting to old.system-school\n")
        try:
            with open(external_redirects_file, 'r') as csvfile:
                reader = csv.reader(csvfile)
                for row in reader:
                    if not row:
                        continue
                    path = row[0]
                    output.write(f"location = {path} {{\n")
                    output.write(f"    return 302 https://old.system-school.ru{path};\n")
                    output.write("}\n\n")
        except FileNotFoundError:
            output.write("# No external redirects specified\n\n")

if __name__ == "__main__":
    main()
