window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>🎣 钓友圈 · 垂钓社区</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        body {
            background: #f4f6fa;
            padding-bottom: 80px;
        }
        /* 顶部导航 */
        .header {
            background: linear-gradient(135deg, #0b3b5c, #1a6b8a);
            color: white;
            padding: 18px 20px 14px;
            position: sticky;
            top: 0;
            z-index: 10;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .header h1 {
            font-size: 22px;
            font-weight: 700;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .header h1 small {
            font-size: 12px;
            font-weight: 400;
            opacity: 0.8;
            margin-left: auto;
        }

        /* 主容器 */
        .container {
            max-width: 480px;
            margin: 0 auto;
            padding: 16px 16px 80px;
        }

        /* ----- 发布表单卡片 ----- */
        .publish-card {
            background: white;
            border-radius: 20px;
            padding: 20px 18px;
            margin-bottom: 24px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.06);
            border: 1px solid rgba(0,0,0,0.04);
        }
        .publish-card h2 {
            font-size: 18px;
            color: #0b3b5c;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .form-group {
            margin-bottom: 16px;
        }
        .form-group label {
            display: block;
            font-size: 14px;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 5px;
        }
        .form-group input, .form-group textarea {
            width: 100%;
            padding: 12px 14px;
            border: 1.5px solid #e2e8f0;
            border-radius: 12px;
            font-size: 15px;
            background: #f8fafc;
            transition: 0.2s;
            outline: none;
        }
        .form-group input:focus, .form-group textarea:focus {
            border-color: #1a6b8a;
            background: white;
            box-shadow: 0 0 0 3px rgba(26,107,138,0.1);
        }
        .form-group textarea {
            height: 70px;
            resize: vertical;
        }
        .file-upload-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 6px;
        }
        .file-upload-item {
            position: relative;
            width: 72px;
            height: 72px;
            border-radius: 12px;
            overflow: hidden;
            background: #eef2f6;
            border: 1.5px dashed #b0c4d9;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: #64748b;
            cursor: pointer;
            transition: 0.2s;
        }
        .file-upload-item:hover {
            border-color: #1a6b8a;
        }
        .file-upload-item img, .file-upload-item video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
        }
        .file-upload-item .remove-file {
            position: absolute;
            top: -4px;
            right: -4px;
            background: #ef4444;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            font-size: 12px;
            line-height: 20px;
            text-align: center;
            cursor: pointer;
            border: 2px solid white;
            z-index: 5;
            font-weight: bold;
        }
        .file-upload-item input[type="file"] {
            opacity: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
            z-index: 2;
            position: relative;
        }
        .btn-publish {
            width: 100%;
            padding: 14px;
            background: linear-gradient(135deg, #0b3b5c, #1a6b8a);
            border: none;
            border-radius: 16px;
            color: white;
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            transition: 0.2s;
            box-shadow: 0 6px 14px rgba(26,107,138,0.3);
            margin-top: 4px;
        }
        .btn-publish:active {
            transform: scale(0.97);
        }

        /* ----- 帖子动态列表 ----- */
        .feed-title {
            font-size: 18px;
            font-weight: 700;
            color: #0b3b5c;
            margin-bottom: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .post-card {
            background: white;
            border-radius: 20px;
            padding: 18px 16px;
            margin-bottom: 18px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            border: 1px solid rgba(0,0,0,0.04);
        }
        .post-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }
        .post-title {
            font-size: 17px;
            font-weight: 700;
            color: #1e293b;
        }
        .post-location {
            font-size: 13px;
            color: #1a6b8a;
            background: #e6f0f5;
            padding: 2px 12px;
            border-radius: 30px;
            font-weight: 500;
        }
        .post-desc {
            color: #334155;
            font-size: 14px;
            line-height: 1.6;
            margin: 8px 0 12px;
        }
        .post-media {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 10px 0 12px;
        }
        .post-media .media-item {
            width: calc(33.33% - 6px);
            border-radius: 12px;
            overflow: hidden;
            background: #d1d9e6;
            aspect-ratio: 1 / 1;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            position: relative;
        }
        .post-media .media-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .post-media .media-item video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .post-media .media-item .play-icon {
            position: absolute;
            font-size: 32px;
            color: white;
            text-shadow: 0 2px 12px rgba(0,0,0,0.6);
            pointer-events: none;
        }
        .post-actions {
            display: flex;
            align-items: center;
            gap: 20px;
            padding-top: 12px;
            border-top: 1px solid #f1f5f9;
            margin-top: 4px;
        }
        .post-actions button {
            background: none;
            border: none;
            font-size: 15px;
            font-weight: 500;
            color: #475569;
            display: flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            padding: 4px 8px;
            border-radius: 30px;
            transition: 0.15s;
        }
        .post-actions button:active {
            background: #eef2f6;
        }
        .post-actions .liked {
            color: #ef4444;
        }
        .post-time {
            font-size: 12px;
            color: #94a3b8;
            margin-left: auto;
        }

        /* ----- 评论区 (内嵌) ----- */
        .comment-section {
            margin-top: 14px;
            border-top: 1px solid #f1f5f9;
            padding-top: 14px;
            display: none;
        }
        .comment-section.open {
            display: block;
        }
        .comment-item {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
            font-size: 14px;
        }
        .comment-item .c-user {
            font-weight: 700;
            color: #0b3b5c;
            white-space: nowrap;
        }
        .comment-item .c-text {
            color: #1e293b;
            word-break: break-all;
        }
        .comment-item .c-time {
            font-size: 11px;
            color: #94a3b8;
            margin-left: auto;
            white-space: nowrap;
        }
        .comment-input-row {
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }
        .comment-input-row input {
            flex: 1;
            padding: 10px 14px;
            border: 1.5px solid #e2e8f0;
            border-radius: 30px;
            font-size: 14px;
            outline: none;
            background: #f8fafc;
        }
        .comment-input-row input:focus {
            border-color: #1a6b8a;
        }
        .comment-input-row button {
            background: #1a6b8a;
            color: white;
            border: none;
            padding: 0 20px;
            border-radius: 30px;
            font-weight: 600;
            cursor: pointer;
        }

        /* 空状态 */
        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: #94a3b8;
        }
        .empty-state span {
            font-size: 48px;
            display: block;
            margin-bottom: 12px;
        }

        /* 图片预览放大 (Lightbox) */
        .lightbox {
            display: none;
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 999;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .lightbox.active {
            display: flex;
        }
        .lightbox img {
            max-width: 100%;
            max-height: 90vh;
            border-radius: 12px;
            object-fit: contain;
        }
        .lightbox .close-lb {
            position: absolute;
            top: 30px;
            right: 30px;
            color: white;
            font-size: 36px;
            cursor: pointer;
            opacity: 0.7;
        }

        /* 工具类 */
        .hidden {
            display: none !important;
        }
        .text-muted {
            color: #94a3b8;
            font-size: 13px;
        }
        .gap-1 { gap: 4px; }
    </style>
</head>
<body>

    <!-- 顶部 -->
    <div class="header">
        <h1>
            🎣 钓友圈
            <small>发现好钓点</small>
        </h1>
    </div>

    <div class="container" id="appContainer">
        <!-- ========== 发布区域 ========== -->
        <div class="publish-card">
            <h2>📌 分享你的钓点</h2>
            <div class="form-group">
                <label>钓点名称</label>
                <input type="text" id="inputTitle" placeholder="例：龙湖水库大坝" value="">
            </div>
            <div class="form-group">
                <label>具体位置</label>
                <input type="text" id="inputLocation" placeholder="例：四川省成都市XX区龙湖路" value="">
            </div>
            <div class="form-group">
                <label>描述 (鱼情、饵料等)</label>
                <textarea id="inputDesc" placeholder="今天鲫鱼爆口，建议用腥香饵..."></textarea>
            </div>
            <div class="form-group">
                <label>上传图片 (最多6张)</label>
                <div class="file-upload-grid" id="imagePreviewGrid">
                    <!-- 动态添加图片预览 -->
                    <div class="file-upload-item" id="imageUploadBtn">
                        <span>+</span>
                        <input type="file" accept="image/*" multiple id="imageInput" style="position:absolute;inset:0;opacity:0;cursor:pointer;">
                    </div>
                </div>
                <div style="font-size:12px;color:#94a3b8;margin-top:4px;">点击 + 选择多张图片</div>
            </div>
            <div class="form-group">
                <label>上传视频 (仅1个)</label>
                <div class="file-upload-grid">
                    <div class="file-upload-item" id="videoUploadItem" style="width:100%;height:80px;border-radius:12px;">
                        <span id="videoPlaceholder">🎥 点击上传视频</span>
                        <input type="file" accept="video/*" id="videoInput" style="position:absolute;inset:0;opacity:0;cursor:pointer;">
                    </div>
                </div>
                <div id="videoPreviewContainer" class="hidden" style="margin-top:8px;position:relative;border-radius:12px;overflow:hidden;background:#000;">
                    <video id="videoPreview" controls style="width:100%;max-height:200px;display:block;"></video>
                    <button id="removeVideoBtn" style="position:absolute;top:6px;right:6px;background:#ef4444;color:white;border:none;border-radius:50%;width:24px;height:24px;font-size:14px;cursor:pointer;border:2px solid white;">✕</button>
                </div>
            </div>
            <button class="btn-publish" id="publishBtn">🚀 发布钓点</button>
        </div>

        <!-- ========== 动态列表 ========== -->
        <div class="feed-title">📋 附近钓友动态</div>
        <div id="postFeed">
            <!-- 由 JS 动态渲染 -->
            <div class="empty-state">
                <span>🏝️</span>
                还没有钓点分享，快来发布第一个吧！
            </div>
        </div>
    </div>

    <!-- ========== 图片放大灯箱 ========== -->
    <div class="lightbox" id="lightbox">
        <span class="close-lb" id="closeLightbox">✕</span>
        <img id="lightboxImg" src="" alt="预览">
    </div>

    <script>
        (function() {
            "use strict";

            // ---------- 数据管理 ----------
            const STORAGE_KEY = 'fishing_posts_data';
            let posts = [];

            // 加载本地数据
            function loadData() {
                const raw = localStorage.getItem(STORAGE_KEY);
                if (raw) {
                    try {
                        posts = JSON.parse(raw);
                        // 保证每个帖子有 comments 数组
                        posts.forEach(p => { if (!p.comments) p.comments = []; });
                    } catch (e) { posts = []; }
                } else {
                    // 初始模拟数据
                    posts = [{
                        id: Date.now() - 100000,
                        title: '龙湖水库大坝夜钓',
                        location: '成都市·龙湖',
                        desc: '水深3米，晚上8点后口很好，全是半斤以上的鲫鱼，用蚯蚓或拉饵都行。',
                        images: [],
                        video: '',
                        likes: 12,
                        liked: false,
                        comments: [
                            { user: '老张爱钓鱼', text: '具体在大坝哪一段？', time: '2小时前' },
                            { user: '小鱼儿', text: '明天我也去！', time: '1小时前' }
                        ],
                        time: '2026-06-27 20:30'
                    }];
                    saveData();
                }
                renderFeed();
            }

            function saveData() {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
            }

            // ---------- 生成短ID ----------
            function genId() { return Date.now() + Math.floor(Math.random() * 1000); }

            // ---------- 压缩图片 (防止localStorage溢出) ----------
            function compressImage(file, maxW = 600, maxH = 600, quality = 0.7) {
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const img = new Image();
                        img.onload = function() {
                            let w = img.width, h = img.height;
                            if (w > maxW) { h = h * (maxW / w); w = maxW; }
                            if (h > maxH) { w = w * (maxH / h); h = maxH; }
                            const canvas = document.createElement('canvas');
                            canvas.width = w; canvas.height = h;
                            const ctx = canvas.getContext('2d');
                            ctx.drawImage(img, 0, 0, w, h);
                            resolve(canvas.toDataURL('image/jpeg', quality));
                        };
                        img.onerror = function() { resolve(null); };
                        img.src = e.target.result;
                    };
                    reader.onerror = function() { resolve(null); };
                    reader.readAsDataURL(file);
                });
            }

            // ---------- 获取视频Base64 (不做压缩, 限制大小10MB) ----------
            function getVideoBase64(file) {
                return new Promise((resolve, reject) => {
                    if (file.size > 10 * 1024 * 1024) {
                        alert('视频文件超过10MB，请压缩后上传');
                        reject('太大');
                        return;
                    }
                    const reader = new FileReader();
                    reader.onload = function(e) { resolve(e.target.result); };
                    reader.onerror = function() { reject('读取失败'); };
                    reader.readAsDataURL(file);
                });
            }

            // ---------- 渲染主列表 ----------
            function renderFeed() {
                const feed = document.getElementById('postFeed');
                if (!posts || posts.length === 0) {
                    feed.innerHTML = `<div class="empty-state"><span>🏝️</span>还没有钓点分享，快来发布第一个吧！</div>`;
                    return;
                }
                // 按时间倒序
                const sorted = [...posts].sort((a, b) => b.id - a.id);
                let html = '';
                sorted.forEach((post, idx) => {
                    const realIdx = posts.indexOf(post); // 获取实际索引用于操作
                    const likeCls = post.liked ? 'liked' : '';
                    const likeIcon = post.liked ? '❤️' : '🤍';
                    const imgHtml = post.images && post.images.length > 0 ? 
                        `<div class="post-media">${post.images.map(img => `<div class="media-item" onclick="openLightbox('${img}')"><img src="${img}" loading="lazy" alt="钓点图"></div>`).join('')}</div>` : '';
                    const videoHtml = post.video ? 
                        `<div class="post-media"><div class="media-item" style="aspect-ratio:16/9;background:#000;"><video src="${post.video}" controls style="width:100%;height:100%;object-fit:contain;"></video></div></div>` : '';
                    
                    const comments = post.comments || [];
                    const commentHtml = comments.map(c => 
                        `<div class="comment-item"><span class="c-user">${escapeHtml(c.user)}</span><span class="c-text">${escapeHtml(c.text)}</span><span class="c-time">${escapeHtml(c.time)}</span></div>`
                    ).join('');

                    html += `
                        <div class="post-card" data-id="${post.id}">
                            <div class="post-header">
                                <span class="post-title">${escapeHtml(post.title)}</span>
                                <span class="post-location">📍 ${escapeHtml(post.location)}</span>
                            </div>
                            <div class="post-desc">${escapeHtml(post.desc)}</div>
                            ${imgHtml}
                            ${videoHtml}
                            <div class="post-actions">
                                <button class="like-btn ${likeCls}" data-id="${post.id}" data-idx="${realIdx}">
                                    ${likeIcon} <span class="like-count">${post.likes || 0}</span>
                                </button>
                                <button class="comment-toggle-btn" data-id="${post.id}">
                                    💬 <span>${comments.length}</span>
                                </button>
                                <span class="post-time">${escapeHtml(post.time)}</span>
                            </div>
                            <div class="comment-section" id="commentSection_${post.id}">
                                <div class="comment-list" id="commentList_${post.id}">
                                    ${commentHtml}
                                </div>
                                <div class="comment-input-row">
                                    <input type="text" placeholder="说点什么..." class="comment-input" data-id="${post.id}">
                                    <button class="comment-submit-btn" data-id="${post.id}">发送</button>
                                </div>
                            </div>
                        </div>
                    `;
                });
                feed.innerHTML = html;

                // 重新绑定事件 (事件委托更优，但为了清晰，这里绑定)
                document.querySelectorAll('.like-btn').forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const id = Number(this.dataset.id);
                        handleLike(id);
                    });
                });

                document.querySelectorAll('.comment-toggle-btn').forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const id = Number(this.dataset.id);
                        const section = document.getElementById(`commentSection_${id}`);
                        if (section) {
                            section.classList.toggle('open');
                        }
                    });
                });

                document.querySelectorAll('.comment-submit-btn').forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const id = Number(this.dataset.id);
                        const input = document.querySelector(`.comment-input[data-id="${id}"]`);
                        if (input && input.value.trim()) {
                            addComment(id, input.value.trim());
                            input.value = '';
                        } else {
                            alert('请输入评论内容');
                        }
                    });
                });

                // 回车提交评论
                document.querySelectorAll('.comment-input').forEach(inp => {
                    inp.addEventListener('keypress', function(e) {
                        if (e.key === 'Enter') {
                            const id = Number(this.dataset.id);
                            if (this.value.trim()) {
                                addComment(id, this.value.trim());
                                this.value = '';
                            }
                        }
                    });
                });
            }

            // ---------- 辅助：防XSS ----------
            function escapeHtml(text) {
                if (!text) return '';
                const div = document.createElement('div');
                div.textContent = text;
                return div.innerHTML;
            }

            // ---------- 点赞逻辑 ----------
            function handleLike(id) {
                const post = posts.find(p => p.id === id);
                if (!post) return;
                post.liked = !post.liked;
                post.likes = post.liked ? (post.likes || 0) + 1 : (post.likes || 0) - 1;
                if (post.likes < 0) post.likes = 0;
                saveData();
                renderFeed();
            }

            // ---------- 添加评论 ----------
            function addComment(id, text) {
                const post = posts.find(p => p.id === id);
                if (!post) return;
                if (!post.comments) post.comments = [];
                post.comments.push({
                    user: '钓友_' + Math.floor(Math.random() * 1000),
                    text: text,
                    time: new Date().toLocaleString('zh-CN', { hour12: false })
                });
                saveData();
                renderFeed();
                // 自动展开评论区
                const section = document.getElementById(`commentSection_${id}`);
                if (section) section.classList.add('open');
            }

            // ---------- 图片放大 ----------
            window.openLightbox = function(src) {
                const lb = document.getElementById('lightbox');
                const img = document.getElementById('lightboxImg');
                img.src = src;
                lb.classList.add('active');
            };
            document.getElementById('closeLightbox').addEventListener('click', function() {
                document.getElementById('lightbox').classList.remove('active');
            });
            document.getElementById('lightbox').addEventListener('click', function(e) {
                if (e.target === this) this.classList.remove('active');
            });

            // ---------- 发布新帖子 ----------
            document.getElementById('publishBtn').addEventListener('click', async function() {
                const title = document.getElementById('inputTitle').value.trim();
                const location = document.getElementById('inputLocation').value.trim();
                const desc = document.getElementById('inputDesc').value.trim();
                if (!title || !location || !desc) {
                    alert('请完整填写钓点名称、位置和描述');
                    return;
                }

                // 收集图片
                const imageFiles = document.getElementById('imageInput').files;
                const imageDataUrls = [];
                if (imageFiles.length > 0) {
                    for (let i = 0; i < Math.min(imageFiles.length, 6); i++) {
                        const compressed = await compressImage(imageFiles[i]);
                        if (compressed) imageDataUrls.push(compressed);
                    }
                }

                // 收集视频
                const videoFile = document.getElementById('videoInput').files[0];
                let videoDataUrl = '';
                if (videoFile) {
                    try {
                        videoDataUrl = await getVideoBase64(videoFile);
                    } catch (e) { return; }
                }

                const newPost = {
                    id: genId(),
                    title: title,
                    location: location,
                    desc: desc,
                    images: imageDataUrls,
                    video: videoDataUrl,
                    likes: 0,
                    liked: false,
                    comments: [],
                    time: new Date().toLocaleString('zh-CN', { hour12: false })
                };

                posts.push(newPost);
                saveData();
                renderFeed();

                // 清空表单
                document.getElementById('inputTitle').value = '';
                document.getElementById('inputLocation').value = '';
                document.getElementById('inputDesc').value = '';
                document.getElementById('imageInput').value = '';
                document.getElementById('videoInput').value = '';
                document.getElementById('videoPreviewContainer').classList.add('hidden');
                document.getElementById('videoPreview').src = '';
                // 重置图片预览
                document.getElementById('imagePreviewGrid').innerHTML = `
                    <div class="file-upload-item" id="imageUploadBtn">
                        <span>+</span>
                        <input type="file" accept="image/*" multiple id="imageInput" style="position:absolute;inset:0;opacity:0;cursor:pointer;">
                    </div>
                `;
                // 重新绑定图片预览
                document.getElementById('imageInput').addEventListener('change', function(e) {
                    previewImages(e.target.files);
                });
                alert('✅ 钓点发布成功！');
            });

            // ---------- 图片预览功能 (上传前显示缩略图) ----------
            function previewImages(files) {
                const grid = document.getElementById('imagePreviewGrid');
                // 保留原有的 "+" 按钮
                const uploadBtn = document.getElementById('imageUploadBtn');
                // 清除除了 uploadBtn 之外的所有子元素
                while (grid.firstChild) {
                    if (grid.firstChild.id === 'imageUploadBtn') break;
                    grid.removeChild(grid.firstChild);
                }
                // 重新添加已有的缩略图（保留之前选择的）
                // 这里简单处理: 只显示当前选择的，不保留之前的选择（因input每次change覆盖）
                // 更好的做法是维护一个数组，但为了简化，我们直接用新文件生成
                // 但注意：如果用户多次选择，之前选的会丢失。推荐用FileList存储，但为了演示，我们仅展示当前选择并覆盖。
                // 因为input的files是只读的，这里我们直接替换。
                const currentFiles = Array.from(files);
                if (currentFiles.length === 0) {
                    // 如果没文件，只显示加号
                    grid.innerHTML = `
                        <div class="file-upload-item" id="imageUploadBtn">
                            <span>+</span>
                            <input type="file" accept="image/*" multiple id="imageInput" style="position:absolute;inset:0;opacity:0;cursor:pointer;">
                        </div>
                    `;
                    document.getElementById('imageInput').addEventListener('change', function(e) {
                        previewImages(e.target.files);
                    });
                    return;
                }

                // 清空并重建
                grid.innerHTML = '';
                currentFiles.forEach((file, idx) => {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const div = document.createElement('div');
                        div.className = 'file-upload-item';
                        div.style.position = 'relative';
                        div.innerHTML = `
                            <img src="${e.target.result}" alt="预览">
                            <span class="remove-file" data-idx="${idx}">✕</span>
                        `;
                        grid.appendChild(div);
                        // 删除事件
                        div.querySelector('.remove-file').addEventListener('click', function(ev) {
                            ev.stopPropagation();
                            // 由于无法从input中删除单个file，这里我们刷新grid重新构建（保留其他）
                            // 简单处理：移除该预览块，但实际文件列表无法修改，故提示用户
                            alert('提示：请重新选择图片（移除功能在演示中需重新选择文件组）');
                            // 更好的实现是用数组维护，但为演示简捷，我们移除该dom并告知
                            div.remove();
                        });
                    };
                    reader.readAsDataURL(file);
                });

                // 重新添加加号按钮
                const addDiv = document.createElement('div');
                addDiv.className = 'file-upload-item';
                addDiv.id = 'imageUploadBtn';
                addDiv.innerHTML = `
                    <span>+</span>
                    <input type="file" accept="image/*" multiple id="imageInput" style="position:absolute;inset:0;opacity:0;cursor:pointer;">
                `;
                grid.appendChild(addDiv);
                document.getElementById('imageInput').addEventListener('change', function(e) {
                    previewImages(e.target.files);
                });
            }

            // ---------- 视频预览 ----------
            document.getElementById('videoInput').addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (!file) {
                    document.getElementById('videoPreviewContainer').classList.add('hidden');
                    return;
                }
                if (file.size > 10 * 1024 * 1024) {
                    alert('视频超过10MB，请压缩后上传');
                    this.value = '';
                    return;
                }
                const reader = new FileReader();
                reader.onload = function(ev) {
                    const video = document.getElementById('videoPreview');
                    video.src = ev.target.result;
                    document.getElementById('videoPreviewContainer').classList.remove('hidden');
                };
                reader.readAsDataURL(file);
            });

            document.getElementById('removeVideoBtn').addEventListener('click', function() {
                document.getElementById('videoInput').value = '';
                document.getElementById('videoPreview').src = '';
                document.getElementById('videoPreviewContainer').classList.add('hidden');
            });

            // ---------- 初始化绑定图片上传事件 ----------
            function initImageUpload() {
                document.getElementById('imageInput').addEventListener('change', function(e) {
                    previewImages(e.target.files);
                });
            }

            // ---------- 启动 ----------
            loadData();
            initImageUpload();

            // 监听存储变化（多标签页同步，可选）
            window.addEventListener('storage', function(e) {
                if (e.key === STORAGE_KEY) {
                    loadData();
                }
            });

        })();
    </script>
</body>
</html>