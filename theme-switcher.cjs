const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.css') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Global structural changes
      if (file === 'index.css') {
        content = content.replace(/--bg-color: #050a15;/, '--bg-color: #ffffff;');
        content = content.replace(/--bg-gradient: radial-gradient\(circle at 50% 0%, #0c1a3b 0%, #050a15 60%\);/, '--bg-gradient: radial-gradient(circle at 50% 0%, #f0f4f8 0%, #ffffff 60%);');
        content = content.replace(/--text-primary: #f8fafc;/, '--text-primary: #0f172a;');
        content = content.replace(/--text-secondary: #94a3b8;/, '--text-secondary: #475569;');
        content = content.replace(/--primary-light: #60a5fa;/, '--primary-light: #3b82f6;');
        content = content.replace(/--surface-light: rgba\(255, 255, 255, 0.03\);/, '--surface-light: rgba(0, 0, 0, 0.02);');
        content = content.replace(/--surface-hover: rgba\(255, 255, 255, 0.05\);/, '--surface-hover: rgba(0, 0, 0, 0.04);');
        content = content.replace(/--border-color: rgba\(255, 255, 255, 0.08\);/, '--border-color: rgba(0, 0, 0, 0.08);');
        content = content.replace(/--gradient-text: linear-gradient\(to right, #ffffff, #94a3b8\);/, '--gradient-text: linear-gradient(to right, #0f172a, #475569);');
        content = content.replace(/rgba\(255, 255, 255, 0.2\)/g, 'rgba(0, 0, 0, 0.1)');
        content = content.replace(/box-shadow: 0 10px 30px rgba\(0, 0, 0, 0.5\)/g, 'box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05)');
      }
      
      if (file === 'App.css') {
        content = content.replace(/rgba\(5, 10, 21, 0.8\)/, 'rgba(255, 255, 255, 0.8)');
        content = content.replace(/background: #03060d;/, 'background: #f8fafc;');
      }
      
      // Generic component replacements
      if (file !== 'index.css' && file !== 'App.css') {
        // Replace white borders/surfaces with dark
        content = content.replace(/rgba\(255, 255, 255, 0.01\)/g, 'rgba(0, 0, 0, 0.01)');
        content = content.replace(/rgba\(255, 255, 255, 0.03\)/g, 'rgba(0, 0, 0, 0.02)');
        content = content.replace(/rgba\(255, 255, 255, 0.05\)/g, 'rgba(0, 0, 0, 0.04)');
        content = content.replace(/rgba\(255, 255, 255, 0.1\)/g, 'rgba(0, 0, 0, 0.08)');
        content = content.replace(/rgba\(255, 255, 255, 0.2\)/g, 'rgba(0, 0, 0, 0.1)');
        
        // Replace dark box shadows with light ones
        content = content.replace(/rgba\(0, 0, 0, 0.5\)/g, 'rgba(0, 0, 0, 0.05)');
        content = content.replace(/rgba\(0, 0, 0, 0.4\)/g, 'rgba(0, 0, 0, 0.08)');
        content = content.replace(/rgba\(0, 0, 0, 0.3\)/g, 'rgba(0, 0, 0, 0.06)');
        
        // Specific dark component backgrounds to white
        content = content.replace(/rgba\(15, 23, 42, 0.6\)/g, '#ffffff');
        content = content.replace(/rgba\(15, 23, 42, 0.8\)/g, '#ffffff');
        content = content.replace(/rgba\(15, 23, 42, 0.3\)/g, '#f8fafc');
        
        // Other dark replacements
        content = content.replace(/rgba\(0, 0, 0, 0.2\)/g, 'rgba(0, 0, 0, 0.03)');
        content = content.replace(/background: rgba\(0,0,0,0.2\)/g, 'background: rgba(0,0,0,0.03)');
      }

      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));
console.log('Theme updated successfully.');
