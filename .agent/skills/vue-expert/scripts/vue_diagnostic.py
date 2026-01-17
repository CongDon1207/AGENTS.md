#!/usr/bin/env python3
"""
Vue.js Project Diagnostic Script
Analyzes Vue components for common issues and patterns.
"""

import subprocess
import sys
import os
from pathlib import Path

def run_cmd(cmd: str) -> str:
    """Run shell command and return output."""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        return result.stdout + result.stderr
    except Exception as e:
        return str(e)

def check_vue_version():
    """Check Vue.js version."""
    print("\n📦 Vue Version:")
    print("-" * 40)
    output = run_cmd("npm list vue --depth=0 2>/dev/null | grep vue@")
    print(output or "Vue not found in dependencies")

def check_build_tool():
    """Detect Vue build tool."""
    print("\n🛠️ Build Tool:")
    print("-" * 40)
    
    cwd = Path.cwd()
    if (cwd / "nuxt.config.js").exists() or (cwd / "nuxt.config.ts").exists():
        print("✅ Nuxt.js detected")
    elif (cwd / "vite.config.js").exists() or (cwd / "vite.config.ts").exists():
        print("✅ Vite detected")
    elif (cwd / "vue.config.js").exists():
        print("✅ Vue CLI detected")
    else:
        print("⚠️ Unknown build tool")

def check_state_management():
    """Check for state management."""
    print("\n📊 State Management:")
    print("-" * 40)
    output = run_cmd("npm list pinia vuex --depth=0 2>/dev/null | grep -E '(pinia|vuex)'")
    if output.strip():
        print(output)
    else:
        print("⚠️ No state management detected (Pinia or Vuex)")

def check_composition_api():
    """Check Composition API usage."""
    print("\n🔧 Composition API Usage:")
    print("-" * 40)
    
    # Count script setup usage
    setup_count = run_cmd("grep -r '<script setup' --include='*.vue' src/ 2>/dev/null | wc -l").strip()
    options_count = run_cmd("grep -r 'export default {' --include='*.vue' src/ 2>/dev/null | wc -l").strip()
    
    print(f"  <script setup>: {setup_count} files")
    print(f"  Options API: {options_count} files")

def check_reactivity_issues():
    """Check for potential reactivity issues."""
    print("\n⚠️ Potential Reactivity Issues:")
    print("-" * 40)
    
    # Check for reactive destructuring
    issues = run_cmd("grep -r 'const.*{.*}.*=.*reactive' --include='*.vue' src/ 2>/dev/null | head -5")
    if issues.strip():
        print("❌ Reactive destructuring (use toRefs):")
        print(issues)
    
    # Check for direct prop mutation
    prop_mutation = run_cmd("grep -r 'props\\.\\w\\+\\s*=' --include='*.vue' src/ 2>/dev/null | head -5")
    if prop_mutation.strip():
        print("❌ Direct prop mutation detected:")
        print(prop_mutation)

def check_v_for_keys():
    """Check for v-for without keys."""
    print("\n🔑 v-for Key Check:")
    print("-" * 40)
    
    issues = run_cmd("grep -r 'v-for' --include='*.vue' src/ 2>/dev/null | grep -v ':key' | head -5")
    if issues.strip():
        print("❌ v-for without :key found:")
        print(issues)
    else:
        print("✅ All v-for have keys")

def check_lifecycle_cleanup():
    """Check for potential memory leaks."""
    print("\n🧹 Lifecycle Cleanup Check:")
    print("-" * 40)
    
    # Check for event listeners without cleanup
    issues = run_cmd("""
        grep -l 'addEventListener\\|setInterval\\|setTimeout' --include='*.vue' src/ 2>/dev/null | while read f; do
            if ! grep -q 'onUnmounted\\|removeEventListener\\|clearInterval\\|clearTimeout' "$f"; then
                echo "$f"
            fi
        done
    """)
    if issues.strip():
        print("⚠️ Files with event listeners but no cleanup:")
        print(issues)
    else:
        print("✅ No obvious cleanup issues found")

def check_ssr_issues():
    """Check for SSR compatibility issues."""
    print("\n🌐 SSR Compatibility Check:")
    print("-" * 40)
    
    # Check for client-only code
    issues = run_cmd("grep -rn 'window\\.|document\\.' --include='*.vue' src/ 2>/dev/null | grep -v 'onMounted\\|ClientOnly' | head -5")
    if issues.strip():
        print("⚠️ Potential SSR issues (window/document outside onMounted):")
        print(issues)
    else:
        print("✅ No obvious SSR issues found")

def main():
    print("=" * 50)
    print("🔍 Vue.js Project Diagnostic Report")
    print("=" * 50)
    
    check_vue_version()
    check_build_tool()
    check_state_management()
    check_composition_api()
    check_reactivity_issues()
    check_v_for_keys()
    check_lifecycle_cleanup()
    check_ssr_issues()
    
    print("\n" + "=" * 50)
    print("✅ Diagnostic Complete")
    print("=" * 50)

if __name__ == "__main__":
    main()
