<!DOCTYPE html>
<html lang="hi" class="notranslate" translate="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Hari Supreme - Global Portal</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        :root { --supreme-green: #2ecc71; --supreme-gold: #f1c40f; --supreme-dark: #050a18; }
        body { background-color: var(--supreme-dark); font-family: 'Inter', sans-serif; color: white; margin: 0; overflow-x: hidden; }
        
        .card-glass { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 28px; padding: 24px; }
        .btn-supreme { background: #f1c40f; color: #050a18; font-weight: 800; border-radius: 16px; transition: 0.3s; padding: 16px; text-align: center; }
        .btn-outline { background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.1); color: white; font-weight: 800; border-radius: 16px; padding: 16px; text-align: center; }
        
        /* Stats Progress Bar */
        .progress-bg { background: rgba(255, 255, 255, 0.05); height: 8px; border-radius: 10px; overflow: hidden; }
        .progress-fill { background: var(--supreme-green); height: 100%; width: 75%; border-radius: 10px; }

        /* Security Table Styles */
        .sec-table { width: 100%; border-collapse: collapse; margin-top: 15px; color: #1e293b; }
        .sec-table th, .sec-table td { padding: 12px; border: 1px solid #e2e8f0; text-align: left; }
        .sec-table th { background: #f8fafc; }

        .app-window { background: #f8fafc; color: #1e293b; min-height: 100vh; width: 100%; position: fixed; top: 0; left: 0; z-index: 1000; display: none; overflow-y: auto; }
        .app-window.active { display: block; animation: slideUp 0.4s ease-out; }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
    </style>
</head>
<body>

    <nav class="p-6 flex justify-between items-center">
        <h1 class="text-2xl font-black"><span class="text-green-500">Hari</span> <span class="text-yellow-500">Supreme</span></h1>
        <div class="flex gap-3">
            <button onclick="openApp('Security')" class="bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-[10px] font-bold border border-blue-500/20">SECURITY</button>
            <div class="w-10 h-10 bg-gray-800 rounded-xl border border-white/10 flex items-center justify-center text-xs font-bold">H</div>
        </div>
    </nav>

    <div class="bg-green-500/10 text-green-500 text-[10px] font-bold py-2 px-6 border-y border-green-500/10 mb-8 uppercase tracking-widest">
        ● Global mesh nodes active (99.9%) ● Fast & Secure Payments Enabled
    </div>

    <div class="container mx-auto px-5 space-y-6 pb-24">
        
        <div class="card-glass">
            <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">WALLET PERI</p>
            <h2 class="text-5xl font-black text-green-500 mb-8">$1,250,480.00</h2>
            <div class="grid grid-cols-2 gap-4">
                <button class="btn-supreme" onclick="alert('Sending...')">Keth sente</button>
                <button class="btn-outline" onclick="alert('Withdrawing...')">wodho</button>
            </div>
        </div>

        <div class="card-glass">
            <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">KITE MA NETWORK MI NG'OM ZOO UTIYE KUDU</p>
            <div class="flex justify-between items-center mb-4">
                <div class="text-sm font-bold text-white">Jutic ma tiyo: <span class="text-green-500 ml-1">1.8M</span></div>
                <div class="text-sm font-bold text-white">Nodes: <span class="text-yellow-500 ml-1">10,000+</span></div>
            </div>
            <div class="progress-bg">
                <div class="progress-fill"></div>
            </div>
        </div>

        <h3 class="text-lg font-black mt-8 mb-4">Tic ceke ma tiyu</h3>
        
        <div class="grid grid-cols-2 gap-4">
            <div onclick="openApp('Admin')" class="card-glass text-center cursor-pointer active:scale-95">
                <div class="text-4xl mb-3">🔐</div>
                <p class="text-[10px] font-black uppercase">Admin Panel</p>
            </div>
            <div onclick="openApp('Market')" class="card-glass text-center cursor-pointer active:scale-95">
                <div class="text-4xl mb-3">🛒</div>
                <p class="text-[10px] font-black uppercase">Market</p>
            </div>
        </div>
    </div>

    <div id="app-view" class="app-window">
        <div class="sticky top-0 bg-white border-b p-5 flex justify-between items-center">
            <h2 id="app-name" class="font-black text-xl uppercase">Service</h2>
            <button onclick="closeApp()" class="bg-red-50 text-red-600 px-6 py-2 rounded-xl font-bold text-xs">CLOSE</button>
        </div>
        <div id="app-content" class="p-6"></div>
    </div>

    <script>
        function openApp(name) {
            document.getElementById('app-view').classList.add('active');
            document.getElementById('app-name').innerText = "HARI " + name;
            let content = "";

            if(name === 'Security') {
                // Your GitHub Security Policy
                content = `
                <div class="max-w-2xl mx-auto">
                    <h3 class="text-2xl font-black mb-4"># Security Policy</h3>
                    <h4 class="font-bold text-lg mb-2">## Supported Versions</h4>
                    <p class="text-sm text-gray-600 mb-4">Use this section to tell people about which versions of your project are currently being supported with security updates.</p>
                    <table class="sec-table">
                        <thead><tr><th>Version</th><th>Supported</th></tr></thead>
                        <tbody>
                            <tr><td>5.1.x</td><td>✅</td></tr>
                            <tr><td>5.0.x</td><td>❌</td></tr>
                            <tr><td>4.0.x</td><td>✅</td></tr>
                            <tr><td>< 4.0</td><td>❌</td></tr>
                        </tbody>
                    </table>
                    <h4 class="font-bold text-lg mt-8 mb-2">## Reporting a Vulnerability</h4>
                    <p class="text-sm text-gray-600">Please report vulnerabilities directly through the admin panel or email security@hari-supreme.global. Expect an update within 24-48 hours.</p>
                </div>`;
            } else if(name === 'Admin') {
                content = `
                <div class="max-w-md mx-auto text-center py-10">
                    <h3 class="text-2xl font-black mb-6">Enter Master Security Key</h3>
                    <input type="password" id="m-key" class="w-full p-4 bg-gray-100 rounded-2xl border-none mb-4 text-center text-xl" placeholder="••••••••">
                    <button onclick="checkKey()" class="w-full bg-yellow-500 text-white py-4 rounded-2xl font-black">AUTHORIZE</button>
                </div>`;
            } else {
                content = `<div class="text-center py-20 text-gray-400">Section ${name} is coming soon.</div>`;
            }
            document.getElementById('app-content').innerHTML = content;
        }

        function closeApp() {
            document.getElementById('app-view').classList.remove('active');
        }

        function checkKey() {
            if(document.getElementById('m-key').value === 'HAI-2026-SUPREME') {
                alert('ACCESS GRANTED. Welcome Hari.');
            } else {
                alert('ACCESS DENIED. Invalid Security Key.');
            }
        }
    </script>
</body>
</html>
